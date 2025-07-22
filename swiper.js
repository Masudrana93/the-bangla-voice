var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 3, // This stays fixed
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".custom-button-prev",
    prevEl: ".custom-button-next",
  },
  breakpoints: {
    // when window width is >= 992px (desktop)
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 768px (tablet)
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is < 768px (mobile)
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});
