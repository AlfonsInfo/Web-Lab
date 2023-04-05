//* FunctionDeclaration

declarationFunction()
function declarationFunction(){
    //* Function Body
    console.log('pada declaration function bisa dipanggil sebelum deklarasi')
}

//* Function Expression
//* 1. Disimpan dalam sebuah ekspresi
//* 2. nama function bisa bersifat opsional
//* 3. lebih powerful
//* 4. bisa sebagai closure
tampilPesan('mamang')

var tampilPesan = function(nama)
{
    alert('halo' + nama);
}
tampilPesan('mamanc g')


function menggunakanClosure(a, b)
{
    // function(a)
    // connsole.log(b)
}