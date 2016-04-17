<?php
$mysqli = new mysqli('localhost','root','','test');
$sql = "UPDATE `lianxiren` SET `{$_GET['shuxing']}`='{$_GET['zhi']}' WHERE `id`={$_GET['id']}";
$mysqli->query($sql);
echo 'success';
?>