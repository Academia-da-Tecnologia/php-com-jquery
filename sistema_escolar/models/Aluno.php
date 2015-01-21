<?php

/* models */

class models_Aluno extends ActiveRecord\Model {

    static $table_name = 'tb_aluno';

    /* metodo para listar todos os alunos */

    protected function listar_alunos_classe_models($id_classe) {
        return parent::find('all', array('conditions' => array('aluno_classe=?', $id_classe)));
    }

}