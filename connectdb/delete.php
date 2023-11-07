<?php
    include('connectdb.php');
    $ID = $_GET['ID'];
    $sql = "DELETE FROM diem WHERE ID = '$ID'";
    $stmt = $connect -> prepare($sql);
    $query = $stmt -> execute();
    header("location:index.php");
?>