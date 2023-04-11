
<?php 
//* date
    //*date : date, untuk formatter, time,mktime, strotime, carbon , dll
    $today = date('l'); //* l -> hari saja
    echo $today .' <br>';
    $today = date('d'); //* d -> tanggal
    echo $today .' <br>';
    $today = date('d-m-Y'); //* d -> tanggal
    echo $today .' <br>';
    
    $t = time();
    echo date("d-m-Y g:i a",$t) . '<br>';
    echo date($t) . '<br>';
    echo strtotime('now') . '<br>';

    echo date('l',mktime(0,0,0,4,10,2023));

    echo '<br>';
    //* String
    $sebuahString = 'mantap';
    echo strlen($sebuahString);
    
    
    //* utility
    //?var_dump
    //?isset()
    //?empty()
    //?die()
    //?sleep
    
    //* User Defined Function
    
    function mantap(){
        return  "<h2>Mantapppp</h2>";
        echo '<br>';
    }
    
    function mantap2(){
        echo 'mantap';
        echo '<br>';
    }
    
    function salam($nama = 'Admin')
    {
        echo '<br>';
        return "selamat datang $nama";
    }
    echo mantap();
    mantap2();
    echo salam('alfons');
    echo salam();

?>