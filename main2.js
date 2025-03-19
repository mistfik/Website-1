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
            event.preventDefault(); 
            alert('Пожалуйста, выберите тип тестирования.');
        } else {
            const testingType = selectedOption.value;
            let redirectURL;

            switch (testingType) {
                case 'type1':
                    redirectURL = 'страница4.html'; 
                    break;
                case 'type2':
                    redirectURL = 'страница5.html'; 
                    break;
                case 'type3':
                    redirectURL = 'страница6.html'; 
                    break;
                default:
                    redirectURL = 'default.html'; 
            }

            window.location.href = redirectURL; 
        }
    });
});

const budgetInput = document.getElementById('budget');
const areaInput = document.getElementById('area');
const employeesInput = document.getElementById('employees');
const submitButton = document.getElementById('submitButton');
const budgetSuggestion = document.getElementById('budgetSuggestion');
const areaSuggestion = document.getElementById('areaSuggestion');
const employeesSuggestion = document.getElementById('employeesSuggestion'); 
function validateForm() {
    if (budgetInput.value && areaInput.value && employeesInput.value) {
        submitButton.disabled = false;
        submitButton.style.background = '#38147a';
    } else {
        submitButton.disabled = true;
        submitButton.style.background = '#808080';
    }
}

function checkBudget() {
    const budget = parseFloat(budgetInput.value);

    if (isNaN(budget)) {
        budgetSuggestion.textContent = "";
        return;
    }

    if (budget > 1000000) {
        budgetSuggestion.textContent = "Давайте оставим 1,000,000";
        budgetInput.value = 1000000;
    } else if (budget < 1000000){
        budgetSuggestion.textContent = "Давайте увеличим до 1,000,000";
    } else {
        budgetSuggestion.textContent = "";
    }
}

function checkArea() {
    const area = parseFloat(areaInput.value);

    if (isNaN(area)) {
        areaSuggestion.textContent = "";
        return;
    }

    if (area > 100) {
        areaSuggestion.textContent = "Давайте оставим 100";
        areaInput.value = 100;
    } else if (area < 100){
        areaSuggestion.textContent = "Давайте увеличим до 100";
    } else {
        areaSuggestion.textContent = "";
    }
}

function checkEmployees() {
    const employees = parseFloat(employeesInput.value);

    if (isNaN(employees)) {
        employeesSuggestion.textContent = "";
        return;
    }

    if (employees > 3) {
        employeesSuggestion.textContent = "Давайте оставим 3 сотрудника";
        employeesInput.value = 3;
    } else if (employees < 3){
        employeesSuggestion.textContent = "Давайте увеличим до 3 сотрудников";
    } else {
        employeesSuggestion.textContent = "";
    }S
}

budgetInput.addEventListener('input', function() {
    validateForm();
    checkBudget();
});
areaInput.addEventListener('input', function() {
    validateForm();
    checkArea();
});
employeesInput.addEventListener('input', function() {
    validateForm();
    checkEmployees(); 
});

submitButton.addEventListener('click', function() {
    if (!this.disabled) {
        const budget = budgetInput.value;
        const area = areaInput.value;
        const employees = employeesInput.value;
        window.location.href = 'final.html';
    }
});

