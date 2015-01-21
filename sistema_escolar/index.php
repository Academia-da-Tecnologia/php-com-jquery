<?php
session_start();
?>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Login Sistema Escolar</title>
        <link rel="stylesheet" href="public/css/styles.css" type="text/css" />
        <link rel="stylesheet" href="public/css/bootstrap.css" type="text/css" />
        <link href='http://fonts.googleapis.com/css?family=Anaheim'
              rel='stylesheet' type='text/css'>
    </head>
    <body>
        <div id="container">

            <div id="login">
                <form class="form-horizontal" id="form_login" method="post">
                    <div class="control-group">
                    	
                        <label class="control-label" for="inputEmail">Email:</label>
                        <div class="controls">
                            <input type="text" name="email" id="inputEmail" placeholder="Email">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="inputPassword">Senha:</label>
                        <div class="controls">
                            <input type="password" name="senha" id="inputPassword" placeholder="Password">
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label" for="inputAcesso">Acesso:</label>
                        <div class="controls">
                            <select name="tipo">
                                <option value="professor">Professor</option>
                                <option value="aluno">Aluno</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <div class="controls">
                            <button type="submit" id="bt_login" class="btn">OK</button>
                        </div>
                    </div>
                </form>

            </div>
            <div id="mensagem"></div>
        </div>

        <script type="text/javascript" src="public/jquery/jquery.js"></script>
        <script type="text/javascript" src="public/js/login.js"></script>
        <script type="text/javascript" src="public/js/bootstrap.js"></script>
    </body>

</html>