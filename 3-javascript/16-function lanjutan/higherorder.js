//* Javascript memperlakukan function sebagai object

function kerjakanTugas(matakuliah ,selesai)
{
    console.log("kerjakan tugas " + matakuliah)
    //*agar saat parameter tidak diisi ,tidak perlu dijalankan
    if(selesai != null)
        selesai()
}

function selesai(){
    console.log("selesai")
}

//* higher order function, function sebagai argument disebut callback
kerjakanTugas('Web', selesai)

kerjakanTugas('Mat')
selesai()

//* Kenapa menggunakan Higher Order Function ? 
//* Abstraksi -> Menyembunyikan kerumitan 
//* Higher order function -> pendekatan functional programming

const angka = [-1, 8, 9 , 1 , 4 , -5 , -4 , -3 , 2 , 9];

const newAngka = angka.filter((e)=>{return e>3}) //* harus ada return ?
const newAngka2 = angka.filter((e) => e > 3);
// const newAngka2 = angka.filter((e) => {e > 3}); //* tidak bekerja 
console.log(newAngka2)
console.log(newAngka)


const angkaMap = angka.map((e)=> {if(e<0){return e*-1}return e})
console.log(angkaMap)


const angkaAccumulator = angka.reduce((accu,currentValue) => accu + currentValue)
console.log(angkaAccumulator)

//* methhod bisa di chaining 
//* cari angka > 5
//* kalikan 3
//* jumlahkan