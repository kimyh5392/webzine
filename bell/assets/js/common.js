(function($){
    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
    });
    $(document).on('click', '.btn-nav-close', function(){
        $('body').removeClass('opened');
    });
    $(document).on('click', '.nav-body > ul > li.has-child > a', function (e) {
        e.preventDefault(); // a태그 기본 동작 방지 (선택사항)
        const $li = $(this).parent();
        const isActive = $li.hasClass('active');

        // 모든 메뉴 닫기
        $('.nav-body > ul > li.has-child').removeClass('active').children('ul').stop(true, true).slideUp();

        // 클릭한 메뉴가 비활성 상태였다면 열기
        if (!isActive) {
            $li.addClass('active').children('ul').stop(true, true).slideDown();
        }
    });
})(jQuery);