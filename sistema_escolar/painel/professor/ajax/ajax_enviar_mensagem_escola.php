<?php

require '../../../config/config.php';

$titulo = filter_input(INPUT_POST, 'titulo', FILTER_SANITIZE_MAGIC_QUOTES);
$conteudo = filter_input(INPUT_POST, 'conteudo', FILTER_SANITIZE_MAGIC_QUOTES);

$cadastrar_mensagem_escola = new libraries_classes_MensagemEscola;

$attributes = array(
    'escola_mensagem_titulo' => $titulo,
    'escola_mensagem_data' => date('Y-m-d H:i:s'),
    'escola_mensagem_professor' => $_SESSION['professor_id'],
    'escola_mensagem_texto' => $conteudo,
    'escola_mensagem_lido' => '2'
);

$cadastrou_mensagem = $cadastrar_mensagem_escola->cadastrar_mensagem_escola($attributes);
echo ($cadastrou_mensagem) ? 'cadastrou' : 'ncadastrou';