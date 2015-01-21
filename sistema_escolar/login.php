<?php
require 'config/config.php';

$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$senha = filter_var($_POST['senha'], FILTER_SANITIZE_STRING);
$tipo = $_POST['tipo'];
$erro = '';

if ($email):
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
else:
    $erro = 'email';
endif;

if (empty($erro)):
    $login = new libraries_classes_LoginFactory;
    $log = new libraries_classes_LogFactory;
    $login->logar($tipo, $email, $senha, $log);
else:
    echo $erro;
endif;