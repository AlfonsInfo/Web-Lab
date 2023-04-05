function init()
{
    // console.log(arguments)
    // let namaTes = 'Default Name';
    function tampilNama(nama)
    {
        console.log(arguments)
        if(nama!=null)
            console.log(nama)
        // if(nama==null)
        //     console.log(namaTes)
        
    }
    return tampilNama; //* fungsi tidak langsung dijalankan 
    // return tampilNama(); 
    //* jika gini parameter tampilNama tidak bisa didefinisikan
    //* oleh karena itu kita butuh expression
}

// init(()=>{console.log('test')})
//*panggilNama menjalankan init
let panggilNama = init('ayam'); //* arguments dari init
// init('woyy')
//*panggilNama berada pada konteks init.
panggilNama('test') 
// console.log(typeof(panggilNama))



function init2()
{

    function tampilParams(a)
    {
        console.log(a)
    }

    //* bisa return fungsi langsung
    return tampilParams //* menampilkan tampilParams yang belum dijalankan 
}

let fungsi = init2() //* fungsi tampilparams2
fungsi('test') //* oleh karena fungsi = tampilparams2 o



function ucapkanSalam(waktu){
    return function(nama)
    {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`)
    }
}

selamatPagi = ucapkanSalam('pagi')
selamatSiang = ucapkanSalam('siang')
selamatMalam = ucapkanSalam('malam')
selamatPagi('tony')
selamatSiang('tony')
selamatMalam('tony')
selamatPagi('Bayu')

console.dir(selamatPagi)


//! Contoh problem
// let counter = 0;
// let add = function()
// {
//     return ++counter
// }

// counter = 100

// console.log(add())
// console.log(add())
// console.log(add())

//* solusi 1 : closure


// var counter = 0
// function tambah(){
//     var counter = 0
//     return function()
//     {
//         return ++counter
//     }
// }

// counter = 100

// let tambahFunc = tambah()
// console.log(tambahFunc())
// console.log(tambahFunc())

//* solusi 2 : immeditely invoke function
//* cara lain selain ditampung divariabel, menggunakan immedietly invoke function
var counter = 0
tambah = (function(){
    var counter = 0
    return function()
    {
        return ++counter
    }
})();

counter = 100

// let tambahFunc = tambah()
console.log(tambah())
console.log(tambah())
console.log(tambah())