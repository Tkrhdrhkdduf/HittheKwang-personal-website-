


/**
 * this is the thing that makes flip image
 * 
 * 이것이 바로 이미지를 플립하게 만들어줍니다
 * 
 * 
 */












var swiper = new Swiper('.swiper-container', {
        
    effect: 'coverflow',

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: 'auto',

    coverflowEffect: {

      rotate: 50,

      stretch: 0,

      depth: 100,

      modifier: 1,

      slideShadows: true,

    },

    pagination: {

      el: '.swiper-pagination',

    },

  });
