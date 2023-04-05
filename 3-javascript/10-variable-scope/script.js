//* global scope
var a = 20 ; //* ini berlaku secara menyeluruh


if(a==20)
{
    var b = 100; //* function scope , bisa keluar dari { } 
}
console.log(a)
console.log(b)


function lipatGanda(b)
{
    //* selama fungsi dijalankan variable diluar dapat diakses
    console.log("akses a dari dalam fungsi" + a)
    console.log("akses b dari dalam fungsi" + b)
    var c = 'mantappp'
    return b*100
}
console.log(c) //* c tidak bisa diakses dari luar fungsi 
var c = 'bukan c yang didalm lipatGanda gaess ga bisa diakses ituu'
lipatGanda(b)
console.log(b)
console.log(c) //* c tidak bisa diakses dari luar fungsi 


function rekursif(b)
{
    console.log('nilai sekarang : ' + b)
    if(b<10) //* base case untuk memberhentikan fungsi
    {
        b = rekursif(b+1); //* nilai dari rekursif harus ditampung 
    }
    return b;   
}
var hasilRekursif = rekursif(1)
console.log(hasilRekursif)