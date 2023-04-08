//*fetch Refactor
tampilUI()
const searchButton = document.querySelector('.search-button') //* modalDetailButton tidak bisa kayak gini, soalnya saat pertama kali program dijalankan box-boxnya belum tentu ada
searchButton.addEventListener('click',function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword').value 
        tampilUI(inputKeyword)
    }catch
    {
        console.log(err)
        alert('Film tidak ditemukan')
    }
});

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
    console.log('getmovie',keyword)
    return fetch('http://www.omdbapi.com/?apikey=3865e600&s=' + keyword)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json()
    }, ) //* Masih Promise oelh karena itu butuh then 1x lagi
    .then(response =>{ 
        console.log(response)
        if (response.Response === 'False')
        {
            throw new Error(response.Error);
            }
        return  response.Search  
    }//* kosong,tidak ketemu 
    )

}


function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=3865e600&i=' + imdbid)
    .then(response => response.json(), ) //* Masih Promise oelh karena itu butuh then 1x lagi
}


async function tampilUI(inputKeyword = 'Avengers')
{
    try{
        const Movies = await getMovies(inputKeyword);
        updateUI(Movies);
    }catch(err){
        console.log(err)
        alert(err)
    }
    // const Movies0 =  getMovies(inputKeyword); //* tanpa await hasilnya masih promise (proses)
}


function updateUI(Movies){
    // try{
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = "";
        Movies.forEach(m =>  createCards(movieContainer,m));
    // }catch(err)
    // {
        // console.log(err)
        // alert(err.message)
    // }   
}


function updateUIDetail(m)
{
    const movieDetail = generateModalContent(m)
    // setTimeout(function(){console.log(movieDetail)},1000)
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