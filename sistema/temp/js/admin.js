$.AdminBFA = {};
$.AdminBFA.options = {
    colors: {
        red: '#F44336',
        pink: '#E91E63',
        purple: '#9C27B0',
        deepPurple: '#673AB7',
        indigo: '#3F51B5',
        blue: '#2196F3',
        lightBlue: '#03A9F4',
        cyan: '#00BCD4',
        teal: '#009688',
        green: '#4CAF50',
        lightGreen: '#8BC34A',
        lime: '#CDDC39',
        yellow: '#ffe821',
        amber: '#FFC107',
        orange: '#FF9800',
        deepOrange: '#FF5722',
        brown: '#795548',
        grey: '#9E9E9E',
        blueGrey: '#607D8B',
        black: '#000000',
        white: '#ffffff'
    },
    leftSideBar: {
        breakpointWidth: 1170
    },
    dropdownMenu: {
        effectIn: 'fadeIn',
        effectOut: 'fadeOut'
    }
}

$.AdminBFA.leftSideBar = {
    activate: function() {
        var _this = this;
        var $body = $('body');
        var $overlay = $('.overlay');

        //Close sidebar
        $(window).click(function(e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

            if (!$target.hasClass('bars') && _this.isOpen() && $target.parents('#leftsidebar').length === 0) {
                if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
                $body.removeClass('overlay-open');
            }
        });

        /*$.each($('.menu-toggle.toggled'), function(i, val) {
            $(val).next().slideToggle(0);
        });*/

        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);

        //When page load
        $.each($('.sidebar-menu .nav a'), function(i, val) {
            var $activeAnchors = $(val).find('a:eq(0)');
            var href = $(val).get(0).pathname;

            $(val).removeClass('active');

            /* lembrar de modificar para verificar o nome do caminho e não o tamanho */
            if (path.substring(0, href.length) === href) {
                $(val).addClass('active');
            }
        });

        //Collapse or Expand Menu
        /*$('.menu-toggle').on('click', function(e) {
            var $this = $(this);
            var $content = $this.next();

            if ($($this.parents('ul')[0]).hasClass('list')) {
                var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

                $.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
                    if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
            }

            $this.toggleClass('toggled');
            $content.slideToggle(320);
        }); */

        //Set menu height
        _this.checkStatuForResize(true);
        $(window).resize(function() {
            _this.checkStatuForResize(false);
        });

        //Set Waves
        Waves.attach('.sidebar-menu .nav a', ['waves-block']);
        Waves.init();
    },
    checkStatuForResize: function(firstTime) {
        var $body = $('body');
        var $openCloseBar = $('.navbar .navbar-header .bars');
        var width = $body.width();

        if (firstTime) {
            $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function() {
                $(this).removeClass('no-animate').dequeue();
            });
        }

        if (width < $.AdminBFA.options.leftSideBar.breakpointWidth) {
            $body.addClass('ls-closed');
            $openCloseBar.fadeIn();
        } else {
            $body.removeClass('ls-closed');
            $openCloseBar.fadeOut();
        }
    },
    isOpen: function() {
        return $('body').hasClass('overlay-open');
    }
};

$.AdminBFA.navbar = {
    activate: function() {
        var $body = $('body');
        var $overlay = $('.overlay');

        //Open left sidebar panel
        $('.bars').on('click', function() {
            $body.toggleClass('overlay-open');
            if ($body.hasClass('overlay-open')) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
        });

        //Close collapse bar on click event
        $('.nav [data-close="true"]').on('click', function() {
            var isVisible = $('.navbar-toggler').is(':visible');
            var $navbarCollapse = $('.navbar-collapse');

            if (isVisible) {
                $navbarCollapse.slideUp(function() {
                    $navbarCollapse.removeClass('in').removeAttr('style');
                });
            }
        });
    }
};

