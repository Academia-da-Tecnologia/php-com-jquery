<?php
/*libraries/classe*/
class libraries_classes_Classe extends models_Classe{
    
    public function listar_classes_menu($professor){
      return parent::listar_classes_menu_models($professor);  
    }
    
}