<?php

class librarues_classes_MensagemAluno extends models_MensagemAluno {

    public function enviar_mensagem_aluno($attributes) {
        $cadastrar_mensagem_aluno = parent::enviar_mensagem_aluno_models($attributes);
        return ($cadastrar_mensagem_aluno) ? true : false;
    }

}