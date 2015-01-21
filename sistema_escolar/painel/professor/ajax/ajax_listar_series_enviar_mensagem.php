<?php

require '../../../config/config.php';

if (isset($_POST['listar_alunos_serie']) AND $_POST['listar_alunos_serie'] == 'true'):
    
    $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
    $aluno = new libraries_classes_Aluno;
    $listar_alunos_classe = $aluno->listar_alunos_classe($id);
    $dados_alunos = array();

    foreach ($listar_alunos_classe as $alunos):
        array_push($dados_alunos, $alunos->to_array());
    endforeach;
    echo json_encode($dados_alunos);

else:
    $classe = new libraries_classes_Classe;
    $classes_cadastradas = $classe->listar_classes_menu($_SESSION['professor_id']);

    $dados_classe = array();

    foreach ($classes_cadastradas as $classe):
        array_push($dados_classe, $classe->to_array());
    endforeach;
    echo json_encode($dados_classe);
    
endif;