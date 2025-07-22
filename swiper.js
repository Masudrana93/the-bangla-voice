var swiper = new Swiper(".mySwiper", 
    {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
       navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
      },
    });