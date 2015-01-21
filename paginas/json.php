<?php

require '../config.php';

$pessoa = listar('pessoa');
//$pessoa = array(1 => 'alexandre', 2 => 'joao', 3 => 'jquery', 4 => 'php');
echo json_encode($pessoa);