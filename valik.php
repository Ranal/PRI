<?php
include("connection.php");
// Kontrollin ühendust
if (mysqli_connect_errno())
  {
  echo "Andmebaasiga ühendumine ebaõnnestus. Error: " . mysqli_connect_error();
  }

$sql="SELECT valikud.KandidaadiNr, kandidaadid.Eesnimi, kandidaadid.Perekonnanimi FROM valikud JOIN kandidaadid ON valikud.KandidaadiNr =kandidaadid.KandidaadiID AND valikud.ValikuID=(SELECT MAX(valikud.ValikuID) FROM valikud)";

if ($result=mysqli_query($dbc,$sql))
  {
  // Tõmban andmebaasist read
  while ($row=mysqli_fetch_row($result))
    {
    printf ("<h3>Kandidaat number %s, %s %s</h3>\n",$row[0],$row[1],$row[2]);
    }
  // Vabasta tulemusega seotud mälu
  mysqli_free_result($result);
}

mysqli_close($dbc);
?>

<a href="http://evpri.cs.ut.ee">Tagasi avalehele</a>