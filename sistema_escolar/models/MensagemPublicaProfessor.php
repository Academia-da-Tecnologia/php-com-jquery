<?php

/* models */

class models_MensagemPublicaProfessor extends ActiveRecord\Model {

    static $table_name = 'tb_publica_professor';

    protected function listar_mensagens_publicas_professor_models() {
        return parent::find('all');
    }

    protected function listar_mensagem_publica_escolhida_models($id) {
        return parent::find('first', array('conditions' => array('id=?', $id)));
    }

    protected function atualizar_status_mensagem_publica_models($id, $status) {
        $atualizar_status = parent::find($id);
        $atualizar_status->publica_professor_lido = $status;
        return $atualizar_status->save();
    }

    protected function deletar_mensagem_publica_models($id) {
        $deletar_mensagem_publica = parent::find($id);
        return $deletar_mensagem_publica->delete();
    }

}