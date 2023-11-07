<?php
    include('connectdb.php');
    if(isset($_POST['submit'])){
        if(isset($_POST['hoten']) && isset($_POST['diem']) && isset($_POST['masv'])){
            $hoten = $_POST['hoten'];
            $masv = $_POST['masv'];
            $diem = $_POST['diem'];
            $sql = "INSERT INTO `diem` (`hoten`, `masv`, `diem`) VALUES ('$hoten', '$masv', '$diem')";
            $stmt = $connect -> prepare($sql);
            $query = $stmt -> execute();
            if($query){
                header('location:index.php');
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
                        <td>Full name </td>
                        <td><input type="text" name ="hoten"></td>
                    </tr>
                    <tr>
                        <td>Student ID </td>
                        <td><input type="text" name ="masv"></td>
                    </tr>
                    <tr>
                        <td>Score </td>
                        <td><input type="text" name ="diem"></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" name= "submit">Save</button>
        </form>
    </div>
</body>
</html>