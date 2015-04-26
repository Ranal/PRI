<?php
$host_name = "localhost";
$database = "pri"; // Change your database name
$username = "pri"; // Your database user id 
$password = "praksiv2rk"; // Your password

//////// Do not Edit below /////////
try {
$dbo = new PDO('mysql:host='.$host_name.';dbname='.$database, $username, $password);
$dbo->exec("set names utf8");
} catch (PDOException $e) {
print "Error!: " . $e->getMessage() . "<br/>";
die();
}
?>