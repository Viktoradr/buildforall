$(document).ready(function() {
    Listar();

    $("#btnSalvarPerfil").click(function() {
        var obj = new PerfilViewModel();
        obj.Nome = $("#formPerfilNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarPerfil",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Perfil Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarExercicio").click(function() {
        var obj = new ExercicioViewModel();
        obj.Nome = $("#formExercicioNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarExercicio",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Exercício Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoPlano").click(function() {
        var obj = new TipoPlanoViewModel();
        obj.Nome = $("#formTipoPlanoNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoPlano",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Tipo Plano Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoObservacao").click(function() {
        var obj = new TipoObservacaoViewModel();
        obj.Nome = $("#formTipoObservacaoNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoObservacao",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Tipo Observação Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoObjetivo").click(function() {
        var obj = new TipoObjetivoViewModel();
        obj.Nome = $("#formTipoObjetivoNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoObjetivo",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Tipo Objetivo Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoGrupoSerie").click(function() {
        var obj = new TipoGrupoFichaViewModel();
        obj.Nome = $("#formGrupoFicha").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoGrupoFicha",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Tipo Grupo Serie Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoFicha").click(function() {
        var obj = new TipoFichaViewModel();
        obj.Nome = $("#formTipoFicha").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoFicha",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Tipo Ficha Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });

    $("#btnSalvarTipoAtividade").click(function() {
        var obj = new TipoAtividadeViewModel();
        obj.Nome = $("#formAtividadeNome").val();

        $.ajax({
            url: "http://localhost:56619/api/Admin/CadastrarTipoAtividade",
            type: "POST",
            data: obj,
            success: function(retorno) {
                console.log(retorno);
                MostrarAlerta("Atividade Cadastrado com sucesso!", "ID:" + retorno.ID + " </br>Nome:" + retorno.Nome);
                Listar();
            }
        });
    });
});

function Listar() {
    $.ajax({
        url: "http://localhost:56619/api/Admin/RecuperarTodasListas",
        type: "GET",
        success: function(retorno) {
            console.log(retorno);
            Montar(retorno.ListaPerfil, $('#tablePerfil'));
            Montar(retorno.ListaExercicio, $('#tableExercicio'));
            Montar(retorno.ListaTipoPlano, $('#tableTipoPlano'));
            Montar(retorno.ListaTipoObservacao, $('#tableTipoObservacao'));
            Montar(retorno.ListaTipoObjetivo, $('#tableTipoObjetivo'));
            Montar(retorno.ListaTipoGrupoFicha, $('#tableTipoGrupoSerie'));
            Montar(retorno.ListaTipoFicha, $('#tableTipoFicha'));
            Montar(retorno.ListaTipoAtividade, $('#tableTipoAtividade'));
        },
        error: function(retorno) {
            //MostrarAlerta(retorno.statusText, retorno.status);
        }
    });
}