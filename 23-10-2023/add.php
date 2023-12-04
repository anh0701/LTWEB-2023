<?php
include("session.php");
    include('connect.php');
    if(isset($_POST['submit'])){
        if(isset($_POST['ten']) && isset($_POST['gia']) && isset($_POST['baohanh']) && isset($_POST['conhang'])){
            $ten = $_POST['ten'];
            $baohanh = $_POST['baohanh'];
            $gia = $_POST['gia'];
            $conhang = $_POST['conhang'];
            $sql = "INSERT INTO `product` (`name` , `status`,  `warranty`, `price`) VALUES ('$ten', '$conhang', '$baohanh', '$gia')";
            $query = $conn->query($sql);;
            if($query){
                header('location:admin.php');
                exit;
            }
            else{
                echo "Fail";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>add student</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <form method = "post">
            <table class="table table-inverse">
                <tbody>
                    <tr>
                        <td>Ten san pham </td>
                        <td><input type="text" name ="ten"></td>
                    </tr>
                    <tr>
                        <td>Bao hanh </td>
                        <td><input type="text" name ="baohanh"></td>
                    </tr>
                    <tr>
                        <td>Gia </td>
                        <td><input type="text" name ="gia"></td>
                    </tr>
                    <tr>
                        <td>Con hang </td>
                        <td><input type="text" name ="conhang"></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" name= "submit">Save</button>
        </form>
    </div>
</body>
</html>