<?php
    try{
        $dsn = 'mysql:dbname=sinhvien;host=localhost';
        $user = 'root';
        $password = '';
        $connect = new PDO($dsn, $user, $password);
    }
    catch(PDOException $pe){
        echo $pe->getMessage();
    }  
?>