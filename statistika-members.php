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
            <li><a href="http://evpri.cs.ut.ee/kandideerimine.php">Kandideerimine</a></li>
            <li class="active"><a href="http://evpri.cs.ut.ee/statistika-members.php">Statistika</a></li>
          </ul>
            <ul class="nav navbar-nav navbar-right">
            <li><div class="g-signin2" data-onsuccess="onSignIn"></div></li>
	        <li><a href="http://evpri.cs.ut.ee/logout.php">Logi välja</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

     <div class="content">
	 <h1>Statistika</h1>
	 
        <hr>
        
        <!-- Statistika kuvamine läbi SSE (Server-side events)- uuendab andmeid laivis ilma et lehte refreshida oleks vaja. -->
        <p class="text-center text-uppercase">Häälte arv kokku:</p>
        <div id="antud_haali"></div>
        <hr>
        <p class="text-center text-uppercase">Kõige rohkem hääli kogunud kandidaat:</p>

        <div id="popim_kandidaat"></div>
        
        <hr>
        <script>
            if(typeof(EventSource) !== "undefined") {
                var source = new EventSource("SSE_haali_kokku.php");
                source.onmessage = function(event) {
                document.getElementById("antud_haali").innerHTML = event.data;
                };
                var source2 = new EventSource("SSE_top_kandidaat.php");
                source2.onmessage = function(event) {
                document.getElementById("popim_kandidaat").innerHTML = event.data;
                };
            } else {
                document.getElementById("antud_haali").innerHTML = "Sorry, your browser does not support server-sent events...";
            }
        </script>
		<!-- tabelina hääletustulemused -->
		<p class="text-center text-uppercase">Kandidaatide arv erakondade kaupa:</p>

         <?php
            include('tabel.php');
            ?>
        
    </div><!-- /.container -->
    
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    
	</body>
</html>