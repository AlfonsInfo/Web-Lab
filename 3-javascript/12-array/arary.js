//* array bisa diterminologi kan sebagai tipe data maupun struktur data 
//* mempermudah pengelolaan
//* manjaemen memory
//* bisa beragam type, bahkan fungsi pun bisa
//* bisa array dalam array , bahkan object didalam array

var arrayBiasa = [1,'mantap',true];
//* sebagai object
var arrayAssocViaObject = {
    nama: "John",
    age: 20,
    addres : "Jl Sudirman"
}

//*sebagai reguler array assoc
var arrayAssoc =  [];
arrayAssoc['nama'] = 'alfons ganteng';
arrayAssoc['umur'] = 21;


console.log(arrayAssocViaObject['nama'])
console.log(arrayAssoc['nama'])
console.log(arrayBiasa.length)
console.log(arrayAssocViaObject.length)
console.log(arrayAssoc.length)

console.log('dikembalikan sebagai object')
console.log(arrayBiasa)

for (var i=0 ; i<arrayBiasa.length;i++)
{
    console.log(arrayBiasa[i]);
}

console.log('menggunakan join')
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string
arrayBiasa.push('mantappu')
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string
arrayBiasa.pop()
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string
arrayBiasa.unshift('mantap lagi','ea','woww')
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string
arrayBiasa.shift('mantap lagi')
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string
arrayHasilSlice = arrayBiasa.slice(0,2)
console.log(arrayHasilSlice)
arrayBiasa.splice(2,1,'elemen baru')
console.log(arrayBiasa.join('-')) //* Menampilkan sebagai string


//* Foreach
var cetak = function (e)
{
    console.log(e)
}

function cetakDeclaration(e)
{
    console.log(e)
}


console.log('inline functionn');
arrayBiasa.forEach(function(e){console.log(e)})
console.log('function expression');
arrayBiasa.forEach(cetak)
console.log('function declaration')
// arrayBiasa.forEach(e -> {cetakDeclaration(e)})
//* ganti foreach -> map untuk mencoba 
console.log(arrayBiasa.forEach(function(e,i){
    console.log(`mahasiswa ke-${e} = ${i}`)
    return e;
}))
var arrayAkanMap = [2,32,3,23,1,231,2,1]
var hasilMap = arrayAkanMap.map(function(e){
    return e*2
})


//*filter mengembalikan =>1 nilai nilai, find mengembalikan 1 nilai
console.log(hasilMap)

var arraySebelumFilter = [2,1,2,3,,21,237,5,5,5,5]

//* find akan mengembalikan nilai yang paling pertama ditemukan
var hasilFilter = arraySebelumFilter.filter(function(e){
    if(e>5){
        return e
    }
})

console.log(hasilFilter)
