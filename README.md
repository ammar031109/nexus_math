# NEXUS MATH — Aplikasi Pembelajaran Interaktif Aljabar & SPLDV

Aplikasi web interaktif bertema **Futuristic Gamified UI** (Indigo/Violet Tua dengan aksen Neon Hijau, Oranye, dan Cyan) untuk pembelajaran Matematika materi **Aljabar** dan **SPLDV (Sistem Persamaan Linear Dua Variabel)**.

## Fitur Utama

1. **Halaman Login / Authentication**
   - Input **Nama/Username**, pilihan **Kelas**, dan **Avatar Commander**.
   - Tombol **"Mulai Belajar"** yang menyimpan profil di `localStorage` dan mengarahkan langsung ke Dashboard Utama dengan sapaan personal.
   - Tersedia tombol **"Muat Akun Demo"** untuk melihat simulasi data progres dan analisis secara instan.

2. **Dashboard Utama**
   - Menampilkan sapaan personal, **Total Poin**, **Level Keseluruhan & Rank**, **Progress Materi (`0/10`)**, serta **Akurasi Mini-Game**.
   - Navigasi responsif untuk Desktop maupun Mobile: **Dashboard**, **Materi**, **Game Center**, dan **Analisis Passion**.

3. **Fitur Materi (Aljabar & SPLDV — Progress `0/10`)**
   - **Bagian A — Modul Aljabar (5 Sub-Materi)**:
     1. Konsep Dasar Aljabar (Variabel, Koefisien, Konstanta & Suku)
     2. Suku Sejenis & Operasi Penjumlahan/Pengurangan
     3. Perkalian Aljabar & Sifat Distributif (Metode FOIL)
     4. Pemfaktoran Dasar (FPB) & Selisih Dua Kuadrat
     5. Pemfaktoran Trinomial Kuadrat & Mencari Akar Persamaan
   - **Bagian B — Modul SPLDV (5 Sub-Materi)**:
     6. Konsep Dasar SPLDV & Pemodelan Soal Cerita
     7. Metode Grafik & Titik Potong Koordinat $(x, y)$
     8. Metode Substitusi (Penggantian Variabel)
     9. Metode Eliminasi (Penghilangan Variabel)
     10. Metode Campuran (Eliminasi + Substitusi) & Strategi Cepat
   - Dilengkapi tombol **"Tandai Selesai"** yang memperbarui indikator `0/10` secara dinamis (+20 Poin/sub-materi), kuis uji pemahaman tiap modul, serta **2 Lab Simulator Interaktif** (Kalkulator Faktorisasi Trinomial & Kalkulator Titik Potong SPLDV).

4. **Game Center (4 Mini-Game Matematika Berbasis Level & Poin)**
   - **Game 1: Aljabar Speed Matcher** — Mencocokkan bentuk aljabar dan menyederhanakan ekspresi dengan waktu cepat (dilengkapi Mode Speed Quiz & Mode Kartu Pasangan Aljabar; 3 Level: Mudah, Sedang, Sulit).
   - **Game 2: Tebak Akar / Faktorisasi Puzzle** — Menemukan nilai $x$ atau faktor $(x+p)(x+q)$ dari persamaan linear dan kuadrat bertingkat (3 Level).
   - **Game 3: SPLDV Hunter: Eliminasi & Substitusi** — Menyelesaikan soal cerita & sistem SPLDV dengan memilih langkah eliminasi/substitusi yang tepat dari koefisien kecil hingga pecahan/besar (3 Level).
   - **Game 4: Grafik & Titik Potong Duel** — Menentukan titik potong koordinat $(x, y)$ dari dua persamaan garis lurus dengan **Grafik Kartesius SVG Interaktif** (3 Level).

5. **Hasil Akhir & Analisis Passion**
   - Rekap performa komprehensif untuk **Kategori Aljabar** vs **Kategori SPLDV** (Akurasi, Kecepatan Rata-rata, Poin Game, Progress Materi, & Kuesioner Gaya Berpikir).
   - Menghasilkan kesimpulan otomatis dan rekomendasi pengembangan diri berdasarkan ketelitian dan kecepatan pemain.

## Cara Menjalankan Aplikasi
Cukup buka file [`index.html`](./index.html) langsung menggunakan browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari). Tidak memerlukan instalasi server tambahan.
