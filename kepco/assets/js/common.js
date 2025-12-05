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
    
    // spy scroll 관련
    $(function () {

        const $header = $('#header');
        const $indicatorA = $('.quick-area ul li a');
        const sections = ['on', 'on-off', 'off'];

        // a 클릭 이벤트가 정답
        $indicatorA.on('click', function (e) {
            e.preventDefault();

            let target = $(this).attr('href');   // ★ a에서 직접 읽기
            let headerH = $header.outerHeight();
            let top = $(target).offset().top - headerH;

            $('html, body').animate({ scrollTop: top }, 600);
        });

        // 스크롤 시 active 업데이트
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            let headerH = $header.outerHeight();

            sections.forEach(function (id) {

                let $sec = $('#' + id);
                let secTop = $sec.offset().top - headerH - 10;
                let secBottom = secTop + $sec.outerHeight();

                if (scrollTop >= secTop && scrollTop < secBottom) {
                    $('.quick-area ul li').removeClass('active');
                    $('.quick-area a[data-target="' + id + '"]').parent().addClass('active');
                }

            });
        });

    });
    
    // quick top 관련
    function checkFooterVisible() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const footer = $('#footer');
        const footerTop = footer.offset().top;
        const footerHeight = footer.outerHeight();
        const footerHalf = footerTop + (footerHeight / 3);

        if (scrollTop + windowHeight >= footerHalf) {
            $('.quick-top, .quick-area').addClass('active');
        } else {
            $('.quick-top, .quick-area').removeClass('active');
        }
    }

    $(window).on('scroll resize', function() {
        checkFooterVisible();
    });

    $(document).ready(function() {
        checkFooterVisible();
    });
    
    
    $(document).on('click', '.btn-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
})(jQuery);