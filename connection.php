<?php
	# Muutujate seadmine
	$hostname = "localhost";
	$username = "pri";
	$dbpassword = "praksiv2rk";
	$dbname = "pri";
	
	# MySQL ühendumine
	$dbc = mysqli_connect($hostname, $username, $dbpassword, $dbname) OR die("Andmebaasiga ühendumine ebaõnnestus. Error: ".mysqli_connect_error());
	
	# Encodingu seadmine
	mysqli_set_charset($dbc, "utf8");
?>