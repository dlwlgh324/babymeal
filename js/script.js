$(document).ready(function () {
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
    });

    // 메뉴
    let gnb = $('.gnb');
    let submenu = $('.sub-menu');
    let menu_timer;

    function late() {
        submenu.hide();
    }

    gnb.mouseenter(function () {
        clearTimeout(menu_timer);
        submenu.show();
    });

    gnb.mouseleave(function () {
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

    // // 주메뉴 포커스 유지
    // let gnb_li_a = $('.gnb>li>a');
    // let depth1_li = $('.depth1 li');

    // $.each(depth1_li, function (index, item) {
    //     depth1_li.eq(index).mouseenter(function () {
    //         gnb_li_a.removeClass('gnb-active');
    //         gnb_li_a.eq(index).addClass('gnb-active');
    //     });
    //     depth1_li.eq(index).mouseleave(function () {
    //         gnb_li_a.removeClass('gnb-active');
    //     });
    // });

    // 나이스 스크롤
    $("#menu-sc").niceScroll({
        cursorcolor: "#ddd",
        background: "#f9f9f9",
        cursorwidth: "2px",
        cursorborder: "0",
        autohidemode: false,
        autohidemode: "leave",
        mousescrollstep: 100,
        scrollspeed: 300,
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