<?php

class libraries_classes_MensagemEscola extends models_MensagemEscola{
    
    public function cadastrar_mensagem_escola($attributes) {
        $cadastrar_mensagem_escola = parent::cadastrar_mensagem_escola_models($attributes);
        return ($cadastrar_mensagem_escola) ? true : false;
    }
    
}