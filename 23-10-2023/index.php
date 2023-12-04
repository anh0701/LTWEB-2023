<?php
    include("session.php");
    include("connect.php");
    if(!empty( $_GET['search'])){
        $dk = '%'.$_GET['ten'].'%';
        $sql = "select * from product where name like '$dk'";
    } else{
        $sql = "select * from product";

    }
    $result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div id="content">
        <div id="head-content">
            <p>sản phẩm nổi bật</p>
        </div>
        <br>
        <div class="row">
            <?php
                while($row = $result->fetch_assoc()){
            ?>
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-md-4">
                        <img width="115px" src="https://th.bing.com/th/id/R.4063542411040f662afef02456b7fcf2?rik=D6O0OFPRwmPrtw&pid=ImgRaw&r=0" alt="">
                    </div>
                    <div class="col-8">
                        <p><?php echo $row['name'] ?></p>
                        <ul>
                            <li>Bảo hành: <?php echo $row['warranty']?></li>
                            <li>Trạng thái: <?php echo $row['status']?></li>
                        </ul>
                    </div>
                </div>
                <br>
                <button id="gia">Giá: <?php echo $row['price'] ?>đ</button> 
                <button id="chitiet">Chi tiết</button>
            </div>
            <?php
                }
            ?>
            
        </div>
        <br><br>
        <form action="" method="get">
            <div>
                <span>Tên sản phẩm </span>
                <input type="text" name = "ten" onblur="check()" id="textbox">
                <br><br>
                <input name ="search" type="submit" value="Tìm kiếm">
            </div>
        </form>
    </div>
</body>
</html>