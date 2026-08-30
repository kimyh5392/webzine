(function($){
            
    // gnb 관련
    $(document).on('mouseenter', '.gnb-list > ul > li > a', function(){
        $('.gnb-list > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '.gnb-list > ul > li', function(){
        $('.gnb-list > ul > li').removeClass('active');
    });

    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
        $(this).addClass('btn-nav-close');
    });
    $(document).on('click', '.btn-nav.btn-nav-close', function(){
        $('body').removeClass('opened');
        $(this).removeClass('btn-nav-close');
    });

    // history 관련
    $(document).on('click', '.btn-history', function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('active');
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.webzine-history').length) {
            $('.webzine-history').removeClass('active');
        }
    });

    // quick-menu 관련
    $(document).on('click', '.btn-quick', function(){
        $('.quick-menu').toggleClass('show');
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
            $('.quick-menu').addClass('active');
        } else {
            $('.quick-menu').removeClass('active');
        }
    }

    $(window).on('scroll resize', function() {
        checkFooterVisible();
    });

    $(document).ready(function() {
        checkFooterVisible();
    });

})(jQuery);