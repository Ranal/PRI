    <!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','pri','praksiv2rk','pri');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"pri");
$sql_abi="SELECT RingkonnaID FROM kandidaadid WHERE KandidaadiID = '".$q."'";
$result_abi = mysqli_query($con,$sql_abi);
$ringkonna_id = mysqli_fetch_array($result_abi);
$vastus = $ringkonna_id[0];
$sql="SELECT Nimetus FROM ringkonnad WHERE RingkonnaID = '".$vastus."'";
$result = mysqli_query($con,$sql);

echo "<table class='table table-bordered' align=center>
<tr>
<th>Ringkond</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['Nimetus'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>