(function($){
            
    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('nav-opened');
    });
    $(document).on('click', '.btn-nav-close', function(){
        $('body').removeClass('nav-opened');
    });

})(jQuery);