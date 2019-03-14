function Montar(lista, $table, isNew) {
    if (isNew) $table.bootstrapTable('append', lista);
    else $table.bootstrapTable('load', lista);
}

function MontarCombo(lista, $combo) {
    $combo.empty();
    $combo.append($("<option />").val(0).text("Selecione..."));
    $.each(lista, function(index, item) {
        $combo.append($("<option />").val(item.ID).text(item.Nome));
    });
}

function MontarCheckbox(lista, $div, disable) {
    $div.empty();
    $.each(lista, function(index, item) {
        $div.append($("<div class='form-check' />"));
        $('div .form-check')
            .last()
            .append('<input class="form-check-input" type="checkbox" data-index="' + index + '" value="' + item.ID + '" id="check' + index + '">')
            .append('<label class="form-check-label" for="check' + index + '">' + item.Nome + '</label>');
        if (disable && index != 0) { $('div .form-check').last().find('input').attr('disabled', true); }
    });
}

function MostrarAlerta(title, msg) {
    $('#modalAviso').modal('show');
    $('#modalAvisoLabel').html(title + " - " + msg);
}

function MontarTabList(lista, $tab, $content) {

    $tab.empty();
    $content.empty();

    $.each(lista, function(index, item) {
        $tab.append($("<a href='#list-ex-" + index + "' data-index='" + index + "' data-toggle='list' role='tab'/>").text(item.TipoFichaDescricao));
        $tab.last().find('a').addClass("list-group-item p-2 f-14 list-group-item-action");

        $content.append($("<div role='tabpanel' id='' aria-labelledby='list-f-" + index + "' />").prop("id", "list-ex-" + index));
        $content.last().find('div').addClass("tab-pane fade");

        if (index === 0) {
            $tab.last().find('a').addClass("active");
            $content.last().find('div').addClass("show active");
        }
    });
}

function MontarTabListOnly(lista, $tab) {

    $tab.empty();

    $.each(lista, function(index, item) {
        $tab.append($("<a href='#list-ex-" + index + "' data-index='" + index + "' data-toggle='list' role='tab'/>").text(item.TipoFichaDescricao));
        $tab.last().find('a').addClass("list-group-item p-2 f-14 list-group-item-action");
    });
}

function MontarTabContent(lista, $tabContent) {

    $tabContent.empty();
    $tabContent.append("<ul class='list-group'/>");

    $.each(lista, function(index, item) {

        $tabContent.find('ul').append($("<li class='list-group-item flex-column align-items-start p-1' />"));
        $tabContent.find('ul li').last().append($("<div class='d-flex w-100 justify-content-between' />"));

        $tabContent.find('ul li div').last().append($("<span />").text(item.Exercicio.Nome))
            .append($("<span />").text(item.QuantidadeSerie))
            .append($("<span />").text(item.QuantidadeRepeticao))
            .append($("<span />").text(item.Carga))
            .append($("<span />").text(item.ObservacaoDescricao));
    });
}