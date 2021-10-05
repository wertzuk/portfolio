const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");
const listItems = document.querySelectorAll(".menu li");

hamburger.addEventListener("click", handleClasses);

closeIcon.addEventListener("click", handleClasses);

listItems.forEach((item) => item.addEventListener("click", handleClasses));

function handleClasses() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  closeIcon.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}
