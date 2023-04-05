// //* promise sebuah solusi dari callback hell
// $.ajax({
//     url : "http://www.omdbapi.com/?apikey=3865e600&s=avengers", 
//     success : movies => console.log(movies) 
// })

// const movies = fetch("http://www.omdbapi.com/?apikey=3865e600&s=avengers")
// console.log(movies) //* nilai balikannya merupakan promise

// fetch("http://www.omdbapi.com/?apikey=3865e600&s=avengers")
//     .then(response =>{ 
//         return response.json()
//         // const Movies = response.json()
//         // console.log(Movies)
//     })
//     .then(response => console.log(response))

//* Promise -> janji (terpenuh/ingkar)
//* state promise (fulfilled / rejected / pending)
//* callback ada 3 fungsi ( resolve(ketika janji terpenuhi) ,reject(ketika tidak terpenuhi), finally(ketika waktu tunggu selesai) )
//* callback ada 3 aksi (then, catch) //* nangkap resolve atau rejectnya
//* then menjalankan resolve
//* catch menjalankan reject


//* contoh 1
let ditepati =true;
const janji1 = new Promise((resolve,reject)=>{
    if(ditepati)
    {
        resolve('janji ditepati');
    }else{
        reject('ingkar janji');
    }
}).then(response => console.log(response))
// .then(response=>console.log(response))
//* bisa dichainng
// console.log(janji1);
// janji1.then(response=>console.log(response)).catch(response=>console.log(response))

// janji2 = (new Promise((resolve,reject)=>{
//     if(ditepati)
//     {
//         resolve('janji ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// }))();//.then(response=>console.log(response))