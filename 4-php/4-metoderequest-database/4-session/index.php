<?php
//* Konsep Session 
//* Session -> login
session_start();

$_SESSION["nama"] = "alfonsus";
var_dump($_SESSION  )

//* 1 sesi chrome close / komputer restart
//* logout session_unset
//* logout session_destroy
?>