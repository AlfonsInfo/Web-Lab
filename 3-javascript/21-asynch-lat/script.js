$('.search-button').on('click', function(){
    inputSearch = $('.input-keyword').val()
    // console.log(input)
    tampilFilm(inputSearch)
});

function tampilFilm(input = 'avengers')
{
    console.log(input)
     $.ajax({
        url :'http://www.omdbapi.com/?apikey=3865e600&s='+input,
        success : results => {
            // var element = document.getElementsByClassName('movie-container')[0]
            var element = $('.movie-container');
            var movies = results.Search
            element.empty();
            movies.forEach((value) =>{
                createBox('.movie-container',value)
            });
            //* Event Handler kadang-kadang jangan menggunakan this
            $('.modal-detail-button').on('click', function(){
                // console.log($(this).data('imdbid'));
                $.ajax({
                    //! imdbidss
                    url: 'http://www.omdbapi.com/?apikey=3865e600&i=' + $(this).data('imdbidss'),
                    success: m =>{
                        generateModalContent('.modalDetailsContent',m)
                    },
                    error : (e)=>{
                        console.log(e.responseText);
                    }
                });
            })
            
        },
        error : (e)=>{
            console.log(e.responseText);
        }
    });
}

tampilFilm()


function createBox(element,{Title, Year,Poster,imdbID}){
    $(element).append( 
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
        </div>`);//*imbdiss disini
}


function generateModalContent(  element,{Poster,Actors,Director,Writer,Plot})
{
    $(element).html(
    `<div class="container-fluid">
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
</div>`);
}
