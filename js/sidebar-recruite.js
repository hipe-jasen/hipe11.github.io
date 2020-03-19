$(function() {
    var offset = $("#sidebar-recruite").offset();
    var topPadding = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar-recruite").stop().animate({
                marginTop: $(window).scrollTop() - offset.top + topPadding
            });
        } else {
            $("#sidebar-recruite").stop().animate({
                marginTop: 0
            });
        };
    });
});