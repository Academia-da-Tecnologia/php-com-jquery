
    var container = $("#container");
    var tabela = container.find("#tabela");
    var tbody = tabela.find("tbody");
    var btn_atributos = tbody.find("#btn_atributos");
    var btn_id = tbody.find(".btn_id");
    
    
    tbody.on('click','.btn_id',function(event) {
        event.preventDefault();
        var nome = $( event.currentTarget ).closest('tr').find('.nome'); 
        console.log(nome.val());
        //var id = $(this).attr('data-id');
        //var email = $(this).attr('data-email');      
        
        //console.log(nome.val());

    });


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
            <h2>Curso de jquery com php</h2>
            <button id="mostrar">Mostrar texto</button>
            <button id="esconder">Esconder texto</button>
            <button id="btn_mostrar_esconder">Mostrar/Esconder</button>
            <button id="btn_slide_up">Slide UP</button>
            <button id="btn_slide_down">Slide DOWN</button>

            <form action="pagina_teste.php" id="form">              
                <input type="text" id="txt" name="busca" value="Faça sua busca" />          
                <select id="status_texto" name="status">
                    <option value="" selected="selected">Escolha uma opção</option>
                    <option value="mostrar">Mostrar texto</option>
                    <option value="esconder">Esconder texto</option>
                </select>
                <input type="submit" id="bt_submit" />
            </form>

            <div id="titulo">
                <div id="subtitulo">
                    subtitulo
                </div>
            </div>

            <div id="texto">
                <div id="mostra_texto">
                    <?php
                    $pessoa = listar('pessoa');
                    foreach ($pessoa as $p):
                        echo $p->email . "<br />";
                    endforeach;
                    ?>
                </div>
            </div>

            <div id="texto_digitado">
                <div id="texto_digitado2">
                    texto digitado 2
                </div>
            </div>

            <div id="mostrar_texto">
                mostrar
            </div>

        </div>

        <script type="text/javascript" src="jquery/jquery.js"></script>
        <script type="text/javascript" src="js/html_append.js"></script>
    </body>

</html>