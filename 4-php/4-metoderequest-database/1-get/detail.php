<?php
    // var_dump($_GET);
    function validateDataGet($key){
        foreach($key as $k){
            if(!isset($_GET[$k])){
                return false;
            }
        }
        return true;
    }
    if(validateDataGet(['nama','npm','jurusan','foto'])){
        //* redirect
        header("Location: index.php");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail page</title>
</head>
<body>
    <ul>
        <li><?= $_GET['nama'] ?></li>
        <li><?= $_GET['npm'] ?></li>
        <li><?= $_GET['jurusan'] ?></li>
        <li><?= $_GET['foto'] ?></li>
    </ul>
</body>
</html>