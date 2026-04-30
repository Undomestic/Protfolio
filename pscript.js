// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.bar-fill');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Run on page load for Portfolio page
if (document.querySelector('.skills-section')) {
    animateSkillBars();
}

// Add scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Apply animation when visible
const applyAnimation = () => {
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        if (card.classList.contains('animate')) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
};

document.addEventListener('DOMContentLoaded', applyAnimation);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to section based on URL query parameter
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToId = urlParams.get('scrollTo');
    if (scrollToId) {
        const target = document.getElementById(scrollToId);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

// Mobile Menu Toggle
function toggleMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        if(navbar.classList.contains('active')){
            navbar.classList.remove('active');
        }
    });
});