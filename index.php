<?php
$ip = $_SERVER['REMOTE_ADDR'];
$hora = date("Y-m-d H:i:s");
file_put_contents("ips.txt", "$ip - $hora\n", FILE_APPEND);
?>
<!DOCTYPE html>
<html>
<head><title>Bienvenido</title></head>
<body>
<center>
<h1>¡Hola!</h1><br>
<p>Gracias por visitar esta web.</p>
</center>
</body>
</html>