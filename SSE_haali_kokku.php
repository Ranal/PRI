<?php
include("connection.php");
# Uuendab automaatselt andmeid ilma et oleks vaja lehte reloadida.
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$sql="SELECT COUNT(ValikuID) FROM valikud";

if ($result=mysqli_query($dbc,$sql))
  {
  while ($row=mysqli_fetch_row($result))
    { 
      echo "data: Kokku on seni antud {$row[0]}\n";
      echo "data: häält.\n\n";
      flush();
    }  
  mysqli_free_result($result);
}

mysqli_close($dbc);
?> 