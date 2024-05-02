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
        "Photo": "./images/1suguina.JPG",
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
        "Description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum architecto, tenetur, ullam esse eum obcaecati nesciunt laboriosam velit doloremque cum quaerat exercitationem quibusdam laudantium omnis explicabo blanditiis voluptate perferendis nisi. Consectetur pariatur asperiores, esse quos iste debitis, error labore quo culpa beatae numquam, animi"
    },
    {
        "id": "2",
        "DayNumber": "2",
        "Photo": "./images/2karelia.jpg",
        "Location": "порог Хаудо",
        "ShortDescription": "Порог 2 категории сложности, был адреналин.",
        "Description": "lorem50"
    },
    {
        "id": "3",
        "DayNumber": "3",
        "Photo": "./images/3karelia.jpg",
        "Location": "Сегодня было поспокойнее",
        "ShortDescription": "Приключения продолжаются, снова баллоны под попой).",
        "Description": "lorem50"
    },
    {
        "id": "4",
        "DayNumber": "4",
        "Photo": "./images/4karelia.jpg",
        "Location": "Дневка",
        "ShortDescription": "Сегодня дневка, можно отдохнуть и никуда не торопиться.",
        "Description": "lorem50"
    },
    {
        "id": "5",
        "DayNumber": "5",
        "Photo": "./images/5karelia.jpg",
        "Location": "Снова на воду!",
        "ShortDescription": "Подкачали баллоны, взяли весла и погребли.",
        "Description": "lorem50"
    },
    {
        "id": "6",
        "DayNumber": "6",
        "Photo": "./images/6karelia.jpg",
        "Location": "Приключение подходит к концу",
        "ShortDescription": "Еще несколько порогов и финальная стоянка.",
        "Description": "lorem50"
    },
    {
        "id": "7",
        "DayNumber": "7",
        "Photo": "./images/7karelia.jpg",
        "Location": "День отбытия, немного грустно",
        "ShortDescription": "Вот и закончилось это замечательное приключение, хочется все повторить!",
        "Description": "lorem50"
    }
]`
const splavChirkaKemDays = JSON.parse(splavChirkaKem);

const daysEl = document.querySelector('.karelia__splavChirkaKem-days');

splavChirkaKemDays.forEach(day => {

    const dayEl = document.createElement('div');
    dayEl.classList.add('karelia__splavChirkaKem-day');
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

//Клики по картинкам сплав на байдарках, река Чирка-Кемь

getActivePhoto = (photo) => {
    splavChirkaKemDays.forEach(day => {
        console.log(day.id, Number(photo.alt.at(-1)));
        if (Number(day.id) === Number(photo.alt.at(-1))) {
            const activeEl = document.createElement('div');
            activeEl.classList.add('currentActive');
            daysEl.append(activeEl);

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

            // daysEl.classList.add('currentActive__dark');
        }
    });
};

closeActivePhoto = (close) => {
    close.parentElement.classList.add('currentActive__hidden');
};


daysEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('karelia__splavChirkaKem-day_photo')) {
        getActivePhoto(target);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});

// Город Кемь, kem
const kem = `[
    {
        "id": "1",
        "Photo": "./images/katun1.jpg",
        "ShortDescription": "Вот такие виды нас ждали.",
        "Description": "lorem50"
    },
    {
        "id": "2",
        "Photo": "./images/katun2.jpg",
        "ShortDescription": "Наш рафт выдержал все испытания.",
        "Description": "lorem50"
    },
    {
        "id": "3",
        "Photo": "./images/katun3.jpg",
        "ShortDescription": "Река показывала нам свой нрав и горы.",
        "Description": "lorem50"
    },
    {
        "id": "4",
        "Photo": "./images/katun4.jpg",
        "ShortDescription": "Наша неутомимая каманда!",
        "Description": "lorem50"
    }
]`
const kemPlaces = JSON.parse(kem);

kemPlaces.forEach(place => {

    const placesEl = document.querySelector('.karelia__kem-places');

    const placeEl = document.createElement('div');
    placeEl.classList.add('karelia__kem-place');
    placesEl.append(placeEl);

    const placePhotoEl = document.createElement('img');
    placePhotoEl.classList.add('karelia__kem-place_photo');
    placePhotoEl.src = place.Photo;
    placePhotoEl.setAttribute('alt', `photo-place${place.id}`);
    placeEl.append(placePhotoEl);

    const shortDescriptionEl = document.createElement('p');
    shortDescriptionEl.classList.add('karelia__kem-place_shortDescription');
    shortDescriptionEl.textContent = place.ShortDescription;
    placeEl.append(shortDescriptionEl);

});