$(function() {
    const specialSlider = $('.special__slider');

    specialSlider.slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        arrows: true
    });

    const setSlider = $('.index__set-slider');

    setSlider.slick({
        autoplay: true,
        arrows: true
    });

    const singleList = $('.single__listbox ul li');
    const singleGalleryBlock = $('.single__gallery-block');
    singleList.on('click', handleSwitchList).eq(0).trigger('click');

    function handleSwitchList() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.description').slideUp();
        } else {
            singleGalleryBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find('.description').slideDown();
            $(this).siblings().find('.description').slideUp();
        }
    };
});