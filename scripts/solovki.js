//Путешествия на Соловки
const solovkiTravels = `[
    {
        "id": "1",
        "TravelName": "Соловки 2023",
        "Photo": "./images/1suguina.JPG",
        "Link": "#karelia__splavChirkaKem",
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
const solovkiPlaces = JSON.parse(solovki);

solovkiPlaces.forEach(place => {

    const placesEl = document.querySelector('.solovki__trip2023-places');

        const placeEl = document.createElement('div');
        placeEl.classList.add('solovki__trip2023-places-place');
        placesEl.append(placeEl);

        const placePhotoEl = document.createElement('img');
        placePhotoEl.classList.add('solovki__trip2023-places-place_photo');
        placePhotoEl.src = place.Photo;
        placePhotoEl.setAttribute('alt', `photo-place${place.id}`);
        placeEl.append(placePhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('solovki__trip2023-places_shortDescription');
        shortDescriptionEl.textContent = place.ShortDescription;
        placeEl.append(shortDescriptionEl);

    });