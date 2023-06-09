// Modal


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
 // Modal2


 (() => {
 const refs = {
 openModalBtn: document.querySelector('[data-modal2-open]'),
 closeModalBtn: document.querySelector('[data-modal2-close]'),
 modal: document.querySelector('[data-modal2]'),
 body: document.querySelector('[data-page]'),
 };

 refs.openModalBtn.addEventListener('click', toggleModal);
 refs.closeModalBtn.addEventListener('click', toggleModal);

 function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
  }
 })();


// // / Modal3


 (() => {
  const refs = {
openModalBtn: document.querySelector('[data-modal3-open]'),
   closeModalBtn: document.querySelector('[data-modal3-close]'),
 modal: document.querySelector('[data-modal3]'),
  body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
 refs.closeModalBtn.addEventListener('click', toggleModal);

 function toggleModal() {
   refs.modal.classList.toggle('is-hidden');
   refs.body.classList.toggle('no-scroll');
  }
 })();


// Slider
const swiper = new Swiper('.swiper', {
  // Accessibility
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },

  parallax: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // Autoplay
  autoplay: {
    delay: 5000,
  },

  speed: 600,

  loop: true,

  loopedSlides: 4,

  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -1500],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Id scroll
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

const swiperCustomers = new Swiper('.swiper-customers', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'cube',

  cubeEffect: {
    slideShadows: false,
    shadow: false,
    ShadowOffset: 0,
    shadowScale: 0,
  },

  autoplay: {
    delay: 6000,
  },
  loop: true,

  loopedSlides: 4,

  speed: 600,
});
