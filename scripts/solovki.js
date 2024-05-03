//Путешествия на Соловки
const solovkiTravels = `[
    {
        "id": "1",
        "TravelName": "Соловки 2023",
        "Photo": "./images/solovki2023.jpg",
        "Link": "#solovki__trip2023",
        "ShortDescription": "Остров в Белом море с тяжелой историей."
    }
]`

const solovkiTravelsData = JSON.parse(solovkiTravels);

solovkiTravelsData.forEach(travel => {

    const solovkiMyTravelsEl = document.querySelector('.solovki__my-travels');

        const travelEl = document.createElement('div');
        travelEl.classList.add('solovki__travel');
        solovkiMyTravelsEl.append(travelEl);

        const travelNameEl = document.createElement('p');
        travelNameEl.classList.add('solovki__travel_name');
        travelNameEl.textContent = `${travel.TravelName}`;
        travelEl.append(travelNameEl);

        const travelLinkEl = document.createElement('a');
        travelLinkEl.classList.add('solovki__travel_link');
        travelLinkEl.href = `${travel.Link}`;
        travelEl.append(travelLinkEl);

            const travelPhotoEl = document.createElement('img');
            travelPhotoEl.classList.add('solovki__travel_photo');
            travelPhotoEl.src = travel.Photo;
            travelPhotoEl.setAttribute('alt', `${travel.TravelName}`);
            travelLinkEl.append(travelPhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('solovki__travel_shortDescription');
        shortDescriptionEl.textContent = travel.ShortDescription;
        travelEl.append(shortDescriptionEl);

});

// Остров Соловки 2023, solovki
const solovki =  `[
    {
        "id": "1",
        "Photo": "./images/solovkiBut1.jpg",
        "ShortDescription": "Сейчас Соловки - это люди, живущие от навигации до навигации.",
        "Description": "lorem50"
    },
    {
        "id": "2",
        "Photo": "./images/solovki2.jpg",
        "ShortDescription": "Красивый монастырь с темными подвалами.",
        "Description": "lorem50"
    },
    {
        "id": "3",
        "Photo": "./images/solovkiMore3.jpg",
        "ShortDescription": "И конечно же Белое море, питаемое Северным Ледовитым Океаном.",
        "Description": "lorem50"
    },
    {
        "id": "4",
        "Photo": "./images/solovkiLes4.jpg",
        "ShortDescription": "Хоть это и остров, но и там есть бескрайние леса и озера",
        "Description": "lorem50"
    }
]`
const solovkiPlaces = JSON.parse(solovki);

const placesSolovkiEl = document.querySelector('.solovki__trip2023-places');

solovkiPlaces.forEach(place => {

        const placeEl = document.createElement('div');
        placeEl.classList.add('solovki__trip2023-place');
        placeEl.classList.add('widthBox');
        placesSolovkiEl.append(placeEl);

        const placeLinkEl = document.createElement('a');
        placeLinkEl.classList.add('solovki__trip2023-place_link');
        placeLinkEl.setAttribute('href', '#solovki__trip2023-places');
        placeEl.append(placeLinkEl);

        const placePhotoEl = document.createElement('img');
        placePhotoEl.classList.add('solovki__trip2023-place_photo');
        placePhotoEl.src = place.Photo;
        placePhotoEl.setAttribute('alt', `photo-place${place.id}`);
        placeLinkEl.append(placePhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('solovki__trip2023-place_shortDescription');
        shortDescriptionEl.textContent = place.ShortDescription;
        placeEl.append(shortDescriptionEl);

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
placesSolovkiEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('solovki__trip2023-place_photo')) {
        getActivePhoto(target, solovkiPlaces);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});