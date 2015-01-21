$(document).ready(function() {

    /*modal*/
    var modal_mensagem = $("#modal_mensagem");
    var modal_body = modal_mensagem.find('.modal-body');
    var dados_mensagem = modal_body.find("#dados_mensagem");

    /*mensagens particulares*/
    var mensagens_particulares = $("#mensagens_particulares");
    var tbody_mensagens_particulares = mensagens_particulares.find('#tbody_mensagens_particulares');
    var qtd_mensagens_particulares = mensagens_particulares.find('#qtd_mensgens_particulares');
    var tfoot_mensagens_particulares = mensagens_particulares.find('tfoot');
    var paginacao_mensagens_particulares = tfoot_mensagens_particulares.find('#paginacao_mensagens_particulares');

    /*mensagens publicas*/
    var mensagens_publicas = $("#mensagens_publicas");
    var tbody_mensagens_publicas = mensagens_publicas.find('#tbody_mensagens_publicas');
    var qtd_mensagens_publicas = mensagens_publicas.find('#qtd_mensgens_publicas');
    var tfoot_mensagens_publicas = mensagens_publicas.find('tfoot');
    var paginacao_mensagens_publicas = tfoot_mensagens_publicas.find('#paginacao_mensagens_publicas');


    var listar_mensagens_particulares = function() {
        /*listar mensagens particulares*/
        $.ajax({
            url: 'ajax/ajax_professor_mensagens_particulares.php',
            dataType: 'json',
            beforeSend: function() {
                tbody_mensagens_particulares.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {
                if (data.length <= 0) {
                    qtd_mensagens_particulares.html('(0)');
                    tbody_mensagens_particulares.html('<tr><td align="center">Nenhuma mensagem pareticular recebida</td></tr>');
                } else {
                    function pageselectCallback(page_index, jq) {
                        var html = '';
                        var quantidade_mensagens_particulares;
                        var cor_linha;
                        var status;
                        var items_per_page = 10;
                        var max_elem = Math.min((page_index + 1) * items_per_page, data.length);

                        for (var i = page_index * items_per_page; i < max_elem; i++) {
                            /*verificar se a mensagem ja foi lida e altera a cor da linha*/
                            cor_linha = (data[i]['particular_professor_lido'] === 1) ? 'success' : 'error';
                            status = (data[i]['particular_professor_lido'] === 1) ? 'mensagem lida' : 'mensagem não lida';
                            quantidade_mensagens_particulares = data.length;

                            html += '<tr id="cor_linha_mensagem_particular" class="' + cor_linha + '">';
                            html += '<td>' + data[i]['particular_professor_titulo'] + '</td>';
                            html += '<td align="center">' + $.format.date(data[i]['particular_professor_data'], "dd/MM/yyyy HH:mm:ss") + '</td>';
                            html += '<td align="center" id="status_mensagem_particular">' + status + '</td>';
                            html += '<td align="center"><button class="btn btn-danger" data-id="' + data[i]['id'] + '" id="btn_deletar_mensagens_particulares">Deletar</button></td>';
                            html += '<td align="center"><button class="btn btn-warning" data-id="' + data[i]['id'] + '" id="btn_responder_mensagens_particulares">Responder</button></td>';
                            html += '</tr>';
                        }
                        /*listar mensagens e quantidade de mensagens*/
                        tbody_mensagens_particulares.html(html);
                        qtd_mensagens_particulares.html('(' + quantidade_mensagens_particulares + ')');
                    }

                    function getOptionsFromForm() {
                        var opt = {
                            callback: pageselectCallback
                        };
                        return opt;
                    }
                    var optInit = getOptionsFromForm();
                    $(paginacao_mensagens_particulares).pagination(data.length, optInit);
                }
            }

        });
    };

    var listar_mensagens_publicas = function() {

        /*listar mensagens publicas*/
        $.ajax({
            url: 'ajax/ajax_professor_mensagens_publicas.php',
            dataType: 'json',
            beforeSend: function() {
                tbody_mensagens_publicas.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(retorno) {
                if (retorno.length <= 0) {
                    qtd_mensagens_publicas.html('(0)');
                    tbody_mensagens_publicas.html('<tr><td align="center">Nenhuma mensagem pública recebida</td></tr>');
                } else {
                    var quantidade_mensagens_publicas;

                    function pageselectCallback(page_index, jq) {
                        var html = '';
                        var quantidade_mensagens_publicas;
                        var cor_linha;
                        var status;
                        var items_per_page = 10;
                        var max_elem = Math.min((page_index + 1) * items_per_page, retorno.length);

                        for (var i = page_index * items_per_page; i < max_elem; i++) {
                            /*verificar se a mensagem ja foi lida e altera a cor da linha*/
                            cor_linha = (retorno[i]['publica_professor_lido'] === 1) ? 'success' : 'error';
                            status = (retorno[i]['publica_professor_lido'] === 1) ? 'mensagem lida' : 'mensagem não lida';
                            quantidade_mensagens_publicas = retorno.length;

                            html += '<tr id="cor_linha_mensagem_publica" class="' + cor_linha + '">';
                            html += '<td>' + retorno[i]['publica_professor_titulo'] + '</td>';
                            html += '<td align="center">' + $.format.date(retorno[i]['publica_professor_data'], "dd/MM/yyyy HH:mm:ss") + '</td>';
                            html += '<td align="center" id="status_mensagem_publica">' + status + '</td>';
                            html += '<td align="center"><button class="btn btn-danger" data-id="' + retorno[i]['id'] + '" id="btn_deletar_mensagem_publica">Deletar</button></td>';
                            html += '<td align="center"><button class="btn btn-warning" data-id="' + retorno[i]['id'] + '" id="btn_responder_mensagem_publica">Responder</button></td>';
                            html += '</tr>';
                        }
                        /*listar mensagens e quantidade de mensagens*/
                        tbody_mensagens_publicas.html(html);
                        qtd_mensagens_publicas.html('(' + quantidade_mensagens_publicas + ')');
                    }

                    function getOptionsFromForm() {
                        var opt = {
                            callback: pageselectCallback
                        };
                        return opt;
                    }
                    var optInit = getOptionsFromForm();
                    $(paginacao_mensagens_publicas).pagination(retorno.length, optInit);
                }
            }

        });
    };
    listar_mensagens_particulares();
    listar_mensagens_publicas();


    /*eventos*/

    /*responder mensagem publica*/
    tbody_mensagens_publicas.on('click', '#btn_responder_mensagem_publica', function(event) {
        var id_mensagem_publica = $(this).attr('data-id');
        var cor_linha_mensagem_publica = $(event.currentTarget).closest('#cor_linha_mensagem_publica');
        var status_mensagem_publica = $(event.currentTarget).closest("#cor_linha_mensagem_publica").find('#status_mensagem_publica');

        $("#btn_enviar_aluno").attr('disabled', 'disbled');
        $("#btn_enviar_professor").attr('disabled', 'disabled');
        $("#btn_enviar_professor").attr('data-tipo-mensagem', '2');

        $('#modal_mensagem').modal('show');
        $.ajax({
            url: 'ajax/ajax_professor_mensagens_publicas.php',
            type: 'post',
            data: 'id=' + id_mensagem_publica + '&exibir_mensagem_publica=true',
            dataType: 'json',
            beforeSend: function() {
                dados_mensagem.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {
                cor_linha_mensagem_publica.attr('class', 'success');
                status_mensagem_publica.html('mensagem lida');
                var html = '';

                html += '<tr><td colspan="2"><button id="btn_responder_mensagem" data-id="' + data[0]['id'] + '" class="btn btn-warning">Responder</button></td></tr>';
                html += '<tr><td width="30%">Título Mensagem</td><td width="70%" id="titulo_mensagem_professor">' + data[0]['publica_professor_titulo'] + '</td></tr>';
                html += '<tr><td width="30%">Data Mensagem</td><td width="70%">' + $.format.date(data[0]['publica_professor_data'], 'dd/MM/yyyy HH:mm:ss') + '</td></tr>';
                html += '<tr><td width="30%">Mensagem</td><td width="70%" id="editar_mensagem">' + data[0]['publica_professor_mensagem'] + '</td></tr>';

                dados_mensagem.html(html);
            }
        });

    });


    /*responder mensagem particular*/
    tbody_mensagens_particulares.on('click', '#btn_responder_mensagens_particulares', function(event) {

        var id_mensagem_particular = $(this).attr('data-id');
        var cor_linha_mensagem_particular = $(event.currentTarget).closest('#cor_linha_mensagem_particular');
        var status_mensagem_particular = $(event.currentTarget).closest("#cor_linha_mensagem_particular").find('#status_mensagem_particular');

        $("#btn_enviar_aluno").attr('disabled', 'disbled');
        $("#btn_enviar_professor").attr('disabled', 'disabled');
        $("#btn_enviar_professor").attr('data-tipo-mensagem', '1');

        $('#modal_mensagem').modal('show');
        $.ajax({
            url: 'ajax/ajax_professor_mensagens_particulares.php',
            type: 'post',
            data: 'id=' + id_mensagem_particular + '&exibir_mensagem_particular=true',
            dataType: 'json',
            beforeSend: function() {
                dados_mensagem.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {
                cor_linha_mensagem_particular.attr('class', 'success');
                status_mensagem_particular.html('mensagem lida');
                var html = '';

                html += '<tr><td colspan="2"><button id="btn_responder_mensagem" data-id="' + data[0]['id'] + '" class="btn btn-warning">Responder</button></td></tr>';
                html += '<tr><td width="30%">Título Mensagem</td><td width="70%" id="titulo_mensagem_professor">' + data[0]['particular_professor_titulo'] + '</td></tr>';
                html += '<tr><td width="30%">Data Mensagem</td><td width="70%">' + $.format.date(data[0]['particular_professor_data'], 'dd/MM/yyyy HH:mm:ss') + '</td></tr>';
                html += '<tr><td width="30%">Mensagem</td><td width="70%" id="editar_mensagem">' + data[0]['particular_professor_mensagem'] + '</td></tr>';

                dados_mensagem.html(html);
            }
        });
    });

    /*deletar mensagens particulares*/

    tbody_mensagens_particulares.on('click', '#btn_deletar_mensagens_particulares', function(event) {
        var id_mensagem_particular = $(this).attr('data-id');
        $.post('ajax/ajax_professor_mensagens_particulares.php', {id: id_mensagem_particular, deletar_mensagem_particular: 'true'}).done(function(data) {
            if (data === 'deletou') {
                listar_mensagens_particulares();
            }
        });
    });


    /*deletar mensagens publicas*/

    tbody_mensagens_publicas.on('click', '#btn_deletar_mensagem_publica', function(event) {
        var id_mensagem_publica = $(this).attr('data-id');
        $.post('ajax/ajax_professor_mensagens_publicas.php', {id: id_mensagem_publica, deletar_mensagem_publica: 'true'}).done(function(data) {
            if (data === 'deletou') {
                listar_mensagens_publicas();
            }
        });
    });


    /**/
    modal_mensagem.on('click', "#btn_responder_mensagem", function(event) {
        $(this).attr('disabled', 'disabled');
       
        $("#btn_enviar_aluno").attr('id', 'btn_enviar_professor');
        $("#btn_enviar_professor").attr('id', 'btn_enviar_professor');
        $("#btn_enviar_professor").attr('disabled', false);
             
        tinyMCE.execCommand('mceRemoveControl', true, 'mensagem_editada');
        var editar_mensagem = $('#editar_mensagem');
        var texto_mensagem = editar_mensagem.html();
        editar_mensagem.html('<textarea id="mensagem_editada">' + texto_mensagem + '</textarea>');
        tinyMCE.execCommand('mceAddControl', true, 'mensagem_editada');
    });


    modal_mensagem.on('click', "#btn_enviar_professor", function(event) {

        var linha_editada = $(event.currentTarget).closest('#modal_mensagem');
        var titulo_mensagem = linha_editada.find("#titulo_mensagem_professor").html();
        var conteudo_mensagem = tinyMCE.get('mensagem_editada').getContent();
        var tipo_mensagem = $(this).attr('data-tipo-mensagem');
        var id_mensagem_particular = linha_editada.find("#btn_responder_mensagem").attr('data-id');
        var ajax;

        if (tipo_mensagem == '1') {
            ajax = 'ajax_professor_mensagens_particulares';
        } else {
            ajax = 'ajax_professor_mensagens_publicas';
        }

        $.ajax({
            url: 'ajax/' + ajax + '.php',
            data: 'titulo=' + titulo_mensagem + '&conteudo=' + conteudo_mensagem + '&tipo=' + tipo_mensagem + '&id_mensagem=' + id_mensagem_particular + '&enviar_mensagem=true',
            type: 'post',
            beforeSend: function() {
                dados_mensagem.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {

                if (data === 'cadastrou') {
                    dados_mensagem.html('<div class="alert alert-success">Resposta enviada com sucesso</div>');
                } else if (data === 'respondido') {
                    dados_mensagem.html('<div class="alert alert-error">Mensagem ja respondida</div>');
                } else {
                    dados_mensagem.html('<div class="alert alert-error">Erro ao enviar resposta</div>');
                }
            }
        });
    });
});