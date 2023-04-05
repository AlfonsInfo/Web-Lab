//* Prototyping inheritance
// * 1. Harus menggunakan keyword constructor function

// function Mahasiswa(nama,energi)
// {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi)
// {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`
// }

class Mahasiswa {
    constructor(nama,energi)
    {
        this.nama = nama;
        this.energi = energi;
    }

    //* pada class tidak perlu menggunakan function
    makan(porsi)
    {
        this.energi +=porsi
            return `Halo ${this.nama}, selamat makan`

    }

}
//* belakang layar yang berjalan adalah prototype
//* new keyword to invoke constructor
let alfonsus = new Mahasiswa('alfons',10)
