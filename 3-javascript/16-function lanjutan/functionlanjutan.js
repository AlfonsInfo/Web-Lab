// //* Arrow Function
// //* Bentuk lain yang lebih ringkas dari function expression
// //* Ada beberapa yang berbeda dari fungsi ekspresi

// let tampilPesan = function(nama){
//     alert('halo' + nama);
// }

// tampilPesan('nama');

// //* jika langsung return, returnnya tidak perlu dituliskan
// //* jika parameternya cuman 1, tanpa kurung () sabi juga
// let tampilPesan2 = nama => {alert("tampil Pesan 2 " + nama)}
// tampilPesan2('alfons')

// // const tampilPesan3 =  (nama,waktu) =>{ return `Selamat ${waktu} , `


// let mahasiswa = ['Alfonsus Setaiwan' , 'Doddy', 'Erik']


// let jumlahHuruf = mahasiswa.map((nama)=>{return nama.length})
// let jumlahHurufObject = mahasiswa.map((nama)=>({nama:nama,panjang:nama.length})) //* jika ingin diperlakukan sebaga object
// console.log(jumlahHuruf)
// console.table(jumlahHurufObject)

//? Konsep this pada arrow function

const Mahasiswa = function(nama,umur){
    this.nama = nama;
    this.umur = umur;
    console.log(this)
    this.sayHello = function(){
        console.log(`Hello, nama saya ${this.nama} `)
    }

    // setInterval(function(){
    //     console.log(this)
    // },2000)

    setInterval(() => {console.log(console.log(this.umur))},3000)
}


const Mahasiswa2 = function(nama,umur){
    this.nama = nama;
    this.umur = umur;
    console.log(this)
    //* tidak berlaku pada object literal
    this.sayHello = () => {
        console.log(`Hello, nama saya ${this.nama} `)
        console.log(this)
    }
}
//* function declaration kena hoisting
//* function expression tidak kena hoisting

const alfons = new Mahasiswa();
const alfons2 = new Mahasiswa2();

//* konsep this pada function declaration merujuk pada
//* global 'window'
//* konsep this pada function exppression akan merujuk pada 
//* objectnya
//* pada arrow function this tidak memiliki konsep this

//* pada object literal , object literal tidak pakai function(){}
const mhs2 = 
{
    nama : 'alfons',
    umur : 20,
    sayHelloExp : function(){
        console.log(this)
    },
    sayHelloArrow : ()=>{
        console.log(this) //* this merujuk pada global
    }
}