//change bar color on scroll //

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.offset().top > $nav.height()) {
            
            $("#logo").attr("src", "./assets/img/Logo-dark.png")
        } else {

            $("#logo").attr("src", "./assets/img/Logo.png")
        }
    });
});