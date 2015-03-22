<?php
include("connection.php");
$sql = "Select erakonnad.ErakonnaNimi, COUNT(kandidaadid.KandidaadiID) AS Kandidaate FROM kandidaadid LEFT JOIN erakonnad ON kandidaadid.ErakonnaID = erakonnad.ErakonnaID GROUp BY ErakonnaNimi";
$result = mysqli_query($dbc, $sql);
echo "<table>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr><td>" . $row['ErakonnaNimi']  . "</td><td>" . $row['Kandidaate'] . "</td></tr>";
}

echo "</table>";

?>