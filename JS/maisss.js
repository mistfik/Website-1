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

document.addEventListener('DOMContentLoaded', function () {
    const submitFeedbackButton = document.getElementById('submit-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackDisplay = document.getElementById('feedback-display');
    function loadFeedbacks() {
        const feedbacks = localStorage.getItem('feedbacks');
        if (feedbacks) {
            try {
                const parsedFeedbacks = JSON.parse(feedbacks);
                parsedFeedbacks.forEach((feedback, index) => { 
                    addFeedbackToDisplay(feedback, index); 
                });
            } catch (error) {
                console.error("Ошибка при парсинге отзывов из localStorage:", error);
            }
        }
    }

    function addFeedbackToDisplay(feedback, index) {
        const feedbackParagraph = document.createElement('p');
        feedbackParagraph.textContent = feedback;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete-button'); 
        deleteButton.addEventListener('click', function () {
            removeFeedback(index); 
        });

        feedbackParagraph.appendChild(deleteButton); 
        feedbackDisplay.appendChild(feedbackParagraph);
    }

    function removeFeedback(index) {
        let existingFeedbacks = localStorage.getItem('feedbacks');
        let feedbacksArray = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];

        feedbacksArray.splice(index, 1); 
        saveFeedbacks(feedbacksArray); 
        feedbackDisplay.innerHTML = ''; 
        loadFeedbacks(); 
    }

    function saveFeedbacks(feedbacks) {
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }

    submitFeedbackButton.addEventListener('click', function () {
        const feedback = feedbackText.value;
        if (feedback.trim() !== "") {
            let existingFeedbacks = localStorage.getItem('feedbacks');
            let feedbacksArray = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];

            feedbacksArray.push(feedback);
            const newIndex = feedbacksArray.length -1;

            saveFeedbacks(feedbacksArray);

           addFeedbackToDisplay(feedback,newIndex);

            feedbackText.value = ""; 
        } else {
            alert("Пожалуйста, напишите свой отзыв.");
        }
    });

    loadFeedbacks();
});


