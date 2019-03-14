$.scope = {};
$.scope.effects = {
    scroll: ScrollReveal(),
    activate: function() {
        this.scroll.reveal('.effect', { duration: 2000 });
        this.scroll.reveal('.effect1', { duration: 2000 }, { delay: 0 });
        this.scroll.reveal('.effect2', { duration: 3500 }, { delay: 2000 });
        this.scroll.reveal('.effect3', { duration: 4500 }, { delay: 3000 });
        this.scroll.reveal('.effect4', { duration: 5500 }, { delay: 4000 });
        this.scroll.reveal('.effect5', { duration: 6000 }, { delay: 5000 });
    }
};

$(function() {
    $.scope.effects.activate();

    var _top = 100;
    var sizeScreen = $(document).width();
    if (sizeScreen <= 767) {
        $("#open-menu a").click(function() {
            $("#open-menu").removeClass('show');
        });
        _top = 55;
    }

    $(".scrollReveal").on("click", function(e) {
        e.preventDefault();
        $('html, body')
            .animate({
                scrollTop: $($(this).attr("href")).offset().top - _top
            }, 500);
    });

    $(".group-porftolio button").click(function() {
        $(".group-porftolio button").removeClass("btn-info").addClass("btn-light");
        $(this).removeClass("btn-light").addClass("btn-info");
    });
});


/*
$(document).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal('.effect', { duration: 2000 });

    sr.reveal('.effect1', { duration: 2000 }, { delay: 0 });
    sr.reveal('.effect2', { duration: 3500 }, { delay: 2000 });
    sr.reveal('.effect3', { duration: 4500 }, { delay: 3000 });
    sr.reveal('.effect4', { duration: 5500 }, { delay: 4000 });


    var sizeScreen = $(document).width();
    if (sizeScreen <= 767) {
        $("#menu li a").click(function() {
            $("#open-menu").removeClass('in');
        });
    }
});*/