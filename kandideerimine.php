<?php
	require_once('auth.php');
?>

<!DOCTYPE html>

<html lang="en" manifest="manifest.appcache">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-signin-client_id" content="107686599663-i8bl17uhmoevdgnplnvieauctv91go5e.apps.googleusercontent.com">
	    
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
            <li><a href="http://evpri.cs.ut.ee/index-members.php">Avaleht</a></li>
            <li><a href="http://evpri.cs.ut.ee/haaletamine.php">Hääletamine</a></li>
            <li class="active"><a href="http://evpri.cs.ut.ee/kandideerimine.php">Kandideerimine</a></li>
            <li><a href="http://evpri.cs.ut.ee/statistika-members.php">Statistika</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
              <li><div class="g-signin2" data-onsuccess="onSignIn"></div></li>
	        <li><a href="http://evpri.cs.ut.ee/logout.php">Logi välja</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

     <div class="content">
	     
	 	<h1>Kandideerimine</h1>
	 	<p class="lead">Valimistel kandideerimiseks täida allolev vorm:</p>
        
	 	<form role="form" method="post" action="kandideerimine_form.php">
	 	<div class="form-group">
	 	<label for="fname">Eesnimi:</label>
	 	<input type="text" class="form-control" id="fname" name="fname">
  		</div>
  		<div class="form-group">
  		<label for="lname">Perekonnanimi:</label>
  		<input type="text" class="form-control" id="lname" name="lname">
  		</div>
        <div class="form-group">
  		<label for="erakond">Erakond:</label>
        <?php
        require "connection_pdo.php";// connection to database 
        echo "<select class ='form-control' name=erakond>";
        echo "<option selecter='selected'>Vali erakond</option>"; 
        $sql="select * from erakonnad "; // Query to collect data from table 
        foreach ($dbo->query($sql) as $row) {
            echo "<option value=$row[ErakonnaID]>$row[ErakonnaNimi]</option>";
        }
        echo "</select>";
        ?>
        </div>
        <div class="form-group">
  		<label for="ringkond">Ringkond:</label>
        <?php
        require "connection_pdo.php";// connection to database 
        echo "<select class ='form-control' name=ringkond>";
        echo "<option selecter='selected'>Vali ringkond</option>"; 
        $sql="select * from ringkonnad "; // Query to collect data from table 
        foreach ($dbo->query($sql) as $row) {
            echo "<option value=$row[RingkonnaID]>$row[Nimetus]</option>";
        }
        echo "</select>";
        ?>
		</div>
  		<button type="submit" class="btn btn-default">Kandideeri</button>
		</form>
		
      </div>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    
	</body>
</html>
