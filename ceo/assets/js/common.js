(function($){
    // gnb 관련
    $(document).on('mouseenter', '#gnb > ul > li > a', function(){
        $('#header').addClass('show');
    });
    $(document).on('mouseleave', '#gnb', function(){
        $('#header').removeClass('show');
    });

    // scroll 관련
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });

    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
    });
    $(document).on('click', '.btn-nav-close', function(){
        $('body').removeClass('opened');
    });
    $(document).on('click', '.nav-body > ul > li > a', function (e) {
        e.preventDefault(); // a태그 기본 동작 방지 (선택사항)
        const $li = $(this).parent();
        const isActive = $li.hasClass('active');

        // 모든 메뉴 닫기
        $('.nav-body > ul > li').removeClass('active').children('ul').stop(true, true).slideUp();

        // 클릭한 메뉴가 비활성 상태였다면 열기
        if (!isActive) {
            $li.addClass('active').children('ul').stop(true, true).slideDown();
        }
    });
    
    // quick area 관련
    function checkFooterVisible() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const footer = $('#footer');
        const footerTop = footer.offset().top;
        const footerHeight = footer.outerHeight();
        const footerHalf = footerTop + (footerHeight / 3);

        if (scrollTop + windowHeight >= footerHalf) {
            $('.quick-area').addClass('active');
        } else {
            $('.quick-area').removeClass('active');
        }
    }

    $(window).on('scroll resize', function() {
        checkFooterVisible();
    });

    $(document).ready(function() {
        checkFooterVisible();
    });
    
    // btn-top 관련
    $(document).on('click', '.btn-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
    
    // btn-share 관련
    $('.btn-share').on('click', function() {
        alert('클립보드에 복사되었습니다.');
        const url = window.location.href;
        navigator.clipboard.writeText(url);
    });
    
})(jQuery);