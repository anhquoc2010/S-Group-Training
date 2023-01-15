$(".div-main-section-reviews__carousel").slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
    fade: true,
    prevArrow: $(
    ".div-main-section-reviews__carousel-slider-btn-wrap .prev-slide"
    ),
    nextArrow: $(
    ".div-main-section-reviews__carousel-slider-btn-wrap .next-slide"
    ),
});

$("[div-data-tab-nav]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $this = $(this);
    var target = $this.attr("div-data-tab-nav");

    if (
    $this.closest(".div-main-section-opportunities__tabs-nav").length
    ) {
    window.clearInterval(loop);
    loop = null;
    } else if (
    $this.closest(".div-main-section-features__tabs-nav").length
    ) {
    window.clearInterval(loop2);
    loop2 = null;
    }
    if ($this.closest(".div-main-section-platforms__tabs-nav").length) {
    window.clearInterval(loop3);
    loop3 = null;
    } else if ($this.closest(".div-main-section-teams__tabs-nav").length) {
    window.clearInterval(loop4);
    loop4 = null;
    /*  $('.div-main-section-teams__tabs-nav.show-on-desktop .div-main-section-teams__tabs-nav-item-item').each(function(index) {
    if($(this).hasClass('div-tab__item_active'))
        $('.hide-on-desktop .div-main-section-teams__tabs-nav-item:nth-child('+(index+1)+')').toggleClass('div-tab__item_active');
    });  */
    }
    $this
    .addClass("div-tab__item_active")
    .siblings()
    .removeClass("div-tab__item_active");

    $("[div-data-tab-panel='" + target + "']")
    .addClass("div-tab__panel_active")
    .siblings()
    .removeClass("div-tab__panel_active");

    return false;
});