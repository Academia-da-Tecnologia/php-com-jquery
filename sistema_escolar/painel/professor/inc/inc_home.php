Bem Vindo , <?php echo $_SESSION['professor_nome']; ?>, seu último login foi : <?php echo libraries_classes_LogProfessor::ultimo_login($_SESSION['professor_id']); ?>

<!-- Modal -->
<div id="modal_mensagem" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Enviar Mensagem</h3>
    </div>
    <div class="modal-body">
        <table class="table table-striped" id="dados_mensagem" width="100%" cellspacing="0"></table>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>
        <button class="btn btn-primary" id="btn_enviar_professor">Enviar</button>
    </div>
</div>
<!-- Modal -->

<div id="navegar_tabs">
    <ul class="nav nav-tabs">
        <li class="active"><a href="#recebidas" data-toggle="tab">Mensagens Recebidas</a></li>
        <li><a href="#enviar" data-toggle="tab">Enviar Mensagens</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="recebidas">

            <div id="mensagens_particulares">
                <h2>Mensagens Particulares <span id="qtd_mensgens_particulares"></span></h2>

                <table class="table" width="100%" cellspacing="0">
                    <thead style="background-color: #df8505;color: #FFF;">
                        <tr>
                            <th>Titulo Mensagem</th>
                            <th>Data Mensagem</th>
                            <th>Status</th>
                            <th>Deletar</th>
                            <th>Responder</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_mensagens_particulares"></tbody>
                    <tfoot><tr><td colspan="5" id="paginacao_mensagens_particulares" align="center"></td></tr></tfoot>
                </table>
            </div>


            <div id="mensagens_publicas">
                <h2>Mensagens Públicas <span id="qtd_mensgens_publicas"></span></h2>

                <table class="table" width="100%" cellspacing="0">
                    <thead style="background-color: #df8505;color: #FFF;">
                        <tr>
                            <th>Titulo Mensagem</th>
                            <th>Data Mensagem</th>
                            <th>Status</th>
                            <th>Deletar</th>
                            <th>Responder</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_mensagens_publicas"></tbody>
                    <tfoot><tr><td colspan="5" id="paginacao_mensagens_publicas" align="center"></td></tr></tfoot>
                </table>
            </div>
        </div>

        <div class="tab-pane" id="enviar">
            <h3>Escolha uma opção de envio de mensagem:</h3>
            <p>
                Escolha para onde você quer enviar uma mensagem.<br />
                Se desejar enviar uma mensagem para a escola escolha a opção escola se desejar enviar uma mensagem para o aluno escolha a opção aluno.
            </p>
            <div id="opcoes_mensagens">
                <input type="radio" id="escola" checked="checked" value="escola" name="mensagem" /> Escola
                <input type="radio" id="aluno" value="aluno" name="mensagem" /> Aluno 
            </div>

            <div id="tipo_mensagem_escolhida">
                <h4>Digite uma mensagem para enviar para a escola:</h4>
                Titulo: <input type="text" id="titulo_mensagem_escola" class="input input-large" />
                <textarea type="text" id="mensagem_escola"></textarea>
                <br /><button id="btn_cadastrar_mensagem_escola" class="btn btn-warning">Enviar</button>
            </div>

            <div id='mensagem_enviada'></div>


        </div>
    </div>
</div>