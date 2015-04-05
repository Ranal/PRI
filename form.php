<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		# Processing form values
		$fname = $_POST["fname"];
		$lname = $_POST["lname"];
		$email = $_POST["email"];
		
		# If field is not empty
		if(!empty($fname) && !empty($lname) && !empty($email)){
			
			# Ühendame andmebaasiga
			include("connection.php");
			
			# Saame kasutada connection.php muutujaid include tõttu
			# Inserting values to database
			mysqli_query($dbc, "INSERT INTO uudiskiri(first_name, last_name, email) VALUES('$fname','$lname','$email')");
			
			# Number of rows affected
			$registered = mysqli_affected_rows($dbc);
			
			echo " ".$registered." rida andmebaasis muudetud.";
			
			
		}else{
			#echo "";
		}
		
	}else{
		#echo "Error";
	}
	
?>

Aitäh!