// jumbotron 관련
var jumboSwiper = new Swiper(".jumbo-slider", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".jumbo-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          const num = (index + 1).toString().padStart(2, '0');
          return `<span class="${className}">${num}</span>`;
        },
    },
    navigation: {
        prevEl: ".jumbo-prev",
        nextEl: ".jumbo-next",
    },
});

// business-slider
var businessSwiper = new Swiper(".business-slider", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".business-prev",
        nextEl: ".business-next",
    },
});

(function($){

    // 영역별 효과
    $(window).on('scroll', function() {
        $('.effect').each(function(index, elem) {
            if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
                $(elem).addClass('show');
            }
        });
    });

})(jQuery);