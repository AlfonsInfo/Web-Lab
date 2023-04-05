$.ajax({
    url :'http://www.omdbapi.com/?apikey=3865e600&s=avengers',
    success : results => {
        var element = document.getElementsByClassName('content')[0]
        var results = results.Search
        console.log(results)
        // console.log(element)
        results.forEach((value) =>{
            createBox(element,value)
        })
        const movies = results.search
    },
    error : (e)=>{
        console.log(e.responseText);
    }
});



function createBox(element,{Title, Year}){
                element.innerHTML += 
            `<div class="col-md-4 my-5"> 
                <div class="card" >
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                <h5 class="card-title">${Title}</h5>
                <div class="text-muted">
                    ${Year}
                </div>                
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>`;
}

// console.log(element.innerHTML)
