// 줌 관련
var nowZoom = 100;
function zoom(type) {
    if (type === 'in') {
        if (nowZoom >= 120) {
            alert("더 이상 확대할 수 없습니다.");
            return;
        }
        nowZoom += 5;
    } else {
        if (nowZoom <= 80) {
            alert("더 이상 축소할 수 없습니다.");
            return;
        }
        nowZoom -= 5;
    }
    document.body.style.zoom = nowZoom + '%';
}
$(document).on('click', '.btn-zoomin', function(){
    zoom('in');
});
$(document).on('click', '.btn-zoomout', function(){
    zoom('out');
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

// nav 관련
$(document).on('click', '.btn-nav', function(){
    $('body').addClass('opened');
    $(this).addClass('btn-nav-close');
});
$(document).on('click', '.btn-nav.btn-nav-close', function(){
    $('body').removeClass('opened');
    $(this).removeClass('btn-nav-close');
});