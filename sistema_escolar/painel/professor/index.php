<?php require '../../config/config.php'; ?>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Login Sistema Escolar</title>
        <link rel="stylesheet" href="css/css_professor.css" type="text/css" />
        <link rel="stylesheet" href="../../public/css/bootstrap.css" type="text/css" />
        <link href='http://fonts.googleapis.com/css?family=Anaheim' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <div id="container">
            <div id="navegacao"><?php require 'inc/inc_header.php'; ?></div>
            <div id="conteudo"><?php isset($_GET['p']) ? libraries_classes_Url::pegar_paginas_existentes($_GET['p']) : require 'inc/inc_home.php'; ?></div>
            <div id="rodape">Sistema Escolar asolucoesweb - <?php echo date('Y'); ?></div>
        </div>
        <script type="text/javascript" src="../../public/jquery/jquery.js"></script>
        <script type="text/javascript" src="../../libraries/tiny_mce/tiny_mce.js"></script>
        <script type="text/javascript" src="../../public/js/tinyMCEInit.js"></script>
        <script type="text/javascript" src="../../public/js/pagination.js"></script>
        <script type="text/javascript" src="../../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="../../painel/professor/js/js_aluno_nota.js"></script>
        <script type="text/javascript" src="../../painel/professor/js/js_mensagem_professor.js"></script>
        <script type="text/javascript" src="../../public/js/jquery.dateFormat.js"></script>
        <script type="text/javascript" src="../../painel/professor/js/js_enviar_mensagem.js"></script>

    </body>
</html>