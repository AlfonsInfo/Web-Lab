//* basic function
//* method class constructor module (bisa dilaukan dengan fungsi)
console.log(subProgram1())
function subProgram1()
{
    return 'memanggil subProgram1'; //* kalo tidak ada return maka akan return undefined secara default
}
console.log(subProgram1())


var a = 10;
var b = 20;
var c = 15;
var d = 25;
//var e  = a +b
//var f = c + d
var e;
var f;
function jumlahArg(a, b ) //* type annotation kalo mau pake typescript didefinisikan   
{
    return (a + b)
}
//* jika argument > parameter, nilai argument terakhir akan terabaikan, jika parameter < argument , argument terakhir akan diset undefined
console.log(a, b, c ,d)
e = jumlahArg(a,b)
console.log(e)
f = jumlahArg(c+d ,a)
console.log(f)

//* pesuode variabel arguments sebuah arguments yang merepresentasikan arguments
function ArgumentsTest(a,b,c,d)
{
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
    console.log(arguments[4])
}

ArgumentsTest(1,'test','mantep','yooo arguments')


function withoutArgumentButExist()
{
    console.log(arguments)
    return arguments[0]
}

console.log(withoutArgumentButExist(1,2,3,123,12,3,13))