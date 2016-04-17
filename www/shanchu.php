<?php
$mysqli = new mysqli("localhost","root","","test");
$sql = "DELETE  FROM  `lianxiren`  WHERE `id` = {$_GET[id]}";

$r = $mysqli->query($sql);
if($r){
	echo 'sucess';
}else{
	echo 'fail';
}

?>