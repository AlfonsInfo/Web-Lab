<?php 
 ?>
<?php 
// var_dump($_GET) ?>

<?php 
    require 'function.php';

?>

<?php 
var_dump(validateDataPost(['submit']));
    if(!validateDataPost(['submit'])){
        header("Location: index.php");
        exit;
    }else{
        var_dump($_POST);
    }
?>