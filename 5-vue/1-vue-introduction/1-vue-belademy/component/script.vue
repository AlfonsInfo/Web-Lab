//* disimpan dalam variable bisa disimpan dalam variable
 //* versi 2 bisa new Vue





const human = {
    nama : "alfonsus",
    umur : 20
} 
let no = '00'
const app =  Vue.createApp({
    data(){
        return {
            title : 'Tutor Directive'
        };
    },

    methods : {
        getName: function(){
            return 'Hello, ' + this.human.nama 
        },

        ubahNama(namaBaru)
        {
            this.human.nama = namaBaru
        }
    },
    computed : {
        filteredArray()
        {
            return this.sebuahArray.filter(v => v>5)
        },

        //* computed Properties latihan 2
        // totalBayar(params){
        //     return valueOf(this.qty)  *  valueOf(params);
        // }
    }
});
app.mount('#app')


// const app = createApp({})

// register an options object
app.component('my-component', {
  /* ... */
  template : '<h1>Woy ini component</h1>'
})

// retrieve a registered component
const MyComponent = app.component('my-component')
