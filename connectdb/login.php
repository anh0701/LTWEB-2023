<?php
session_start();
include 'connectdb.php';
if (isset($_POST['submit'])) {
    if (isset($_POST['ten']) && isset($_POST['matkhau'])) {
        $ten     = $_POST['ten'];
        $matkhau = $_POST['matkhau'];
        dangnhap($ten, $matkhau);
    }
}

function dangnhap($username, $password)
{
    global $conn;
    $query = "select * from user where username = '$username' and password = '$password'";
    $stmt  = $conn -> prepare($query);
    // $stmt -> bindParam(1, $username);
    // $stmt -> bindParam(2, $password);
    $stmt -> execute();
    $row = $stmt -> fetch(PDO::FETCH_ASSOC);
    if ($row) {
        $_SESSION['username'] = $username;
        header('location: index.php');
    } else {
        echo 'đăng nhập sai rồi nè';
    }
}
?>
<!DOCTYPE>
<html lang='en'>

<head>
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
</head>

<body>
    <div class='container'>
        <div class='col-4 my-5'>
            <h4>Đăng nhập tài khoản</h4>
        </div>
        <form class='form' action="" method='post'>
            <div class='form-group'>
                <label for=''>Tên</label>
                <input type='text' class='form-control' name='ten' value=''>
            </div>
            <div class='form-group'>
                <label for=''>Mật khẩu</label>
                <input type='password' class='form-control' name='matkhau'value=''>
            </div>
            <div class='form-group'>
                <input type='submit' class='btn btn-primary' name='submit' value='Submit'>
            </div>
        </form>
    </div>
</body>

</html>
