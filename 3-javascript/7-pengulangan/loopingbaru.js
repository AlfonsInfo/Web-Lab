//* Iterable Object
//* String
//* Array
//* Arguments/ NodeList
//* TypedArray
//* Map
//* Set
//* User-defined iteratble

const mhs = ['Alfons', 'Doddy', 'Ucup'];

mhs.forEach(m=>console.log(m)); //*Khusus untuk array
for(const m of mhs){console.log(m)}

const nama = 'alfons';
for(const n of nama){console.log(n)}
for(const [i,m] of mhs.entries()){console.log(i,m)}



//* untuk object gunakan for...in)

const objMhs = {
    nama : 'alfons',
    umur : 21,
    email : 'alfonsussetiawanjacub@gmail.com'
}

for (m in objMhs)
{
    console.log(m)
    console.log(objMhs[m])
}
