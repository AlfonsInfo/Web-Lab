//* kumpulan nilai yang memiliki nama
//* object setara
//* Assosiatif Array
//* Dictionary
//* C Hash table

//* contoh object literal
var mahasiswa1=  {
    nama:'alfons',
    umur:20,
    ip:[4.0,4.0,3.9],

    // ipk : function hitungIPK(){
    //     return (this.ip.forEach(function(e){
    //         return e+=e;
    //     }))/this.ip.length
    // }

    ipk : function hitungIPK(){
        var total = 0;
        this.ip.forEach(
            function(e){
                return total+=e;
            }
        )
        return total/this.ip.length;
    }
}
var mahasiswa2=  {
    nama:'Yudi',
    umur:20,
    ipk:3.40
}
var mahasiswa3=  {
    nama:'Bryan',
    umur:20,
    ipk:3.67
}

var mahasiswa = [mahasiswa1,mahasiswa2,mahasiswa3]
console.log(mahasiswa)
console.log(mahasiswa1.ipk())

//* Membuat Object
//* 1. Secara literal
//* 2. Function Declaration
//* 3. Constructor Function (keyword new)

//* 1. Object literal

var objectLiteral = {
    //*attribut misalnya : nama,domisili,umur 
    attribut1 : 'value1',
    attribut2 : true,
    attribut3 : 21
}
var objectLiteral2 = {
    //*attribut misalnya : nama,domisili,umur 
    attribut1 : 'value1',
    attribut2 : true,
    attribut3 : 21
}

//* Function Declaration

function buatObjectMhs(nama,nrp,email,jurusan)
{
    var mhs = {}
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email
    mhs.jurusan = jurusan
}


var mhs3 = buatObjectMhs('alfons','200710541','Informatika')

//* Constructor 

function Mahasiswa(nama,nrp,email,jurusan)
{
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan
}

var mhs4 = new Mahasiswa('alfons','200710541','200710541@students@uajy.ac.id','Informatika')
console.log(mhs4)

//*this context
var globalVar = 10
console.log(globalVar)
console.log(this.globalVar) //*this merujuk pada global
console.log(window.globalVar)

function halo()
{
    console.log(this);
    console.log('halo')
}
console.log(this)
halo()
//* jika menggunakan () akan merujuk pada object masing-masing''
var obj1 = new halo()
var obj2 = new halo()