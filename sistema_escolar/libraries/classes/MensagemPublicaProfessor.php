<?php

/* classes */

class libraries_classes_MensagemPublicaProfessor extends models_MensagemPublicaProfessor {

    public function listar_mensagens_publicas_professor() {
        return parent::listar_mensagens_publicas_professor_models();
    }

    public function listar_mensagem_publica_escolhida($id) {
        return parent::listar_mensagem_publica_escolhida_models($id);
    }

    public function atualizar_status_mensagem_publica($id, $status) {
        $status_mensagem = ($status == 2) ? 1 : $status;
        return parent::atualizar_status_mensagem_publica_models($id, $status_mensagem);
    }

    public function deletar_mensagem_publica($id) {
        $deletar_mensagem = parent::deletar_mensagem_publica_models($id);
        return ($deletar_mensagem) ? true : false;
    }

}