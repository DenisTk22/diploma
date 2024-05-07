/**
 * Обработка клика по кнопке "Добавить отзыв"
 */

const travelNameEl = document.querySelector('.altai__horseTravel');

const travelsLsKey = 'travels';
const travelFeedbackEl = document.querySelector('.feedbackTravel__feedback');
const saveFeedbackEl = document.querySelector('.feedbackTravel__saveFeedback');

// if (localStorage.getItem(scheduleKey)) {
//     localStorage.setItem(scheduleKey, JSON.stringify(scheduleData));
// };


// сохранение данных
saveFeedbackEl.addEventListener('click', () => {
    const travel = travelNameEl.id;
    const feedback = travelFeedbackEl.value;

    if (localStorage.getItem(travelsLsKey) === null) {
        const travelFeedbacks = [];
        travelFeedbacks.push(feedback)
        const travelFbList = [
            {
                travel,
                travelFeedbacks
            }
        ];
        localStorage.setItem(travelsLsKey, JSON.stringify(travelFeedbacks));
    } else {
        const travelFeedbacks = [];
        const travelFbList = [];

        JSON.parse(localStorage.getItem(travelsLsKey)).forEach(element => {
            if (element.key === travel) {
                
            }
            travelFbList.push({travel, element});
        });

        travelFbList.push(feedback);
        localStorage.setItem(travelsLsKey, JSON.stringify(travelFbList));
    }
});