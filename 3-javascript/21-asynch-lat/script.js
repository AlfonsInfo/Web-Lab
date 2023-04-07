// $('.search-button').on('click', function(){
//     inputSearch = $('.input-keyword').val()
//     // console.log(input)
//     tampilFilm(inputSearch)
// });

// function tampilFilm(input = 'avengers')
// {
//     console.log(input)
//      $.ajax({
//         url :'http://www.omdbapi.com/?apikey=3865e600&s='+input,
//         success : results => {
//             // var element = document.getElementsByClassName('movie-container')[0]
//             var element = $('.movie-container');
//             var movies = results.Search
//             element.empty();
//             movies.forEach((value) =>{
//                 createBox('.movie-container',value)
//             });
//             //* Event Handler kadang-kadang jangan menggunakan this
//             $('.modal-detail-button').on('click', function(){
//                 // console.log($(this).data('imdbid'));
//                 $.ajax({
//                     //! imdbidss
//                     url: 'http://www.omdbapi.com/?apikey=3865e600&i=' + $(this).data('imdbidss'),
//                     success: m =>{
//                         generateModalContent('.modalDetailsContent',m)
//                     },
//                     error : (e)=>{
//                         console.log(e.responseText);
//                     }
//                 });
//             })
            
//         },
//         error : (e)=>{
//             console.log(e.responseText);
//         }
//     });
// }

// tampilFilm()


// function createBox(element,{Title, Year,Poster,imdbID}){
//     $(element).append( 
//         `<div class="col-md-4 my-5"> 
//             <div class="card" >
//             <img class="card-img-top" src=${Poster} alt="Card image cap">
//                 <div class="card-body">
//                 <h5 class="card-title">${Title}</h5>
//                 <div class="text-muted">
//                     ${Year}
//                 </div>                
//                 <button type="button" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#DetailModal" data-imdbidss=${imdbID}> 
//                     Show Details
//                 </button>
//             </div>
//             </div>
//         </div>`);//*imbdiss disini
// }


// function generateModalContent(  element,{Poster,Actors,Director,Writer,Plot})
// {
//     $(element).html(
//     `<div class="container-fluid">
//     <div class="row">
//         <div class="col-md-3">
//             <img class="img-fluid" src=${Poster} alt="">
//         </div>
//         <div class="col-md">
//             <ul class="list-group">
//                 <li class="list-group-item"></li>
//                 <li class="list-group-item"><strong>Director : ${Director} </strong></li>
//                 <li class="list-group-item"><strong>Actors : ${Actors} </strong></li>
//                 <li class="list-group-item"><strong>Writer : ${Writer} </strong></li>
//                 <li class="list-group-item"><strong>Plot : ${Plot}</strong></li>
//               </ul>                  
//         </div>
//     </div>
// </div>`);
// }


//* Fetch
//* Mengambil data secara asynchronous atau ajax.

// tampilFilm()
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click',function(){
//     const inputKeyword = document.querySelector('.input-keyword').value 
//     tampilFilm(inputKeyword)
// })  
// // console.log(searchButton)

// function tampilFilm(inputKeyword = 'Avengers')
// {
//     console.log(inputKeyword)
//     fetch('http://www.omdbapi.com/?apikey=3865e600&s=' + inputKeyword)
//         .then(response => response.json()) //* Masih Promise oelh karena itu butuh then 1x lagi
//         .then(response => {
//             const Movies  = response.Search;
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = "";
//             Movies.forEach(m =>{ 
//                 // console.log(m)
//                 createBox(movieContainer,m)
//             });
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button')
//             modalDetailButton.forEach(btn =>
//                 btn.addEventListener('click', function(){
//                     // console.log(this) //*this merujuk pada btn/tombol yang diklik
//                     const imdbid = this.dataset.imdbidss
//                     // console.log(imdbid)
//                     fetch('http://www.omdbapi.com/?apikey=3865e600&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const modalBody  = document.querySelector('.modalDetailsContent')
//                             modalBody.innerHTML = "";
//                             generateModalContent(modalBody,m)
//                         });
//                 }),
//                 ) //*btn merepresentasikan tiap button

//             }
//         );
// }


// function createBox(element,{Title, Year,Poster,imdbID}){
//     element.innerHTML +=  
//         `<div class="col-md-4 my-5"> 
//             <div class="card" >
//             <img class="card-img-top" src=${Poster} alt="Card image cap">
//                 <div class="card-body">
//                 <h5 class="card-title">${Title}</h5>
//                 <div class="text-muted">
//                     ${Year}
//                 </div>                
//                 <button type="button" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#DetailModal" data-imdbidss=${imdbID}> 
//                     Show Details
//                 </button>
//             </div>
//             </div>
//         </div>`//*imbdiss disini
// }


