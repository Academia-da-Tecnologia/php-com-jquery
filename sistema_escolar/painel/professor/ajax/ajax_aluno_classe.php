<?php
require '../../../config/config.php';
/*listar os alunos de uma determinada classe*/

$id = filter_input(INPUT_POST, 'id_classe', FILTER_SANITIZE_NUMBER_INT);
$aluno = new libraries_classes_Aluno;
$listar_alunos_classe = $aluno->listar_alunos_classe($id);
$dados_alunos = array();

foreach($listar_alunos_classe as $alunos):
   array_push($dados_alunos, $alunos->to_array());
endforeach;
echo json_encode($dados_alunos);