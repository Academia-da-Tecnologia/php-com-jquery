$(document).ready(function() {

    var tb_alunos_classe = $("#tb_alunos_classe");
    var tbody = tb_alunos_classe.find('tbody');
    var tfoot = tb_alunos_classe.find('tfoot');
    var url = $(location).attr('href');
    var paginacao = tfoot.find('#paginacao');
    var mensagem = $("#mensagem");

    var url_split = url.split('?p=');
    if (url_split[1] !== undefined) {

        var url_pagina = url_split[1].match(/classe/g);
        var id_classe = url_split[1].split('=')[1];

        if (url_pagina !== null) {
            $.ajax({
                url: 'ajax/ajax_aluno_classe.php',
                type: 'post',
                data: 'id_classe=' + id_classe,
                dataType: 'json',
                beforeSend: function() {
                    tbody.html('carregando alunos');
                },
                success: function(data) {
                    if (data.length === 0) {
                        tbody.html('<tr><td align="center">Nenhum aluno cadastrado para essa classe</td></tr>');
                    } else {
                        function pageselectCallback(page_index, jq) {

                            var items_per_page = 10;
                            var max_elem = Math.min((page_index + 1) * items_per_page, data.length);

                            var html = '';

                            for (var i = page_index * items_per_page; i < max_elem; i++) {
                                html += '<tr>';
                                html += '<td>' + data[i].aluno_nome + '</td>';
                                html += '<td><select class="mes" data-id="' + data[i].id + '">' + listar_meses() + '</select></td>';
                                html += '<td class="td_nota_aluno_mes">Escolha mês</td>';
                                html += '<td class="td_action"><button class="btn btn-warning" disabled="disabled" id="btn_editar_nota_aluno" data-id="' + data[i].id + '">Editar</button></td>';
                                html += '</tr>';
                            }
                            tbody.html(html);
                            return false;
                        }
                        function getOptionsFromForm() {
                            var opt = {
                                callback: pageselectCallback
                            };
                            return opt;
                        }
                        var optInit = getOptionsFromForm();
                        $(paginacao).pagination(data.length, optInit);

                    }
                }
            });
        }
    }

    /*funcoes*/
    var linha_editar = function(event, target) {
        return  $(event.currentTarget).closest(target);
    };

    var mostrar_mensagem_apos_acao = function(data, tipo, mensagem_sucesso, mensagem_erro, linha_editada) {

        var td_nota_aluno_mes = linha_editada.find(".td_nota_aluno_mes");
        var td_action = linha_editada.find(".td_action");
        var mes = linha_editada.find('.mes');

        if (data === tipo) {
            mensagem.attr('class', 'alert alert-success');
            mensagem.css('text-align', 'center');
            mensagem.html(mensagem_sucesso);

            /*depois de 1 segundo sumir a mensagem de sucesso*/
            window.setTimeout(function() {
                mensagem.html('');
                mensagem.attr('class', '');
            }, 2000);

            mes.html(listar_meses());
            td_nota_aluno_mes.html('Escolha mês');
            td_action.html('<button class="btn btn-warning" disabled="disabled" id="btn_editar_nota_aluno">Editar</button>');
        } else {
            mensagem.attr('class', 'alert alert-error');
            mensagem.css('text-align', 'center');
            mensagem.html(mensagem_erro);

            /*depois de 2 segundos sumir a mensagem de sucesso*/
            window.setTimeout(function() {
                mensagem.html('');
                mensagem.attr('class', '');
            }, 2000);

            mes.html(listar_meses());
            td_nota_aluno_mes.html('Escolha mês');
            td_action.html('<button class="btn btn-warning" disabled="disabled" id="btn_editar_nota_aluno">Editar</button>');
        }
    }

    var deletar_nota = function(linha_editada, id_nota) {
        if (confirm('Tem certeza que deseja deletar essa nota ?')) {
            $.post('ajax/ajax_aluno_nota.php', {id: id_nota, deletar: 'true'}).done(function(data) {
                mostrar_mensagem_apos_acao(data, 'deletou', 'Nota Deletada', 'Erro ao deletar nota', linha_editada);
            })
        } else {
            return false;
        }
    }

    var cadastrar_nota = function(nota_aluno_mes, aluno, mes, linha_editada) {
        $.post('ajax/ajax_aluno_nota.php', {nota: nota_aluno_mes, aluno: aluno, mes: mes, cadastrar: 'true'}).done(function(data) {
            console.log(data);
            if (data === 'nan') {
                alert('Digite um numero valido para a nota');
            } else {
                mostrar_mensagem_apos_acao(data, 'cadastrou', 'Nota cadastrada', 'Erro ao cadastrar nota', linha_editada);
            }
        });
    }

    var atualizar_nota = function(nota_aluno, id_nota, linha_editada) {
        $.post('ajax/ajax_aluno_nota.php', {nota: nota_aluno, id: id_nota, atualizar: 'true'}).done(function(data) {
            if (data === 'nan') {
                alert('Digite um numero valido para a nota');
            } else {
                mostrar_mensagem_apos_acao(data, 'atualizou', 'Nota Editada', 'Erro ao editar nota', linha_editada);
            }

        });
    }

    var listar_meses = function() {
        var html = '';
        html += '<option selected="selected" value="">Escolha um mês</option>';
        html += '<option value="01">Janeiro</option>';
        html += '<option value="02">Fevereiro</option>';
        html += '<option value="03">Março</option>';
        html += '<option value="04">Abril</option>';
        html += '<option value="05">Maio</option>';
        html += '<option value="06">Junho</option>';
        html += '<option value="07">Julho</option>';
        html += '<option value="08">Agosto</option>';
        html += '<option value="09">Setembro</option>';
        html += '<option value="10">Outubro</option>';
        html += '<option value="11">Novembro</option>';
        html += '<option value="12">Dezembro</option>';
        return html;
    }
    /*funcoes*/


    /*chamada das funcoes*/

    /*deletar nota aluno*/
    tbody.on('click', '#btn_deletar_nota_aluno', function(event) {
        var linha_editada = linha_editar(event, 'tr');
        var id_nota = $(this).attr('data-id');
        deletar_nota(linha_editada, id_nota);
    });

    /*cadastrar nota*/
    tbody.on('click', '#btn_cadastrar_nota_aluno', function(event) {
        var linha_editada = linha_editar(event, 'tr');
        var nota_aluno_mes = linha_editada.find("#inpt_cadastrar_nota").val();
        var aluno = $(this).attr('data-id');
        var mes = linha_editada.find('.mes').val();
        cadastrar_nota(nota_aluno_mes, aluno, mes, linha_editada);

    });

    /*se clicou em ok ou seja alterar a nota*/
    tbody.on('click', '#btn_editar_nova_nota', function(event) {
        var linha_editada = linha_editar(event, 'tr');

        /*pegar nota e id da nota*/
        var id_nota = linha_editada.find('#btn_editar_nova_nota').attr('data-id');
        var nota_aluno = linha_editada.find("#nota_cadastrar").val();
        atualizar_nota(nota_aluno, id_nota, linha_editada);

    })

    /*chamada das funcoes*/


    /*alterou o mes busca a nota, se escolheu um mes para ver a nota*/
    tbody.on('change', '.mes', function(event) {
        /*pegando mes e id do aluno*/
        var aluno = $(this).attr('data-id');
        var mes = $(this).val();
        var linha_editada = linha_editar(event, 'tr');
        var td_nota_aluno_mes = linha_editada.find(".td_nota_aluno_mes");
        var td_action = linha_editada.find(".td_action");

        $.ajax({
            url: 'ajax/ajax_aluno_nota.php',
            type: 'post',
            data: 'aluno=' + aluno + '&mes=' + mes,
            dataType: 'json',
            beforeSend: function() {
                td_nota_aluno_mes.html('<img src="../../public/imagens/circle_loader.gif" />');
            },
            success: function(retorno_nota) {
                if (mes.length <= 0) {
                    td_nota_aluno_mes.html('Escolha mês');
                    td_action.html('<button class="btn btn-warning" id="btn_editar_nota_aluno" >Editar</button>');
                    linha_editada.find('#btn_editar_nota_aluno').attr('disabled', true);
                } else {

                    if (retorno_nota[0] === undefined) {
                        td_nota_aluno_mes.html('<input type="text" class="input input-mini" id="inpt_cadastrar_nota" />');
                        td_action.html('<button class="btn btn-success" id="btn_cadastrar_nota_aluno" data-id="' + aluno + '">Cadastrar</button>');
                    } else {
                        td_nota_aluno_mes.html(retorno_nota[0]['nota']);
                        td_action.html('<button class="btn btn-warning" id="btn_editar_nota_aluno" data-id="' + retorno_nota[0]['id_nota'] + '" >Editar</button> <button class="btn btn-danger" data-id="' + retorno_nota[0]['id_nota'] + '" id="btn_deletar_nota_aluno" >Deletar</button>');
                    }
                }

            }
        });

    });

    /*se clicou em editar aparece campo input com o valor da nota*/
    tbody.on('click', '#btn_editar_nota_aluno', function(event) {
        var linha_editada = linha_editar(event, 'tr');
        var td_nota_aluno_mes = linha_editada.find(".td_nota_aluno_mes");
        var td_action = linha_editada.find(".td_action");
        var id_nota = linha_editada.find("#btn_editar_nota_aluno").attr('data-id');

        td_nota_aluno_mes.html('<input type="text" class="input input-mini" id="nota_cadastrar" value="' + td_nota_aluno_mes.html() + '" />');
        td_action.html('<button class="btn btn-success" id="btn_editar_nova_nota" data-id="' + id_nota + '" >Ok</button> <button class="btn btn-primary"  data-id= "' + id_nota + '"id="btn_voltar_nota_aluno" >Voltar</button>');
    });

    /*se clicou em voltar*/
    tbody.on('click', '#btn_voltar_nota_aluno', function(event) {
        var linha_editada = linha_editar(event, 'tr');
        var td_nota_aluno_mes = linha_editada.find(".td_nota_aluno_mes");
        var nota_aluno = linha_editada.find("#nota_cadastrar");
        var td_action = linha_editada.find(".td_action");
        var id_nota = $(this).attr('data-id');

        td_nota_aluno_mes.html(nota_aluno.val());
        td_action.html('<button class="btn btn-warning" id="btn_editar_nota_aluno" data-id="' + id_nota + '" >Editar</button> <button class="btn btn-danger" data-id="' + id_nota + '" id="btn_deletar_nota_aluno" >Deletar</button>');
    });

});