// function generateModalContent(  element,{Poster,Actors,Director,Writer,Plot})
// {
//     element.innerHTML =
//     `<div class="container-fluid">
//     <div class="row">
//         <div class="col-md-3">
//             <img class="img-fluid" src=${Poster} alt="">
//         </div>
//         <div class="col-md">
//             <ul class="list-group">
//                 <li class="list-group-item"></li>
//                 <li class="list-group-item"><strong>Director : ${Director} </strong></li>
//                 <li class="list-group-item"><strong>Actors : ${Actors} </strong></li>
//                 <li class="list-group-item"><strong>Writer : ${Writer} </strong></li>
//                 <li class="list-group-item"><strong>Plot : ${Plot}</strong></li>
//               </ul>                  
//         </div>
//     </div>
// </div>`;
// }


//*fetch Refactor
tampilUI()
const searchButton = document.querySelector('.search-button') //* modalDetailButton tidak bisa kayak gini, soalnya saat pertama kali program dijalankan box-boxnya belum tentu ada
searchButton.addEventListener('click',function(){
    const inputKeyword = document.querySelector('.input-keyword').value 
    updateUI(inputKeyword)
})

//* event binding
//* thisnya selalu document
document.addEventListener('click',async function(e){
    // console.log(this)
    // console.log(e.target.classList)
    if(e.target.classList.contains('modal-detail-button')){
        // console.log('oke')
        const imdbid = e.target.dataset.imdbidss
        const movieDetail = await getMovieDetail(imdbid);
        console.log(movieDetail)
        updateUIDetail(movieDetail)
    }
    // if(e.target)
})

function getMovies(keyword){
    // console.log('getmovie',keyword)
    return fetch('http://www.omdbapi.com/?apikey=3865e600&s=' + keyword)
    .then(response => response.json(), ) //* Masih Promise oelh karena itu butuh then 1x lagi
    .then(response => response.Search 
    )

}


function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=3865e600&i=' + imdbid)
    .then(response => response.json(), ) //* Masih Promise oelh karena itu butuh then 1x lagi
}


async function tampilUI(inputKeyword = 'Avengers')
{
    console.log(inputKeyword)
    // const Movies0 =  getMovies(inputKeyword); //* tanpa await hasilnya masih promise (proses)
    const Movies = await getMovies(inputKeyword);
    updateUI(Movies);
    // console.log(Movies0 )
    // console.log(Movies )
    // const modalDetailButton = document.querySelectorAll('.modal-detail-button')
            //  modalDetailButton.forEach(btn =>
        //         btn.addEventListener('click', function(){
        //             // console.log(this) //*this merujuk pada btn/tombol yang diklik
        //             const imdbid = this.dataset.imdbidss
        //             // console.log(imdbid)
        //             fetch('http://www.omdbapi.com/?apikey=3865e600&i=' + imdbid)
        //                 .then(response => response.json())
        //                 .then(m => {
        //                     const modalBody  = document.querySelector('.modalDetailsContent')
        //                     modalBody.innerHTML = "";
        //                     generateModalContent(modalBody,m)
        //                 });
        //         }),
        //         ) //*btn merepresentasikan tiap button

        //     }
        // );
}


function updateUI(Movies){
    const movieContainer = document.querySelector('.movie-container');
    Movies.forEach(m =>  createCards(movieContainer,m));
}


function updateUIDetail(m)
{
    // const modalBody  = document.querySelector('.modalDetailsContent')
    // modalBody.innerHTML = "";
    // generateModalContent(modalBody,m)
    const movieDetail = generateModalContent(m)
    console.log(movieDetail)
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail
}
function createCards(element,{Title, Year,Poster,imdbID}){
    element.innerHTML +=  
        `<div class="col-md-4 my-5"> 
            <div class="card" >
            <img class="card-img-top" src=${Poster} alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${Title}</h5>
                <div class="text-muted">
                    ${Year}
                </div>                
                <button type="button" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#DetailModal" data-imdbidss=${imdbID}> 
                    Show Details
                </button>
            </div>
            </div>
        </div>`//*imbdiss disini
}


function generateModalContent({Poster,Actors,Director,Writer,Plot})
{
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid" src=${Poster} alt="">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"></li>
                <li class="list-group-item"><strong>Director : ${Director} </strong></li>
                <li class="list-group-item"><strong>Actors : ${Actors} </strong></li>
                <li class="list-group-item"><strong>Writer : ${Writer} </strong></li>
                <li class="list-group-item"><strong>Plot : ${Plot}</strong></li>
              </ul>                  
        </div>
    </div>
</div>`;
}