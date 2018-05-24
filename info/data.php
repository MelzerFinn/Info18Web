<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
session_start();

$time = date('r');
//$data = system("java -jar data.jar");
//$data = (rand('.rand(0,50).',2)/1'.rand(0,50).')."-".(rand('.rand(0,50).',2)/1'.rand(0,50).');
$data = '{"Sens1":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens2":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens3":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens4":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens5":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens6":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens7":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Sens8":{"x":'.rand(0,50).',"y":'.rand(0,50).'},"Pos":{"x":'.rand(0,50).',"y":'.rand(0,50).'}}';

echo "retry: 3000\n";
echo "data: {$data}\n\n";
flush();
?>
