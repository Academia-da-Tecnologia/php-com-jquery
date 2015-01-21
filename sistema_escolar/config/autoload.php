<?php
set_include_path('../'.PATH_SEPARATOR.'../../'.PATH_SEPARATOR.'../../../');
function  autoloader($classe){
    $path = str_replace('_', '/', $classe);
         require $path.'.php';
}
spl_autoload_register('autoloader');