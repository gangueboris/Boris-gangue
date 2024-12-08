
// ======================= NAV BACKGROUND TRANSPARENT ====================================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");  // Add class when scrolling down
    } else {
        navbar.classList.remove("scrolled");  // Remove class when scrolling up
    }
});
