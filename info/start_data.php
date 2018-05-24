<?php
if(!session_id()) session_start();
$descriptorspec = array(
   0 => array("pipe", "r"),  // STDIN ist eine Pipe, von der das Child liest
   1 => array("pipe", "w"),  // STDOUT ist eine Pipe, in die das Child schreibt
   2 => array("file", "/tmp/error-output.txt", "a") // STDERR ist eine Datei,
                                                    // in die geschrieben wird
);

$_SESSION["pid"] = proc_get_status(proc_open("java -jar data.jar", $descriptorspec, $pipes))[pid];
echo "process started. PID: ".$_SESSION["pid"];
?>