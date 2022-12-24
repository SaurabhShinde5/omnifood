"use strict";

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");

const toggleNav = () => {
  header.classList.toggle("nav-open");
};
btnNav.addEventListener("click", toggleNav);

//
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("nav__link"))
      header.classList.remove("nav-open");
  });
});

//
const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(hero);
