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
            <li><div class="g-signin2" data-onsuccess="onSignIn"></div></li>
            <li><a href="http://evpri.cs.ut.ee/login-form.php">Logi sisse</a></li>
            <li><a href="http://evpri.cs.ut.ee/register-form.php">Registreeru</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    
    <div class="container">

	    
		  	  
		<div class="content">


		 	<h1>Logi sisse</h1>
        
	 	<form role="form" method="post" action="login-exec.php">
	 	<div class="form-group">
  		<label for="lname">Kasutajanimi:</label>
  		<input type="text" class="form-control" id="login" name="login">
  		</div>
  		<div class="form-group">
  		<label for="lname">Parool:</label>
  		<input type="password" class="form-control" id="password" name="password">
  		</div>	  		
  		<button type="submit" class="btn btn-default">Logi sisse</button>
		</form>
    	 
		
      </div>
     </div>
    </div>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    
	</body>
</html>