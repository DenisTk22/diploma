//Путешествия в Карелию
const kareliaTravels = `[
    {
        "id": "1",
        "TravelName": "Сплав на байдарках",
        "Photo": "./images/1suguina.JPG",
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

kareliaTravelsData.forEach(travel => {

    const kareliaMyTravelsEl = document.querySelector('.karelia__my-travels');

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
const splavChirkaKem =  `[
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
const splavChirkaKemDays = JSON.parse(splavChirkaKem);

splavChirkaKemDays.forEach(day => {

    const daysEl = document.querySelector('.karelia__splavChirkaKem-days');

    const dayEl = document.createElement('div');
    dayEl.classList.add('karelia__splavChirkaKem-day');
    daysEl.append(dayEl);

        const dayNumberEl = document.createElement('p');
        dayNumberEl.classList.add('karelia__splavChirkaKem-day_number');
        dayNumberEl.textContent = `День ${day.DayNumber}`;
        dayEl.append(dayNumberEl);

        const dayPhotoEl = document.createElement('img');
        dayPhotoEl.classList.add('karelia__splavChirkaKem-day_photo');
        dayPhotoEl.src = day.Photo;
        dayPhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
        dayEl.append(dayPhotoEl);

        const locationEl = document.createElement('p');
        locationEl.classList.add('karelia__splavChirkaKem-day_location');
        locationEl.textContent = day.Location;
        dayEl.append(locationEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('karelia__splavChirkaKem-day_shortDescription');
        shortDescriptionEl.textContent = day.ShortDescription;
        dayEl.append(shortDescriptionEl);

    });

// Город Кемь, kem
const kem =  `[
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