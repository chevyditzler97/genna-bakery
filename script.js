document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".collage__img");
  let index = 0;

  function showImage() {
    if (index < images.length) {
      images[index].style.display = "block"; // Show the image
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