sweetalert = {
    activate: function() {
        var _this = this;

        //<button class="btn btn-primary waves-effect" data-type="success">CLICK ME</button>
        $('button.js-sweetalert').on('click', function() {
            var type = $(this).data('type');
            if (type === 'basic') {
                _this.showBasicMessage();
            } else if (type === 'with-title') {
                _this.showWithTitleMessage();
            } else if (type === 'success') {
                _this.showSuccessMessage();
            } else if (type === 'confirm') {
                _this.showConfirmMessage();
            } else if (type === 'cancel') {
                _this.showCancelMessage();
            } else if (type === 'with-custom-icon') {
                _this.showWithCustomIconMessage();
            } else if (type === 'html-message') {
                _this.showHtmlMessage();
            } else if (type === 'autoclose-timer') {
                _this.showAutoCloseTimerMessage();
            } else if (type === 'prompt') {
                _this.showPromptMessage();
            } else if (type === 'ajax-loader') {
                _this.showAjaxLoaderMessage();
            }
        });
    },
    showBasicMessage: function(title) {
        swal(title);
    },
    showWithTitleMessage: function(title, message) {
        swal(title, message);
    },
    showConfirmMessage: function(title, message, confirmText, resultTitleSuccess, resultMessageSuccess) {
        swal({
            title: title,
            text: message,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confirmText,
            closeOnConfirm: false
        }, function() {
            swal(resultTitleSuccess, resultMessageSuccess, "success");
        });
    },
    showCancelMessage: function(title, message, confirmText, cancelText, resultTitleSuccess,
        resultMessageSuccess, resultTitleError, resultMessageError) {
        swal({
            title: title,
            text: message,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                swal(resultTitleSuccess, resultMessageSuccess, "success");
            } else {
                swal(resultTitleError, resultMessageError, "error");
            }
        });
    },
    showWithCustomIconMessage: function(title, message, img) {
        swal({
            title: title,
            text: message,
            imageUrl: img
        });
    },
    showHtmlMessage: function(title, message) {
        swal({
            title: title,
            text: message,
            html: true
        });
    },
    showAutoCloseTimerMessage: function(title, message, time) {
        swal({
            title: title,
            text: message,
            timer: time,
            showConfirmButton: false
        });
    },
    showPromptMessage: function(title, message, placeholder, resultTitleSuccess,
        resultMessageSuccess, resultMessageError) {
        swal({
            title: title,
            text: message,
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: placeholder
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError(resultMessageError);
                return false
            }
            swal(resultTitleSuccess, resultMessageSuccess + inputValue, "success");
        });
    },
    showAjaxLoaderMessage: function(title, message, resultMessage) {
        swal({
            title: title,
            text: message,
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function() {
            setTimeout(function() {
                swal(resultMessage);
            }, 2000);
        });
    }
};

toast = {
    container: function() {
        if ($('body').parent().find('.gtoast').length == 0) {
            $('body').append('<div class="gtoast" />');
            /* $('.gtoast').css({
                 "position": "absolute",
                 "top": 5,
                 "right": 0,
             });*/
        }
    },
    create: function(message) {
        $('.gtoast').append('<div class="toast" />');

        $('.gtoast').find('.toast')
            .addClass("d-flex flex-wrap mt-2");
        /*.css({
            "background-color": "rgba(0, 123, 255, 0.8)",
            "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.2)",
            "color": "white",
            "position": "relative",
            "top": 70,
            "right": 10,
        });*/

        $('.gtoast .toast')
            .last()
            .append('<button type="button" class="close" data-dismiss="toast" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span></button>')
            .append('<i class="fa fa-facebook px-3 m-auto align-middle"></i>')
            .append('<div class="title p-3">' + message + '</div>'); // $('.gtoast .toast').length + 

        /*$('.gtoast .toast')
            .last()
            .find('.title')
            .css({
                "width": "250px",
                "word-wrap": "break-word"
            });*/

        /*$('.gtoast .toast')
            .last()
            .find('i')
            .css({
                "font-size": "1.5em"
            });*/

        $('.gtoast .toast')
            .last()
            .find('.close')
            /*.css({
                "position": "absolute",
                "top": 3,
                "right": 7,
                "color": "white",
                "text-shadow": "none",
                "opacity": "1",
            })*/
            .bind("click", function() {
                $(this).parent('.toast').remove();
            });

        $('.gtoast .toast')
            .first()
            .queue(function() {
                setTimeout(function() {
                    $('.gtoast .toast')
                        .first().animate({
                            opacity: 0
                        }, 5000);
                }, 5000);
                setTimeout(function() {
                    $('.gtoast .toast')
                        .first().remove();
                }, 5100);
                $(this).dequeue();
            });
    },
    init: function(message) {

        this.container();
        this.create(message);
    }
}


