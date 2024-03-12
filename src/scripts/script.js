// Mobile Nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("nav a");
// const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    e.preventDefault();

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation on link click
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const allLinks = document.querySelectorAll("nav a");

//   allLinks.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       const href = link.getAttribute("href");

//       // Check if the link is pointing to a section within the same page
//       const isInternalAnchorLink = href.startsWith("#");

//       // If it's an internal anchor link, prevent default behavior and handle smooth scrolling
//       if (isInternalAnchorLink) {
//         e.preventDefault();

//         // Determine the target element based on the anchor link
//         const targetId = href.substring(1); // Remove the "#" symbol
//         const targetElement = document.getElementById(targetId);

//         // Scroll to the target element with smooth behavior
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth" });
//         }

//         // Close mobile navigation on link click
//         if (link.classList.contains("main-nav-link")) {
//           headerEl.classList.toggle("nav-open");
//         }
//       }
//     });
//   });
// });

// Sticky Nav

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.querySelector(".header").classList.add("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEl);

// Button Rollovers

const container = document.querySelector(".svg-rollover");

container.addEventListener("mouseenter", () => {});

container.addEventListener("mouseleave", () => {});

//Navbar and Back to Top Appearing after Scroll

// const navBar = document.querySelector(".mobile-nav-bar");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  const scrollPositionToShowElements = 700;

  if (window.scrollY > scrollPositionToShowElements) {
    backToTop.style.opacity = 1;
    backToTop.style.visibility = "visible";
    // navBar.style.opacity = 1;
    // navBar.style.visibility = "visible";
  } else {
    // navBar.style.opacity = 0;
    backToTop.style.opacity = 0;
    // backToTop.style.visibility = "hidden";
  }
});

// Current Year Footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = new Date().getFullYear();
