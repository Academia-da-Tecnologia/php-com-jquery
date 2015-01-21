<?php

/* models/classe */

class models_Classe extends ActiveRecord\Model {

    static $table_name = 'tb_classe';

    protected function listar_classes_menu_models($professor) {
        $join = 'INNER JOIN tb_serie ON (tb_classe.classe_serie = tb_serie.id)';
        return parent::find('all', array('joins' => $join, 'select' => '*', 'conditions' => array('classe_professor=?', $professor)));
    }

}
