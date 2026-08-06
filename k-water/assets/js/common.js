// nav 관련
$(document).on('click', '.btn-nav', function(){
    $(this).addClass('btn-nav-close');
    $('body').addClass('opened');
});
$(document).on('click', '.btn-nav.btn-nav-close', function(){
    $(this).removeClass('btn-nav-close');
    $('body').removeClass('opened');
});

$(document).on('click', '.gnb-wrap > ul > li.has-child > a', function (e) {
    e.preventDefault();
    e.stopPropagation(); // ⭐ 이 줄이 핵심

    const $li = $(this).parent();
    const isActive = $li.hasClass('active');

    $('.gnb-wrap > ul > li.has-child').removeClass('active').children('ul').stop(true, true).slideUp();
    
    if (!isActive) {
        $li.addClass('active').children('ul').stop(true, true).slideDown();
    }
});

// scroll 관련
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $('body').addClass('scrolled');
    } else {
        $('body').removeClass('scrolled');
    }
});