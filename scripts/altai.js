//Путешествия на Алтае
const altaiTravels = `[
    {
        "id": "1",
        "TravelName": "Конный поход",
        "Photo": "./images/1suguina.JPG",
        "Link": "#altai__horseTravel",
        "ShortDescription": "Набрались массу впечатлений!."
    },
    {
        "id": "2",
        "TravelName": "Сплав на рафтах",
        "Photo": "./images/8taezhnik.jpg",
        "Link": "#altai__raftingKatun",
        "ShortDescription": "Катунь - быстрая и холодная река Алтая."
    }
]`

const altaiTravelsData = JSON.parse(altaiTravels);

altaiTravelsData.forEach(travel => {

    const altaiMyTravelsEl = document.querySelector('.altai__my-travels');

        const travelEl = document.createElement('div');
        travelEl.classList.add('altai__travel');
        altaiMyTravelsEl.append(travelEl);

        const travelNameEl = document.createElement('p');
        travelNameEl.classList.add('altai__travel_name');
        travelNameEl.textContent = `${travel.TravelName}`;
        travelEl.append(travelNameEl);

        const travelLinkEl = document.createElement('a');
        travelLinkEl.classList.add('altai__travel_link');
        travelLinkEl.href = `${travel.Link}`;
        travelEl.append(travelLinkEl);

        const travelPhotoEl = document.createElement('img');
        travelPhotoEl.classList.add('altai__travel_photo');
        travelPhotoEl.src = travel.Photo;
        travelPhotoEl.setAttribute('alt', `${travel.TravelName}`);
        travelLinkEl.append(travelPhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('altai__travel_shortDescription');
        shortDescriptionEl.textContent = travel.ShortDescription;
        travelEl.append(shortDescriptionEl);

});

// Дни конного похода, horseTravel
const horseTravel =  `[
    {
        "id": "1",
        "DayNumber": "1",
        "Photo": "./images/1suguina.JPG",
        "Location": "урочище Сугойна",
        "ShortDescription": "Отпарвная точка, тут мы пересели на лошадей.",
        "Description": "Здесь была наша база и отправная точка. Живописный ручей, баня перед походом и конечно знакомчтво с лошадями, на которых мы провели следующие дни."
    },
    {
        "id": "2",
        "DayNumber": "2",
        "Photo": "./images/2muehta.JPG",
        "Location": "урочище Муехта",
        "ShortDescription": "Живописные места, море зелени и вековые деревья.",
        "Description": "Находясь в этих местах, особенно на лошадях, начинаешь представлять себя ведьмаком из одноименного рассказа, начинаешь понимать прелести и трудности походной жизни."
    },
    {
        "id": "3",
        "DayNumber": "3",
        "Photo": "./images/3waterfall.JPG",
        "Location": "Водопад",
        "ShortDescription": "Потрязающий водопад с ледяной водой и крутым спуском.",
        "Description": "До водопада мы шли уже пешком, дав нашим лошадкам отдохнуть. Крутой и обрывистый спуск не испортил впечатление. И увидев такую красоту, мы поняли что все это не зря. Вода очень холодная - бррр."
    },
    {
        "id": "4",
        "DayNumber": "4",
        "Photo": "./images/4baioukskiy.JPG",
        "Location": "Байоюкский перевал",
        "ShortDescription": "Ради такой красоты стоит преодолеть тысячи километров.",
        "Description": "Под ногами камни и кусты, впереди горы и конечно облака - это же видели и люди сотни лет назад..."
    },
    {
        "id": "5",
        "DayNumber": "5",
        "Photo": "./images/5veronica.JPG",
        "Location": "озеро Вероника",
        "ShortDescription": "Существует легенда..., ну сами все узнаете, когда там побываете.",
        "Description": "Так вот легенда ... так, сами туда езжайте и все узнаете) Озеро холодное, но окунуться стоит."
    },
    {
        "id": "6",
        "DayNumber": "6",
        "Photo": "./images/6karakolskie.png",
        "Location": "Каракольские озера",
        "ShortDescription": "До озер мы так и не дошли, т.к. был сильный туман в тот день.",
        "Description": "Наш поход называллся Каракольские озера и основной целью было как раз посещение этих озер, но судьба распорядилась иначе. Зарядил такой туман, что ехать было опасно, тем более городским жителям, потеряться и заблудиться в таком тумане очень просто."
    },
    {
        "id": "7",
        "DayNumber": "7",
        "Photo": "./images/7kedrovaya.JPG",
        "Location": "Кедровая поляна",
        "ShortDescription": "Тут мы ночевали несколько ночей, на радость наших четвероногих друзей и нашу тоже.",
        "Description": "Наша дневка была на кедровой поляне. Десятки кедров, точнее кедровых сосен с массивными стволами добавляли эпичности данной местности."
    },
    {
        "id": "8",
        "DayNumber": "8",
        "Photo": "./images/8taezhnik.jpg",
        "Location": "эко-отель Таёжник",
        "ShortDescription": "Возвращение на базу, на берегу потрясающей реки Катунь.",
        "Description": "Закончилось наше путешествие. Немного грустно и много впечатлений. Жди нас Алтай снова!"
    }
]`
const horseTravelDays = JSON.parse(horseTravel);

const daysHTravelEl = document.querySelector('.altai__horseTravel-days');

horseTravelDays.forEach(day => {

    const dayEl = document.createElement('div');
    dayEl.classList.add('altai__horseTravel-day');
    dayEl.classList.add('widthBox');
    daysHTravelEl.append(dayEl);

        const dayNumberEl = document.createElement('p');
        dayNumberEl.classList.add('altai__horseTravel-day_number');
        dayNumberEl.textContent = `День ${day.DayNumber}`;
        dayEl.append(dayNumberEl);

        const dayLinkEl = document.createElement('a');
        dayLinkEl.classList.add('altai__horseTravel-day_link');
        dayLinkEl.setAttribute('href', '#altai__horseTravel-days');
        dayEl.append(dayLinkEl);

        const dayPhotoEl = document.createElement('img');
        dayPhotoEl.classList.add('altai__horseTravel-day_photo');
        dayPhotoEl.src = day.Photo;
        dayPhotoEl.setAttribute('alt', `photo-day${day.DayNumber}`);
        dayLinkEl.append(dayPhotoEl);

        const locationEl = document.createElement('p');
        locationEl.classList.add('altai__horseTravel-day_location');
        locationEl.textContent = day.Location;
        dayEl.append(locationEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('altai__horseTravel-day_shortDescription');
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
daysHTravelEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('altai__horseTravel-day_photo')) {
        getActivePhoto(target, horseTravelDays);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});

// Сплав на рафтах по Катуни, raftingKatun
const raftingKatun =  `[
    {
        "id": "1",
        "Photo": "./images/katun1.jpg",
        "ShortDescription": "Вот такие виды нас ждали.",
        "Description": "Река Катунь молочного отттенка из-за меловых и известняковых отложений, которые стекуют в реку вместе с тающими снегами с гор."
    },
    {
        "id": "2",
        "Photo": "./images/katun2.jpg",
        "ShortDescription": "Наш рафт выдержал все испытания.",
        "Description": "Наша команда уселась на большой рафт с опытным инструктором на корме, он и координировал нашу греблю."
    },
    {
        "id": "3",
        "Photo": "./images/katun3.jpg",
        "ShortDescription": "Река показывала нам свой нрав и горы.",
        "Description": "Бырлящие течения не давали заскучать, а горы баловали нас своим водом. Это было не забываемо!"
    },
    {
        "id": "4",
        "Photo": "./images/katun4.jpg",
        "ShortDescription": "Наша неутомимая каманда!",
        "Description": "Немного уставшие после основного похода, но готовые к новым приключениям!"
    }
]`
const raftingKatunPlaces = JSON.parse(raftingKatun);

const placesRKatunEl = document.querySelector('.altai__raftingKatun-places');

raftingKatunPlaces.forEach(place => {

        const placeEl = document.createElement('div');
        placeEl.classList.add('altai__raftingKatun-place');
        placeEl.classList.add('widthBox');
        placesRKatunEl.append(placeEl);

        const placeLinkEl = document.createElement('a');
        placeLinkEl.classList.add('altai__raftingKatun-place_link');
        placeLinkEl.setAttribute('href', '#altai__raftingKatun-places');
        placeEl.append(placeLinkEl);

        const placePhotoEl = document.createElement('img');
        placePhotoEl.classList.add('altai__raftingKatun-place_photo');
        placePhotoEl.src = place.Photo;
        placePhotoEl.setAttribute('alt', `photo-place${place.id}`);
        placeLinkEl.append(placePhotoEl);

        const shortDescriptionEl = document.createElement('p');
        shortDescriptionEl.classList.add('altai__raftingKatun-place_shortDescription');
        shortDescriptionEl.textContent = place.ShortDescription;
        placeEl.append(shortDescriptionEl);
    });

// Обработка кликов по фото
placesRKatunEl.addEventListener('click', ({ target }) => {
    if (target.classList.contains('altai__raftingKatun-place_photo')) {
        getActivePhoto(target, raftingKatunPlaces);
    };

    if (target.classList.contains('currentActive__close')) {
        closeActivePhoto(target);
    };
});