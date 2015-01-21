<?php
/*models*/
class models_Nota extends ActiveRecord\Model {

	static $table_name = 'tb_nota';

      /*pegar nota do mes do aluno*/
    protected function listar_nota_aluno_mes_models($aluno, $mes, $professor){
    	$join = 'INNER JOIN tb_aluno ON (tb_nota.nota_aluno = tb_aluno.id)';
        return parent::find('all', array('joins' => $join , 'select' => '*, tb_nota.id as id_nota' ,'conditions' => array('nota_aluno = ? AND nota_mes = ? AND nota_professor=?', $aluno, $mes, $professor)));
    }

    /*deletar nota do aluno*/
    protected function deletar_nota_aluno_models($id){
    	$deletar_nota = parent::find($id);
    	return $deletar_nota->delete();
    }

    /*atualizar nota*/
    protected function atualizar_nota_aluno_models($id, $nota){
        $atualizar = parent::find($id);
        $atualizar->nota = $nota;
        return $atualizar->save();
    }

    /*cadastrar nota*/
    protected function cadastrar_nota_aluno_models($atributes){
        return parent::create($atributes);
    }


}