<?php require_once 'config.php'; ?>
<html>

    <head>
        <meta charset="utf-8" />
        <title>Curso de PHP com Jquery</title>
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link href='http://fonts.googleapis.com/css?family=Anaheim'
              rel='stylesheet' type='text/css'>
    </head>

    <body>
        <div id="container">

            <!--        
                    <form action="paginas/submit.php" method="post" id="form_cadastro">
                        <label>Nome: </label>
                        <input type="text" name="nome" id="nome" />
                        
                        <label>E-mail: </label>
                        <input type="text" name="email" id="email" />
                        
                        <label>Telefone: </label>
                        <input type="text" name="telefone" id="telefone" />
                        
                        <label></label>
                        <button type="submit" id="bt_cadastrar" class="bt">Cadastrar</button>
                    </form>
                    <div id="mensagem"></div>
            -->
            <div id="mensagem"></div>
            <div id="dados"></div>

        </div>

        <script type="text/javascript" src="jquery/jquery.js"></script>
        <script type="text/javascript" src="js/json.js"></script>
    </body>

</html>