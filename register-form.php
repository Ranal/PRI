<?php
	session_start();
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
<?php
	if( isset($_SESSION['ERRMSG_ARR']) && is_array($_SESSION['ERRMSG_ARR']) && count($_SESSION['ERRMSG_ARR']) >0 ) {
		echo '<ul class="err">';
		foreach($_SESSION['ERRMSG_ARR'] as $msg) {
			echo '<li>',$msg,'</li>'; 
		}
		echo '</ul>';
		unset($_SESSION['ERRMSG_ARR']);
	}
?>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://evpri.cs.ut.ee/">E-valimised</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="http://evpri.cs.ut.ee/">Avaleht</a></li>
            <li><a href="http://evpri.cs.ut.ee/haaletamine.php">Hääletamine</a></li>
            <li><a href="http://evpri.cs.ut.ee/kandideerimine.php">Kandideerimine</a></li>
            <li><a href="http://evpri.cs.ut.ee/statistika.php">Statistika</a></li>
          </ul>
            <ul class="nav navbar-nav navbar-right">
            <li><a href="http://evpri.cs.ut.ee/login-form.php">Logi sisse</a></li>
            <li><a href="http://evpri.cs.ut.ee/register-form.php">Registreeru</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    
    <div class="container form">
        <h1>Registreerumine</h1>
	 	<p class="lead">Kasutajaks registreerimiseks täida allolev vorm:</p>
        
	 	<form role="form" method="post" action="register-exec.php">
	 	<div class="form-group">
	 	<label for="fname">Eesnimi:</label>
	 	<input type="text" class="form-control" id="fname" name="fname">
  		</div>
  		<div class="form-group">
  		<label for="lname">Perekonnanimi:</label>
  		<input type="text" class="form-control" id="lname" name="lname">
  		</div>
  		<div class="form-group">
  		<label for="lname">Kasutajanimi:</label>
  		<input type="text" class="form-control" id="login" name="login">
  		</div>
  		<div class="form-group">
  		<label for="lname">Parool:</label>
  		<input type="password" class="form-control" id="password" name="password">
  		</div>
  		<div class="form-group">
  		<label for="lname">Parooli kinnitus:</label>
  		<input type="password" class="form-control" id="cpassword" name="cpassword">
  		</div>  		  		
  		<button type="submit" class="btn btn-default">Registreeri</button>
		</form>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    
	</body>
</html>