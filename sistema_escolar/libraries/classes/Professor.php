<?php

/* classes */

class libraries_classes_Professor extends models_Professor {

	/*listar professor pelo id*/
    public function listar_dados_professor_pelo_id($professor){
        return parent::listar_dados_professor_pelo_id_models($professor);
    }
}