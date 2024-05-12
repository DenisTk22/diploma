/**
 * Работа с отзывами
 */
localStorage.clear();
const travelsLsKey = 'travels';

// const travelNameEl = document.querySelector('.altai__horseTravel');
const traveslNameEl = document.querySelectorAll('.stayYourFeedback');

// const feedbackOfTravels = document.querySelectorAll('feedbackTravel');
const contentEl = document.querySelector('.content');

const travelFeedbackEl = document.querySelector('.feedbackTravel__feedback');
const saveFeedbackEl = document.querySelector('.feedbackTravel__saveFeedback');

const showFeedbackEl = document.querySelector('.feedbackTravel__showFeedbacks');
const showFeedbackButtonsEl = document.querySelectorAll('.feedbackTravel__showFeedbacks');

const listFeedbacks = document.querySelector('.feedbackTravel__listFeedback');
const listOfFeedbacks = document.querySelectorAll('.feedbackTravel__listFeedback');

let countOfClicks = 0;

const setToLocalStorage = (travelsFeedbacks) => {
    localStorage.setItem(travelsLsKey, JSON.stringify(travelsFeedbacks));
}

const showFeedbacks = () => {
    if (localStorage.getItem(travelsLsKey) !== null) {
        traveslNameEl.forEach(el => {
            const travel = el.id;
            const travelName = el;
            JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
                if (el[travel] && el[travel].length !== 0) {
                    countOfClicks++;
                    const showFeedbackButton = travelName.querySelector('.feedbackTravel__showFeedbacks');
                    showFeedbackButton.disabled = false;
                    showFeedbackButton.textContent = 'Показать отзывы';
                } else {
                    emptyFeedbacks(travelName);
                }
            });
        })
    }
}

const emptyFeedbacks = (parent) => {
    const listEl = parent.querySelector('.feedbackTravel__listFeedback');
    const feedbackEl = document.createElement('li');
    feedbackEl.textContent = 'Отзывов пока нет';
    listEl.append(feedbackEl);
}

const renderFeedBacks = (travel) => {

    const parent = document.getElementById(`${travel}`);
    const listEl = parent.querySelector('.feedbackTravel__listFeedback');
    listEl.innerHTML = ""; // удаление списка предыдущих отзывов
    JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
        let presentFeedbacks = false;
        if (el[travel] && el[travel].length !== 0) {
            presentFeedbacks = true;
            el[travel].forEach((el, i) => {
                const feedbackEl = document.createElement('li');
                const removeFeedbackEl = document.createElement('button');
                const editFeedbackEl = document.createElement('button');

                feedbackEl.textContent = el;
                feedbackEl.setAttribute('data-local-id', `${i}`)
                listEl.append(feedbackEl);

                removeFeedbackEl.classList.add('feedbackTravel__removeFeedback');
                removeFeedbackEl.textContent = 'Удалить отзыв';
                feedbackEl.append(removeFeedbackEl);

                editFeedbackEl.classList.add('feedbackTravel__editFeedback');
                editFeedbackEl.textContent = 'Редактировать отзыв';
                feedbackEl.append(editFeedbackEl);
            });
        }
        if (!presentFeedbacks) {
            emptyFeedbacks(parent);
        }
    });
}

// Отображение предыдущих отзывов
showFeedbacks();

