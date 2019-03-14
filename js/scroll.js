$(function() {
    $(".scrollReveal").on("click", function(e) {
        e.preventDefault();

        console.log($('html, body'));
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});