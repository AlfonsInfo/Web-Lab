<?php
//* Variable Scope Beda dari Javascript

$x  = 10;

function tampilX()
{
    global $x ;
    echo $x;
    echo ' <br> ';
}

function breakLine()
{
    echo ' <br> ';
}

tampilX();
breakLine();
var_dump($GLOBALS);

// var_dump($_SERVER);
var_dump($_POST);
var_dump($_GET);


//* Dasar
//* $_GET , $_POST, $_COOKIE ,$_SESSION
?>