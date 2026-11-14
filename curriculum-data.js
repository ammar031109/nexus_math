// ==========================================================================
// ALGEBRA & SPLDV NEXUS - CURRICULUM, MODULES, AND LIGHT-LEARNING MINI-GAMES
// ==========================================================================

window.NEXUS_DATA = {
  // ------------------------------------------------------------------------
  // KONFIGURASI KELAS & JURUSAN SMK
  // Kelas: X, XI, XII
  // Jurusan dengan rombel 1 & 2: KGS, TEK, TITL, TFLM, SIJA (contoh: XI SIJA 1, XI SIJA 2)
  // Jurusan tanpa nomor rombel: TKR, TBKR (contoh: XI TKR, XI TBKR)
  // ------------------------------------------------------------------------
  schoolConfig: {
    grades: ['X', 'XI', 'XII'],
    majors: [
      { code: 'SIJA', name: 'SIJA (Sistem Informasi Jaringan & Aplikasi)', numbered: true },
      { code: 'KGS', name: 'KGS (Konstruksi Gedung & Sanitasi)', numbered: true },
      { code: 'TEK', name: 'TEK (Teknik Elektronika Komunikasi)', numbered: true },
      { code: 'TITL', name: 'TITL (Teknik Instalasi Tenaga Listrik)', numbered: true },
      { code: 'TFLM', name: 'TFLM (Teknik Fabrikasi Logam & Manufaktur)', numbered: true },
      { code: 'TKR', name: 'TKR (Teknik Kendaraan Ringan)', numbered: false },
      { code: 'TBKR', name: 'TBKR (Teknik Bodi Kendaraan Ringan)', numbered: false }
    ],
    numbers: ['1', '2']
  },

  // ------------------------------------------------------------------------
  // 10 SUB-MATERI PEMBELAJARAN (5 ALJABAR + 5 SPLDV) -> Progress "0/10"
  // Poin per sub-materi: +5 Poin (agar naik level lebih menantang & seimbang)
  // ------------------------------------------------------------------------
  modules: [
    // ==================== BAGIAN A: MODUL ALJABAR (5 SUB-MATERI) ====================
    {
      id: 'alg-1',
      index: 1,
      code: 'ALJ-01',
      category: 'aljabar',
      categoryLabel: 'Modul Aljabar',
      title: 'Konsep Dasar Aljabar: Variabel, Koefisien, Konstanta & Suku',
      subtitle: 'Mengenal anatomi bentuk aljabar sebagai bahasa simbol matematika modern.',
      duration: '4 Menit',
      xpReward: 5,
      accent: 'green',
      summary: 'Aljabar menggunakan huruf (simbol) untuk mewakili bilangan yang belum diketahui nilainya. Memahami bagian-bagian suku aljabar adalah fondasi utama sebelum melakukan operasi hitung.',
      keyFormulas: [
        { label: 'Bentuk Umum', expr: '5x² - 3x + 8', desc: 'Terdiri dari 3 suku: 5x², -3x, dan 8' },
        { label: 'Variabel (Peubah)', expr: 'x, y, a, b', desc: 'Huruf pengganti nilai yang belum diketahui' },
        { label: 'Koefisien', expr: '5 pada 5x² dan -3 pada -3x', desc: 'Angka di depan variabel (ikut tanda minusnya)' },
        { label: 'Konstanta', expr: '+8', desc: 'Angka tetap yang berdiri sendiri tanpa huruf' }
      ],
      workedExample: {
        problem: 'Tentukan banyak suku, koefisien x, koefisien y, dan konstanta dari: 4x - 7y + 9',
        steps: [
          'Pisahkan setiap suku: (4x), (-7y), dan (+9) → ada 3 suku.',
          'Koefisien x adalah angka di depan x, yaitu 4.',
          'Koefisien y adalah angka di depan y beserta tandanya, yaitu -7.',
          'Konstanta adalah angka tanpa huruf, yaitu 9.'
        ],
        answer: '3 Suku | Koefisien x = 4 | Koefisien y = -7 | Konstanta = 9'
      },
      proTip: 'Jika huruf ditulis tanpa angka di depannya (misal: x atau -y), artinya koefisiennya adalah 1 atau -1!',
      miniQuiz: {
        question: 'Pada bentuk aljabar 6a + 15, berapakah koefisien dari a dan konstantanya?',
        options: [
          'Koefisien a = 6 dan Konstanta = 15',
          'Koefisien a = 15 dan Konstanta = 6',
          'Koefisien a = 1 dan Konstanta = 15',
          'Koefisien a = 6 dan Konstanta = 0'
        ],
        correctIndex: 0,
        explanation: 'Angka di depan huruf a adalah 6 (koefisien), sedangkan angka tanpa huruf adalah 15 (konstanta).'
      }
    },
    {
      id: 'alg-2',
      index: 2,
      code: 'ALJ-02',
      category: 'aljabar',
      categoryLabel: 'Modul Aljabar',
      title: 'Suku Sejenis & Operasi Penjumlahan/Pengurangan',
      subtitle: 'Cara mudah menyederhanakan aljabar dengan mengelompokkan huruf yang sama.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'green',
      summary: 'Dua suku disebut SEJENIS jika huruf variabel dan pangkatnya persis sama. Hanya suku yang sejenis yang boleh dijumlahkan atau dikurangkan!',
      keyFormulas: [
        { label: 'Suku Sejenis', expr: '3x dengan 5x  |  4a dengan -2a', desc: 'Huruf dan pangkatnya sama persis' },
        { label: 'Rumus Penjumlahan', expr: '2x + 3x = (2 + 3)x = 5x', desc: 'Jumlahkan angkanya saja, hurufnya tetap!' },
        { label: 'Rumus Pengurangan', expr: '7a - 2a = (7 - 2)a = 5a', desc: 'Kurangkan angkanya saja, hurufnya tetap!' }
      ],
      workedExample: {
        problem: 'Sederhanakan bentuk aljabar: 5x + 3y + 2x + 4y',
        steps: [
          'Kumpulkan suku yang hurufnya sama: (5x + 2x) + (3y + 4y).',
          'Jumlahkan koefisien x: 5x + 2x = 7x.',
          'Jumlahkan koefisien y: 3y + 4y = 7y.',
          'Gabungkan hasilnya: 7x + 7y.'
        ],
        answer: '7x + 7y'
      },
      proTip: 'Anggap variabel seperti nama benda: 3 apel + 2 apel = 5 apel (3x + 2x = 5x). Apel tidak bisa digabung langsung dengan jeruk (x dan y)!',
      miniQuiz: {
        question: 'Hasil paling sederhana dari 8x - 3x + 4 adalah...',
        options: [
          '5x + 4',
          '11x + 4',
          '9x',
          '5x - 4'
        ],
        correctIndex: 0,
        explanation: 'Kurangkan suku yang sejenis: 8x - 3x = 5x. Angka +4 tetap karena tidak punya huruf x, sehingga hasilnya 5x + 4.'
      }
    },
    {
      id: 'alg-3',
      index: 3,
      code: 'ALJ-03',
      category: 'aljabar',
      categoryLabel: 'Modul Aljabar',
      title: 'Perkalian Aljabar & Sifat Distributif',
      subtitle: 'Membuka kurung aljabar dengan perkalian pelangi yang mudah.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'green',
      summary: 'Saat ada angka atau huruf di depan tanda kurung, kalikan suku di luar tersebut ke SETIAP suku yang ada di dalam kurung.',
      keyFormulas: [
        { label: 'Distributif Dasar', expr: 'a(x + y) = ax + ay', desc: 'Kalikan a ke x, lalu kalikan a ke y' },
        { label: 'Contoh Angka', expr: '2(x + 3) = 2x + 6', desc: '2 dikali x jadi 2x, dan 2 dikali 3 jadi 6' },
        { label: 'Perkalian Dua Kurung', expr: '(x + a)(x + b) = x² + (a+b)x + (a×b)', desc: 'Jumlahkan angka untuk tengah, kalikan untuk belakang' }
      ],
      workedExample: {
        problem: 'Jabarkan bentuk perkalian kurung: 3(2x + 4)',
        steps: [
          'Kalikan angka luar (3) dengan suku pertama di dalam kurung (2x): 3 × 2x = 6x.',
          'Kalikan angka luar (3) dengan suku kedua di dalam kurung (+4): 3 × 4 = +12.',
          'Gabungkan hasilnya menjadi 6x + 12.'
        ],
        answer: '6x + 12'
      },
      proTip: 'Jangan lupa mengalikan angka luar ke suku yang kedua juga! Misalnya 2(x + 5) adalah 2x + 10, bukan 2x + 5.',
      miniQuiz: {
        question: 'Hasil penjabaran dari 4(x + 2) adalah...',
        options: [
          '4x + 8',
          '4x + 2',
          'x + 8',
          '6x'
        ],
        correctIndex: 0,
        explanation: 'Kalikan 4 dengan x menjadi 4x, lalu kalikan 4 dengan 2 menjadi 8. Hasilnya 4x + 8.'
      }
    },
    {
      id: 'alg-4',
      index: 4,
      code: 'ALJ-04',
      category: 'aljabar',
      categoryLabel: 'Modul Aljabar',
      title: 'Pemfaktoran Dasar & Selisih Dua Kuadrat',
      subtitle: 'Mengubah bentuk pengurangan kuadrat menjadi dua kurung kembar beda tanda.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'green',
      summary: 'Pemfaktoran adalah kebalikan dari perkalian. Salah satu rumus paling mudah dan sering keluar adalah Selisih Dua Kuadrat: x² - a² = (x + a)(x - a).',
      keyFormulas: [
        { label: 'Faktorisasi FPB', expr: '2x + 6 = 2(x + 3)', desc: 'Keluarkan angka pembagi yang sama (yaitu 2)' },
        { label: 'Selisih Dua Kuadrat', expr: 'x² - a² = (x + a)(x - a)', desc: 'Satu kurung bertanda (+), satu kurung bertanda (-)' },
        { label: 'Contoh Praktis', expr: 'x² - 9 = (x + 3)(x - 3)', desc: 'Karena 9 adalah 3² (3 × 3)' }
      ],
      workedExample: {
        problem: 'Faktorkan dan cari akar dari persamaan: x² - 16 = 0',
        steps: [
          'Kenali bahwa 16 adalah bilangan kuadrat dari 4 (karena 4 × 4 = 16).',
          'Gunakan rumus selisih kuadrat: x² - 4² = (x + 4)(x - 4) = 0.',
          'Maka nilai akar-akarnya adalah x = -4 atau x = 4.'
        ],
        answer: 'Faktor: (x + 4)(x - 4) = 0  |  Akar: x = -4 dan x = 4'
      },
      proTip: 'Hafalkan bilangan kuadrat dasar: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36. Begitu melihat x² - 25, langsung tahu itu (x + 5)(x - 5)!',
      miniQuiz: {
        question: 'Bentuk pemfaktoran yang tepat dari x² - 9 adalah...',
        options: [
          '(x + 3)(x - 3)',
          '(x - 3)(x - 3)',
          '(x + 9)(x - 1)',
          '(x + 3)(x + 3)'
        ],
        correctIndex: 0,
        explanation: 'Karena 9 = 3², maka sesuai rumus a² - b² = (a + b)(a - b), bentuk x² - 9 menjadi (x + 3)(x - 3).'
      }
    },
    {
      id: 'alg-5',
      index: 5,
      code: 'ALJ-05',
      category: 'aljabar',
      categoryLabel: 'Modul Aljabar',
      title: 'Pemfaktoran Persamaan Kuadrat Sederhana',
      subtitle: 'Trik ringan mencari 2 angka yang dijumlah = b dan dikali = c.',
      duration: '6 Menit',
      xpReward: 5,
      accent: 'green',
      summary: 'Untuk memfaktorkan x² + bx + c = 0 menjadi (x + p)(x + q) = 0, kita hanya perlu menebak dua angka (p dan q) yang kalau DIJUMLAH hasilnya b (tengah) dan kalau DIKALI hasilnya c (belakang).',
      keyFormulas: [
        { label: 'Rumus Puzzle p & q', expr: 'p + q = b   dan   p × q = c', desc: 'b adalah angka tengah, c adalah angka paling belakang' },
        { label: 'Bentuk Faktor', expr: '(x + p)(x + q) = 0', desc: 'Masukkan angka p dan q ke dalam dua kurung' },
        { label: 'Nilai Akar x', expr: 'x₁ = -p   dan   x₂ = -q', desc: 'Tanda akar selalu kebalikan dari tanda di dalam kurung!' }
      ],
      workedExample: {
        problem: 'Faktorkan dan cari akar dari: x² + 5x + 6 = 0',
        steps: [
          'Angka tengah b = 5, angka belakang c = 6.',
          'Cari 2 angka yang kalau ditambah hasilnya 5, dan kalau dikali hasilnya 6 → yaitu angka 2 dan 3 (karena 2+3=5 dan 2×3=6).',
          'Masukkan ke kurung faktor: (x + 2)(x + 3) = 0.',
          'Balik tandanya untuk mendapat akar: x₁ = -2 dan x₂ = -3.'
        ],
        answer: 'Faktor: (x + 2)(x + 3) = 0  |  Akar: x = -2 dan x = -3'
      },
      proTip: 'Ingat! Jika di dalam kurung bertanda plus (x + 2), maka nilai akarnya jadi minus (x = -2). Sebaliknya jika (x - 3), maka akarnya positif (x = 3)!',
      miniQuiz: {
        question: 'Dua angka yang jika dijumlahkan hasilnya 4 dan jika dikalikan hasilnya 3 (untuk memfaktorkan x² + 4x + 3 = 0) adalah...',
        options: [
          '1 dan 3 → Faktornya (x + 1)(x + 3)',
          '2 dan 2 → Faktornya (x + 2)(x + 2)',
          '-1 dan -3 → Faktornya (x - 1)(x - 3)',
          '1 dan 4 → Faktornya (x + 1)(x + 4)'
        ],
        correctIndex: 0,
        explanation: 'Karena 1 + 3 = 4 dan 1 × 3 = 3, maka faktornya adalah (x + 1)(x + 3) = 0.'
      }
    },

    // ==================== BAGIAN B: MODUL SPLDV (5 SUB-MATERI) ====================
    {
      id: 'spldv-1',
      index: 6,
      code: 'SPL-01',
      category: 'spldv',
      categoryLabel: 'Modul SPLDV',
      title: 'Konsep Dasar SPLDV & Soal Cerita Sehari-hari',
      subtitle: 'Mengubah cerita belanja atau dua bilangan menjadi dua persamaan sederhana.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'cyan',
      summary: 'SPLDV (Sistem Persamaan Linear Dua Variabel) adalah dua persamaan yang memiliki dua huruf variabel (biasanya x dan y). Tujuannya adalah menemukan nilai x dan y yang cocok untuk kedua persamaan tersebut.',
      keyFormulas: [
        { label: 'Bentuk Umum', expr: 'x + y = 10  dan  x - y = 2', desc: 'Terdiri dari 2 persamaan dengan variabel x dan y' },
        { label: 'Pemodelan Cerita', expr: 'Barang 1 = x,  Barang 2 = y', desc: 'Ganti nama barang di soal cerita menjadi huruf x dan y' }
      ],
      workedExample: {
        problem: 'Budi membeli 2 buku dan 1 pensil seharga Rp7.000. Siti membeli 1 buku dan 1 pensil seharga Rp4.000. Buat model SPLDV-nya!',
        steps: [
          'Misalkan harga 1 buku = x dan harga 1 pensil = y.',
          'Belanja Budi (2 buku dan 1 pensil = 7.000) → 2x + y = 7.000.',
          'Belanja Siti (1 buku dan 1 pensil = 4.000) → x + y = 4.000.'
        ],
        answer: '2x + y = 7.000  dan  x + y = 4.000'
      },
      proTip: 'Kata "dan" atau "ditambah" dalam soal cerita berubah menjadi tanda tambah (+), sedangkan kata "selisih" berubah menjadi tanda kurang (-).',
      miniQuiz: {
        question: 'Jumlah dua bilangan x dan y adalah 10, sedangkan selisihnya adalah 4. Model SPLDV yang tepat adalah...',
        options: [
          'x + y = 10 dan x - y = 4',
          'x - y = 10 dan x + y = 4',
          'xy = 10 dan x + y = 4',
          '2x = 10 dan 2y = 4'
        ],
        correctIndex: 0,
        explanation: 'Jumlah berarti ditambah (x + y = 10) dan selisih berarti dikurang (x - y = 4).'
      }
    },
    {
      id: 'spldv-2',
      index: 7,
      code: 'SPL-02',
      category: 'spldv',
      categoryLabel: 'Modul SPLDV',
      title: 'Metode Grafik & Membaca Titik Potong (x, y)',
      subtitle: 'Menemukan solusi SPLDV hanya dengan melihat titik pertemuan dua garis.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'cyan',
      summary: 'Pada bidang koordinat Kartesius, setiap persamaan garis lurus digambarkan sebagai satu garis. Titik tempat kedua garis saling berpotongan adalah jawaban (x, y) dari SPLDV tersebut!',
      keyFormulas: [
        { label: 'Urutan Koordinat', expr: '(x, y) → (Mendatar, Tegak)', desc: 'Baca angka di sumbu X (mendatar) dulu, baru sumbu Y (tegak)!' },
        { label: 'Arti Titik Potong', expr: 'Titik Potong (3, 2) ⇒ x = 3 dan y = 2', desc: 'Nilai x dan y tersebut memenuhi kedua persamaan garis' }
      ],
      workedExample: {
        problem: 'Garis x + y = 5 dan garis x - y = 1 berpotongan pada koordinat (3, 2). Buktikan bahwa (3, 2) benar!',
        steps: [
          'Koordinat (3, 2) artinya x = 3 dan y = 2.',
          'Masukkan ke garis pertama (x + y = 5): 3 + 2 = 5 (Benar!).',
          'Masukkan ke garis kedua (x - y = 1): 3 - 2 = 1 (Benar!).'
        ],
        answer: 'Titik Potong = (3, 2) dengan x = 3 dan y = 2'
      },
      proTip: 'Jangan terbalik membaca koordinat! Ingat urutan abjad: X dulu baru Y → lihat ke Kanan/Kiri (sumbu X) dulu, baru ke Atas/Bawah (sumbu Y).',
      miniQuiz: {
        question: 'Jika dua garis lurus SPLDV berpotongan tepat di titik koordinat (4, 1), maka penyelesaiannya adalah...',
        options: [
          'x = 4 dan y = 1',
          'x = 1 dan y = 4',
          'x = 4 dan y = 4',
          'x = -4 dan y = -1'
        ],
        correctIndex: 0,
        explanation: 'Koordinat selalu ditulis (x, y), sehingga (4, 1) berarti x = 4 dan y = 1.'
      }
    },
    {
      id: 'spldv-3',
      index: 8,
      code: 'SPL-03',
      category: 'spldv',
      categoryLabel: 'Modul SPLDV',
      title: 'Metode Substitusi (Mengganti Variabel)',
      subtitle: 'Memasukkan nilai satu variabel ke persamaan lainnya dengan mudah.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'cyan',
      summary: 'Substitusi artinya "mengganti". Jika kita sudah tahu y = 2x, maka huruf y pada persamaan kedua tinggal kita ganti dengan 2x!',
      keyFormulas: [
        { label: 'Ciri Soal Substitusi', expr: 'Ada persamaan berbentuk y = ... atau x = ...', desc: 'Sangat mudah langsung dimasukkan ke persamaan satunya' },
        { label: 'Contoh Langsung', expr: 'Jika y = 3 dan x + y = 7 ⇒ x + 3 = 7 ⇒ x = 4', desc: 'Ganti huruf y dengan angka 3' }
      ],
      workedExample: {
        problem: 'Tentukan nilai x dan y dari: y = 2x  dan  x + y = 9',
        steps: [
          'Karena diketahui y = 2x, ganti huruf y pada persamaan x + y = 9 menjadi 2x.',
          'Persamaan menjadi: x + 2x = 9 → 3x = 9.',
          'Bagi dengan 3: x = 9 ÷ 3 = 3.',
          'Masukkan x = 3 ke y = 2x → y = 2(3) = 6.'
        ],
        answer: 'x = 3 dan y = 6'
      },
      proTip: 'Metode substitusi adalah jurus paling cepat kalau salah satu persamaan sudah berbentuk y = ... atau x = ...!',
      miniQuiz: {
        question: 'Diketahui y = 4 dan x + y = 10. Berapakah nilai x?',
        options: [
          'x = 6',
          'x = 4',
          'x = 14',
          'x = 5'
        ],
        correctIndex: 0,
        explanation: 'Ganti y dengan 4 pada persamaan x + y = 10 → x + 4 = 10 → x = 10 - 4 = 6.'
      }
    },
    {
      id: 'spldv-4',
      index: 9,
      code: 'SPL-04',
      category: 'spldv',
      categoryLabel: 'Modul SPLDV',
      title: 'Metode Eliminasi (Menghilangkan Salah Satu Huruf)',
      subtitle: 'Trik SA-KU (Sama Kurang) dan BE-JUM (Beda Jumlah) untuk melenyapkan variabel.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'cyan',
      summary: 'Eliminasi artinya menghilangkan satu variabel yang angkanya sudah sama. Gunakan jembatan keledai SA-KU BE-JUM agar tidak pernah salah tanda!',
      keyFormulas: [
        { label: 'SA-KU (Sama Kurangkan)', expr: '+y dan +y  ➔  KURANGKAN (-)', desc: 'Jika tandanya sama-sama plus, kurangkan kedua persamaan' },
        { label: 'BE-JUM (Beda Jumlahkan)', expr: '+y dan -y  ➔  JUMLAHKAN (+)', desc: 'Jika tandanya beda (+ dan -), jumlahkan kedua persamaan' }
      ],
      workedExample: {
        problem: 'Cari nilai x dan y dari: x + y = 8  dan  x - y = 2',
        steps: [
          'Perhatikan variabel y: yang atas +y dan yang bawah -y (tandanya BEDA).',
          'Gunakan BE-JUM (Beda tanda → Jumlahkan kedua persamaan):',
          '(x + x) + (y + (-y)) = 8 + 2  ➔  2x = 10  ➔  x = 5.',
          'Masukkan x = 5 ke x + y = 8  ➔  5 + y = 8  ➔  y = 3.'
        ],
        answer: 'x = 5 dan y = 3'
      },
      proTip: 'Ingat selalu mantra "SA-KU BE-JUM": SAma tanda KUrangkan, BEda tanda JUMlahkan!',
      miniQuiz: {
        question: 'Untuk menghilangkan y dari persamaan 2x + y = 9 dan x + y = 5, langkah yang tepat adalah...',
        options: [
          'Dikurangkan (-), karena tanda y sama-sama positif (+y)',
          'Dijumlahkan (+), karena tanda y sama-sama positif (+y)',
          'Dikali 5 terlebih dahulu',
          'Dibagi 2 terlebih dahulu'
        ],
        correctIndex: 0,
        explanation: 'Karena kedua persamaan memiliki +y (tandanya sama), gunakan SA-KU: Sama tanda Kurangkan! (2x - x) = 9 - 5 → x = 4.'
      }
    },
    {
      id: 'spldv-5',
      index: 10,
      code: 'SPL-05',
      category: 'spldv',
      categoryLabel: 'Modul SPLDV',
      title: 'Metode Campuran (Eliminasi + Substitusi)',
      subtitle: 'Gabungan eliminasi dan substitusi untuk menyelesaikan SPLDV dalam hitungan detik.',
      duration: '5 Menit',
      xpReward: 5,
      accent: 'cyan',
      summary: 'Metode campuran adalah cara paling favorit: langkah pertama gunakan ELIMINASI untuk menemukan huruf pertama (misal x), lalu langkah kedua langsung SUBSTITUSI nilai x tadi untuk menemukan y!',
      keyFormulas: [
        { label: 'Langkah 1: Eliminasi', expr: 'Kurangkan/Jumlahkan → Dapat nilai x', desc: 'Hilangkan variabel yang koefisiennya sudah sama' },
        { label: 'Langkah 2: Substitusi', expr: 'Masukkan nilai x → Dapat nilai y', desc: 'Pilih persamaan yang angkanya paling kecil' }
      ],
      workedExample: {
        problem: 'Selesaikan dengan metode campuran: 3x + y = 11  dan  x + y = 5',
        steps: [
          'LANGKAH 1 (Eliminasi y): Kurangkan kedua persamaan karena sama-sama +y.',
          '(3x - x) + (y - y) = 11 - 5  ➔  2x = 6  ➔  x = 3.',
          'LANGKAH 2 (Substitusi x = 3): Masukkan x = 3 ke persamaan x + y = 5.',
          '3 + y = 5  ➔  y = 5 - 3 = 2.'
        ],
        answer: 'x = 3 dan y = 2'
      },
      proTip: 'Saat melakukan substitusi di langkah kedua, selalu pilih persamaan yang angkanya paling kecil agar hitunganmu super cepat!',
      miniQuiz: {
        question: 'Dari persamaan 2x + y = 7 dan x + y = 4, jika kita kurangkan diperoleh x = 3. Berapakah nilai y?',
        options: [
          'y = 1',
          'y = 2',
          'y = 3',
          'y = 4'
        ],
        correctIndex: 0,
        explanation: 'Masukkan x = 3 ke persamaan x + y = 4 → 3 + y = 4 → y = 1.'
      }
    }
  ],

  // ------------------------------------------------------------------------
  // 4 MINI-GAMES INTERAKTIF DENGAN MEKANIK MUDAH & POIN PROPORSIONAL
  // Poin: Mudah = +2 Poin, Sedang = +5 Poin, Sulit = +10 Poin
  // ------------------------------------------------------------------------
  games: [
    // ==================== GAME 1: ALJABAR SPEED MATCHER (DRAG & DROP) ====================
    {
      id: 'game-speed',
      number: 1,
      title: 'Aljabar Speed Matcher',
      mechanicType: 'DRAG & DROP REACTOR',
      category: 'aljabar',
      categoryLabel: 'Aljabar • Drag & Drop Suku Sejenis',
      accent: 'green',
      badge: '🧲 DRAG & DROP',
      description: 'Tarik (Drag) kapsul penjumlahan/pengurangan aljabar di kiri dan jatuhkan (Drop) ke Reaktor jawaban yang tepat di kanan!',
      levels: {
        1: {
          name: 'Level 1: Mudah',
          pointsPerCorrect: 2,
          timeLimit: 90,
          subtitle: 'Penjumlahan & Pengurangan 1 Huruf Dasar (+2 Poin/Soal)',
          waves: [
            {
              waveTitle: 'Gelombang 1: Hitung Cepat Koefisien Dasar',
              items: [
                { id: 'w1-1', expr: '2x + 3x', target: '5x', hint: '2 ditambah 3 = 5, jadi 5x' },
                { id: 'w1-2', expr: '7a - 3a', target: '4a', hint: '7 dikurang 3 = 4, jadi 4a' },
                { id: 'w1-3', expr: '5y + 4y', target: '9y', hint: '5 ditambah 4 = 9, jadi 9y' },
                { id: 'w1-4', expr: '8p - 2p', target: '6p', hint: '8 dikurang 2 = 6, jadi 6p' }
              ]
            },
            {
              waveTitle: 'Gelombang 2: Satu Huruf Tanpa Angka = 1',
              items: [
                { id: 'w2-1', expr: '4x + x', target: '5x', hint: 'x artinya 1x, jadi 4x + 1x = 5x' },
                { id: 'w2-2', expr: '6m - m', target: '5m', hint: '6m dikurang 1m = 5m' },
                { id: 'w2-3', expr: '3b + 5b', target: '8b', hint: '3 ditambah 5 = 8b' },
                { id: 'w2-4', expr: '10k - 7k', target: '3k', hint: '10 dikurang 7 = 3k' }
              ]
            }
          ]
        },
        2: {
          name: 'Level 2: Sedang',
          pointsPerCorrect: 5,
          timeLimit: 90,
          subtitle: 'Suku Sejenis & Buka Kurung Sederhana (+5 Poin/Soal)',
          waves: [
            {
              waveTitle: 'Gelombang 1: Gabungkan Huruf yang Sama',
              items: [
                { id: 'm1-1', expr: '3x + 2x + 4', target: '5x + 4', hint: '3x + 2x = 5x, angka +4 tetap' },
                { id: 'm1-2', expr: '7a - 2a + 1', target: '5a + 1', hint: '7a - 2a = 5a, angka +1 tetap' },
                { id: 'm1-3', expr: '4x + 2y + x', target: '5x + 2y', hint: '4x + x = 5x, ditambah 2y' },
                { id: 'm1-4', expr: '6p + 5 - 2p', target: '4p + 5', hint: '6p - 2p = 4p, angka +5 tetap' }
              ]
            },
            {
              waveTitle: 'Gelombang 2: Buka Kurung Perkalian Ringan',
              items: [
                { id: 'm2-1', expr: '2(x + 3)', target: '2x + 6', hint: '2 dikali x = 2x, 2 dikali 3 = 6' },
                { id: 'm2-2', expr: '3(a + 2)', target: '3a + 6', hint: '3 dikali a = 3a, 3 dikali 2 = 6' },
                { id: 'm2-3', expr: '4(y - 1)', target: '4y - 4', hint: '4 dikali y = 4y, 4 dikali -1 = -4' },
                { id: 'm2-4', expr: '5(m + 2)', target: '5m + 10', hint: '5 dikali m = 5m, 5 dikali 2 = 10' }
              ]
            }
          ]
        },
        3: {
          name: 'Level 3: Sulit',
          pointsPerCorrect: 10,
          timeLimit: 100,
          subtitle: 'Kombinasi Kurung & Kuadrat Dasar (+10 Poin/Soal)',
          waves: [
            {
              waveTitle: 'Gelombang 1: Buka Kurung & Tambah Suku',
              items: [
                { id: 'h1-1', expr: '2(x + 1) + 3x', target: '5x + 2', hint: '2x + 2 + 3x = 5x + 2' },
                { id: 'h1-2', expr: '3(a + 2) - a', target: '2a + 6', hint: '3a + 6 - a = 2a + 6' },
                { id: 'h1-3', expr: '4x² + 2x²', target: '6x²', hint: 'Jumlahkan angkanya: 4 + 2 = 6x²' },
                { id: 'h1-4', expr: 'x(x + 4)', target: 'x² + 4x', hint: 'x dikali x = x², x dikali 4 = 4x' }
              ]
            },
            {
              waveTitle: 'Gelombang 2: Selisih Kuadrat Ringan',
              items: [
                { id: 'h2-1', expr: '(x + 2)(x - 2)', target: 'x² - 4', hint: 'Rumus (x+a)(x-a) = x² - a² (2² = 4)' },
                { id: 'h2-2', expr: '(x + 3)(x - 3)', target: 'x² - 9', hint: '3 dikali -3 = -9, jadi x² - 9' },
                { id: 'h2-3', expr: '(x + 5)(x - 5)', target: 'x² - 25', hint: '5 dikali -5 = -25, jadi x² - 25' },
                { id: 'h2-4', expr: '2x(x + 3)', target: '2x² + 6x', hint: '2x dikali x = 2x², 2x dikali 3 = 6x' }
              ]
            }
          ]
        }
      }
    },

    // ==================== GAME 2: KOTAK MISTERI ALJABAR (ISI 1 ANGKA HILANG) ====================
    {
      id: 'game-factor',
      number: 2,
      title: 'Kotak Misteri Aljabar: Tebak Angka!',
      mechanicType: 'NUMBER BOX FILLER',
      category: 'aljabar',
      categoryLabel: 'Aljabar • Isi 1 Angka yang Hilang di Kotak [ ? ]',
      accent: 'orange',
      badge: '🔢 KOTAK MISTERI',
      description: 'Sangat mudah dimainkan! Cukup klik 1 tombol angka di bawah untuk mengisi kotak kosong [ ? ] agar persamaan/faktor aljabarnya menjadi benar!',
      levels: {
        1: {
          name: 'Level 1: Mudah',
          pointsPerCorrect: 2,
          timeLimit: 60,
          subtitle: 'Tebak Nilai x Dasar (+2 Poin/Soal)',
          boxes: [
            {
              leftSide: 'x + 3 = 8   ➔   Nilai x =',
              rightSide: '',
              answer: '5',
              clue: 'Berapa ditambah 3 yang hasilnya 8? (8 - 3 = 5)',
              choices: ['3', '4', '5', '6', '8', '11'],
              explanation: 'Karena 5 + 3 = 8, maka nilai x yang mengisi kotak adalah 5.'
            },
            {
              leftSide: '2x = 10   ➔   Nilai x =',
              rightSide: '',
              answer: '5',
              clue: '2 dikali berapa yang hasilnya 10? (10 ÷ 2 = 5)',
              choices: ['2', '4', '5', '8', '10', '12'],
              explanation: 'Karena 2 × 5 = 10, maka nilai x adalah 5.'
            },
            {
              leftSide: 'x - 4 = 6   ➔   Nilai x =',
              rightSide: '',
              answer: '10',
              clue: 'Berapa dikurang 4 yang hasilnya 6? (6 + 4 = 10)',
              choices: ['2', '4', '6', '8', '10', '12'],
              explanation: 'Karena 10 - 4 = 6, maka nilai x adalah 10.'
            },
            {
              leftSide: '3x + 2x =',
              rightSide: 'x',
              answer: '5',
              clue: 'Jumlahkan koefisiennya: 3 ditambah 2',
              choices: ['1', '3', '5', '6', '8', '9'],
              explanation: '3x + 2x = (3 + 2)x = 5x. Jadi angka di dalam kotak adalah 5.'
            }
          ]
        },
        2: {
          name: 'Level 2: Sedang',
          pointsPerCorrect: 5,
          timeLimit: 60,
          subtitle: 'Lengkapi 1 Angka Faktor Aljabar (+5 Poin/Soal)',
          boxes: [
            {
              leftSide: '2(x + 4) = 2x +',
              rightSide: '',
              answer: '8',
              clue: 'Kalikan angka luar (2) dengan angka di dalam kurung (4): 2 × 4 = ?',
              choices: ['2', '4', '6', '8', '10', '12'],
              explanation: 'Dengan sifat distributif: 2(x + 4) = 2x + (2 × 4) = 2x + 8.'
            },
            {
              leftSide: 'x² - 9 = (x + 3)(x -',
              rightSide: ')',
              answer: '3',
              clue: 'Rumus selisih kuadrat: karena 9 = 3², maka pasangannya adalah (x + 3)(x - 3)',
              choices: ['1', '2', '3', '6', '9', '12'],
              explanation: 'x² - 9 = x² - 3² = (x + 3)(x - 3). Jadi angka yang hilang adalah 3.'
            },
            {
              leftSide: 'x² + 5x + 6 = (x + 2)(x +',
              rightSide: ')',
              answer: '3',
              clue: '2 ditambah berapa jadi 5, dan 2 dikali berapa jadi 6?',
              choices: ['1', '2', '3', '4', '5', '6'],
              explanation: 'Karena 2 + 3 = 5 dan 2 × 3 = 6, maka faktornya adalah (x + 2)(x + 3).'
            },
            {
              leftSide: '3x - 5 = 10   ➔   Nilai x =',
              rightSide: '',
              answer: '5',
              clue: 'Pindahkan -5 jadi +5: 3x = 15, lalu 15 dibagi 3 = ?',
              choices: ['2', '3', '4', '5', '10', '15'],
              explanation: '3x = 10 + 5 → 3x = 15 → x = 15 ÷ 3 = 5.'
            }
          ]
        },
        3: {
          name: 'Level 3: Sulit',
          pointsPerCorrect: 10,
          timeLimit: 75,
          subtitle: 'Tebak Akar & Faktor Kuadrat (+10 Poin/Soal)',
          boxes: [
            {
              leftSide: 'x² - 25 = (x + 5)(x -',
              rightSide: ')',
              answer: '5',
              clue: '25 adalah 5 kuadrat (5 × 5 = 25)',
              choices: ['2', '3', '4', '5', '10', '25'],
              explanation: 'Selisih dua kuadrat: x² - 25 = (x + 5)(x - 5).'
            },
            {
              leftSide: 'x² + 7x + 10 = (x + 2)(x +',
              rightSide: ')',
              answer: '5',
              clue: '2 ditambah berapa hasilnya 7, dan 2 dikali berapa hasilnya 10?',
              choices: ['2', '3', '4', '5', '7', '8'],
              explanation: '2 + 5 = 7 dan 2 × 5 = 10, sehingga faktornya (x + 2)(x + 5).'
            },
            {
              leftSide: 'Jika (x - 4)(x + 2) = 0, maka akar positifnya x =',
              rightSide: '',
              answer: '4',
              clue: 'Dari (x - 4) = 0, pindahkan -4 ke kanan menjadi positif!',
              choices: ['-4', '-2', '2', '4', '6', '8'],
              explanation: 'Pembuat nol dari (x - 4) = 0 adalah x = 4.'
            },
            {
              leftSide: 'x² - 6x + 8 = (x - 2)(x -',
              rightSide: ')',
              answer: '4',
              clue: '-2 dikurang berapa jadi -6, dan (-2) dikali (-berapa) jadi +8?',
              choices: ['2', '3', '4', '6', '8', '10'],
              explanation: '(-2) + (-4) = -6 dan (-2)×(-4) = +8, sehingga faktornya (x - 2)(x - 4).'
            }
          ]
        }
      }
    },

    // ==================== GAME 3: SPLDV BOSS BATTLE (1-KLIK JURUS LANGSUNG SERANG!) ====================
    {
      id: 'game-hunter',
      number: 3,
      title: 'SPLDV Hunter: Hero vs Boss Penjahat',
      mechanicType: '1-CLICK BOSS BATTLE',
      category: 'spldv',
      categoryLabel: 'SPLDV • Kalahkan Penjahat dengan 1 Klik Jurus Solusi',
      accent: 'cyan',
      badge: '⚔️ BOSS BATTLE',
      description: 'Lawan karakter Boss Penjahat! Cukup klik 1 Kartu Jurus jawaban (x, y) yang benar untuk langsung menembakkan serangan laser ke Boss!',
      levels: {
        1: {
          name: 'Level 1: Mudah',
          pointsPerCorrect: 2,
          timeLimit: 60,
          subtitle: 'Lawan Boss: Baron Koefisien (+2 Poin/Serangan)',
          boss: {
            name: 'Baron Koefisien',
            title: 'Cyber Drone Bandit',
            avatar: '👾',
            maxHp: 300,
            attackDamage: 20,
            taunt: 'Pilih 1 kartu jurus yang benar kalau kamu berani menyerangnya!'
          },
          battles: [
            {
              story: 'Baron Koefisien bertahan! Dua angka jika ditambah (x + y) = 5, dan jika dikurang (x - y) = 1. Manakah nilai x dan y yang benar?',
              system: ['x + y = 5', 'x - y = 1'],
              options: [
                { label: 'x = 3  dan  y = 2', isCorrect: true },
                { label: 'x = 4  dan  y = 1', isCorrect: false },
                { label: 'x = 2  dan  y = 3', isCorrect: false },
                { label: 'x = 5  dan  y = 0', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Cek: 3 + 2 = 5 (benar) dan 3 - 2 = 1 (benar). Jadi x = 3 dan y = 2!'
            },
            {
              story: 'Perisai kedua! Diketahui nilai y = 2, dan x + y = 6. Klik kartu jurus yang tepat untuk menyerang!',
              system: ['y = 2', 'x + y = 6'],
              options: [
                { label: 'x = 4  dan  y = 2', isCorrect: true },
                { label: 'x = 2  dan  y = 4', isCorrect: false },
                { label: 'x = 3  dan  y = 3', isCorrect: false },
                { label: 'x = 6  dan  y = 2', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Karena y = 2, maka x + 2 = 6 → x = 4. Jadi x = 4 dan y = 2!'
            },
            {
              story: 'Serangan penghabisan! Jumlah dua angka x + y = 10, dan selisihnya x - y = 2. Hancurkan Baron Koefisien!',
              system: ['x + y = 10', 'x - y = 2'],
              options: [
                { label: 'x = 6  dan  y = 4', isCorrect: true },
                { label: 'x = 5  dan  y = 5', isCorrect: false },
                { label: 'x = 7  dan  y = 3', isCorrect: false },
                { label: 'x = 4  dan  y = 6', isCorrect: false }
              ],
              damage: 100,
              explanation: '6 + 4 = 10 dan 6 - 4 = 2. Maka x = 6 dan y = 4!'
            }
          ]
        },
        2: {
          name: 'Level 2: Sedang',
          pointsPerCorrect: 5,
          timeLimit: 60,
          subtitle: 'Lawan Boss: General Eliminator (+5 Poin/Serangan)',
          boss: {
            name: 'General Eliminator',
            title: 'Mecha Shadow Warlord',
            avatar: '👹',
            maxHp: 300,
            attackDamage: 25,
            taunt: 'Pecahkan teka-teki belanja dan sistem SPLDV ini untuk menembus bajaku!'
          },
          battles: [
            {
              story: 'Harga 2 buku (2x) + 1 pensil (y) = 7 koin. Harga 1 buku (x) + 1 pensil (y) = 4 koin. Berapa harga 1 buku (x) dan 1 pensil (y)?',
              system: ['2x + y = 7', 'x + y = 4'],
              options: [
                { label: 'x = 3  dan  y = 1', isCorrect: true },
                { label: 'x = 2  dan  y = 3', isCorrect: false },
                { label: 'x = 1  dan  y = 3', isCorrect: false },
                { label: 'x = 4  dan  y = 0', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Kurangkan kedua persamaan: (2x - x) = 7 - 4 → x = 3. Maka 3 + y = 4 → y = 1!'
            },
            {
              story: 'Perisai Mecha kedua: Diketahui y = 2x dan x + y = 6. Pilih kartu serangan yang tepat!',
              system: ['y = 2x', 'x + y = 6'],
              options: [
                { label: 'x = 2  dan  y = 4', isCorrect: true },
                { label: 'x = 4  dan  y = 2', isCorrect: false },
                { label: 'x = 3  dan  y = 3', isCorrect: false },
                { label: 'x = 1  dan  y = 5', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Ganti y dengan 2x: x + 2x = 6 → 3x = 6 → x = 2 dan y = 4!'
            },
            {
              story: 'Serangan penutup melawan General Eliminator! Diketahui 2x + y = 10 dan x + y = 6.',
              system: ['2x + y = 10', 'x + y = 6'],
              options: [
                { label: 'x = 4  dan  y = 2', isCorrect: true },
                { label: 'x = 3  dan  y = 3', isCorrect: false },
                { label: 'x = 2  dan  y = 4', isCorrect: false },
                { label: 'x = 5  dan  y = 1', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Kurangkan langsung: (2x - x) = 10 - 6 → x = 4, dan y = 6 - 4 = 2!'
            }
          ]
        },
        3: {
          name: 'Level 3: Sulit',
          pointsPerCorrect: 10,
          timeLimit: 75,
          subtitle: 'Lawan Boss: Lord Chaos (+10 Poin/Serangan)',
          boss: {
            name: 'Lord Chaos',
            title: 'Supreme Void Overlord',
            avatar: '🐉',
            maxHp: 300,
            attackDamage: 25,
            taunt: 'Hanya Master SPLDV sejati yang bisa menemukan kelemahan perisaiku di Level Sulit!'
          },
          battles: [
            {
              story: 'Lord Chaos memasang perisai: 3x + y = 11 dan x + y = 5. Pilih jurus solusi (x, y) untuk menyerangnya!',
              system: ['3x + y = 11', 'x + y = 5'],
              options: [
                { label: 'x = 3  dan  y = 2', isCorrect: true },
                { label: 'x = 2  dan  y = 3', isCorrect: false },
                { label: 'x = 4  dan  y = 1', isCorrect: false },
                { label: 'x = 5  dan  y = 0', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Kurangkan: (3x - x) = 11 - 5 → 2x = 6 → x = 3, dan y = 5 - 3 = 2!'
            },
            {
              story: 'Perisai kedua Lord Chaos: 2x + 3y = 12 dan 2x + y = 8. Hancurkan dengan jurus yang tepat!',
              system: ['2x + 3y = 12', '2x + y = 8'],
              options: [
                { label: 'x = 3  dan  y = 2', isCorrect: true },
                { label: 'x = 2  dan  y = 3', isCorrect: false },
                { label: 'x = 4  dan  y = 1', isCorrect: false },
                { label: 'x = 1  dan  y = 4', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Kurangkan kedua persamaan: 2y = 4 → y = 2. Masukkan y = 2 ke 2x + 2 = 8 → x = 3!'
            },
            {
              story: 'Serangan Pamungkas! Diketahui x = y + 2 dan x + y = 8. Kalahkan Lord Chaos sekarang!',
              system: ['x = y + 2', 'x + y = 8'],
              options: [
                { label: 'x = 5  dan  y = 3', isCorrect: true },
                { label: 'x = 3  dan  y = 5', isCorrect: false },
                { label: 'x = 6  dan  y = 2', isCorrect: false },
                { label: 'x = 4  dan  y = 4', isCorrect: false }
              ],
              damage: 100,
              explanation: 'Karena selisihnya 2 dan jumlahnya 8, maka x = 5 dan y = 3!'
            }
          ]
        }
      }
    },

    // ==================== GAME 4: GRAFIK & TITIK POTONG DUEL (RADAR SNIPER) ====================
    // Mode Mudah: Garis & titik bantu terlihat.
    // Mode Sedang & Sulit: TIDAK dikasih tahu titiknya di gambar (cari sendiri koordinatnya!)
    {
      id: 'game-graph',
      number: 4,
      title: 'Grafik & Titik Potong Duel',
      mechanicType: 'CARTESIAN RADAR SNIPER',
      category: 'spldv',
      categoryLabel: 'SPLDV • Cari & Bidik Titik Potong (x, y) di Grafik',
      accent: 'cyan',
      badge: '🎯 RADAR SNIPER',
      description: 'Tentukan koordinat titik potong (x, y) dari dua persamaan garis! Di Mode Sedang & Sulit, titik potong tidak diberitahu di gambar sehingga kamu harus mencarinya sendiri!',
      levels: {
        1: {
          name: 'Level 1: Mudah',
          pointsPerCorrect: 2,
          timeLimit: 60,
          subtitle: 'Mode Latihan: Garis & Titik Terlihat (+2 Poin/Soal)',
          missions: [
            {
              prompt: 'Perhatikan radar! Garis tegak x = 3 dan garis mendatar y = 2 bertemu di satu titik. Klik titik potong itu lalu tekan TEMBAK!',
              line1: { label: 'x = 3', a: 1, b: 0, c: 3 },
              line2: { label: 'y = 2', a: 0, b: 1, c: 2 },
              intersection: { x: 3, y: 2 },
              showLinesPreview: true,
              showDotHint: true,
              explanation: 'Garis x = 3 dan y = 2 berpotongan tepat pada koordinat (3, 2).'
            },
            {
              prompt: 'Arahkan bidikan sniper tepat ke titik pertemuan garis x + y = 4 dan garis y = x pada radar!',
              line1: { label: 'x + y = 4', a: 1, b: 1, c: 4 },
              line2: { label: 'y = x', a: 1, b: -1, c: 0 },
              intersection: { x: 2, y: 2 },
              showLinesPreview: true,
              showDotHint: true,
              explanation: 'Kedua garis bertemu di koordinat x = 2 dan y = 2, yaitu titik (2, 2).'
            },
            {
              prompt: 'Klik titik perpotongan antara garis mendatar y = 1 dan garis miring x + y = 5!',
              line1: { label: 'y = 1', a: 0, b: 1, c: 1 },
              line2: { label: 'x + y = 5', a: 1, b: 1, c: 5 },
              intersection: { x: 4, y: 1 },
              showLinesPreview: true,
              showDotHint: true,
              explanation: 'Jika y = 1 dimasukkan ke x + y = 5, diperoleh x = 4. Titik potongnya adalah (4, 1).'
            }
          ]
        },
        2: {
          name: 'Level 2: Sedang',
          pointsPerCorrect: 5,
          timeLimit: 60,
          subtitle: 'Cari Sendiri Titik Potongnya Tanpa Bocoran Titik (+5 Poin/Soal)',
          missions: [
            {
              prompt: 'CARI SENDIRI: Di titik koordinat (x, y) manakah garis x + y = 6 dan garis x - y = 2 berpotongan? Klik titiknya di grafik lalu tekan TEMBAK!',
              line1: { label: 'x + y = 6', a: 1, b: 1, c: 6 },
              line2: { label: 'x - y = 2', a: 1, b: -1, c: 2 },
              intersection: { x: 4, y: 2 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Jumlahkan x + y = 6 dan x - y = 2 → 2x = 8 → x = 4 dan y = 2. Titik potongnya adalah (4, 2).'
            },
            {
              prompt: 'CARI SENDIRI: Hitung titik potong antara garis y = 2x dan garis x + y = 3, lalu bidik koordinatnya di grafik!',
              line1: { label: 'y = 2x', a: 2, b: -1, c: 0 },
              line2: { label: 'x + y = 3', a: 1, b: 1, c: 3 },
              intersection: { x: 1, y: 2 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Substitusikan y = 2x ke x + y = 3 → 3x = 3 → x = 1 dan y = 2. Titik potong: (1, 2).'
            },
            {
              prompt: 'CARI SENDIRI: Tentukan titik potong garis 2x + y = 5 dan garis x + y = 3 pada bidang Kartesius!',
              line1: { label: '2x + y = 5', a: 2, b: 1, c: 5 },
              line2: { label: 'x + y = 3', a: 1, b: 1, c: 3 },
              intersection: { x: 2, y: 1 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Kurangkan kedua persamaan: x = 2 dan y = 1. Titik potongnya berada di (2, 1).'
            }
          ]
        },
        3: {
          name: 'Level 3: Sulit',
          pointsPerCorrect: 10,
          timeLimit: 70,
          subtitle: 'Tantangan Mandiri Lintas Kuadran (+10 Poin/Soal)',
          missions: [
            {
              prompt: 'TANTANGAN MANDIRI: Cari sendiri titik potong antara garis x + y = 2 dan garis x - y = 4, lalu kunci koordinatnya di grafik!',
              line1: { label: 'x + y = 2', a: 1, b: 1, c: 2 },
              line2: { label: 'x - y = 4', a: 1, b: -1, c: 4 },
              intersection: { x: 3, y: -1 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Jumlahkan: 2x = 6 → x = 3. Masukkan x = 3 ke 3 + y = 2 → y = -1. Titik potongnya adalah (3, -1).'
            },
            {
              prompt: 'TANTANGAN MANDIRI: Cari titik potong antara garis x = -2 dan garis x + y = 1 pada bidang Kartesius!',
              line1: { label: 'x = -2', a: 1, b: 0, c: -2 },
              line2: { label: 'x + y = 1', a: 1, b: 1, c: 1 },
              intersection: { x: -2, y: 3 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Substitusikan x = -2 ke -2 + y = 1 → y = 3. Kedua garis bertemu di titik (-2, 3).'
            },
            {
              prompt: 'TANTANGAN MANDIRI: Cari titik potong antara garis x + y = 0 dan garis x - y = 2!',
              line1: { label: 'x + y = 0', a: 1, b: 1, c: 0 },
              line2: { label: 'x - y = 2', a: 1, b: -1, c: 2 },
              intersection: { x: 1, y: -1 },
              showLinesPreview: false,
              showDotHint: false,
              explanation: 'Jumlahkan kedua persamaan: 2x = 2 → x = 1 dan y = -1. Titik potongnya adalah (1, -1).'
            }
          ]
        }
      }
    }
  ],

  // ------------------------------------------------------------------------
  // KUESIONER ANALISIS PASSION (MENUNJANG KESIMPULAN OTOMATIS)
  // ------------------------------------------------------------------------
  passionQuestions: [
    {
      id: 'q1',
      question: 'Ketika menghadapi tantangan matematika baru, pendekatan mana yang paling membuatmu bersemangat?',
      options: [
        { label: 'Mengutak-atik pola simbol, menyederhanakan suku sejenis, dan menebak angka aljabar yang hilang', category: 'aljabar' },
        { label: 'Menerjemahkan kasus nyata/soal cerita ke dalam sistem persamaan dan mencari titik temunya', category: 'spldv' }
      ]
    },
    {
      id: 'q2',
      question: 'Tipe permainan matematika mana yang terasa lebih seru saat kamu mainkan?',
      options: [
        { label: 'Menarik kapsul Drag & Drop suku sejenis dan memecahkan Kotak Misteri Aljabar', category: 'aljabar' },
        { label: 'Melawan Boss Penjahat SPLDV dan membidik titik potong koordinat (x, y) di radar Kartesius', category: 'spldv' }
      ]
    },
    {
      id: 'q3',
      question: 'Saat memeriksa kebenaran jawaban matematika, cara mana yang lebih kamu sukai?',
      options: [
        { label: 'Menjabarkan kembali perkalian kurung untuk memastikan bentuk aljabarnya sama', category: 'aljabar' },
        { label: 'Melihat perpotongan garis pada grafik koordinat Kartesius (x, y) atau menguji nilai ke dua persamaan', category: 'spldv' }
      ]
    },
    {
      id: 'q4',
      question: 'Dalam kecepatan berhitung, bagian mana yang membuatmu merasa paling nyaman dan percaya diri?',
      options: [
        { label: 'Mengelompokkan suku-suku sejenis seperti 2x + 3x = 5x dengan kilat', category: 'aljabar' },
        { label: 'Mengurangkan atau menjumlahkan dua persamaan SPLDV untuk menemukan nilai x dan y', category: 'spldv' }
      ]
    },
    {
      id: 'q5',
      question: 'Jika kamu menjadi ahli teknologi masa depan, peran mana yang paling cocok dengan gaya berpikirmu?',
      options: [
        { label: 'Algorithm & Code Specialist — merancang rumus dan logika simbolik (Aljabar)', category: 'aljabar' },
        { label: 'System & Network Analyst — menganalisis keseimbangan dua variabel sistem dan grafik (SPLDV)', category: 'spldv' }
      ]
    }
  ]
};
