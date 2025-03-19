document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const chartContainer = document.querySelector('.chart-container');
    const chartDescription = document.querySelector('.chart-description'); 
    const expensesImagePath = "img/expenses_chart.png";
    const incomeImagePath = "img/income_chart.png";
    const expensesDescription = [
        "40%-Аренда помещения.",
        "35%-Выплата зарплаты сотрудникам",
        "10%-Налоги",
        "15%-Расходники",
        "Расходы 650.000",

    ];

    const incomeDescription = [
        "100%-Продажа товара.",
        "Доходы 1.500.000",
    ];

    let currentImagePath = expensesImagePath;
    let currentDescription = expensesDescription;
    let isExpenses = true;

    function updateChartImage(imagePath) {
        let imgElement = chartContainer.querySelector('img');
        if (!imgElement) {
            imgElement = document.createElement('img');
            imgElement.alt = "Диаграмма";
            chartContainer.appendChild(imgElement);
        }
        imgElement.src = imagePath;
    }

    function updateChartDescription(description) {
        const descriptionList = chartDescription.querySelector('#description-list');
        descriptionList.innerHTML = ""; 

        description.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            descriptionList.appendChild(listItem);
        });
    }


    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const type = this.dataset.type;
            isExpenses = (type === 'expenses');
            if (isExpenses) {
                currentImagePath = expensesImagePath;
                currentDescription = expensesDescription;
            } else {
                currentImagePath = incomeImagePath;
                currentDescription = incomeDescription;
            }
            updateChartImage(currentImagePath);
            updateChartDescription(currentDescription);
        });
    });
    updateChartImage(currentImagePath);
    updateChartDescription(currentDescription);
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
    const form = document.getElementById('emailForm');
    const formMessage = document.getElementById('formMessage');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Пожалуйста, введите корректный email.';
            formMessage.className = 'form-message error';
            return;
        }
        formMessage.textContent = 'Спасибо! Мы свяжемся с вами.';
        formMessage.className = 'form-message'; 
        form.reset();  
});
});