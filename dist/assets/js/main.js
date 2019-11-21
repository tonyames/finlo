//change bar color and logo on scroll //

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.offset().top > 10) {
            
            $("#logo").attr("src", "./assets/img/Logo-dark.png")
        } else {

            $("#logo").attr("src", "./assets/img/Logo.png")
        }
    });
});

// handle current active link

$('#mainNav .nav-item a').on('click', function () {
    $('#mainNav').find('.nav-link .active').removeClass('active');
    $(this).parent('li').addClass('active');
});

$(function () {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function () {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});