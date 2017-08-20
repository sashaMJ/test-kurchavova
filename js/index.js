$(function () {

    var mainHeader = $(".main-header");
    var menuTop = mainHeader.offset().top;
    var fixed = false;

    $(window)
        .on("scroll", function () {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop >= menuTop && !fixed) {
                mainHeader.addClass("main-header-fixed");
                fixed = true;
            } else if (winScrollTop <= menuTop) {
                mainHeader.removeClass("main-header-fixed");
                fixed = false;
            }
        })
        .scroll();
});
