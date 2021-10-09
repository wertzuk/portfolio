const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");
const listItems = document.querySelectorAll(".menu li");

hamburger.addEventListener("click", handleClasses);

closeIcon.addEventListener("click", handleClasses);

const mq = window.matchMedia("(max-width: 850px)");
if (mq.matches) {
  // window width is at less than 570px

  listItems.forEach((item) => item.addEventListener("click", handleClasses));
}

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

const projectData = [
  {
    img: "images/project2.jpg",
    previewURL: "https://jovial-engelbart-34133d.netlify.app/#",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/project-tracking-intro-component-master",
  },
  {
    img: "images/project4.jpg",
    previewURL: "https://pedantic-kowalevski-adc239.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/social-media-dashboard-with-theme-switcher-master",
  },
  {
    img: "images/project3.jpg",
    previewURL: "https://festive-haibt-a6c222.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/loopstudios-landing-page-main",
  },
  {
    img: "images/project5.jpg",
    previewURL: "https://objective-golick-d0732d.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/interactive-pricing-component-main",
  },
  {
    img: "images/project6.jpg",
    previewURL: "https://boring-khorana-8d4dfd.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/blogr-landing-page-main",
  },
  {
    img: "images/project7.jpg",
    previewURL: "https://quirky-neumann-463e66.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/testimonials-grid-section-main",
  },
  {
    img: "images/project8.jpg",
    previewURL: "https://inspiring-bhabha-3239a0.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/fylo-data-storage-component-master",
  },
  {
    img: "images/project9.jpg",
    previewURL: "https://confident-chandrasekhar-ff1a9c.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/crowdfunding-product-page-main",
  },
];

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
