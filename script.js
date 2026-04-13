// INTRO IMAGE LOGIC
const introImage = document.getElementById("intro-image");
const mainContent = document.getElementById("main-content");

if (introImage && mainContent) {
    introImage.addEventListener("click", () => {
        introImage.classList.add("fade-out");

        setTimeout(() => {
            introImage.style.display = "none";
            mainContent.style.display = "block";
            document.body.style.overflow = "auto";
        }, 1200);
    });
}

// HERO SLIDESHOW LOGIC
const slides = document.querySelectorAll(".slide");

if (slides.length > 1) {
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 2000);
}
