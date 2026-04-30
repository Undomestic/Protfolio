function adjustLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    // Example: Adjust font sizes based on screen width
    const baseFontSize = 16; // Base font size for larger screens
    let currentFontSize = baseFontSize;
  
    if (screenWidth < 768) {
      // Tablet and phone sizes
      currentFontSize = baseFontSize * 0.9;
    }
  
    if (screenWidth < 480) {
      // Phone sizes
      currentFontSize = baseFontSize * 0.8;
    }
  
    document.documentElement.style.fontSize = `${currentFontSize}px`;
  
    // Example: Adjust padding/margins for different screen sizes
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (screenWidth < 768) {
        mainContent.style.padding = "10px";
      } else {
        mainContent.style.padding = "20px";
      }
    }
  
    // Example: toggle a class based on screen size. This can be used to toggle menus etc.
    const myElement = document.getElementById("my-element");
    if(myElement){
      if (screenWidth < 768){
        myElement.classList.add("mobile-view");
      } else {
        myElement.classList.remove("mobile-view");
      }
    }
  
    // Example: Adjust image sizes (if you don't use CSS max-width).
    const myImage = document.getElementById("my-image");
    if(myImage){
      if (screenWidth < 600){
        myImage.style.width = "90%";
      } else {
        myImage.style.width = "auto";
      }
    }
  
    // More complex layout adjustments...
    // ...
  }
  
  // Initial layout adjustment
  adjustLayout();
  
  // Adjust layout on window resize
  window.addEventListener("resize", adjustLayout);