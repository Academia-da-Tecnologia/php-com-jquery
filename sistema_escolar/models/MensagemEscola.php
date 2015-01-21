<?php

class models_MensagemEscola extends ActiveRecord\Model {

    static $table_name = 'tb_mensagem_escola';

    protected function cadastrar_mensagem_escola_models($attributes) {
        return parent::create($attributes);
    }

}