//*

//* menggunakan callback
// const coba = new Promise((resolve,reject) => {
//     setTimeout(()=> {resolve('selesai')},2000);
// });
// // console.log(coba);

// coba.then(() => console.log(coba))

//* async await -> mendapatka hasil dari then dengan cara programming seolah-olah seperti sinkronous

function returnCoba()
{
    return new  Promise((resolve,reject)=>{
        const waktu = 6000;
        if(waktu<5000)
        {
            setTimeout(() => {resolve('selesai')},2000);
        }else{
            reject('kelamaan');
        }
    });
}

//* asumsinya ini resolve.
async function cobaAsync()
{
    try{
        const coba = await returnCoba()
        console.log(coba)
    }catch(e)
    {
        console.error(e)
    }
}
// const coba = returnCoba()
console.log('mulai');
cobaAsync()
console.log('selesai fungsi');

