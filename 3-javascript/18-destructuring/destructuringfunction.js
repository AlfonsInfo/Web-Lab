//* Destructuring

function penjumlahanPerkalian(a,b)
{
    return [ a+b,a*b,a-b,a/b]
}

//* Problem : Urutan sangat berpengaruh
const [hasilJumlah,hasilKali,hasilKurang,hasilBagi] = penjumlahanPerkalian(2,3)
console.log(hasilJumlah, hasilKali,hasilKurang,hasilBagi)
// console.log(hasilKali)


//* Solusi menggunakan object
function kalkulasi(a,b){
    return{
        tambah : a+b,
        kurang : a-b,
        kali : a*b,
        bagi: a/b
    }
}

const {bagi,tambah,kurang,kali} = kalkulasi(2,3)

//* ambil params dari object langsung
function cetakMhs({nama,umur,nilai:{uts,tugas,uas}}){
    
}