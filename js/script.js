$(function(){
    $('.insp_slider').slick({
        slidesToShow: 2,
        arrows: false,
        prevArrow:$('.inspiration_slick_icon_btn.prev'),
        nextArrow:$('.inspiration_slick_icon_btn.next')
    });

    // $('.toggle-button').onClick({
       
    // })
    $('.celebration_slider').slick({
        arrows: true,
        prevArrow:$('.celebration_slider_icon_btn.prev'),
        nextArrow:$('.celebration_slider_icon_btn.next')
    });
});