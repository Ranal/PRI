<?php
	
	# Muutujate seadmine
	$hostname = "localhost";
	$username = "pri";
	$dbpassword = "praksiv2rk";
	$dbname = "pri";
	
	# MySQL ühendumine
	# OR die(); turvaeesmärkidel ühenduse dropimiseks
	$dbc = mysqli_connect($hostname, $username, $dbpassword, $dbname) OR die("Andmebaasiga ühendumine ebaõnnestus. Error: ".mysqli_connect_error());
	
	# Encodingu seadmine
	mysqli_set_charset($dbc, "utf8");

	#echo "<p style='color:blue'>Oled ühendatud <b>".$dbname."</b> andmebaasi.</p>";
?>