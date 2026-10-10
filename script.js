
document.addEventListener("DOMContentLoaded", function () {

    const activeHikingSwiper = new Swiper(".activeHikingSwiper", {

        slidesPerView: 1.2,
        spaceBetween: 12,

        freeMode: true,

        speed: 600,

        navigation: {
            nextEl: ".activeHikingSwiper .swiper-button-next",
            prevEl: ".activeHikingSwiper .swiper-button-prev",
        },

        scrollbar: {
            el: ".activeHikingSwiper .swiper-scrollbar",
            draggable: true,
            dragSize: 250,
        },

        breakpoints: {
            768: {
                slidesPerView: 3.2,
                spaceBetween: 16,
            },

            1200: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            }
        }

    });

});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

