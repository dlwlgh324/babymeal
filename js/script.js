$(document).ready(function () {
    //모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    // modal_close클릭 시 modal 사라지기
    modal_close.click(function () {
        modal.fadeOut();
    });

    //modal클릭 시 modal사라지기
    modal.click(function () {
        modal.fadeOut();
    });

    //.modal-cont 를 마우스로 클릭하면 사라지지않기
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    //modal-show href막기 & 사라지게하기
    modal_show.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
    });

    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".sw-visual-pg",
            clickable: true,
        },
    });

    let sw_event_1 = new Swiper('.sw-event-1', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".sw-visual-prev",
            prevEl: ".sw-visual-next",
        },
    });

    let sw_event_2 = new Swiper('.sw-event-2', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".sw-event-pg-2",
            clickable: true,
        },
    });

    let sw_pro = new Swiper('.sw-pro', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: ".sw-pro-next",
            prevEl: ".sw-pro-prev",
        },
        speed: 1500,
    });

    // 메뉴
    let mainmenu = $('.mainmenu');
    let submenu = $('.sub-menu');
    let menu_timer;

    function late() {
        submenu.hide();
    }

    mainmenu.mouseenter(function () {
        clearTimeout(menu_timer);
        submenu.show();
    });

    mainmenu.mouseleave(function () {
        clearTimeout(menu_timer);
        menu_timer = setTimeout(late, 300);
    });

    submenu.mouseenter(function () {
        clearTimeout(menu_timer);
    });

    submenu.mouseleave(function () {
        clearTimeout(menu_timer);
        menu_timer = setTimeout(late, 300);
    });

    // 주메뉴 포커스 유지
    let mainmenu_li_a = $('.mainmenu>li>a');
    let depth1_li = $('.depth1>li');

    $.each(depth1_li, function (index, item) {
        $(this).mouseenter(function () {
            mainmenu_li_a.removeClass('mainmenu-active');
            mainmenu_li_a.eq(index).addClass('mainmenu-active');
        });

        $(this).mouseleave(function () {
            mainmenu_li_a.removeClass('mainmenu-active');
        });
    });

    // 패밀리사이트
    let family_site = $('.family-site');
    let family_menu = $('.family-menu');

    family_site.click(function (event) {
        event.preventDefault();
        family_menu.stop().slideToggle('fast');
        if (family_site.hasClass('family-menu-active')) {
            $(this).removeClass('family-menu-active');
        } else {
            $(this).addClass('family-menu-active');
        }
    });


});