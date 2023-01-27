var duration, duration2, loop, loop2, loop3, loop4;

$(".div-main-section-opportunities__tabs-nav-item:first-child").hasClass(
        "div-tab__item_active"
    ) ?
    (duration = 16e3) :
    !$(".div-main-section-opportunities__tabs-nav-item:first-child").hasClass(
        "div-tab__item_active"
    ) || (duration = 9e3),
    $(".div-main-section-features__tabs-nav-item:first-child").hasClass(
        "div-tab__item_active"
    ) ?
    (duration2 = 26e3) :
    !$(".div-main-section-features__tabs-nav-item:first-child").hasClass(
        "div-tab__item_active"
    ) || (duration2 = 11e3);
var loop = window.setInterval(function() {
        showNextSlide();
    }, duration),
    loop2 = window.setInterval(function() {
        showNextSlide2();
    }, duration2),
    loop3 = window.setInterval(function() {
        showNextSlide3();
    }, 8e3),
    loop4 = window.setInterval(function() {
        showNextSlide4();
    }, 6e3);

function showNextSlide() {
    var t = $(".div-main-section-opportunities .div-tab__panel_active"),
        e = t.next(),
        i = $(".div-main-section-opportunities .div-tab__item_active"),
        a = i.next();
    0 === e.length &&
        ($(".div-main-section-opportunities .div-tab__panel:first-child").toggleClass(
                "div-tab__panel_active"
            ),
            $(".div-main-section-opportunities .div-tab__item:first-child").toggleClass(
                "div-tab__item_active"
            )),
        t.removeClass("div-tab__panel_active"),
        e.toggleClass("div-tab__panel_active"),
        i.removeClass("div-tab__item_active"),
        a.toggleClass("div-tab__item_active");
}

function showNextSlide2() {
    var t = $(".div-main-section-features .div-tab__panel_active"),
        e = t.next(),
        i = $(".div-main-section-features .div-tab__item_active"),
        a = i.next();
    0 === e.length &&
        ($(".div-main-section-features .div-tab__panel:first-child").toggleClass(
                "div-tab__panel_active"
            ),
            $(".div-main-section-features .div-tab__item:first-child").toggleClass(
                "div-tab__item_active"
            )),
        t.removeClass("div-tab__panel_active"),
        e.toggleClass("div-tab__panel_active"),
        i.removeClass("div-tab__item_active"),
        a.toggleClass("div-tab__item_active");
}

function showNextSlide3() {
    var t = $(
            ".div-main-section-platforms__tabs-content-item-inner .div-tab__panel_active"
        ),
        e = t.next(),
        i = $(".div-main-section-platforms .div-tab__item_active"),
        a = i.next();
    0 === e.length &&
        ($(
                ".div-main-section-platforms__tabs-content-item-inner .div-tab__panel:first-child"
            ).toggleClass("div-tab__panel_active"),
            $(".div-main-section-platforms .div-tab__item:first-child").toggleClass(
                "div-tab__item_active"
            )),
        t.removeClass("div-tab__panel_active"),
        e.toggleClass("div-tab__panel_active"),
        i.removeClass("div-tab__item_active"),
        a.toggleClass("div-tab__item_active");
}

function showNextSlide4() {
    var t = $(".div-main-section-teams .div-tab__panel_active"),
        e = t.next(),
        i = $(".div-main-section-teams .div-tab__item_active"),
        a = i.next();
    0 === e.length &&
        ($(".div-main-section-teams .div-tab__panel:first-child").toggleClass(
                "div-tab__panel_active"
            ),
            $(".div-main-section-teams .div-tab__item:first-child").toggleClass(
                "div-tab__item_active"
            )),
        t.removeClass("div-tab__panel_active"),
        e.toggleClass("div-tab__panel_active"),
        i.removeClass("div-tab__item_active"),
        a.toggleClass("div-tab__item_active");
}
($.fn.isInViewport = function() {
    var t = $(this).offset().top,
        e = t + $(this).outerHeight(),
        i = $(window).scrollTop(),
        a = i + $(window).height();
    return e > i && t < a;
}),
$(window).on("scroll.once", function() {
        $(".div-main-section-opportunities").isInViewport() &&
            $(window).off("scroll.once");
    }),
    $(window).on("scroll.two", function() {
        $(".div-main-section-features").isInViewport() &&
            $(window).off("scroll.two");
    }),
    $(window).on("scroll.three", function() {
        $(".div-main-section-platforms").isInViewport() &&
            $(window).off("scroll.three");
    }),
    $(window).on("scroll.four", function() {
        $(".div-main-section-teams").isInViewport() && $(window).off("scroll.four");
    }),
    $(".div-main-section-opportunities").isInViewport() &&
    $(window).off("scroll.once"),
    $(".div-main-section-features").isInViewport() && $(window).off("scroll.two"),
    $(".div-main-section-platforms").isInViewport() &&
    $(window).off("scroll.three"),
    $(".div-main-section-teams").isInViewport() && $(window).off("scroll.four");

var mutinyVideo = document.getElementById("mutiny-video");

const playPromise = mutinyVideo.play() || Promise.reject(""); // Not all browsers return promise from .play().
playPromise
    .then(() => {})
    .catch((err) => {
        // Video couldn't be autoplayed because of autoplay policy. Mute it and play.
        mutinyVideo.muted = true;
        mutinyVideo.play();
    });
