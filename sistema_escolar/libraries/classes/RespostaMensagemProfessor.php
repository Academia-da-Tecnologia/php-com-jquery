<?php

/* classes */

class libraries_classes_RespostaMensagemProfessor extends models_RespostaMensagemProfessor {

    static $validates_uniqueness_of = array(
        array(array('escola_mensagem_id', 'escola_mensagem_tipo_mensagem'), 'message' => 'respondido')
    );

    public function cadastrar_resposta_mensagem_professor($attributes) {
        $cadastrar_resposta = parent::cadastrar_resposta_mensagem_professor_models($attributes);
        return ($cadastrar_resposta->is_valid()) ? true : $cadastrar_resposta->errors->full_messages();
    }
}