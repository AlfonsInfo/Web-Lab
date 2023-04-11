const app2 = Vue.createApp({
    // template : '<h2>Woyy</h2>',
    data(){
        return{
            showBooks : true,
            books : [
                {title : 'name of the wind', author:'patrick rothfuss',img:'assets/name-of-the-wind.jpeg',isFav:true},
                {title : 'naruto', author:'Masashi Kishimoot',img:'assets/naruto.jpeg',isFav:false},
                {title : 'animeee', author:'Wibuuu',img:'assets/animeee.jpeg',isFav:true},
            ]
            // buttonText : (this.showBooks === true) ? 'Hide' : 'Show' //* ga rerendeirng

        }
    },

    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        
        buttonText(){
            return(this.showBooks === true) ? 'Hide' : 'Show'         
        },

        //* secara default passed event
        handleEvent(e,data)
        {
            console.log(arguments)
            console.log(e , e.type)
            if(data)
            {
                console.log(data)
            }
        },
        checkFav(book){
            if(book.isFav == true){
                return 'fav'
            }
            return null;
        },
        toggleFav(book){
            console.log('masuk fungsi')
            book.isFav =  !book.isFav;
        }
    },

    computed : {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
}).mount('#app')
