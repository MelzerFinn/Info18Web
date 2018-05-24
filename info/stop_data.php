<?php
session_start();
$pid = $_SESSION['pid'];
exec("kill -9 $pid");
echo "killed PID: ".$pid;
?>