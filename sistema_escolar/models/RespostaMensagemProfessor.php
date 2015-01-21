<?php

/* models */

class models_RespostaMensagemProfessor extends ActiveRecord\Model {

    static $table_name = 'tb_escola_resposta_mensagem';
    
    protected function cadastrar_resposta_mensagem_professor_models($attributes) {
        return parent::create($attributes);
    }

}