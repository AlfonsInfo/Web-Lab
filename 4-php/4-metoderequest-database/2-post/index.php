<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post</title>
</head>
<body>
    <form action="hasil.php " method="post">
        <input type="text" name="nama" placeholder="nama">
        <br>
        <input type="text" name="umur" placeholder="umur">
        <br>
        <input type="text" name="domisili" placeholder="domisili">
        <button type="submit" name="submit">Submit</button>
    </form>
</body>
</html>

<?php var_dump($_POST)?>
