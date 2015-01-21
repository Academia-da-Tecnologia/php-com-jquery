$(document).ready(function() {

    /*modal*/
    var modal_mensagem = $("#modal_mensagem");
    var modal_body = modal_mensagem.find('.modal-body');
    var dados_mensagem = modal_body.find("#dados_mensagem");

    var navegar_tabs = $("#navegar_tabs");
    var enviar = navegar_tabs.find("#enviar");
    var escola = enviar.find("#escola");
    var aluno = enviar.find('#aluno');
    var tipo_mensagem_escolhida = enviar.find("#tipo_mensagem_escolhida");

    var listar_series_professor = function() {
        $.ajax({
            url: 'ajax/ajax_listar_series_enviar_mensagem.php',
            dataType: 'json',
            beforeSend: function() {
                tipo_mensagem_escolhida.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {
                var html = '';
                html += '<h3>Escolha uma série:</h3>';
                html += '<ul>';
                $.each(data, function(key, value) {
                    html += '<li><i class="icon-ok-sign"></i> <a href="#" id="btn_carregar_alunos_serie_escolhida" data-id="' + data[key]['id'] + '">' + data[key]['serie_nome'] + '</a></li>';
                });
                html += '<ul>';
                return tipo_mensagem_escolhida.html(html);
            }
        });
    };

    aluno.on('click', function() {
        $('#paginacao_alunos').html('');
        $('#mensagem_enviada').removeClass('alert alert-success');
        $('#mensagem_enviada').removeClass('alert alert-error');
        $('#mensagem_enviada').html('');
        listar_series_professor();
    });

    escola.on('click', function() {
        $('#paginacao_alunos').html('');
        tinyMCE.execCommand('mceRemoveControl', true, 'mensagem_escola');
        var html = '';
        html += '<h4>Digite uma mensagem para a escolha</h4>';
        html += ' Titulo: <input type="text" id="titulo_mensagem_escola" class="input input-large" />';
        html += '<textarea type="text" id="mensagem_escola"></textarea>';
        html += '<br /><button id="btn_cadastrar_mensagem_escola" class="btn btn-warning">Enviar</button>';
        tipo_mensagem_escolhida.html(html);
        tinyMCE.execCommand('mceAddControl', true, 'mensagem_escola');
    });

    tipo_mensagem_escolhida.on('click', '#btn_carregar_alunos_serie_escolhida', function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        $.ajax({
            url: 'ajax/ajax_listar_series_enviar_mensagem.php',
            type: 'post',
            data: 'id=' + id + '&listar_alunos_serie=true',
            dataType: 'json',
            beforeSend: function() {
                tipo_mensagem_escolhida.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(data) {

                function pageselectCallback(page_index, jq) {
                    var html = '';
                    html += '<button id="voltar_mostrar_series" class="btn btn-primary">Voltar</button>';
                    html += '<table width="100%" cellspacing="0" class="table table-striped" id="table_alunos">';
                    html += '<thead>';
                    html += '<tr>';
                    html += '<th>Aluno Nome</th>';
                    html += '<th>Enviar Mensagem</th>';
                    html += '<tr>';
                    html += '</thead>';
                    var items_per_page = 10;
                    var max_elem = Math.min((page_index + 1) * items_per_page, data.length);

                    html += '<tbody>';
                    for (var i = page_index * items_per_page; i < max_elem; i++) {
                        html += '<tr>';
                        html += '<td>' + data[i].aluno_nome + '</td>';
                        html += '<td><button id="btn_enviar_mensagem_aluno" data-id="' + data[i].id + '" class="btn btn-warning">Enviar Mensagem</button></td>';
                        html += '</tr>';
                    }

                    html += '</tbody>';
                    html += '</table>';
                    tipo_mensagem_escolhida.html(html);
                }
                function getOptionsFromForm() {
                    var opt = {
                        callback: pageselectCallback
                    };
                    return opt;
                }

                tipo_mensagem_escolhida.after('<div id="paginacao_alunos"></div>');
                var optInit = getOptionsFromForm();
                $('#paginacao_alunos').pagination(data.length, optInit);
            }

        });
    });

    tipo_mensagem_escolhida.on('click', '#voltar_mostrar_series', function() {
        $('#paginacao_alunos').html('');
        listar_series_professor();
    });

    tipo_mensagem_escolhida.on('click', '#btn_cadastrar_mensagem_escola', function() {
        var titulo = tipo_mensagem_escolhida.find("#titulo_mensagem_escola").val();
        var conteudo = tinyMCE.get('mensagem_escola').getContent();
        $.ajax({
            url: 'ajax/ajax_enviar_mensagem_escola.php',
            type: 'post',
            data: 'titulo=' + titulo + '&conteudo=' + conteudo,
            beforeSend: function() {
                $("#mensagem_enviada").addClass('alert alert-info');
                $("#mensagem_enviada").html('Enviando mensagem, aguarde...');
            },
            success: function(data) {
                $("#mensagem_enviada").removeClass('alert alert-info');
                if (data === 'cadastrou') {
                    $("#mensagem_enviada").addClass('alert alert-success');
                    $("#mensagem_enviada").html('Mensagem enviada com sucesso !');
                } else {
                    $("#mensagem_enviada").addClass('alert alert-eror');
                    $("#mensagem_enviada").html('Erro ao enviar mensagem !');
                }
            }
        });
    });

    tipo_mensagem_escolhida.on('click', '#btn_enviar_mensagem_aluno', function() {
        $("#modal_mensagem").modal('show');
        var id = $(this).attr('data-id');
        
        $("#btn_enviar_professor").attr('disabled', false);
        $("#btn_enviar_professor").attr('id', 'btn_enviar_aluno');
        
        tinyMCE.execCommand('mceRemoveControl', true, 'mensagem_aluno');
        var html = '';
        html += '<tr><td width="30%">Título Mensagem</td><td width="70%" id="titulo_mensagem_professor"><input type="text" class="input input-medium" /></td></tr>';
        html += '<tr><td width="30%">Mensagem</td><td width="70%" id="editar_mensagem"><textarea id="mensagem_aluno"></textarea></td></tr>';
        dados_mensagem.html(html);
        tinyMCE.execCommand('mceAddControl', true, 'mensagem_aluno');
    });
    
   
});