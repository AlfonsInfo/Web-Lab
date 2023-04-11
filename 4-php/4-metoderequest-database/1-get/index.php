<?php
    //* Memasukkan secara manual
    // $_GET['nama'] = 'Alfonsus Setiawan J';
    // var_dump($_GET)
    //* Memasukan data melalui URL
    //* ?key = value

    $mahasiswa = [
        [
            "npm" => "200710541",
            "nama"=> "Alfonsus Setiawan",
            "jurusan" => "Informatika",
            "foto" => "foto/profile.jpg"
        ],
        [
            "npm" => "200710542",
            "nama"=> "Ucup Surucup",
            "jurusan" => "Sistem Informasi",
            "foto" => "foto/profile.jpg"
        ],
        [
            "npm" => "200710543",
            "nama"=> "Otong Sikeren",
            "jurusan" => "Sistem Informasi",
            "foto" => "foto/profile.jpg"
        ]
    ];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>
    <ul>
        <?php  foreach($mahasiswa as $mhs) : ?>
            <li>
                <a href="detail.php?nama=<?=$mhs['nama']?>&npm=<?= $mhs['npm']?>&jurusan=<?= $mhs['jurusan']?>&foto=<?= $mhs['foto']?>"><?= $mhs['nama']?></a>
            </li>
        <?php endforeach ?>
    </ul>
</body>
</html>