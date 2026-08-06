(function($){
    // page-intro 관련
    $(document).ready(function(){
        $('.page-intro').addClass('show');
    });

    setTimeout(function(){
        $('.page-summary').addClass('show');
        $('.vol').addClass('counter');
        $('.counter').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                step: function (func) {
                    $(this).text(parseFloat(func).toFixed(size));
                }
            });
        });
    }, 3000);

    setTimeout(function(){
        $('.img-effect').addClass('moving');
    }, 4500);

    // 영역별 효과
    $(window).on('scroll', function() {
        $('.effect').each(function(index, elem) {
            if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
                $(elem).addClass('show');
            }
        });
    });

})(jQuery);

// making-slider
var makingSwiper = new Swiper(".making-slider", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".making-pagination",
        clickable: true,
    },
});

// liviing-slider
var liviingSwiper = new Swiper(".liviing-slider", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".liviing-prev",
        nextEl: ".liviing-next",
    },
    pagination: {
        el: ".liviing-pagination",
        clickable: true,
    },
});