<div class="navbar navbar-static-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="./">Área do Professor</a>
            <div class="nav-collapse">
                <ul class="nav">
                    <li class="active"><a href="#"><i class="icon-home"></i> Início</a></li>
                    <li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-list"></i> Notas <b class="caret"></b></a>
                        <ul class="dropdown-menu">

                            <!--listar as serie cadastradas-->
                            <?php
                            $classe = new libraries_classes_Classe;
                            $classes_cadastradas = $classe->listar_classes_menu($_SESSION['professor_id']);
                            $listar_classes_cadastradas = new ArrayIterator($classes_cadastradas);
                            while ($listar_classes_cadastradas->valid()):
                                ?>
                                <li><a href="?p=classe&id=<?php echo $listar_classes_cadastradas->current()->id; ?>"><?php echo ucfirst($listar_classes_cadastradas->current()->serie_nome); ?></a></li>
                                <?php
                                $listar_classes_cadastradas->next();
                            endwhile;
                            ?>
                            <li class="divider"></li>
                            <li class="nav-header">Todas</li>
                            <li><a href="#">Ver Todas</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i> Aluno <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Mensagem</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="icon-check"></i> Redefinir Senha</a></li>
                </ul>

                <ul class="nav pull-right">
                    <li>
                        <form class="navbar-search pull-left" action="">
                            <input type="text" class="search-query input-large" placeholder="Buscar">
                            <label class="radio inline">
                                <input type="radio" id="inlineCheckbox1" value="option1"> Aluno
                            </label>
                            <label class="radio inline">
                                <input type="radio" id="inlineCheckbox1" value="option1"> Classe
                            </label>
                        </form>
                    </li>

                </ul>
            </div><!-- /.nav-collapse -->
        </div>
    </div><!-- /navbar-inner -->
</div><!-- /navbar -->