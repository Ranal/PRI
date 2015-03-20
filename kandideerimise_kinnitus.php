<?php
$con=mysqli_connect("localhost","pri","praksiv2rk","pri");
// Kontrollin ühendust
if (mysqli_connect_errno())
  {
  echo "Andmebaasiga ühendumine ebaõnnestus. Error: " . mysqli_connect_error();
  }

$sql="SELECT kandidaadid.KandidaadiID, kandidaadid.Eesnimi, kandidaadid.Perekonnanimi FROM kandidaadid ORDER BY KandidaadiID DESC LIMIT 1";

if ($result=mysqli_query($con,$sql))
  {
  // Tõmban andmebaasist read
  // TODO: Kuvada ka ERAKOND, RINGKOND
  while ($row=mysqli_fetch_row($result))
    {
    printf ("<h3>Kandidaat number %s, %s %s</h3>\n",$row[0],$row[1],$row[2]);
    }
  // Vabasta tulemusega seotud mälu
  mysqli_free_result($result);
}

mysqli_close($con);
?>

<a href="http://evpri.cs.ut.ee">Tagasi avalehele</a>