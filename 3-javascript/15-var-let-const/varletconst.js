//* IIFE : Immediately Invoked Function Expression
//* SIAF : Self Invoking Anonymous Function
console.log(x)
var x = 10;


// console.log(y)
// let y = 10; //* cannot access y before initializations
// let x = 1;

//* Perbedaan Var dan Let yang kedua
for ( var i = 0 ;i<5;i++)
{
    console.log(i)
}
console.log(i)

//* Versut let
// for ( let j = 0 ;j<5;j++)
// {
//     console.log(j)
// }
// console.log(j)

//* IIFE fungsi yang dijalankan langsung

// (function(){
//     for(var i = 0; i< 10 ;i++)
//     {
//         console.log(i)
//         // console.log('dalam fungsi',i)
//         // console.log('dalamm fungsi ' + i)
//     }
// }());

// console.log(i)

//* const tidak bisa diisi ulang
//* const digunakan untuk meminimalisir perubahan state (tp nilai dalemannya bisa diubah)