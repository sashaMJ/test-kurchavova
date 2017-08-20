$(function () {

    var mainHeader = $(".main-header");
    var menuTop = mainHeader.offset().top;
    var fixed = false;
    var mainHeaderHelper = $(".main-header-helper");

    $(window)
        .on("scroll", function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop >= menuTop && !fixed) {
                mainHeader.addClass("main-header-fixed");
                mainHeaderHelper.addClass("show");
                fixed = true;
            } else if (winScrollTop <= menuTop) {
                mainHeaderHelper.removeClass("show");
                mainHeader.removeClass("main-header-fixed");
                fixed = false;
            }
        })
        .scroll();
});
