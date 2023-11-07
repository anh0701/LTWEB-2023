<?php
    include 'connectdb.php';
    if($connect){
        echo "Success!!";
    }
    else{
        echo "Fail......";
    }
    $sql = "select * from diem";
    $stmt = $connect -> prepare($sql);
    $query = $stmt -> execute();
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
                    <th>Full name</th>
                    <th>Student ID</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if($query){
                        while($row = $stmt -> fetch(PDO::FETCH_ASSOC)){
                            
                ?>
                <tr>
                    <td><?php echo $row['hoten']?></td>
                    <td><?php echo $row['masv']?></td>
                    <td><?php echo $row['diem']?></td>
                    <span>
                        <td>
                            <a href="edit.php?ID=<?php echo $row['ID']?>">Edit</a> 
                            <a href="delete.php?ID=<?php echo $row['ID']?>">Delete</a>
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