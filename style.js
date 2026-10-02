const sections = document.querySelectorAll(".fade-section");
 
window.addEventListener("scroll", () => {
sections.forEach(section => {
 
const position = section.getBoundingClientRect().top;
 
if (position < window.innerHeight - 100) {
section.classList.add("show");
}
 
});
});
 
window.dispatchEvent(new Event("scroll"));