document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".collage__img");
  let index = 0;

  function showImage() {
    if (index < images.length) {
      images[index].classList.add("show"); 
      index++;
      setTimeout(showImage, 400);
    }
  }

  showImage();
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

  function updateSlideshow() {
    if (window.innerWidth <= 768 && images.length > 0) {
      
      images.forEach((img) => img.classList.remove("active-slide"));

      
      images[currentIndex].classList.add("active-slide");

      
      currentIndex = (currentIndex + 1) % images.length;
    }
  }

  function startSlideshow() {
    if (window.innerWidth <= 768) {
      if (!slideInterval) {
        currentIndex = 0; 
        updateSlideshow(); 
        slideInterval = setInterval(updateSlideshow, 3500);
      }
    } else {
      
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
      images.forEach((img) => img.classList.remove("active-slide"));
    }
  }

  
  startSlideshow();
  window.addEventListener("resize", startSlideshow);
});


