<?php
/*classes*/
class libraries_classes_Aluno extends models_Aluno{
   
    public function listar_alunos_classe($id_classe){
        return parent::listar_alunos_classe_models($id_classe);
    }
    
}