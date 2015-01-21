<?php

/* classes */

class libraries_classes_MensagemParticularProfessor extends models_MensagemParticularProfessor {

    public function listar_mensagens_particulares_professor($id) {
        return parent::listar_mensagens_particulares_professor_models($id);
    }

    public function listar_mensagem_particular_escolhida($id) {
        return parent::listar_mensagem_particular_escolhida_models($id);
    }

    public function atualizar_status_mensagem_particular($id, $status) {
        $status_mensagem = ($status == 2) ? 1 : $status;
        return parent::atualizar_status_mensagem_particular_models($id, $status_mensagem);
    }

    public function deletar_mensagem_particular($id) {
        $deletar_mensagem = parent::deletar_mensagem_particular_models($id);
        return ($deletar_mensagem) ? true : false;
    }
    
}