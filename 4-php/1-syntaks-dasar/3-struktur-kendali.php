<?php

$script = "<script>
var a = prompt('bikin script dari php');
// e = document.getElementsByTagName('body');
// console.log(e); 

</script>
";
// echo $script;
?>

<?php
    $data = [[
        "nama" => "Alfons",
        "umur" => 20 
    ],
    [
        "nama" => "Ucup",
        "umur" => 32
    ]
    ]

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,th,tr,td{
            border : 1px solid black;
            padding: 10px;
        }

        table{
            border-collapse: collapse;

        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Umur</th>
        </tr>
        <tbody>
            <?php 
                // var_dump($data);
                $i = 1;
                foreach($data as $d){
                    echo "
                    <tr>
                        <td>$i</td>
                        <td>{$d['nama']}</td>
                        <td>{$d['umur']}</td>
                    </tr>";
                    // print()  
                $i++;
                }
            ?>
        </tbody>
    </table>
    <br>
    <table>
        <?php for($i = 0 ;$i<10;$i++): 
            if($i%2 == 0) :  
            ?>
            <tr style="background-color: blue;">
                <?php for($j = 0; $j<10;$j++) :?>
                    <td><?= $i, $j ?></td>
                <?php endfor;?>
            </tr>
            <?php else :?>
                <tr style="background-color: tomato;">
                    <?php for($j = 0; $j<10;$j++) :?>
                        <td><?= $i, $j ?></td>
                    <?php endfor;?>
                </tr>
            <?php endif ?>

        <?php endfor ?>
    </table>
    <br>
    <table>
        <?php for($i = 0 ;$i<10;$i++) :?>
            <tr style="background-color: <?= $i % 2 == 0 ? 'blue' : 'tomato' ?>">
                <?php for($j = 0; $j<10;$j++) :?>
                    <td><?= $i, $j ?></td>
                <?php endfor;?>
            </tr>
        <?php endfor ?>

    </table>
    <?php
        $i = TRUE;
        $i = false;
        ($i) ? $i = 'benar' : $i =  'salah';
        // ($i) ? (echo 'test') : $i =  'salah';
        echo $i;
    ?>
</body>
</html>