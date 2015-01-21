<?php

/* models */

class models_MensagemParticularProfessor extends ActiveRecord\Model {

    static $table_name = 'tb_particular_professor';

    protected function listar_mensagens_particulares_professor_models($id) {
        return parent::find('all', array('conditions' => array('particular_professor_nome=?', $id)));
    }

    protected function listar_mensagem_particular_escolhida_models($id) {
        return parent::find('first', array('conditions' => array('id=?', $id)));
    }

    protected function atualizar_status_mensagem_particular_models($id, $status) {
        $atualizar_status = parent::find($id);
        $atualizar_status->particular_professor_lido = $status;
        return $atualizar_status->save();
    }

    protected function deletar_mensagem_particular_models($id) {
        $deletar_mensagem_particular = parent::find($id);
        return $deletar_mensagem_particular->delete();
    }

}