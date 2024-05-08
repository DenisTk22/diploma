/**
 * Обработка клика по кнопке "Добавить отзыв"
 */
// localStorage.clear();
const travelNameEl = document.querySelector('.altai__horseTravel');

const travelsLsKey = 'travels';
const travelFeedbackEl = document.querySelector('.feedbackTravel__feedback');
const saveFeedbackEl = document.querySelector('.feedbackTravel__saveFeedback');

const setToLocalStorage = (travelsFeedbacks) => {
    localStorage.setItem(travelsLsKey, JSON.stringify(travelsFeedbacks));
}

// сохранение данных
saveFeedbackEl.addEventListener('click', () => {

    const travel = travelNameEl.id;
    const feedback = travelFeedbackEl.value;

    if (localStorage.getItem(travelsLsKey) === null) {

        const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям
        const feedbacks = []; // массив отзывов по конкретному путешествию
        let travelFeedbacks = {}; // объект: путешествие, значение массив отзывов (feedbacks)
        
        feedbacks.push(feedback); // добавляем отзыв в массив отзывов
        travelFeedbacks[travel] = feedbacks; // массив отзывов в объект по значению travel
        travelsFeedbacks.push(travelFeedbacks); // добавляем объект с отзывами на путешествие в массив для всех отзывов и путешествий

        setToLocalStorage(travelsFeedbacks);

    } else {
        const travelsFeedbacks = []; //массив для всех отзывов по всем путешествиям
        const feedbacks = []; // массив отзывов по конкретному путешествию

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
            if (el[travel]) {
                el[travel].forEach(el => {
                    feedbacks.push(el);
                }); 
            }
        });

        feedbacks.push(feedback);

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach(el => {
            travelsFeedbacks.push(el);
        });

        travelsFeedbacks.forEach((el) => {
            if (el[travel]) {
                el[travel] = feedbacks; // добавляем в объект путешествие с массивом отзывов
            }
        });

        setToLocalStorage(travelsFeedbacks);
    }

    travelFeedbackEl.value = '';
});