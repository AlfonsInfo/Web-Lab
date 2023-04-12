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
            no : 01,
            nama: 'test langsung',
            human,
            isTrue : true,
            qty : 1,
            sebuahArray : [2,3,4,5,7,21,23,2323 ]
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

console.log(app._component.data().no) //* cara akses data melalui console.log ? tp cara lebih pendeknya gimana ?



//? Properti-properti pad ainstance Vue.createApp({})
//? memiliki template
//! template: '<h1>mantap</h1>',

//!


//* Mungkin ini gaya penulisan vue 2 //* property ini berubah jadi fungsi pada vue 3
//* tidak direkomendasikan karena tidak memiliki reactive capability
//! el: '#app', //* penghubung ke element //!pada vue 3 tidak ada lagi el 
//! Bahkan tidak didukung lagi
    // data : {
    //     test : 'woy'
    // },

