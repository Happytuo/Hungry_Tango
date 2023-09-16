$(function() {
    const header = $('header');

    $(window).on('scroll', handleScroll);
    
    function handleScroll() {
        const scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            header.addClass('header--scroll');
        } else {
            header.removeClass('header--scroll');
        }
    }

    const burger = $('#burger');
    const menu = $('.menu');
    const menuClose = $('.menu__close');

    burger.on('click', function() {
        menu.addClass('menu--open');
    });

    menuClose.on('click', function() {
        menu.removeClass('menu--open');
    });
});