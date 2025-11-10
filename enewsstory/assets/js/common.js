(function($){

    // scroll 관련
    $(document).ready(function() {

        var headerHeight = $('#header').outerHeight() || 0;
        var scrollOffset = headerHeight;

        $(window).on('resize', function() {
            headerHeight = $('#header').outerHeight() || 0;
            scrollOffset = headerHeight;
        });

        function scrollToHash() {
            if (window.location.hash) {
                var target = $(window.location.hash);
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - scrollOffset
                    }, 600);
                }
            }
        }

        scrollToHash();

        $(window).on('hashchange', scrollToHash);
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
})(jQuery);