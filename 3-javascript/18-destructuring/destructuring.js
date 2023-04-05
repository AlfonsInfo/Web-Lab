//* Destructuring Assignment merupakan sebuah expression pada javascript yng membuat kita dapat
//* dapat membongkar nilai dari array atau properti dari object ke dalam variabel yang terpisah

const coba = ['satu','dua','tiga']

const [a,b,c] = coba;

console.log(a)
console.log(b)
console.log(c)

const mhs = {
    nama : 'Alfonsus Setiawan J',
    umur : 20,
    email : '200710541@students.uajy.ac.id'
}
const {namaSaya,umur} = mhs;
//* Skipped
const perkenalan = ['Halo', 'Nama', 'Saya', 'Alfonsus Setiawan J'];
const [salam, , ,nama] = perkenalan;
console.log(nama)

let x = 1;
let y = 2;
//* swapping
[x,y] = [y,x]
console.log(x,y)

function cobaLagi()
{
    return[1,2];
}

const [F,G] = cobaLagi()

//* Rest Parameter

const [K ,L , ...sisaValue] = [1,2,3,23,23,44,4];
console.log(sisaValue);


//* Assignment tanpa deklarasi object

//* n , m sebagai alias
//* default value jika diobject tidak ada attribut tersebut
({ attribut1:n, attribut2:m , attribut3:l = true} = {
    attribut1: 'attribut1',
    attribut2: 'attribut2',
    // attribut3: null
    // attribut3: 
});
  

console.log(n , m,l);

const obj = {
    att1 :'att1',
    att2 : 'att2',
    att3 : 'att3',
    att4 : 'att4'
}
const {att1, att2, ...sisa} = obj
console.log(sisa) 


//* contoh kasus

const member = {
    id : 123,
    nama :'alfonsus',
    umur : 20
}


//* pada params, dibongkar dlu sehingga yang diambil cuman idnya 
function getMemberId({id})
{
    return id;
}

console.log(getMemberId(member))