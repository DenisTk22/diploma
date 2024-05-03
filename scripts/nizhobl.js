//Путешествия по Нижегородской области
const nizhoblTravels = `[
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

const nizhoblTravelsData = JSON.parse(nizhoblTravels);

nizhoblTravelsData.forEach(travel => {

    const nizhoblMyTravelsEl = document.querySelector('.nizhobl__my-travels');

        const travelEl = document.createElement('div');
        travelEl.classList.add('nizhobl__travel');
        nizhoblMyTravelsEl.append(travelEl);

        const travelNameEl = document.createElement('p');
        travelNameEl.classList.add('nizhobl__travel_name');
        travelNameEl.textContent = `${travel.TravelName}`;
        travelEl.append(travelNameEl);

        const travelLinkEl = document.createElement('a');
        travelLinkEl.classList.add('nizhobl__travel_link');
        travelLinkEl.href = `${travel.Link}`;
        travelEl.append(travelLinkEl);

            const travelPhotoEl = document.createElement('img');
            travelPhotoEl.classList.add('nizhobl__travel_photo');
            travelPhotoEl.src = travel.Photo;
            travelPhotoEl.setAttribute('alt', `${travel.TravelName}`);
            travelLinkEl.append(travelPhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('nizhobl__travel_shortDescription');
        shortDescriptionEl.textContent = travel.ShortDescription;
        travelEl.append(shortDescriptionEl);

});