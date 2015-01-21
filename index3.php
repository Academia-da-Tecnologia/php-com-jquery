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
            
            <!--lista de nome com select para usar no metodo is-->
            <ul id="lista">
                <li>Alexandre</li>
                <li>Maria</li>
                <li>Pedro</li>
                <li>JUliana</li>
            </ul>
            
            
            <input type="checkbox" class="check" value="alexandre" /> Alexandre 
            <input type="checkbox" class="check" value="maria" /> Maria 
            <input type="checkbox" class="check" value="pedro" /> Pedro 
            <input type="checkbox" class="check" value="juliana" /> Juliana 
                      
            <table id="tabela" width="800">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    <?php                   
                    $pessoas = listar('pessoa');
                    $pessoa = new ArrayIterator($pessoas);
                    while ($pessoa->valid()) :
                        ?>
                        <tr>
                            <td><input class="nome" type="text"value="<?php echo $pessoa->current()->nome; ?>" /></td>
                            <td><input type="text" class="email" value="<?php echo $pessoa->current()->email; ?>" /></td>
                            <td><button class="btn_id" data-id="<?php echo $pessoa->current()->id; ?>" data-email="<?php echo $pessoa->current()->email; ?>">Ver Id</button></td>
                        </tr>

                        <?php
                        $pessoa->next();
                    endwhile;
                    ?>           
                    <!--
                       <tr>
                           <td colspan="2">
                               <button id="btn_atributos" data-id="15">Atributos</button>
                           </td>
                       </tr>
                    -->
                </tbody>

            </table>
        </div>

        <script type="text/javascript" src="jquery/jquery.js"></script>
        <script type="text/javascript" src="js/post.js"></script>
    </body>

</html>