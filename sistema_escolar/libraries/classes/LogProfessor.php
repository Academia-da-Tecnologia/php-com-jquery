<?php

/* classes */

class libraries_classes_LogProfessor extends models_LogProfessor {

    public function gravar_log() {
        $attributes = array('log_professor' => $_SESSION['professor_id'], 'log_data' => date('Y-m_d H:i:s'));
        parent::gravar($attributes);
    }

    public static function ultimo_login($id_professor) {
        if (filter_var($id_professor, FILTER_VALIDATE_INT)):
            $dados_ultimo_login = parent::ultimo_login_professor($id_professor);
            return date('d/m/Y H:i:s', strtotime($dados_ultimo_login[0]->log_data));
        else:
            return 'O ID é inválido';
        endif;
    }

}
