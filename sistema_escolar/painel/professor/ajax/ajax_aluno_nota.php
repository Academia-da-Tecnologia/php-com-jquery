<?php

require '../../../config/config.php';

if (isset($_POST['deletar']) && $_POST['deletar'] == 'true'):

    /* deletar nota */
    $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
    $deletar_nota = new libraries_classes_Nota;
    echo ($deletar_nota->deletar_nota_aluno($id)) ? 'deletou' : 'ndeletou';

elseif (isset($_POST['atualizar']) && $_POST['atualizar'] == 'true'):

    $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
    $nota = filter_input(INPUT_POST, 'nota', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

    if (!is_numeric($nota)):
        echo 'nan';
    else:
        /* atualizar nota */
        $atualizar_nota = new libraries_classes_Nota;
        echo ($atualizar_nota->atualizar_nota_aluno($id, $nota)) ? 'atualizou' : 'natualizou';
    endif;

elseif (isset($_POST['cadastrar']) && $_POST['cadastrar'] == 'true'):

    if (!is_numeric($_POST['nota'])):
        echo 'nan';
    else:
        /* pegar materia pelo id do professor */
        $professor = new libraries_classes_Professor;
        $dados_professor = $professor->listar_dados_professor_pelo_id($_SESSION['professor_id']);
        $materia_professor = $dados_professor->professor_materia;

        /* cadastrar nota */
        $dados_cadastrar_nota = array(
            'nota' => $_POST['nota'],
            'nota_aluno' => $_POST['aluno'],
            'nota_professor' => $_SESSION['professor_id'],
            'nota_materia' => $materia_professor,
            'nota_mes' => $_POST['mes'],
            'nota_ano' => date('Y')
        );
        $cadastrar_nota = new libraries_classes_Nota;
        echo ($cadastrar_nota->cadastrar_nota_aluno($dados_cadastrar_nota)) ? 'cadastrou' : 'ncadastrou';
    endif;

else:

    /* listar nota aluno */
    $aluno = filter_input(INPUT_POST, 'aluno', FILTER_SANITIZE_NUMBER_INT);
    $mes = filter_input(INPUT_POST, 'mes', FILTER_SANITIZE_NUMBER_INT);

    $nota = new libraries_classes_Nota;
    $nota_aluno = $nota->listar_nota_aluno_mes($aluno, $mes, $_SESSION['professor_id']);

    $dados_alunos = array();

    foreach ($nota_aluno as $nota):
        array_push($dados_alunos, $nota->to_array());
    endforeach;
    echo json_encode($dados_alunos);
endif;	