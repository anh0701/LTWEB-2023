<?php
    include('connect.php');
    $ID = $_GET['ID'];
    $sql = "DELETE FROM product WHERE id = '$ID'";
    $stmt = $connect -> prepare($sql);
    $query = $stmt -> execute();
    header("location:admin.php");
?>