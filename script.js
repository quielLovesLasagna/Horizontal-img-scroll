"use strict";

// Elements
const container = document.querySelector(".gallery");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
// End of Elements

// Event Handlers
container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
  container.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft -= 900;
});
// End of Event Handlers
