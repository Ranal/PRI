<?php
include("connection.php");
# Uuendab automaatselt andmeid ilma et oleks vaja lehte reloadida.
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$sql="SELECT Eesnimi, Perekonnanimi, ID, MAX(popimad) FROM
(SELECT KandidaadiNr AS ID, COUNT(KandidaadiNr) AS popimad FROM valikud GROUP BY KandidaadiNr) AS Popim
JOIN kandidaadid on ID = KandidaadiID";

if ($result=mysqli_query($dbc,$sql))
  {
  while ($row=mysqli_fetch_row($result))
    { 
      echo "data: nr {$row[2]} - {$row[0]} {$row[1]}\n";
      echo "data: ({$row[3]} häält)\n\n";
      flush();
    }  
  mysqli_free_result($result);
}

mysqli_close($dbc);
?> 