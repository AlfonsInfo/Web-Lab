//* disimpan dalam variable bisa disimpan dalam variable
 //* versi 2 bisa new Vue
const app =  Vue.createApp({
    template: '<h1>mantap</h1>'
})
// el: '#app', //* penghubung ke element //!pada vue 3 tidak ada lagi el 
console.log('sebelum mount')
app.mount('#app')
console.log('setelah mount')
console.log(app.$el)

