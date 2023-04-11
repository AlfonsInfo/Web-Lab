<?php
// * Ekstensi MySQL
// * Ekstensi MySQLi
// * PDO ( PHP Data Object)
    require 'db.php';

    //! Percobaan
    //* ambil data dari tabel
    $result = mysqli_query($conn, "SELECT * FROM member"); //* object mysqli_result
    //* ambil data mahasiswa(fetch) dari result
    //* $data1 = mysqli_fetch_row($result); //* data pertama
    //* mysqli_data_seek($result,0);
    //* $data2 = mysqli_fetch_all($result); //* semua data
    //!! mysqli_data_seek($result,0);
    //* $data3 = mysqli_fetch_assoc($result);
    //* mysqli_data_seek($result,0);
    // $data4 = mysqli_fetch_array($result);
    // mysqli_data_seek($result,0);
    // $data5 = mysqli_ fetch_object($result);
    // echo 'Row mengambil 1 baris data <br>';
    // var_dump($data1); 
    // echo 'All mengambil semua data <br> ,key index';
    // var_dump($data2[1]['2']); //* array numerik
    // echo 'Mengambil data array assoc <br?';
    // var_dump($data3['nama_member']);
    // echo 'array bisa menggunakan index dan key <br>';
    // var_dump($data4)
    // if(!$result){
    //     echo mysqli_error($conn);
    // }
    // $data = mysqlire
    // var_dump($result);
    //! AKhir dari percobaan
    //? start studi kasus
    // while ($row = mysqli_fetch_assoc($result)){
        $data = query('SELECT * FROM member');
        // var_dump($data[0]);
    // }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>
<body>
    <h1>Table</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>id_member.</th>
            <th>Aksi</th>
            <th>Nama Member</th>
            <th>Deposit</th>
        </tr>
        <?php foreach($data as $d) : ?>
            <tr>
                <td><?= $d['id_member']?></td>
                <td><a href="">Update</a> | <a href="">Hapus</a></td>
                <td><?= $d['nama_member']?></td>
                <td><?= $d['total_deposit_uang']?></td>
            </tr>
        <?php endforeach?>
    </table>
</body>
</html>