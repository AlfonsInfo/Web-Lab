// *create app yang memiliki parameter object yang di destructur ?
const app = Vue.createApp({
    data(){
        return { //* return object
            showSection : false,
            title:'The Final Empire',
            author : 'Brandon Sanderson',
            age : 45,
            
        }
    },
    //*method
    methods: {
        changeTitle(title = 'Default Title')
        {
            this.title = title
        },
        changeTitleWithoutParams()
        {
            this.title = 'Without Params set manual iki'
        }
    }
    // template:'<h2>mantap</h2>' //*secara default langsung akan ditampilkan
}).mount('#app')

//! app.mount('#app)


const app2 = Vue.createApp({
    // template : '<h2>Woyy</h2>',
    data(){
        return{
            showBooks : true,
            title:'The Final Empire',
            author : 'Brandon Sanderson',
            age : 45,
            // buttonText : (this.showBooks === true) ? 'Hide' : 'Show' //* ga rerendeirng

        }
    },

    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        
        buttonText(){
            return(this.showBooks === true) ? 'Hide' : 'Show'         
        }
    }
}).mount('#app2')
