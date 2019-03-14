$(document).ready(function() {
    jQuery.extend(jQuery.validator.messages, {
        email: "Digite um email válido."
    });

    function limparForm(form) {
        form.each(function() {
            this.reset();
        });
    }

    $("#msg-form").hide();

    $('#form-mensagem').validate({
        rules: {
            nome: { required: true },
            email: { required: true },
            subject: { required: true },
            message: { required: true }
        },
        messages: {
            nome: { required: "Campo Obrigatório" },
            email: { required: "Campo Obrigatório" },
            subject: { required: "Campo Obrigatório" },
            message: { required: "Campo Obrigatório" }
        },
        submitHandler: function(form) {
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(retorno) {
                    $("#msg-form").show();

                    setTimeout(function() {
                        $("#msg-form").hide()
                    }, 2000);

                    if (retorno) {
                        $("#msg-form").html('<div class="alert alert-success" role="alert"><i class="fa fa-check" aria-hidden="true"></i> Mensagem enviada com sucesso.</div>');
                        form.reset();
                    } else {
                        $("#msg-form").html('<div class="alert alert-danger" role="alert"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mensagem não foi enviada.</div>');
                    }
                }
            });
        }
    });
});