<?php

class libraries_classes_LoginProfessor extends models_Professor {

    public function logar($email, $senha, libraries_classes_LogFactory $log) {
        $dados_professor = parent::find('all', array('conditions' => array('professor_email = ? AND professor_senha = ?', $email, $senha)));
        if (count($dados_professor) == 1) :
            $_SESSION['professor_logado'] = true;
            $_SESSION['professor_nome'] = $dados_professor[0]->professor_nome;
            $_SESSION['professor_id'] = $dados_professor[0]->id;
            $log->gravar_log_factory('professor');
            $this->redirecionar();
            return true;
        endif;
    }

    private function redirecionar() {
        if (isset($_SESSION['professor_logado'])) :
            echo 'painel/professor';
        endif;
    }

}
