<?php
session_start();
require 'autoload.php';
require 'libraries/activerecord/ActiveRecord.php';

$path_models = realpath('models/');

$cfg = ActiveRecord\Config::instance();
$cfg->set_model_directory($path_models);

$cfg->set_connections(array('development' =>
    'mysql://root:@localhost/jquery'));