<?php
	
	# Setting variables
	$hostname = "localhost";
	$username = "pri";
	$dbpassword = "praksiv2rk";
	$dbname = "test";
	
	# Connecting to MySQL
	# OR die(); for security reasons to drop the connection
	$dbc = mysqli_connect($hostname, $username, $dbpassword, $dbname) OR die("Could not connect to database. ERROR: ".mysqli_connect_error());
	
	# Setting the encoding
	mysqli_set_charset($dbc, "utf8");

	#echo "<p style='color:blue'>You are connected to <b>".$dbname."</b> database.</p>";
?>