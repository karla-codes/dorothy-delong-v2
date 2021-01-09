"use strict";

///////////////////
// Nav links
//////////////////

// save page locations
const initPage = "/";
const workPage = "/index.html";
const aboutPage = "/about/index.html";

// save links
const workLink = document.querySelector("#work-link");
const aboutLink = document.querySelector("#about-link");

// check what page we are on
const currentPage = window.location.pathname;

// make current page link bold
if (currentPage === initPage || currentPage === workPage) {
  workLink.classList.add("link-selected");
  aboutLink.classList.remove("link-selected");
} else {
  workLink.classList.remove("link-selected");
  aboutLink.classList.add("link-selected");
}
