const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
let slideNumber = 0;
const numberOfSlides = slides.length;

// Bouton "suivant"
nxtBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber++;
    if (slideNumber >= numberOfSlides) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
});

// Bouton "précédent"
prvBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add('active');
});
