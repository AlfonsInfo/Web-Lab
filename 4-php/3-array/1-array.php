<?php
//* cara lama , sebelum php 5.4
$array1 = array('alfons','mantap','wooy');
var_dump($array1);
echo "<br>";
$array2 = [2,3,2,32,3,21,3];
var_dump($array2);
echo "<br>";
$array2[0] = 4;
var_dump($array2);
print_r($array2); //* lebih elegan untuk array
foreach($array2 as $element){
    echo "<br>";
    echo $element;
}

//*array assosiatif

$Mhs1 = [
    "nama" => "alfons",
    "umur" => "21",
];
$Mhs2 = [
    "nama" => "ucup",
    "umur" => "21",
];
$Mhs3 = [
    "nama" => "otong sikeren",
    "umur" => "21",
];

$mhsAll = [$Mhs1,$Mhs2,$Mhs3];

var_dump($Mhs1);
echo "<br>";

print_r($mhsAll);
?>