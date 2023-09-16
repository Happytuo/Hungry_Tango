$(function() {
    const menuSwitch = $('.menu__switch li');
    const menuBlock = $('.menu__block');

    menuSwitch.on('click', handleMenuSwitch).eq(0).trigger('click');

    function handleMenuSwitch() {
        if ($(this).hasClass('active')) {
            return;
        }

        $(this).addClass('active').siblings().removeClass('active');
        menuBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
    }

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