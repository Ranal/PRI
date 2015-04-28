<?php
	require_once('auth.php');
?>

<!DOCTYPE html>

<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    
		<!-- Bootstrap core CSS -->
	    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
	    <!-- Custom styles for this template -->
		<link rel="stylesheet" type="text/css" href="assets/css/custom.css">
	
	    <title>E-valimised</title>
	
	</head>
	<body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://evpri.cs.ut.ee/index-members.php">E-valimised</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="http://evpri.cs.ut.ee/index-members.php">Avaleht</a></li>
            <li><a href="http://evpri.cs.ut.ee/haaletamine.php">Hääletamine</a></li>
            <li><a href="http://evpri.cs.ut.ee/kandideerimine.php">Kandideerimine</a></li>
            <li><a href="http://evpri.cs.ut.ee/statistika-members.php">Statistika</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
	        <li><a href="http://evpri.cs.ut.ee/logout.php">Logi välja</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    

    <div class="container">
        <div class="content">
	    
<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		# Formi väärtused
		$erakond = $_POST["erakond"];
		$kandidaat = $_POST["kandidaat"];
		
		# Minna if-i kui valitud väljad ei ole tühjad
		// if(!empty($isikukood)){
			
			# Ühendame andmebaasiga
			include("connection.php");
			
			# Saame kasutada connection.php muutujaid include tõttu
			# Salvestan andmed andmebaasi
			$kandidaadinr = substr($kandidaat, 0, 3);
			mysqli_query($dbc, "INSERT INTO valikud(KandidaadiNr) VALUES('$kandidaadinr')");
			
			# Muudetud ridade arv
			$registered = mysqli_affected_rows($dbc);
			
			//echo " ".$registered." rida andmebaasis muudetud.";
            echo "<br /><br />";
            echo "<h4>Teie valik:<h4><hr />";
	       include("valik.php");

		/*}else{
            echo "<script type='text/javascript'>alert('Palun täitke kõik väljad!')
            </script>";
			echo '<a href="http://evpri.cs.ut.ee/haaletamine.html">Tagasi hääletama</a>';
		}
		*/
		
	}else{
		echo "<script type='text/javascript'>alert('Ilmnes viga, proovige uuesti!')</script>";
        echo '<hr /><h4><a href="http://evpri.cs.ut.ee/index-members.php">Tagasi avalehele</a></h4>';
        
    }

?>
			  
		 
		</div>
      </div>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    
	</body>
</html>