$(function() {
    $.AdminBFA.leftSideBar.activate();
    $.AdminBFA.navbar.activate();
    //$.AdminBFA.sweetalert.activate();

    scope.logado();
});

var scope = this;

scope.isActive = function(value, row, index, field) {
    if (value) return "Sim";
    else return "Não";
}

scope.cleanForm = function(form) {
    form.find("input, textarea").val("");
    form.find("select").find('option:eq(0)').prop('selected', true);
}

scope.profile = function(retorno) {
    $("#info-profile-name").text(retorno.Nome);
    $("#info-profile-email").text(retorno.Email);

    $("#UNome").text(retorno.Nome);
    $("#UEmail").text(retorno.Email);

    var sexoSigla = retorno.SexoDescricao.substr(0, 1).toUpperCase();

    $("#USexo").text(sexoSigla);
    $("#UAltura").text(retorno.Altura);
    $("#UIdade").text(retorno.Idade);

    var calorias = scope.calcularMetasDiarias(
        retorno.Objetivo.ID,
        retorno.Atividade.ID,
        retorno.Idade,
        retorno.Altura,
        retorno.PesoCorporal,
        sexoSigla);

    var imc = scope.calcularIMC(
        (retorno.Altura / 100), retorno.PesoCorporal
    );

    $("#UCaloriasDiaria").text(Math.round(calorias));
    $('#UImc').text(imc + " (" + condicaoIMC(imc, sexoSigla) + ")");

    $("#UAtividade").text(retorno.Atividade.Nome);
    $("#UObjetivo").text(retorno.Objetivo.Nome);
    $("#UPesoCorporal").text(retorno.PesoCorporal);
    $("#UPesoAlvo").text(retorno.PesoAlvo);

    if (retorno.ListaMedidas.lenght > 0) {
        var medida = retorno.ListaMedidas[0];
        $("#UBracoDireito").text(medida.Nome);
        $("#UBracoEsquerdo").text(medida.Nome);
        $("#UAntebracoEsquerdo").text(medida.Nome);
        $("#UAntebracoDireito").text(medida.Nome);
        $("#UTorax").text(medida.Nome);

        $("#UQuadril").text(medida.Quadril);
        $("#UCintura").text(medida.Cintura);
        $("#UCoxaEsquerda").text(medida.CoxaEsquerda);
        $("#UCoxaDireita").text(medida.CoxaDireita);
        $("#UPernaEsquerda").text(medida.PernaEsquerda);
        $("#UPernaDireira").text(medida.PernaDireira);
    }
}


scope.logado = function() {
    $.ajax({
        url: "http://localhost:56619/api/Usuario/Get/1",
        type: "GET",
        success: function(retorno) {
            $("#info-profile-name").text(retorno.Nome);
            $("#info-profile-email").text(retorno.Email);
        },
        error: function(retorno) {
            toast.create(retorno.statusText + " - " + retorno.status);
        }
    });
}

scope.usuarios = function() {
    $.ajax({
        url: "http://localhost:56619/api/Usuario/GetAll",
        type: "GET",
        success: function(retorno) {
            Montar(retorno, $('#tableUsuario'), false);
        },
        error: function(retorno) {
            //$.AdminBFA.toast.create(retorno.statusText + " - " + retorno.status);
        }
    });
}

