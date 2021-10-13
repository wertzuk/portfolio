const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");
const listItems = document.querySelectorAll(".menu li");

const mq = window.matchMedia("(max-width: 850px)");
hamburger.addEventListener("click", handleClasses);
closeIcon.addEventListener("click", handleClasses);
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (mq.matches) handleClasses();
  });
});

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

const projectData = [
  {
    img: "images/project1.jpg",
    previewURL: "https://quizzical-engelbart-80e3fb.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/pricing-component-with-toggle-master",
  },
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
  {
    img: "images/project10.jpg",
    previewURL: "https://awesome-archimedes-9e9e3d.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/faq-accordion-card-main",
  },
  {
    img: "images/project11.jpg",
    previewURL: "https://faq-card-taupe.vercel.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/faq-accordion-card-main",
  },
  {
    img: "images/project12.jpg",
    previewURL: "https://elastic-archimedes-165593.netlify.app",
    codeURL:
      "https://github.com/wertzuk/Frontend-Mentor/tree/master/faq-accordion-card-main",
  },
];

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
  methods: {
    showPreviewButton(index) {
      if (mq.matches) {
        const link = this.$refs[index][0];
        link.style.opacity = 1;
        // this.$refs[index].$el.style.opacity = "1";
        // $ref.style.opacity = 1;
        // link.style.opacity = 1;
      }
    },
  },
});
