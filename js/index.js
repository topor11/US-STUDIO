var swiper = new Swiper(".swiper-hero", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  // Responsive breakpoints
  breakpoints: {
    440: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
    },
    768: {
        slidesPerView: 2.6,
        spaceBetween: 30,
        slidesPerGroup: 3,
    },
    816: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
    },
    1128: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
    },
    1464: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
    },
    1920: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
    },
   }
});
