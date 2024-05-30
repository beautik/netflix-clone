var answers = document.querySelectorAll(".faq-answer");
var rotate = document.querySelectorAll(".rot");
rotate.forEach((rot,i) => {
    rot.addEventListener("click", ()=>{
        toggle(i);
    })
});
var toggle =function(manual) {
    rotate[manual].classList.toggle('rotate');
    answers[manual].classList.toggle('closed');
}

let slideIndex = 0;
const slidesToShow = 4; // Number of slides to show at a time
const slides = document.querySelectorAll('.image_slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.image_slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function moveSlider(direction) {
    slideIndex = Math.min(Math.max(slideIndex + direction, 0), totalSlides - slidesToShow);
    const slideWidth = slides[0].clientWidth + 10; // Including margin
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => moveSlider(-1));
nextBtn.addEventListener('click', () => moveSlider(1));
