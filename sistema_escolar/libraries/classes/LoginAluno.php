<?php

class libraries_classes_LoginAluno extends models_Aluno {

    public function logar($email, $senha) {
        $dados_aluno = parent::find('all', array('conditions' => array('aluno_email = ? AND aluno_senha = ?', $email, $senha)));
        if (count($dados_aluno) == 1):
            $_SESSION['aluno_logado'] = true;
            $_SESSION['aluno_nome'] = $dados_aluno[0]->aluno_nome;
            $this->redirecionar();
            return true;
        endif;
    }

    private function redirecionar() {
        if (isset($_SESSION['aluno_loado'])):
            echo 'painel/aluno';
        endif;
    }

}