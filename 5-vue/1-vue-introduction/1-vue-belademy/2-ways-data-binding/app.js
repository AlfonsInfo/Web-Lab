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
            title : 'Two Way Data Binding',
            inputText : '',
            // kelas : '' //* ngambil data true /falseny (isi/kosong)
            kelas : ['python','golang','dart','kotlin','React','Vue','NodeJs','Laravel'],
            ambilKelas : [],
            items : [
                {message : 'footbar'},
                {message : 'yoo'},
                {message : 'man'}
            ],
            object : {
                name : 'How to do list in vue',
                author : 'Jane Doe',
                publishedAt : '2016-04-20'
            }
        };
    },

    methods : {
        reRender(data)
        {
            console.log(data)
            console.log(this.inputText)
        }
    },
    }
);
app.mount('#app')

