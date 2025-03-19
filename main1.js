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


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

        if (slides.length > 0) {
            slideIndex = getRandomInt(slides.length);
        }

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        if (slider) {
            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
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
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        slideIndex--;
        showSlide(slideIndex);
    });

    nextButton.addEventListener('click', function() {
        slideIndex++;
        showSlide(slideIndex);
    });

    showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        slideIndex--;
        showSlide(slideIndex);
    });

    nextButton.addEventListener('click', function() {
        slideIndex++;
        showSlide(slideIndex);
    });


    slideIndex = Math.floor(Math.random() * slides.length);

    showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testing-form');
    const testButton = document.getElementById('test-button');

    form.addEventListener('submit', function(event) {
        const selectedOption = document.querySelector('input[name="testing-type"]:checked');

        if (!selectedOption) {
            event.preventDefault(); // Предотвращаем отправку формы
            alert('Пожалуйста, выберите тип тестирования.');
        } else {
            // Перенаправляем на нужную страницу в зависимости от выбора
            const testingType = selectedOption.value;
            let redirectURL;

            switch (testingType) {
                case 'type1':
                    redirectURL = 'страница4.html'; // Замени на нужную ссылку
                    break;
                case 'type2':
                    redirectURL = 'страница5.html'; // Замени на нужную ссылку
                    break;
                case 'type3':
                    redirectURL = 'страница6.html'; // Замени на нужную ссылку
                    break;
                default:
                    redirectURL = 'default.html'; // Ссылка по умолчанию
            }

            window.location.href = redirectURL; // Перенаправление
        }
    });
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitButton = document.getElementById('submitButton');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.value === 'option1' && this.checked) {
            submitButton.disabled = false; // Активируем кнопку
            submitButton.style.background = '#5c0596'; // Меняем фон
        } else {
            submitButton.disabled = true; // Деактивируем кнопку
            submitButton.style.background = '#808080'; // Делаем ее серой
        }
    });
});

submitButton.addEventListener('click', function() {
    if (!this.disabled) {
        window.location.href = 'свойвариант.html'; // Перенаправляем на другую страницу
    }
});



