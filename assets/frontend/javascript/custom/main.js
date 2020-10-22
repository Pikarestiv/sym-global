
$(window).on('load', function () {
    $(".navbar").hide()

    $(".navbar").fadeIn(200)

    if ($('.ya-gallery-container').length === 0 && $('.ya-faq-container').length === 0) {
        // 關閉loading
        $(".lds_bg").fadeOut(600);
    }
});
/*============= wow ==============*/
new WOW().init();
/*============= 漢堡選單 ==============*/
$(".header__menu").click(function () {
    $(this).toggleClass("hamburger--open");
});
$(".progress-bar").each(function () {
    var each_bar_width;
    each_bar_width = $(this).attr('aria-valuenow');
    // console.log(each_bar_width)
    $(this).width(0);
    setTimeout(function () {
        $(this).width(each_bar_width + '%');
     }, 1000);
    // setTimeout(() => {
    //     $(this).width(each_bar_width + '%');
    //     console.log($(this))
    // }, 1000);
});
/*============= Search Toggler ==============*/

function searchToggler() {
    var trigger = $('.search__active'),
        container = $('.search_active');


    trigger.on('click', function (e) {
        e.preventDefault();
        container.toggleClass('is-visible');
    });

    $('.close__wrap').on('click', function () {
        container.removeClass('is-visible');
    });
}
searchToggler();
/*============= youtube Toggler ==============*/
function autoPlayYouTubeModal() {
    $(".video_img").click(function (e) {
        var src = $(this).attr("data-theVideo");
        var srcauto = src + "&autoplay=1";
        $(".bs_video_box iframe").attr('src', srcauto);
        $(".bs_video_box button.close").click(function () {
            $(".bs_video_box iframe").attr('src', src);
            $(".bs_video_box").fadeOut()
        });
    })
}
autoPlayYouTubeModal()
/*============= 首頁幻燈片 ==============*/
$(document).ready(function () {
    var owl = $('.slider-area');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 6500,
        autoplaySpeed: 1700,
        items: 1,
        dots: true,
        lazyLoad: true,
    });

});
/*============= item幻燈片 ==============*/
$(document).ready(function () {
    var owl = $('.item-slide');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        // autoplay: true,
        autoplayTimeout: 8500,
        autoplaySpeed: 1700,
        items: 1,
        dots: true,
        lazyLoad: true,
    });

});
/*============= 首頁下滑動畫 ==============*/
var controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({
//     triggerElement: ".triggerOdd",
//     triggerHook: '0.9',
//     offset: 300,
//     reverse: false,
// })
//     .setClassToggle(".triggerOdd,.triggerOdd .img_animate ,.triggerOdd .text_animate ,.triggerOdd .text_animate1", "active")
//     .addTo(controller);


//owl套件特性，一開始高度會是0，所以owl下面接的元素trigger在loadding階段就會被觸發，為了不讓odd區塊在1600寬度以上的時候直接出現，首頁第一個元素不使用scrollmagic
var _windowWidth = $(window).width();
if (_windowWidth >= 1280) {
    // 1600
    $(window).scroll(function () {
        var _scrollTop = $(window).scrollTop() //現在高
        if (_scrollTop > 10) {
            $(".triggerOdd").addClass("active");
            $(".triggerOdd .text_animate1").addClass("active");
            $(".triggerOdd .text_animate").addClass("active");
            $(".triggerOdd .img_animate").addClass("active");
            $(".mb-100").hide();
            //第二個區塊star也會active，所以用mb-100增加高度
        }

    }).scroll();
} else {
    $(".triggerOdd").addClass("active");
    $(".triggerOdd .text_animate1").addClass("active");
    $(".triggerOdd .text_animate").addClass("active");
    $(".triggerOdd .img_animate").addClass("active");
}

new ScrollMagic.Scene({
    triggerElement: ".triggerStar",
    triggerHook: '0.9', // show, when scrolled 10% into view
    //duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 120, // 滑動超過多少才顯示
    reverse: false
})
    .setClassToggle(".triggerStar,.triggerStar .img_animate ,.triggerStar .text_animate ,.triggerStar .text_animate1", "active") // add class to reveal
    //.addIndicators()
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".triggerText_animate",
    triggerHook: '0.9', // show, when scrolled 10% into view
    //duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: -120, // 滑動超過多少才顯示
    reverse: false
})
    .setClassToggle(".triggerText_animate,.triggerText_animate .img_animate ,.triggerText_animate .text_animate ,.triggerText_animate .text_animate1", "active") // add class to reveal
    //.addIndicators()
    .addTo(controller);

//滾動視差
var scene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    duration: '60%',
    triggerHook: 0.5
})
.setTween(TweenMax.from('.bcg', 1, { y: '-30%', ease: Power0.easeNone }))
// .addIndicators()
.addTo(controller)

/*============= go top動畫 ==============*/
$(window).scroll(function () {
    var windowHeight = $(window).height(); //視窗高
    var scrollTop = $(window).scrollTop() //現在高
    var scrollPosition = windowHeight + scrollTop;
    var docHeight = $(document).height();//HTML總長度
    //menu animate
    if ($(".navbar-primary").offset().top > 150) {
        $(".navbar-primary").addClass("be_darken");
    } else {
        $(".navbar-primary").removeClass("be_darken");
    }

    //TOP出現
    $(".fixed_btn").each(function () {
        if (scrollTop > windowHeight / 2) {
            $(this).addClass("show");
            if (docHeight - windowHeight - scrollTop < $("footer").outerHeight()) {
                $(this).addClass("foot");
            } else {
                $(this).removeClass("foot");
            }
        } else {
            $(this).removeClass("show");
        }
    });
}).scroll();

$(".fixed_btn").click(function () {
    var scrollTop = $(window).scrollTop() //現在高
    var needTime = scrollTop / 10 + 300;
    $("html,body").stop();
    $("html,body").animate({
        scrollTop: 0
    }, needTime)

});

$('.sub-list').each(function () {
    // console.log($(this));
    if ($(this).children(".sub-item").length > 3) {
        $(this).addClass('sub-list-4')
    }
  })
/*=============parallax 視差動畫 ==============*/
// $('.news_wrap').parallax("左右的%數，50就是置中", 滾動的速度);
// $('.news_wrap').parallax("50%", .11);
// $('.banner').parallax("50%",1);
// $('.parallax-window').parallax();
// $(function () {
//     if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
//         $('#ios-notice').removeClass('hidden');
//         $('.parallax-container').height($(window).height() * 0.5 | 0);
//     } else {
//         $(window).resize(function () {
//             var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
//             $('.parallax-container').height(parallaxHeight);
//         }).trigger('resize');
//     }
// });
function navBtn() {
    var w = $(window).outerWidth()
    if ( w <= 1366) {
        // console.log('<1366');
        $(".faq-sub-nav , .gallery-sub-nav").click(function () {
            // console.log('click');
            $(".more_wrap").toggleClass('openit');
        });
    }
}
$(window).resize(
    navBtn()
)
// if 是chrome ie 打開modal在nav加right:n

