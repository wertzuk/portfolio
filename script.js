const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");
const listItems = document.querySelectorAll(".menu li");

hamburger.addEventListener("click", handleClasses);

closeIcon.addEventListener("click", handleClasses);

listItems.forEach((item) => item.addEventListener("click", handleClasses));

function handleClasses() {
  console.log();
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  closeIcon.classList.toggle("active");

  document.body.classList.toggle("no-scroll");
}

//
// Animation
//
const dataText = ["Hi.", "Ich bin Pascal", "Frontend-Entwickler.", "Motiviert"];

// function typeWriter(text, i, fnCallback) {
//   if (i < text.length) {
//     document.querySelector(".animated").innerHTML =
//       text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

//     setTimeout(() => {
//       typeWriter(text, i + 1, fnCallback);
//     }, 100);
//   } else if (typeof fnCallback == "function") {
//     setTimeout(fnCallback, 700);
//   }
// }
// function StartTextAnimation(i) {
//   if (typeof dataText[i] == "undefined") {
//     setTimeout(function () {
//       StartTextAnimation(0);
//     }, 20000);
//   }
//   if (i < dataText[i].length) {
//     typeWriter(dataText[i], 0, function () {
//       StartTextAnimation(i + 1);
//     });
//   }
// }
// StartTextAnimation(0);
