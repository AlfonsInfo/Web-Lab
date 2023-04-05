//* spread -> memecah iterables (unpack)

const mhs = ['Alfons', 'Doddy','Erik']
const Dosen = ['Suyoto', 'Bryan', 'Toni']
const orang1 = [mhs,Dosen]; //* hasilnya 2 array dimensi
const orang = [...mhs,'Mamang',...Dosen]; //* bisa lebih fleksibel
console.log(...mhs[0])
console.log(orang)
// console.log(orang)
//* menggabungkan 2 array

//* mengcopy array nih
const mhs1 = mhs;
console.log(mhs1)
mhs1[0] = 'Bambangggg'
console.log(mhs) //* mhs1 ikut berubah
console.log(mhs1)
mhs2 = [...mhs]; //* pakai spread operator dalam mengcopy 
mhs2[0] = 'Tono';
console.log(mhs)
console.log(mhs1)
console.log(mhs2)

//! Rest -> Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
//* Rest parmater harus diakhir dari formal parameter

const kelompok1 = ['Pandu', 'Rena', 'Alfons','Chris']
const [Ketua,Wakil,...Anggota] = kelompok1
console.log(Anggota)


const Team = {
    pm : 'D',
    frontEnd1 : 'AA',
    frontEnd2 : 'BB'
}

const { pm, ...myTeam} = Team