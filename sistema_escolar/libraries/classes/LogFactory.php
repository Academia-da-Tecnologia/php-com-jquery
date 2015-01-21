<?php

class libraries_classes_LogFactory {

    public function gravar_log_factory($tipo) {

        switch ($tipo) {
            case 'professor':
                $log = new libraries_classes_LogProfessor;
                break;
            case 'aluno':
                $log = new libraries_classes_LogAluno;
                break;
        }
        return $log->gravar_log();
    }
    
}
