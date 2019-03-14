var portfolio = [];

portfolio.push({
    title: "Lady Love",
    subtitleH: "Sex Shop",
    subtitleV: "Sex Shop",
    url: "pages/lady-love.html",
    img: "6.png",
    type: "Logo Branding Design"
}, {
    title: "GYM Universe",
    subtitleH: "Treine Todos os dias",
    subtitleV: "Treine Todos os dias",
    url: "pages/gym-universe.html",
    img: "4.png",
    type: "Site"
}, {
    title: "Knowledge",
    subtitleH: "Aplicação da Faculdade",
    subtitleV: "Aplicação da Faculdade",
    url: "pages/knowledge.html",
    img: "3.png",
    type: "Sistema Aplicativo"
}, {
    title: "Lady Love",
    subtitleH: "Sex Shop",
    subtitleV: "Sex Shop",
    url: "pages/lady-love.html",
    img: "7.png",
    type: "Logo Branding Design"
}, {
    title: "M & H Advogados",
    subtitleH: "Advogados Associados",
    subtitleV: "Advogados Associados",
    url: "pages/mh-advogados.html",
    img: "10.png",
    type: "Logo Branding Design"
}, {
    title: "Absi Ferraz",
    subtitleH: "Aplicação de Gerência de Imóveis",
    subtitleV: "Aplicação de Gerência de Imóveis",
    url: "pages/absi-ferraz.html",
    img: "2.png",
    type: "Sistema Aplicativo"
}, {
    title: "M & H Advogados",
    subtitleH: "Advogados Associados",
    subtitleV: "Advogados Associados",
    url: "pages/mh-advogados.html",
    img: "5.png",
    type: "Logo Branding Design"
}, {
    title: "Knowledge",
    subtitleH: "Aplicação da Faculdade",
    subtitleV: "Aplicação da Faculdade",
    url: "pages/knowledge.html",
    img: "9.png",
    type: "Sistema Aplicativo"
});


$(function() {
    console.log(portfolio);

    var opacity = function(param) {
        reset();
        $(".box").each(function(index) {
            if (($(this).attr('class')).indexOf(param) == -1) {
                $(this).css({
                    'opacity': '0.2',
                });
            }
        });
    };

    var reset = function() {
        $(".box").each(function(index) {
            $(this).css('opacity', '1');
        });
    };

    var getTypeImg = function(param) {
        switch (param) {
            case 0:
                return 'horizontal';
            case 1:
                return 'vertical';
            case 2:
                return 'vertical';
            case 3:
                return 'horizontal';
            case 4:
                return 'horizontal';
            case 5:
                return 'vertical';
            case 6:
                return 'vertical';
            case 7:
                return 'horizontal';
            default:
                return '';
        }
    };

    $.each(portfolio, function(i, item) {
        $("#box-col-" + i).find('img').prop('src', './img/' + getTypeImg(i) + '/' + item.img);
        $("#box-col-" + i).find('a').prop('href', item.url);
        $("#box-col-" + i).find('h5').text(item.title);
        $("#box-col-" + i).find('p').text(item.subtitleH);
        $("#box-col-" + i).addClass(item.type);
    });

    $("#btnApp").click(function() {
        opacity("Aplicativo");
    });
    $("#btnDes").click(function() {
        opacity("Design");
    });
    $("#btnBran").click(function() {
        opacity("Branding");
    });
    $("#btnSys").click(function() {
        opacity("Sistema");
    });
    $("#btnAll").click(function() {
        reset();
    });
});