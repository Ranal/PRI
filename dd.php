<?php
@$erakond_id=$_GET['erakond_id'];

if(!is_numeric($erakond_id)){
    echo "Data Error";
    exit;
}

require "connection_pdo.php";

$sql="select Eesnimi,Perekonnanimi,KandidaadiID from kandidaadid where ErakonnaID='$erakond_id'";
$row=$dbo->prepare($sql);
$row->execute();
$result=$row->fetchAll(PDO::FETCH_ASSOC);

$main = array('data'=>$result);
echo json_encode($main);
?>