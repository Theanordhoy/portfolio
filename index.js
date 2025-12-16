const arrow = document.querySelector(".scroll-arrow");
const aboutSection = document.querySelector("#about");

arrow.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth"});
});