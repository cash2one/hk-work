
$(function() {

    $('.header .nav i').mouseover(function() {
        $('.header .nav').addClass('selected');
    })
    $('.header .nav ul').mouseleave(function() {
        $('.header .nav').removeClass('selected');
    })
    $('.header .nav .back').click(function() {
        if ($('.header .nav').hasClass('selected')) {
            $('.header .nav').removeClass('selected');
        } else {
            $('.header .nav').addClass('selected');
        }
    })
    $(".nav ul li").hover(function() {
        var t = $(this);
        var tid = t.index();
        var tsub = t.siblings();
        t.addClass("selected");
        tsub.removeClass("selected");
    })

})
