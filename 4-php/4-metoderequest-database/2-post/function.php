<?php

function validateDataPost($key){
        foreach($key as $k){
            if(!isset($_POST[$k])){
                return false;
            }
        }
        return true;
    }

    ?>