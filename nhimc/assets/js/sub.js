// quick top 관련
    function checkFooterVisible() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const footer = $('#footer');
    const footerTop = footer.offset().top;
    const footerHeight = footer.outerHeight();
    const footerHalf = footerTop + (footerHeight / 3);

    if (scrollTop + windowHeight >= footerHalf) {
        $('.quick-share').addClass('active');
    } else {
        $('.quick-share').removeClass('active');
    }
}

$(window).on('scroll resize', function() {
    checkFooterVisible();
});

$(document).ready(function() {
    checkFooterVisible();
});

// btn-share 관련
$('.btn-share').on('click', function() {
    alert('클립보드에 복사되었습니다.');
    const url = window.location.href;
    navigator.clipboard.writeText(url);
});

/* highlight */
$(window).on('scroll', function() {
    $('.highlight').each(function(index, elem) {
        if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.3)) {
            $(elem).addClass('active');
        }
    });
});