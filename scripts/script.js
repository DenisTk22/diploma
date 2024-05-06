const breakpoint = window.matchMedia("(max-width: 768px)");


const breakpointChecker = () => {
   if (breakpoint.matches) {
      const toManePageAll = document.querySelectorAll('.toMainPage');
      toManePageAll.forEach((el) => {
        el.parentElement.style.position = 'relative';
        el.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
        el.classList.remove('toMainPage');
        el.classList.add('upMainPage');
      })
   }
};

breakpoint.addEventListener("resize", breakpointChecker);
breakpointChecker();

//Обработка клика по меню бургер
const mainEl = document.querySelector('.main')
const burgerEl = mainEl.querySelector('.main__burger');
const mainNavListEl = mainEl.querySelector('.main__navigation_list');
const burgerMenuEl = document.createElement('div');



const getBurgerMenu = ({target}) => {

    if(target.classList.contains('burgerOpen')) {
        const burgerClose = document.createElement('div');
        burgerEl.style.display = 'none';
        mainEl.append(burgerMenuEl);
        burgerMenuEl.append(mainNavListEl);
        burgerMenuEl.append(burgerClose);
        burgerClose.innerHTML = `X`;
        mainNavListEl.classList.remove('main__navigation_list');
        mainNavListEl.classList.add('burgerMenuList');
        burgerMenuEl.classList.add('burgerMenu');
        burgerClose.classList.add('burgerClose');
    };
};

const closeBurgerMenu = ({target}) => {
    if (target.classList.contains('burgerClose')) {
        burgerMenuEl.remove();
        burgerEl.style.display = 'block';
    }
}

mainEl.addEventListener('click', getBurgerMenu);

burgerMenuEl.addEventListener('click', closeBurgerMenu);