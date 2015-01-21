<?php

class models_MensagemAluno extends ActiveRecord\Model{
    
    static $table_name = 'tb_mensagem_aluno';
    
    protected function enviar_mensagem_aluno_models($attributes){
        return parent::create($attributes);
    }
     
}