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
	    
	  	<div class="jumbotron">
		  <h1 class="text-center"><mark>E-valimised</mark></h1>
		  <div class="jumboPadding">
		  <p class="text-center"><mark>Elektrooniline hääletamine saabub varsti!</mark></p>
		  </div>
		  <p>
			  
			<!-- Button trigger modal -->
			<div class="text-center">
			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Tutvu kandidaatidega</button>
			</div>
			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Sulge"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">Kandidaadid</h4>
			      </div>
			      <div class="modal-body">
				    <div class="text-center">
				    <!-- TODO: Prepopulate from database -->
			        <h3>Erakond 1</h3>
			        <h4>Tallinna Haabersti, Põhja-Tallinna ja Kristiine linnaosa</h4>
			        <p class="text-uppercase">
			        102, Ranal Saron<br>
			        100, Pavel Raav<br>
			        </p>
			        <h4>Tartu linn</h4>
			        <p class="text-uppercase">
			        101, Ingrid Sarap<br>
			        </p>
					<hr>
			        <h3>Erakond 2</h3>
			        <h4>Pärnumaa</h4>
			        <p class="text-uppercase">
			        103, Rajesh Koothrappali<br>
			        107, Solpa Deine<br>
			        110, Example Example<br>
			        </p>
			        <hr>
			        <h3>Erakond 3</h3>
			        <h4>Järva- ja Viljandimaa</h4>
			        <p class="text-uppercase">
			        104, Sheldon Cooper<br>
			        106, Kandi Daat<br>
			        105, Mart Maasikas<br>
			        </p>
			        <h4>Tartu linn</h4>
			        <p class="text-uppercase">
			        109, Margus Maasik<br>
			        108, Klavia Tuur<br>
			        </p>
				    </div>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Sulge</button>
			      </div>
			    </div>
			  </div>
			</div>
			  
		 
		</div>

     <div class="content">
	     <!-- HTML & CSS Validator shortcuts -->
		 <a href="http://validator.w3.org/check?uri=evpri.cs.ut.ee&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0" target="_blank">
		 <img style="border:0;width:88px;height:31px"
            src="http://www.citricity.com/images/valid-html5.png"
            alt="Valid CSS!" />
    	 </a>
	 	 <a href="https://jigsaw.w3.org/css-validator/validator?uri=evpri.cs.ut.ee&amp;profile=css3&amp;usermedium=all&amp;warning=1&amp;vextwarning=&amp;lang=en" target="_blank">
         <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    	 </a>
    	 
		
      </div>
        
        
    </div><!-- /.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    
	</body>
</html>
