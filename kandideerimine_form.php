<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		# formi väärtused
		$fname = $_POST["fname"];
		$lname = $_POST["lname"];
		$erakond = $_POST["erakond"];
		$ringkond = $_POST["ringkond"];
		
		# Minna if-i kui valitud väljad ei ole tühjad
		if(!empty($fname) && !empty($lname) && !empty($ringkond) && !empty($erakond)){
			
			# Ühendame andmebaasiga
			include("connection.php");
			
			# Saame kasutada connection.php muutujaid include tõttu
			# Salvestan andmed andmebaasi
			mysqli_query($dbc, "INSERT INTO kandidaadid(ErakonnaID,RingkonnaID,Eesnimi,Perekonnanimi) VALUES('$erakond', '$ringkond', '$fname', '$lname')");
			
            # Peale kandideerimist muutub 'ringkonnad' tabelis vastava ringkonna 'kandidaatideArv' +1 võrra
            $sql = "UPDATE ringkonnad SET KandidaatideArv = KandidaatideArv + 1 WHERE RingkonnaID = '$ringkond'";
            mysqli_query($dbc, $sql);
            
            # Muudetud ridade arv
			$registered = mysqli_affected_rows($dbc);
			
			//echo " ".$registered." rida andmebaasis muudetud.";
            include("kandideerimise_kinnitus.php");
            
			
			
		}else{
			echo "<script type='text/javascript'>alert('Palun täitke kõik väljad!')
            </script>";
			echo '<a href="http://evpri.cs.ut.ee/haaletamine.html">Tagasi hääletama</a>';
            
		}
		
	}else{
		echo "<script type='text/javascript'>alert('Ilmnes viga, proovige uuesti!')</script>";
        echo '<a href="http://evpri.cs.ut.ee/index-members.php">Tagasi avalehele</a>';
	}
	
?>