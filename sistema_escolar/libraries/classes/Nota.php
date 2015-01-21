<?php

/* classes */
class libraries_classes_Nota extends models_Nota {

	/*listar a nota do aluno*/
    public function listar_nota_aluno_mes($aluno, $mes, $professor){
        return parent::listar_nota_aluno_mes_models($aluno, $mes, $professor);
    }

    /*deletar nota aluno*/
    public function deletar_nota_aluno($id){
    	$deletar_nota = parent::deletar_nota_aluno_models($id);
    	return ($deletar_nota) ? true : false;
    }

    /*atualizar nota aluno*/
    public function atualizar_nota_aluno($id, $nota){
    	$atualizar_nota = parent::atualizar_nota_aluno_models($id, $nota);
    	return ($atualizar_nota) ? true : false;
    }

    /*cadastrar nota*/
    public function cadastrar_nota_aluno($atributes){
    	$cadastrar_nota = parent::cadastrar_nota_aluno_models($atributes);
    	return ($cadastrar_nota) ? true : false;
    }

}