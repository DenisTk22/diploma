// Дни конного похода
const travelingDays =  `[
    {
        "id": "1",
        "DayNumber": "1",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName1",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "2",
        "DayNumber": "2",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName2",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "3",
        "DayNumber": "3",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName3",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "4",
        "DayNumber": "4",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName4",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "5",
        "DayNumber": "5",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName5",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "6",
        "DayNumber": "6",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName6",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "7",
        "DayNumber": "7",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName7",
        "ShortDescription": "lorem10",
        "Description": "lorem50"
    },
    {
        "id": "8",
        "DayNumber": "8",
        "Photo": "./images/pumpkin.jpg",
        "Location": "LocationName8",
        "ShortDescription": "lorem10",
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