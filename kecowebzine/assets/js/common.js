(function($){
            
    // header 관련
    var lastScroll = 0;
    $(window).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > lastScroll) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
        lastScroll = scrollTop;

        if ($(this).scrollTop() > 120) {
            $('#header').addClass('scroll');
            $('.quick-top').addClass('show');
        } else {
            $('#header').removeClass('scroll');
            $('.quick-top').removeClass('show');
        }
    });

    // gnb 관련
    $(document).on('mouseenter', '#header', function(){
        $('#header').addClass('on');
    });
    $(document).on('mouseleave', '#header', function(){
        $('#gnb > ul > li').removeClass('active');
        $('#header').removeClass('on');
    });
    $(document).on('mouseenter', '#gnb > ul > li > a', function(){
        $('#gnb > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '#gnb > ul > li', function(){
        $('#gnb > ul > li').removeClass('active');
    });

    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('#header').addClass('scroll');
        $('body').addClass('opened');
        $(this).addClass('btn-nav-close');
    });
    $(document).on('click', '.btn-nav-close', function(){
        $('#header').removeClass('scroll');
        $('body').removeClass('opened');
        $('.btn-nav-close').removeClass('btn-nav-close');
    });
    $(document).on('click', '#nav ul > li > a', function (e) {
        e.preventDefault();
        const $li = $(this).parent();
        const isActive = $li.hasClass('active');
        $('#nav ul > li').removeClass('active').children('ul').stop(true, true).slideUp();
        if (!isActive) {
            $li.addClass('active').children('ul').stop(true, true).slideDown();
        }
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
            $('.quick-top').addClass('active');
        } else {
            $('.quick-top').removeClass('active');
        }
    }

    $(window).on('scroll resize', function() {
        checkFooterVisible();
    });

    $(document).ready(function() {
        checkFooterVisible();
    });
    
    $(document).on('click', '.btn-quick-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });

})(jQuery);