scope.listas = function() {
    $.ajax({
        url: "http://localhost:56619/api/Admin/RecuperarTodasListas",
        type: "GET",
        success: function(retorno) {
            console.log(retorno);
            MontarCombo(retorno.ListaPerfil, $('#formPerfil'));
            MontarCombo(retorno.ListaPerfil, $('#formInfoPerfil'));
            MontarCombo(retorno.ListaTipoObjetivo, $('#formObjetivo'));
            MontarCombo(retorno.ListaTipoAtividade, $('#formAtividade'));
        },
        error: function(retorno) {
            //$.AdminBFA.toast.create(retorno.statusText + " - " + retorno.status);
        }
    });
}

scope.calcularProteinaPDia = function(pesoCorporal, atividade) {
    let result = 0.0;
    switch (atividade) {
        case '1':
            result = 0.8 * pesoCorporal;
            break;
        case '2':
            result = 1.4 * pesoCorporal;
            break;
        case '3':
            result = 1.8 * pesoCorporal;
            break;
        case '4':
            result = 2.0 * pesoCorporal;
            break;
        case '5':
            result = 2.4 * pesoCorporal;
            break;
    }
    return result;
}

scope.calcularIMC = function(altura, pesoCorporal) {
    let result = 0.0;

    result = pesoCorporal / (altura * altura);

    return Number((result).toFixed(2));
}

scope.condicaoIMC = function(imc, sexo) {
    let condicao = "";
    switch (sexo) {
        case "M":
            if (imc < 20.7) {
                condicao = "abaixo do peso";
                break;
            } else if (imc >= 20.7 && imc < 26.4) {
                condicao = "no peso ideal";
                break;
            } else if (imc >= 26.4 && imc < 27.8) {
                condicao = "levemente acima do peso";
                break;
            } else if (imc >= 27.8 && imc < 31.1) {
                condicao = "acima do peso ideal";
                break;
            } else if (imc > 31.1) {
                condicao = "obeso";
                break;
            }
            break;
        case "F":
            if (imc < 19.1) {
                condicao = "abaixo do peso";
                break;
            } else if (imc >= 19.1 && imc < 25.8) {
                condicao = "no peso ideal";
                break;
            } else if (imc >= 25.8 && imc < 27.3) {
                condicao = "levemente acima do peso";
                break;
            } else if (imc >= 27.3 && imc < 32.3) {
                condicao = "acima do peso ideal";
                break;
            } else if (imc > 32.3) {
                condicao = "obeso";
                break;
            }
            break;
    }
    return condicao;
}

scope.calcularTMB = function(idade, altura, pesoCorporal, sexo) {
    let result = 0.0;
    switch (sexo) {
        case "M":
            result = 66.4730 + (13.7516 * pesoCorporal) + (5.0033 * altura) - (6.7550 * idade);
            break;
        case "F":
            result = 655.0955 + (9.5634 * pesoCorporal) + (1.8496 * altura) - (4.6756 * idade);
            break;
    }
    return result;
}

scope.calcularCaloriasPorDia = function(atividade, idade, altura, pesoCorporal, sexo) {
    let result = 0.0;
    let TMB = scope.calcularTMB(idade, altura, pesoCorporal, sexo);
    switch (atividade) {
        case 1:
            result = TMB * 1.2;
            break;
        case 2:
            result = TMB * 1.375;
            break;
        case 3:
            result = TMB * 1.55;
            break;
        case 4:
            result = TMB * 1.725;
            break;
        case 5:
            result = TMB * 1.9;
            break;
    }
    return result;
}

scope.calcularMetasDiarias = function(objetivo, atividade, idade, altura, pesoCorporal, sexo) {
    let result = 0;
    let KCAL = scope.calcularCaloriasPorDia(atividade, idade, altura, pesoCorporal, sexo);
    //let temp = KCAL.intValue();
    let temp = KCAL;
    let obj = objetivo;
    switch (obj) {
        case 1:
            result = temp - 500; //Emagracer
            break;
        case 2:
            result = temp; //Manter
            break;
        case 3:
            result = temp + 500; //Ganhar
            break;
    }
    return result;
}

scope.progressBarPeso = function(palvo, pcorporal) {
    let valor = 0;
    valor = (pcorporal * 100) / palvo;
    return valor;
}