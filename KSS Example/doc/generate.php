<?php 
/*
 * KSS DOC generation settings
 */
//configuration start

$includePath = "src/Dnx/FrontBundle/Resources/public/less/integration/";
$tpl = "doc/template";
$file = "src/Dnx/FrontBundle/Resources/public/less/integration/common.less";

//end configuration

$root= __DIR__.'/..';

if(empty($argv[1])){
    
    exit ('path must be specified');
    
}

$dest = $argv[1];

echo $command  = "/usr/local/bin/kss-node ".($root.DIRECTORY_SEPARATOR.$includePath)." ".($root.DIRECTORY_SEPARATOR.$dest)." --template ".$root.DIRECTORY_SEPARATOR.$tpl." --less ".$root.DIRECTORY_SEPARATOR.$file;

echo system($command);


