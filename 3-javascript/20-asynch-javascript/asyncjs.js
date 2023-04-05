//* Javascript ? Bahasa pemrograman tingkat inggi dan dinamis yang secara umum dapat berjalan pada browser
//* Is a single-threaded, non-blocking asynch and concurrent language


//* Thread ? Urutan eksekusi kode yang dapat dilakukan secara bebas satu sama lain
//* Asynch diatur sedemikian lupa : Concurrent

//* Single vs Multi Thread (Lingkungan Eksekusi Task)
//* Blocking vs Non-Blocking (Teknik Ngoding)
//* Synchronous vs Asynchronous
//* Concurrent vs Parallel
//* Javascript memiliki V8 Engine
//* don't block the event loop

//! Contoh 1
// console.log('awal proses async')
// prosesSuperKompleksasync();
// console.log('setelah proses akhir async');

// console.log('awal proses normal')
// prosesSuperKompleksNormal();
// console.log('setelah proses akhir normal');

// async function prosesSuperKompleksasync(){
//     for(let i = 0; i<5000;i++)
//     {
//         await console.log('still process async')
//     }
//     // setInterval(()=>{return console.log('Prosess')},5000);
// }

// function prosesSuperKompleksNormal(){
//     for(let i = 0 ;i<5000;i++)
//     {
//         console.log('process Blocking Function')
//     }
// }

//Callback

function halo(nama){
    alert(`Halo, ${nama}`)
}

function haloLain(nama){
    confirm(`Lu ${nama} kan ??`)
}

function tampilPesan(Callback){
    const nama = prompt("masukan Nama : ")
    Callback(nama)
}

// tampilPesan(halo)
// tampilPesan(haloLain)
// tampilPesan(halo()) //* salah karena langsung dijalankan sedangkan nilai nama berada dalam fungsi 
//! yang dilakukan diatas sama dengan dibawah
// tampilPesan(nama => alert(`woy ${nama}`))

function getDataMahasiswa(url, success, error)
{
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200){
                success(xhr.response);
            }else if(xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
console.log('mulai')
getDataMahasiswa('mahasiswa.json', results => { 
    // console.log(JSON.parse(results))
    const mhs = JSON.parse(results)
    mhs.forEach(m => console.log(m.nama))
})
console.log('selesai')

function prosess(callback)
{   
    // for(let i = 0; i<100000;i++)
    // {
        callback;
    // }
}

console.log('mulai lagi')
prosess(()=>{
    for(let i = 0; i<10000;i++)
    {
        console.log('prosesss')
    }})
console.log('selesai lagi')

//* tanpa set Time Out , atau builtin function , bisakah kita membuat fungsi yang berjalan secara asynchronous ?
//* bisa menggunakan konsep await, asynch , promise , nextTick di nodeJs
// process.nex