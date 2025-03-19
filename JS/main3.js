const fullscreenSliderContainer = document.querySelector('.fullscreen-slider-container');
const fullscreenSliderWrapper = document.querySelector('.fullscreen-slider-wrapper');
const fullscreenSlides = document.querySelectorAll('.fullscreen-slide');
const fullscreenPrevButton = document.querySelector('.fullscreen-slider-arrow.prev');
const fullscreenNextButton = document.querySelector('.fullscreen-slider-arrow.next');

let fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
let fullscreenSlideIndex = 0;

function fullscreenSlideTo(index) {
    fullscreenSliderWrapper.style.transform = `translateX(-${index * fullscreenSlideWidth}px)`;
}

fullscreenPrevButton.addEventListener('click', () => {
    fullscreenSlideIndex = (fullscreenSlideIndex > 0) ? fullscreenSlideIndex - 1 : fullscreenSlides.length - 1;
    fullscreenSlideTo(fullscreenSlideIndex);
});

fullscreenNextButton.addEventListener('click', () => {
    fullscreenSlideIndex = (fullscreenSlideIndex < fullscreenSlides.length - 1) ? fullscreenSlideIndex + 1 : 0;
    fullscreenSlideTo(fullscreenSlideIndex);
});

window.addEventListener('resize', () => {
    fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
    fullscreenSlideTo(fullscreenSlideIndex);
});

window.addEventListener('resize', () => {
    fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
    fullscreenSlideTo(fullscreenSlideIndex); // Пересчитываем позицию слайда при изменении размера
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        } else {
            slideIndex = index; 
        }

       
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            showSlide(slideIndex - 1);
        });

        nextButton.addEventListener('click', function() {
            showSlide(slideIndex + 1);
        });

        showSlide(slideIndex);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        } else {
            slideIndex = index; 
        }

       
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            showSlide(slideIndex - 1);
        });

        nextButton.addEventListener('click', function() {
            showSlide(slideIndex + 1);
        });

        showSlide(slideIndex);
    }
});