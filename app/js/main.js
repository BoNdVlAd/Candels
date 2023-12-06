const menuBtn = document.querySelector('.menu__btn');
menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
  console.log('hello');
});

console.log(document.querySelectorAll('.accordeon__title'));

document.querySelectorAll('.accordeon__title').forEach((e) => {
  console.log(e);

  e.addEventListener('click', () => {
    e.classList.toggle('active');
    console.log(e.nextElementSibling);
    if (e.nextElementSibling.style.display !== 'block') {
      e.nextElementSibling.style.display = 'block';
    } else {
      e.nextElementSibling.style.display = 'none';
    }
  });
});

const swiperOne = new Swiper('.feedback__slider', {
  clickable: true,
  slidesPerView: 'auto',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
