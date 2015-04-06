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
		<!-- Custom javascript -->
		<script src="assets/js/custom.js"></script>
		
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
            <li class="active"><a href="http://evpri.cs.ut.ee/haaletamine.php">Hääletamine</a></li>
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
	     
	 	<h1>Hääletamine</h1>
        <p class="lead">Lõpuni on jäänud:</p>
         <script>
            TargetDate = "03/22/2016 4:00 PM";
            CountActive = true;
            ForeColor = "black";
            CountStepper = -1;
            LeadingZero = true;
            DisplayFormat = "%%D%% päeva, %%H%% tundi, %%M%% minutit, %%S%% sekundit";
            FinishMessage = "It is finally here!";
         </script>
         <script language="JavaScript" src="http://scripts.hashemian.com/js/countdown.js"></script>
        <p></p>
        
	 	<form role="form" method="post" action="haaletamine_form.php">
		<!-- Ajutine! Kuniks tuleb autentimine -->
  		<!--
	  		TODO: Prepopulate from database!
	  		Kuvab valikud otse andmebaasi 'ringkonnad' tabelist. Sellisel kujul:
	  		<option value="ringkonnaID">ringkonnaNimetus</option 
	  		Mingi lisainfo: http://goo.gl/hxKhOh
	  	 -->
  		<div class="form-group">
  		<label for="ringkond">Ringkond:</label>
  		<select class="form-control" id="ringkond" name="ringkond" onchange="kuvaRingkond()">
	  	<option selected="selected">Vali ringkond</option>
  		<option value="1">Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa</option>
	    <option value="2">Tallinna Kesklinna, Lasnamäe ja Pirita linnaosa</option>
	    <option value="3">Tallinna Mustamäe ja Nõmme linnaosa</option>
	    <option value="4">Harju- ja Raplamaa</option>
	    <option value="5">Hiiu-, Lääne- ja Saaremaa</option>
	    <option value="6">Lääne-Virumaa</option>
	    <option value="7">Ida-Virumaa</option>
	    <option value="8">Järva- ja Viljandimaa</option>
	    <option value="9">Jõgeva- ja Tartumaa</option>
	    <option value="10">Tartu linn</option>
	    <option value="11">Võru-, Valga- ja Põlvamaa</option>
	    <option value="12">Pärnumaa</option>
  		</select>
  		</div>
  		<!--
	  		TODO: Prepopulate from database!
	  		Kuvab valikud otse andmebaasi 'erakonnad' tabelist. Sellisel kujul:
	  		<option value="erakonnaID">erakonnaNimi</option 
	  	 -->
  		<div class="form-group">
  		<label for="erakond">Erakond:</label>
  		<select class="form-control" id="erakond" name="erakond" onchange="kuvaErakond()">
  		<option selected="selected">Vali erakond</option>
  		<option value="1">Erakond 1</option>
	    <option value="2">Erakond 2</option>
	    <option value="3">Erakond 3</option>
	    <option value="4">Erakond 4</option>
	    <option value="5">Erakond 5</option>
  		</select>
  		</div>
  		<!--
	  		TODO: Prepopulate from database!
	  		Kuvab valikud otse andmebaasi 'kandidaadid' tabelist. Sellisel kujul:
	  		<option value="kandidaadiID">kandidaadiID, Eesnimi, Perekonnanimi</option 
	  	 -->
  		<div class="form-group">
  		<label for="kandidaat">Kandidaat:</label>
  		<select class="form-control" id="kandidaat" name="kandidaat" onchange="kuvaKandidaat()">
	  	<option selected="selected">Vali kandidaat</option>
  		<option value="100">100, Pavel Raav</option>
  		<option value="101">101, Ranal Saron</option>
  		<option value="102">102, Ingrid Sarap</option>
  		</select>
	 	</div>
  		<button type="submit" class="btn btn-default">Kinnita valik</button>
		</form>
		
		<br>
		<blockquote>
		<div class="justify">
		Teie valikud:<br>
		<div id="valitudRingkond"></div>
        <div id="valitudErakond"></div>
		<div id="valitudKandidaat"></div>
		</div>
		</blockquote>
      </div>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    
	</body>
</html>