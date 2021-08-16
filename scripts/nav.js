const navLinks = [...document.querySelectorAll(".navbar-nav li")].map((item) => {
  return item.children[0];
});
const sectionSelectors = document.querySelectorAll(".section-title");
const dropdownArrows = document.querySelectorAll(".dropdown-arrow");

const navigate = () => {
  navLinks.forEach((link) => {
    let sectionId = link.hash;
    let sectionSelector = link.classList[0]
    link.addEventListener("click", () => {
      openSection(sectionId, sectionSelector);
    });
  });

  sectionSelectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      navLinks.map((link) => {
        if ([...link.classList].includes(selector.classList[1])) {
          link.click()
        }
      })
    })
  })
};

const openSection = (sectionId, sectionSelector) => {
  if (sectionId !== "#home") {
    dropdownArrows.forEach((arrow) => {
      if ([...arrow.classList].includes(sectionSelector)) {
        arrow.classList.toggle("rotated")
      }
    })
    setTimeout(() => {
      section = document.querySelector(sectionId);
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 400);
  }
};

navigate();
