//*-------------------
// console.log(nama2)
var nama2 = 'alfons'

console.log(sayHello())

var nama = 'alfonsus'
var umur = 20


// console.log(sayHello)
function sayHello()
{
    return(`say Hello to ${nama}, ${umur}`)
}
// console.log(sayHello())
console.log(sayHello())
//* mengembalikan undefined 
//* nama belum didefinisikan
// console.log(nama)
//* Uncaught ReferenceErorr : nama is not defined
// console.log(this)
// console.log(window)
//! karena pada javascript terdapat fase creation dan execution

//? pada creation phase pada Global Context
//* semua variabel akan diset dengan undefined
//* function diisi dengan code functionnya
//* windows = global object
//* this = window

//* function akan membuat Local Execution Context
//* yang didalamnya terdapat creation dan execution phase

//* 1. Dicatat dulu semua var, function - var diisi dengan undeifned, function diisi dengan codenya
//* 2. kemudian dieksekusi, saat masuk ke pemanggilan function , akan pindah ke context function. 
//* 3. dicontext function terjadi fase yag sama yaitu creation dan execution fase)