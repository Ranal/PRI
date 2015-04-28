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
    <!-- Custom javascript -->
    <script src="assets/js/custom.js"></script>
      
      <title>
        E-valimised
      </title>
      
  </head>
  <body>
    
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">
              Toggle navigation
            </span>
            <span class="icon-bar">
            </span>
            <span class="icon-bar">
            </span>
            <span class="icon-bar">
            </span>
          </button>
          <a class="navbar-brand" href="http://evpri.cs.ut.ee/index-members.php">
            E-valimised
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="http://evpri.cs.ut.ee/index-members.php">
                Avaleht
              </a>
            </li>
            <li class="active">
              <a href="http://evpri.cs.ut.ee/haaletamine.php">
                Hääletamine
              </a>
            </li>
            <li>
              <a href="http://evpri.cs.ut.ee/kandideerimine.php">
                Kandideerimine
              </a>
            </li>
            <li>
              <a href="http://evpri.cs.ut.ee/statistika-members.php">
                Statistika
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="g-signin2" data-onsuccess="onSignIn">
              </div>
            </li>
            <li>
              <a href="http://evpri.cs.ut.ee/logout.php">
                Logi välja
              </a>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
      </nav>
      
      <div class="container">
        
        <div class="content">
          
          <h1>
            Hääletamine
          </h1>
          <p class="lead">
            Lõpuni on jäänud:
          </p>
          <script>
            TargetDate = "03/22/2016 4:00 PM";
           CountActive = true;
           ForeColor = "black";
           CountStepper = -1;
           LeadingZero = true;
           DisplayFormat = "%%D%% päeva, %%H%% tundi, %%M%% minutit, %%S%% sekundit";
           FinishMessage = "It is finally here!";
       </script>
       <script language="JavaScript" src="http://scripts.hashemian.com/js/countdown.js">
       </script>
       <p>
       </p>
       
       <form role="form" name="form" method="POST" action="haaletamine_form.php">
         
         <div class="form-group">
           <label for="erakond">
             Erakond:
           </label>
           <?php
require "connection_pdo.php";// connection to database 
echo "
<select class ='form-control' name=erakond id='s1' onchange=AjaxFunction();>
";
echo "
<option selecter='selected'>
Vali erakond
</option>
"; 
$sql="select * from erakonnad "; // Query to collect data from table 
foreach ($dbo->
query($sql) as $row) {
echo "
<option value=$row[ErakonnaID]>
$row[ErakonnaNimi]
</option>
";
}
echo "
</select>
";
?>
          </div>
          
          <div class="form-group">
            <label for="kandidaat">
              Kandidaat:
            </label>
            <select class="form-control" name=kandidaat id='s2' onchange="kuvaRingkond(this.value)">
              <option selecter="selected">Vali kandidaat</option>
            </select>
          </div>
          
          <div id="txtHint">
            <b>
            </b>
          </div>
          
          <button type="submit" class="btn btn-default">
            Kinnita valik
          </button>
       </form>
       <p>
       </p>
       
       <br>
       
       
       <!--
<blockquote>
<div class="justify">
Teie valikud:
<br>
<div id="valitudRingkond">
</div>
<div id="valitudErakond">
</div>
<div id="valitudKandidaat">
</div>
</div>
</blockquote>
-->
      </div>
      </div>
      <!-- /.container -->
      
      
      <!-- Bootstrap core JavaScript
================================================== -->
      <script src="assets/js/jquery.js">
      </script>
      <script src="assets/js/bootstrap.js">
      </script>
      <script src="https://apis.google.com/js/platform.js" async defer>
      </script>
      
  </body>
</html>
