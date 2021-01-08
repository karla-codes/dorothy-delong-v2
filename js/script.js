"use strict";

///////////////////////
// Image Modal
///////////////////////
const images = document.querySelectorAll(".work img");
const modalOuter = document.querySelector(".outer-modal");
const modalInner = document.querySelector(".inner-modal");

function handleImageClick(event) {
  // grab image src
  const img = event.currentTarget;
  const imgSrc = img.srcset;
  const alt = img.alt;
  // add new info to modal
  modalInner.innerHTML = `
  <img srcset="${imgSrc}" alt="${alt}"/>`;
  modalOuter.classList.add("open");
}

// adds a click event listener to images
images.forEach((image) => image.addEventListener("click", handleImageClick));

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", (e) => {
  if (e.target === modalOuter) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
