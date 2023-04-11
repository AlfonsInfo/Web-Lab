Session pada pemrograman web adalah cara untuk menyimpan informasi khusus pengguna di server untuk digunakan pada permintaan berikutnya. Informasi ini biasanya digunakan untuk melacak aktivitas pengguna dan menyimpan data pengguna yang login, seperti nama pengguna, preferensi, atau keranjang belanja.

Cara kerja session adalah dengan membuat file cookie pada sisi pengguna yang berisi ID unik untuk setiap sesi. ID ini kemudian digunakan untuk mengidentifikasi sesi pengguna di server saat pengguna mengirimkan permintaan berikutnya. Server dapat menggunakan ID ini untuk mengambil informasi sesi yang sesuai dan menggunakannya untuk menyesuaikan responsnya terhadap permintaan pengguna.

Contoh penggunaan session adalah ketika seorang pengguna login ke situs web, server dapat membuat sesi dan menyimpan ID sesi serta informasi login pengguna di server. Setiap permintaan selanjutnya dari pengguna akan membawa ID sesi yang unik, yang digunakan oleh server untuk mengidentifikasi sesi dan memuat informasi pengguna yang sesuai. Dengan cara ini, pengguna dapat tetap masuk pada situs web tanpa perlu login ulang setiap kali mereka mengakses halaman baru.

1. $_SESSION()
2. harus menjalankan session_start

