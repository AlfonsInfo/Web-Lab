//* Document Object Model
// * Alert Prompt, COnfirm adalah bagian dari browser buka dr html
console.log(this)
console.log(document)
console.log(window.document)
console.log(window.history)
// * Mulai DOM Selection
//* document sebagai node route 
console.log('getElemetnById')
p =  document.getElementById('a')
console.log(p)
p =  document.getElementById('b')
console.log(p)
// p.innerHTML += 'TEST'    
p2 = document.getElementsByTagName('section')
console.log(p2)
p2 = document.getElementsByClassName('p1')
console.log(p2)
p2 = document.querySelector('section')
console.log(p2)
p2 = document.querySelectorAll  ('section')
console.log(p2)
p =  document.getElementById('a')
p2 = document.getElementsByClassName('p1')

//* Manipulasi Element
p.innerHTML = 'Alfons Ganteng'
console.log(p.style)
p.style.color = 'red';
p.style.backgroundColor = 'Blue'; //*Case Sensitive
p.setAttribute('data','mantap')

console.log(p.getAttribute('data'))

setTimeout(()=>{p.removeAttribute('style')},5000) 
p.classList.add('alfons')

setTimeout(()=>{p.classList.replace('alfons','mantap')},5000) 


document.addEventListener('click',function(e){
    console.log(e.target)
})


p.addEventListener('mouseover',function(){
    console.log('dihover');
    p.innerHTML = 'Alfons Ganteng Bangets'
})

// * Traversal -> Ngoding yang lebih cantik

//* Prevent Default -> Menghindari aksi default
//* contohnya saat ngeklik link tanpa tujuan,menghindari refresh halaman
//* Event Bubbling -> menghindari elemen daleman, mewarisi event dari parent
//* e.stopPropagation()
//* kurang efektif, nempelin ke kelas parent saja,
//* lebih efektif, dari parent nelusurin kedalem, cek if-else