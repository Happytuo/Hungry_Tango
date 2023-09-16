$(function() {
    const envSlider = $('.about__env-slider');

    envSlider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 400,
        infinite: true,
        autoplay: true
    });
});