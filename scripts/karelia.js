//Путешествия в Карелию
const kareliaTravels = `[
    {
        "id": "1",
        "TravelName": "Сплав на байдарках",
        "Photo": "./images/kareliaSplav.jpg",
        "Link": "#karelia__splavChirkaKem",
        "ShortDescription": "Река Чирка-Кемь, 250 км до полярного круга."
    },
    {
        "id": "2",
        "TravelName": "город Кемь",
        "Photo": "./images/kem1.jpg",
        "Link": "#karelia__kem",
        "ShortDescription": "Небольшой городок Кемь расположен на берегу Белого моря."
    }
]`

const kareliaTravelsData = JSON.parse(kareliaTravels);

const kareliaMyTravelsEl = document.querySelector('.karelia__my-travels');

kareliaTravelsData.forEach(travel => {

    const travelEl = document.createElement('div');
    travelEl.classList.add('karelia__travel');
    kareliaMyTravelsEl.append(travelEl);

    const travelNameEl = document.createElement('p');
    travelNameEl.classList.add('karelia__travel_name');
    travelNameEl.textContent = `${travel.TravelName}`;
    travelEl.append(travelNameEl);

    const travelLinkEl = document.createElement('a');
    travelLinkEl.classList.add('karelia__travel_link');
    travelLinkEl.href = `${travel.Link}`;
    travelEl.append(travelLinkEl);

    const travelPhotoEl = document.createElement('img');
    travelPhotoEl.classList.add('karelia__travel_photo');
    travelPhotoEl.src = travel.Photo;
    travelPhotoEl.setAttribute('alt', `${travel.TravelName}`);
    travelLinkEl.append(travelPhotoEl);

    const shortDescriptionEl = document.createElement('p');
    shortDescriptionEl.classList.add('karelia__travel_shortDescription');
    shortDescriptionEl.textContent = travel.ShortDescription;
    travelEl.append(shortDescriptionEl);

});

// Дни сплава на байдарках, splavChirkaKem
const splavChirkaKem = `[
    {
        "id": "1",
        "DayNumber": "1",
        "Photo": "./images/karelia1.jpg",
        "Location": "урочище Андронова Гора",
        "ShortDescription": "Наша отправная точка, собираем катамараны.",
        "Description": "Здесь мы переночевали в палатках и на утро собрали наши катамараны, чтобы выдвинуться в новое путешествие."
    },
    {
        "id": "2",
        "DayNumber": "2",
        "Photo": "./images/2karelia.jpg",
        "Location": "порог Хаудо",
        "ShortDescription": "Порог 2 категории сложности, был адреналин.",
        "Description": "Было много спокойной воды, но встречались и такие пороги что заставляли собраться и крепче взяться за весла."
    },
    {
        "id": "3",
        "DayNumber": "3",
        "Photo": "./images/3karelia.jpg",
        "Location": "Сегодня было поспокойнее",
        "ShortDescription": "Приключения продолжаются, снова баллоны под попой).",
        "Description": "С погодой снова повезло, было тепло и солнечно. Впереди водная гладь в руках весла, под ногами метры темной глубины..."
    },
    {
        "id": "4",
        "DayNumber": "4",
        "Photo": "./images/4karelia.jpg",
        "Location": "Дневка",
        "ShortDescription": "Сегодня дневка, можно отдохнуть и никуда не торопиться.",
        "Description": "Как же приятно подольше поваляться в палатке, сегодня некуда торопиться, можно побродить по живопиному лесу и посидеть у костра."
    },
    {
        "id": "5",
        "DayNumber": "5",
        "Photo": "./images/5karelia.jpg",
        "Location": "Снова на воду!",
        "ShortDescription": "Подкачали баллоны, взяли весла и погребли.",
        "Description": "Снова ветерок в лицо, море воды и новые виды этой красивой природы."
    },
    {
        "id": "6",
        "DayNumber": "6",
        "Photo": "./images/6karelia.jpg",
        "Location": "Приключение подходит к концу",
        "ShortDescription": "Еще несколько порогов и финальная стоянка.",
        "Description": "Огромное небо отражается в огромном водном просторе, какже все-таки красива и удивительна наша планета!"
    },
    {
        "id": "7",
        "DayNumber": "7",
        "Photo": "./images/7karelia.jpg",
        "Location": "День отбытия, немного грустно",
        "ShortDescription": "Вот и закончилось это замечательное приключение, хочется все повторить!",
        "Description": "Это была потрясающая неделя, многожество впечатлений и красивых пейзажей. Очень хочется сюда вернуться снова и вновь погрузиться в эту безмятежную и красивейшую природу!"
    }
]`
const splavChirkaKemDays = JSON.parse(splavChirkaKem);

const daysEl = document.querySelector('.karelia__splavChirkaKem-days');

