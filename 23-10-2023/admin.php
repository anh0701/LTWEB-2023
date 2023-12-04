
<?php
    include('session.php');
    include("connect.php");
    $sql = "select * from product";
    $query = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sinhvien</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <button><a href="add.php">ADD</a></button>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ten san pham</th>
                    <th>Bao hanh</th>
                    <th>Gia</th>
                    <th>Con hang</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if($query){
                        while($row = $query -> fetch_assoc()){
                            
                ?>
                <tr>
                    <td><?php echo $row['id']?></td>
                    <td><?php echo $row['name']?></td>
                    <td><?php echo $row['warranty']?></td>
                    <td><?php echo $row['price']?></td>
                    <td><?php echo $row['status']?></td>
                    <span>
                        <td>
                            <a href="edit.php?ID=<?php echo $row['id']?>">Edit</a> 
                            <a href="delete.php?ID=<?php echo $row['id']?>">Delete</a>
                        </td>
                    </span>
                </tr>

                <?php
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>