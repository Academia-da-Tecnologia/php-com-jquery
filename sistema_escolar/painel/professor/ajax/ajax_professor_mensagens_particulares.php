<?php

require '../../../config/config.php';

if (isset($_POST['exibir_mensagem_particular']) AND $_POST['exibir_mensagem_particular'] == 'true'):
    $id_mensagem_particular = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);

    $mensagem_particular_professor = new libraries_classes_MensagemParticularProfessor;
    $mensagem_encontrada = $mensagem_particular_professor->listar_mensagem_particular_escolhida($id_mensagem_particular);

    /* verificar se a mensagem ja esta lida */
    $status_mensagem = $mensagem_encontrada->particular_professor_lido;
    $mensagem_particular_professor->atualizar_status_mensagem_particular($id_mensagem_particular, $status_mensagem);
    $dados_mensagem_particular = array();

    array_push($dados_mensagem_particular, $mensagem_encontrada->to_array());
    echo json_encode($dados_mensagem_particular);

elseif (isset($_POST['deletar_mensagem_particular']) AND $_POST['deletar_mensagem_particular'] == 'true'):

    $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
    /* deletar mensagem particular */
    $deletar_mensagem_particular = new libraries_classes_MensagemParticularProfessor;
    $deletou = $deletar_mensagem_particular->deletar_mensagem_particular($id);

    echo ($deletou) ? 'deletou' : 'ndeletou';

elseif (isset($_POST['enviar_mensagem']) AND $_POST['enviar_mensagem'] == 'true'):

    $titulo_mensagem = filter_input(INPUT_POST, 'titulo', FILTER_SANITIZE_MAGIC_QUOTES);
    $conteudo_mensagem = filter_input(INPUT_POST, 'conteudo', FILTER_SANITIZE_MAGIC_QUOTES);
    $tipo_mensagem = filter_input(INPUT_POST, 'tipo', FILTER_SANITIZE_NUMBER_INT);
    $id_mensagem_particular = filter_input(INPUT_POST, 'id_mensagem', FILTER_SANITIZE_NUMBER_INT);

    $atributos_cadastrar_mensagem_particular = array(
        'escola_mensagem_titulo' => 'RE:'.$titulo_mensagem,
        'escola_mensagem_data' => date('Y-m-d H:i:s'),
        'escola_mensagem_conteudo' => $conteudo_mensagem,
        'escola_mensagem_professor' => $_SESSION['professor_id'],
        'escola_mensagem_tipo_mensagem' => $tipo_mensagem,
        'escola_mensagem_id' => $id_mensagem_particular,
    );

    $cadastrar_resposta = new libraries_classes_RespostaMensagemProfessor;
    $cadastrou_resposta_mensagem_particular = $cadastrar_resposta->cadastrar_resposta_mensagem_professor($atributos_cadastrar_mensagem_particular);

    if ($cadastrou_resposta_mensagem_particular === true):
        echo 'cadastrou';
    else:

        if (is_array($cadastrou_resposta_mensagem_particular)):
            if (!empty($cadastrou_resposta_mensagem_particular)):
                echo 'respondido';
            endif;
        else:
            echo 'ncadastrou';
        endif;
    endif;

else:
    $mensagens = new libraries_classes_MensagemParticularProfessor();
    $mensagens_encontradas = $mensagens->listar_mensagens_particulares_professor($_SESSION['professor_id']);

    $dados_mensagens_professor = array();

    foreach ($mensagens_encontradas as $mensagem):
        array_push($dados_mensagens_professor, $mensagem->to_array());
    endforeach;
    echo json_encode($dados_mensagens_professor);
endif;