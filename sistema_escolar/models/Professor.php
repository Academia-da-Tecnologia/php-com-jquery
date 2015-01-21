<?php

class models_Professor extends ActiveRecord\Model{
    static $table_name = 'tb_professor';

    protected function listar_dados_professor_pelo_id_models($professor){
    	return parent::find('first', array('conditions' => array('id=?', $professor)));
    }

}