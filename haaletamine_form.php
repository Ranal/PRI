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
			# Salvestan andmed andmebaasi
			$kandidaadinr = substr($kandidaat, 0, 3);
			mysqli_query($dbc, "INSERT INTO valikud(Isikukood,KandidaadiNr) VALUES('$isikukood', '$kandidaadinr')");
			
			# Muudetud ridade arv
			$registered = mysqli_affected_rows($dbc);
			
			echo " ".$registered." rida andmebaasis muudetud.";
            echo "<h4>Teie valik:<h4>";
	       include("valik.php");

		}else{
			echo "<script type='text/javascript'>alert('Palun täitke kõik väljad!')</script>";
		}
		
	}else{
		echo "<button onclick='myFunction()'>Click</button>";
	}

?>
