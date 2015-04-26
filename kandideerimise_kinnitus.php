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
include("connection.php");
// Kontrollin ühendust
if (mysqli_connect_errno())
  {
  echo "Andmebaasiga ühendumine ebaõnnestus. Error: " . mysqli_connect_error();
  }

$sql="SELECT kandidaadid.KandidaadiID, kandidaadid.Eesnimi, kandidaadid.Perekonnanimi FROM kandidaadid ORDER BY KandidaadiID DESC LIMIT 1";

if ($result=mysqli_query($dbc,$sql))
  {
  while ($row=mysqli_fetch_row($result))
    {
    printf ("<br /><br /><h4>Kandideerimine õnnestus! Teie andmed:</h4><hr /><h3>Kandidaat number %s, %s %s</h3>\n",$row[0],$row[1],$row[2]);
    }
  // Vabasta tulemusega seotud mälu
  mysqli_free_result($result);
}

mysqli_close($dbc);
?>
            <hr /><h4><a href="http://evpri.cs.ut.ee">Tagasi avalehele</a></h4>
			  
		 
		</div>
      </div>
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    
	</body>
</html>