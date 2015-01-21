<?php

class libraries_classes_LoginFactory {

    public function logar($tipo, $email, $senha, $log) {

        switch ($tipo) {
            case 'professor':
                $logar = new libraries_classes_LoginProfessor;
                break;
            case 'aluno':
                $logar = new libraries_classes_LoginAluno;
                break;
        }
        return $logar->logar($email, $senha, $log);
    }
    
}