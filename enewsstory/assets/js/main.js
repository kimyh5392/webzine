(function($){

    // quick-link 관련
    $('.quick-link > a').on('click', function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        var $target = $(target);
        var headerHeight = $('header').outerHeight() || 0;

        if($target.length){
            $('html, body').animate({
                scrollTop: $target.offset().top - headerHeight
            }, 600);
        }
    });

    // quick-banner
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 100) {
            $('.quick-link').stop().animate({
                top: $(this).scrollTop() + 200
            }, 'past');
        } else {
            $('.quick-link').stop().animate({
                top: 200
            }, 'past');
        }
    });

})(jQuery);

var jumboSwiperAm = new Swiper(".jumbo-slider-am", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".jumbo-am-page",
        clickable: true,
    },
    navigation: {
        prevEl: ".btn-am-jumbo-prev",
        nextEl: ".btn-am-jumbo-next",
    },
});

var jumboSwiperPm = new Swiper(".jumbo-slider-pm", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".jumbo-pm-page",
        clickable: true,
    },
    navigation: {
        prevEl: ".btn-pm-jumbo-prev",
        nextEl: ".btn-pm-jumbo-next",
    },
});

var CardSwiperAm = new Swiper(".am-card-swiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".card-am-page",
        clickable: true,
    },
});
var CardSwiperPm = new Swiper(".pm-card-swiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".card-pm-page",
        clickable: true,
    },
});