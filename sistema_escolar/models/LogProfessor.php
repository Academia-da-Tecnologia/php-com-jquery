<?php
/*models*/
class models_LogProfessor extends ActiveRecord\Model{
    static $table_name = 'tb_log_professor';
    
    protected function gravar($attributes){
        parent::create($attributes);
    }
    
    protected static function ultimo_login_professor($id_professor){
        return parent::find('all', array('conditions' => array('log_professor=?', $id_professor), 'limit' => 1, 'offset' => 1, 'order' => 'id DESC'));
    }
    
    
}