splavChirkaKemDays.forEach(day => {

    const dayEl = document.createElement('div');
    dayEl.classList.add('karelia__splavChirkaKem-day');
    dayEl.classList.add('widthBox');
    daysEl.append(dayEl);

    const dayNumberEl = document.createElement('p');
    dayNumberEl.classList.add('karelia__splavChirkaKem-day_number');
    dayNumberEl.textContent = `День ${day.DayNumber}`;
    dayEl.append(dayNumberEl);

    const dayLinkEl = document.createElement('a');
    dayLinkEl.classList.add('karelia__splavChirkaKem-day_link');
    dayLinkEl.setAttribute('href', '#karelia__splavChirkaKem-days');
    dayEl.append(dayLinkEl);

    const dayPhotoEl = document.createElement('img');
    dayPhotoEl.classList.add('karelia__splavChirkaKem-day_photo');
    dayPhotoEl.src = day.Photo;
    dayPhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
    dayLinkEl.append(dayPhotoEl);

    const locationEl = document.createElement('p');
    locationEl.classList.add('karelia__splavChirkaKem-day_location');
    locationEl.textContent = day.Location;
    dayEl.append(locationEl);

    const shortDescriptionEl = document.createElement('p');
    shortDescriptionEl.classList.add('karelia__splavChirkaKem-day_shortDescription');
    shortDescriptionEl.textContent = day.ShortDescription;
    dayEl.append(shortDescriptionEl);

});

// Функция получения модального окна
getActivePhoto = (photo, events) => {
    const blockEvents = photo.parentElement.parentElement.parentElement;
    events.forEach(day => {
        if (Number(day.id) === Number(photo.alt.at(-1))) {
            const activeEl = document.createElement('div');
            activeEl.classList.add('currentActive');
            blockEvents.append(activeEl);

            const activePhotoEl = document.createElement('img');
            activePhotoEl.classList.add('currentActive__photo');
            activePhotoEl.src = day.Photo;
            activePhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
            activeEl.append(activePhotoEl);

            const activeDescriptionEl = document.createElement('p');
            activeDescriptionEl.classList.add('currentActive__description');
            activeDescriptionEl.textContent = day.Description;
            activeEl.append(activeDescriptionEl);

            const activeCloseEl = document.createElement('button');
            activeCloseEl.classList.add('currentActive__close');
            activeCloseEl.textContent = 'X';
            activeEl.append(activeCloseEl);

            const darkingFeeld = document.createElement('div');
            darkingFeeld.classList.add('currentActive__dark');
            blockEvents.append(darkingFeeld);
        }
    });
};

// Функция закрытия модального окна
closeActivePhoto = (close) => {
    const closeEl = close.parentElement.parentElement.parentElement;
    const activePhoto = close.parentElement;
    const darkEl = closeEl.querySelector('.currentActive__dark');
    activePhoto.remove();
    darkEl.remove();
};

// Обработка кликов по фото
daysEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('karelia__splavChirkaKem-day_photo')) {
        getActivePhoto(target, splavChirkaKemDays);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});

// Город Кемь, kem
const kem = `[
    {
        "id": "1",
        "Photo": "./images/kem1.jpg",
        "ShortDescription": "Кемь встретила нас дождиком.",
        "Description": "Будто не довольная тем, что мы нарушили её покой, Кемь встретила нас дождиком."
    },
    {
        "id": "2",
        "Photo": "./images/kem2.jpg",
        "ShortDescription": "Кемь без прекрас живописна и по своему красива.",
        "Description": "Одно из преимущест путешествия это видеть мир таким, какой он есть, без прекрас и фильтров."
    },
    {
        "id": "3",
        "Photo": "./images/kem3.jpg",
        "ShortDescription": "Вот тут такая архитектура",
        "Description": "В России еще много городков, попадая в которые, проваливаешься в прошлое, во что-то далекое и манящее."
    }
]`
const kemPlaces = JSON.parse(kem);

const placesEl = document.querySelector('.karelia__kem-places');

kemPlaces.forEach(place => {

    const placeEl = document.createElement('div');
    placeEl.classList.add('karelia__kem-place');
    placeEl.classList.add('widthBox');
    placesEl.append(placeEl);

    const placeLinkEl = document.createElement('a');
    placeLinkEl.classList.add('karelia__kem-place_link');
    placeLinkEl.setAttribute('href', '#karelia__kem-places');
    placeEl.append(placeLinkEl);

    const placePhotoEl = document.createElement('img');
    placePhotoEl.classList.add('karelia__kem-place_photo');
    placePhotoEl.src = place.Photo;
    placePhotoEl.setAttribute('alt', `photo-place${place.id}`);
    placeLinkEl.append(placePhotoEl);

    const shortDescriptionEl = document.createElement('p');
    shortDescriptionEl.classList.add('karelia__kem-place_shortDescription');
    shortDescriptionEl.textContent = place.ShortDescription;
    placeEl.append(shortDescriptionEl);

});

// Обработка кликов по фото
placesEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('karelia__kem-place_photo')) {
        getActivePhoto(target, kemPlaces);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});