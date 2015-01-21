<?php

class libraries_classes_Url {

    public static function pegar_paginas_existentes($pagina) {

        if (isset($pagina)):
            if (file_exists('inc/inc_' . $pagina . '.php')):
                require 'inc/inc_' . $pagina . '.php';
            else:
                require 'inc/inc_erro404.php';
            endif;
        else:
            require 'inc/inc_erro404.php';
        endif;
    }

}