// Добавление отзыва
contentEl.addEventListener('click', (e) => { //saveFeedbackEl
    e.preventDefault();
    if (e.target.classList.contains('feedbackTravel__saveFeedback')) {
        const travel = e.target.parentElement.parentElement.id;

        const travelName = e.target.parentElement.parentElement;
        const travelFeedbackField = travelName.querySelector('.feedbackTravel__feedback');

        if (travelFeedbackField.value !== '') {

            const feedback = travelFeedbackField.value;

            const showFeedbackButton = travelName.querySelector('.feedbackTravel__showFeedbacks');
            showFeedbackButton.disabled = false;


            if (!localStorage.getItem(travelsLsKey)) {
                const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям
                const feedbacks = []; // массив отзывов по конкретному путешествию
                let travelFeedbacks = {}; // объект: путешествие, значение массив отзывов (feedbacks)

                feedbacks.push(feedback); // добавляем отзыв в массив отзывов
                travelFeedbacks[travel] = feedbacks; // массив отзывов в объект по значению travel
                travelsFeedbacks.push(travelFeedbacks); // добавляем объект с отзывами на путешествие в массив для всех отзывов и путешествий

                setToLocalStorage(travelsFeedbacks);
            }
            
            else {

                const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям
                const feedbacks = []; // массив отзывов по конкретному путешествию
                let travelFeedbacks = {}; // объект: путешествие, значение массив отзывов (feedbacks)

                JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
                    travelsFeedbacks.push(el);
                });   
                let present = false;


                travelsFeedbacks.forEach((el) => {
                    if (el[travel]) {
                        present = true;
                        el[travel].push(feedback); // добавляем в объект путешествие с массивом отзывов
                    } });

                    if (!present) 
                     {
                        feedbacks.push(feedback);
                        travelFeedbacks[travel] = feedbacks;
                        travelsFeedbacks.push(travelFeedbacks);
                    }

                setToLocalStorage(travelsFeedbacks);
            }
            renderFeedBacks(travel);
        }
        travelFeedbackField.value = '';
    }
});

// вывод отзывов на страницу и скрытие отзывов со страницы
showFeedbackEl.addEventListener('click', (e) => {
    e.preventDefault();
    countOfClicks++;

    if (countOfClicks % 2 === 0) {
        showFeedbackEl.textContent = 'Скрыть отзывы';
        if (localStorage.getItem(travelsLsKey) !== null) {
            // const travel = travelNameEl.id;
            const travel = e.target.parentElement.parentElement.id;
            renderFeedBacks(travel);
        }
        else {
            emptyFeedbacks();
        }
    } else {
        listFeedbacks.innerHTML = ""; // удаление списка предыдущих отзывов
        showFeedbackEl.textContent = 'Показать отзывы';
    }
});

//удаление отзыва
listFeedbacks.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('feedbackTravel__removeFeedback')) {
        const id = Number(e.target.parentElement.getAttribute('data-local-id'));
        // const travel = travelNameEl.id;
        const travel = e.target.parentElement.parentElement.parentElement.id;
        let withoutDeletedFeedback = [];
        const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach((el) => {
            if (el[travel]) {
                const feedbackToDelete = el[travel][id];
                withoutDeletedFeedback = el[travel].filter((elem) => elem !== feedbackToDelete);
            }
        });

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
            travelsFeedbacks.push(el);
        });

        travelsFeedbacks.forEach((el) => {
            if (el[travel]) {
                el[travel] = withoutDeletedFeedback; // добавляем в объект путешествие с массивом отзывов
            }
        });

        setToLocalStorage(travelsFeedbacks);
        renderFeedBacks(travel);
    }
});

//редактирвание отзыва
listFeedbacks.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('feedbackTravel__editFeedback')) {
        const id = Number(e.target.parentElement.getAttribute('data-local-id'));
        // const travel = travelNameEl.id;
        const travel = e.target.parentElement.parentElement.parentElement.id;
        let withEditedFeedback = [];
        const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach((el) => {
            if (el[travel]) {
                const feedbackToEdit = el[travel][id];
                const editedFeedbackText = prompt(`Исправьте отзыв: ${feedbackToEdit}`);

                withEditedFeedback = el[travel].map((el) => {
                    if (el === feedbackToEdit) {
                        return editedFeedbackText;
                    } return el;
                });
            }
        });

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
            travelsFeedbacks.push(el);
        });

        travelsFeedbacks.forEach((el) => {
            if (el[travel]) {
                el[travel] = withEditedFeedback; // добавляем в объект путешествие с массивом отзывов
            }
        });

        setToLocalStorage(travelsFeedbacks);
        renderFeedBacks(travel);
    }
});