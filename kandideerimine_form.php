<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		# formi väärtused
		$fname = $_POST["fname"];
		$lname = $_POST["lname"];
		$erakond = $_POST["erakond"];
		$ringkond = $_POST["ringkond"];
		$kandidaadinr = $_POST["kandidaadinr"];
		
		# Minna if-i kui valitud väljad ei ole tühjad
		if(!empty($fname) && !empty($lname) && !empty($ringkond) && !empty($erakond) && !empty($kandidaadinr)){
			
			# Ühendame andmebaasiga
			include("connection.php");
			
			# Saame kasutada connection.php muutujaid include tõttu
			# Inserting values to database
			mysqli_query($dbc, "INSERT INTO kandidaadid(ErakonnaID,RingkonnaID,KandidaadiNr,Eesnimi,Perekonnanimi) VALUES('$erakond', '$ringkond', '$kandidaadinr', '$fname', '$lname')");
			
			#TODO: Peale kandideerimist peaks 'ringkonnad' tabelis muutuma vastava ringkonna 'kandidaatideArv' +1 võrra
			
			# Muudetud ridade arv
			$registered = mysqli_affected_rows($dbc);
			
			echo " ".$registered." rida andmebaasis muudetud.";
			
			
		}else{
			echo "Palun täida kõik väljad!";
		}
		
	}else{
		echo "Error!";
	}
	
?>