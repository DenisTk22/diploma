// Дни конного похода
const travelingDays =  `[
    {
        "id": "1",
        "DayNumber": "1",
        "Photo": "./images/1suguina.JPG",
        "Location": "урочище Сугойна",
        "ShortDescription": "Отпарвная точка, тут мы пересели на лошадей.",
        "Description": "lorem50"
    },
    {
        "id": "2",
        "DayNumber": "2",
        "Photo": "./images/2muehta.JPG",
        "Location": "урочище Муехта",
        "ShortDescription": "Живописные места, море зелени и вековые деревья.",
        "Description": "lorem50"
    },
    {
        "id": "3",
        "DayNumber": "3",
        "Photo": "./images/3waterfall.JPG",
        "Location": "Водопад",
        "ShortDescription": "Потрязающий водопад с ледяной водой и крутым спуском.",
        "Description": "lorem50"
    },
    {
        "id": "4",
        "DayNumber": "4",
        "Photo": "./images/4baioukskiy.JPG",
        "Location": "Байоюкский перевал",
        "ShortDescription": "Ради такой красоты стоит преодолеть тысячи километров.",
        "Description": "lorem50"
    },
    {
        "id": "5",
        "DayNumber": "5",
        "Photo": "./images/5veronica.JPG",
        "Location": "озеро Вероника",
        "ShortDescription": "Существует легенда..., ну сами все узнаете, когда там побываете.",
        "Description": "lorem50"
    },
    {
        "id": "6",
        "DayNumber": "6",
        "Photo": "./images/6karakolskie.png",
        "Location": "Каракольские озера",
        "ShortDescription": "До озер мы так и не дошли, т.к. был сильный туман в тот день.",
        "Description": "lorem50"
    },
    {
        "id": "7",
        "DayNumber": "7",
        "Photo": "./images/7kedrovaya.JPG",
        "Location": "Кедровая поляна",
        "ShortDescription": "Тут мы ночевали несколько ночей, на радость наших четвероногих друзей и нашу тоже.",
        "Description": "lorem50"
    },
    {
        "id": "8",
        "DayNumber": "8",
        "Photo": "./images/8taezhnik.jpg",
        "Location": "эко-отель Таёжник",
        "ShortDescription": "Возвращение на базу, на берегу потрясающей реки Катунь.",
        "Description": "lorem50"
    }
]`
const days = JSON.parse(travelingDays);

days.forEach(day => {

    const daysEl = document.querySelector('.altai__horseTravel-days');

    const dayEl = document.createElement('div');
    dayEl.classList.add('altai__horseTravel-day');
    daysEl.append(dayEl);

    const dayNumberEl = document.createElement('p');
    dayNumberEl.classList.add('altai__horseTravel-day_number');
    dayNumberEl.textContent = `День ${day.DayNumber}`;
    dayEl.append(dayNumberEl);

    const dayPhotoEl = document.createElement('img');
    dayPhotoEl.classList.add('altai__horseTravel-day_photo');
    dayPhotoEl.src = day.Photo;
    dayPhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
    dayEl.append(dayPhotoEl);

    const locationEl = document.createElement('p');
    locationEl.classList.add('altai__horseTravel-day_location');
    locationEl.textContent = day.Location;
    dayEl.append(locationEl);

    const shortDescriptionEl = document.createElement('p');
    shortDescriptionEl.classList.add('altai__horseTravel-day_shortDescription');
    shortDescriptionEl.textContent = day.ShortDescription;
    dayEl.append(shortDescriptionEl);

    });