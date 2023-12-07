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

document.querySelectorAll('.menu__list-item').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('There was a click');
    console.log(element.dataset.id);
    switch (element.dataset.id) {
      case '1':
        document
          .querySelector('.about')
          .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        break;
      case '2':
        document
          .querySelector('.goods')
          .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        break;
      case '3':
        document
          .querySelector('.team')
          .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        break;
      case '4':
        document
          .querySelector('.feedback')
          .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        break;
      case '5':
        document
          .querySelector('.courses')
          .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        break;
      case '6':
        document;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;

      default:
        break;
    }
  });
});

document
  .querySelectorAll('.goods')
  .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
