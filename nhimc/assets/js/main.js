// jumbo-swiper
var jumboSwiper = new Swiper('.jumbo-swiper', {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.jumbo-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + '</span>';
        },
    },
    navigation: {
        prevEl: '.jumbo-prev',
        nextEl: '.jumbo-next',
    },
});

// station-swiper
var stationSwiper = new Swiper('.station-swiper', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: '.station-prev',
        nextEl: '.station-next',
    },
});

// lounge-swiper
var loungeSwiper = new Swiper('.lounge-swiper', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.lounge-pagination',
        clickable: true,
    },
});

// etc-swiper
var etcSwiper = new Swiper('.etc-swiper', {
    loop: true,
    autoHeight: true,
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.etc-pagination',
        clickable: true,
    },
});

// 영역별 효과
$(window).on('scroll', function() {
    $('.effect').each(function(index, elem) {
        if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
            $(elem).addClass('show');
        }
    });
});