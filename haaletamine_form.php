<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		# Formi väärtused
		$isikukood = $_POST["isikukood"];
		$ringkond = $_POST["ringkond"];
		$erakond = $_POST["erakond"];
		$kandidaat = $_POST["kandidaat"];
		
		# Minna if-i kui valitud väljad ei ole tühjad
		if(!empty($isikukood)){
			
			# Ühendame andmebaasiga
			include("connection.php");
			
			# Saame kasutada connection.php muutujaid include tõttu
			# Inserting values to database
			
			$kandidaadinr = substr($kandidaat, 0, 3);
			mysqli_query($dbc, "INSERT INTO valikud(Isikukood,KandidaadiNr) VALUES('$isikukood', '$kandidaadinr')");
			
			# Muudetud ridade arv
			$registered = mysqli_affected_rows($dbc);
			
			echo " ".$registered." rida andmebaasis muudetud.";
			
			# Kuvamiseks SELECT lause koos JOIN lausega
			# Näiteks:
			# Isikukood, KandidaadiNr Kandidaadi eesnimi, perekonnanimi vms
			#if $registered = 1{
			#$tulemus = mysqli_query($dbc, "SELECT isikukood)
			#}
			
			
		}else{
			echo "Palun täida kõik väljad!";
		}
		
	}else{
		echo "Error!";
	}
	echo "<hr>Tulemus:<br>";
	#echo $tulemus
?>

