<?php
$conn = mysqli_connect("localhost", "root","","10541");

// var_dump($connection);
function query($query){
    global $conn;
    $result = mysqli_query($conn,$query);
    $rows = [];
    while( $row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}
?>