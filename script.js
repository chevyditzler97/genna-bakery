document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".collage__img");
  let index = 0;

  function showImage() {
    if (index < images.length) {
      images[index].classList.add("show"); 
      index++;
      setTimeout(showImage, 400); // Change image every second
    }
  }

  showImage(); // Start the image reveal
});


function openMenu() {
  document.body.classList += "menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".collage__img");
  let currentIndex = 0;
  let slideInterval = null;

  function showNextSlide() {
    // Only run carousel logic on mobile screens
    if (window.innerWidth <= 768) {
      images.forEach((img, idx) => {
        if (idx === currentIndex) {
          img.classList.add("active-slide");
        } else {
          img.classList.remove("active-slide");
        }
      });

      currentIndex = (currentIndex + 1) % images.length;
    }
  }

  function startSlideshow() {
    if (window.innerWidth <= 768 && !slideInterval) {
      showNextSlide();
      slideInterval = setInterval(showNextSlide, 3500); 
    } else if (window.innerWidth > 768 && slideInterval) {
      
      clearInterval(slideInterval);
      slideInterval = null;
      images.forEach((img) => img.classList.remove("active-slide"));
    }
  }

  // Initialize and handle window resize
  startSlideshow();
  window.addEventListener("resize", startSlideshow);
});
