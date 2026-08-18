const articles = [
  {
    id: "1",
    slug: "structuring-scalable-react-projects",
    title: "Menyusun Proyek React yang Mudah Dikembangkan",
    excerpt:
      "Struktur folder dan komponen praktis yang tetap mudah dipahami ketika codebase React berkembang menjadi banyak halaman.",
    category: "react",
    author: "Depal",
    date: "2026-06-02",
    readTime: "6 menit baca",
    coverLabel: "REACT",
    content: [
      "Sebagian besar proyek React dimulai dengan struktur yang rapi, kemudian menjadi sulit dinavigasi setelah beberapa bulan. Penyebabnya biasanya bukan framework-nya, melainkan struktur folder yang berkembang secara reaktif tanpa perencanaan yang jelas.",

      "Struktur yang memisahkan halaman, komponen yang dapat digunakan kembali, layout, dan akses data biasanya dapat bertahan dengan baik. Halaman bertanggung jawab terhadap layout dan pengambilan data untuk satu route. Komponen tetap bersifat presentasional dan dapat digunakan kembali. Service menangani komunikasi dengan API, sehingga mengganti backend tidak mengharuskan kita mengubah setiap halaman.",

      "Context sebaiknya digunakan secara bijak, khususnya untuk state yang benar-benar dibutuhkan oleh banyak komponen yang tidak saling berkaitan, seperti pengguna yang sedang login atau daftar artikel bersama. State lokal yang disimpan di dalam komponen yang mengelolanya biasanya lebih mudah dipahami daripada langsung menaikkannya ke level yang lebih tinggi.",

      "Hal ini sebenarnya tidak hanya berlaku untuk React. Pemisahan antara tampilan, data, dan routing juga dapat ditemukan pada sebagian besar framework frontend. Yang berbeda hanyalah sintaksnya, bukan prinsip dasarnya."
    ]
  },

  {
    id: "2",
    slug: "designing-rest-apis-with-fastapi",
    title: "Merancang REST API dengan FastAPI",
    excerpt:
      "Catatan tentang menyusun route, model, dan service FastAPI agar API tetap terstruktur dan mudah dipahami ketika jumlah endpoint bertambah.",
    category: "python",
    author: "Depal",
    date: "2026-05-18",
    readTime: "7 menit baca",
    coverLabel: "PYTHON",
    content: [
      "FastAPI sangat cocok digunakan dengan pemisahan yang jelas antara routing, model data, dan logika bisnis. Route sebaiknya menjelaskan apa yang dilakukan sebuah endpoint, bukan bagaimana data disimpan atau divalidasi.",

      "Model Pydantic juga berfungsi sebagai dokumentasi. Memberikan nama yang jelas pada model request dan response, daripada menggunakan satu model untuk semuanya, membuat kontrak API lebih mudah dipahami hanya dengan melihat kodenya.",

      "Service layer yang tipis di antara route dan database membuat handler route tetap singkat. Pendekatan ini juga membuat logika yang sama dapat digunakan kembali jika nantinya dibutuhkan oleh antarmuka lain, seperti background job.",

      "Dokumentasi OpenAPI otomatis dari FastAPI hanya akan berguna jika type hint yang digunakan juga jelas. Menentukan tipe data dengan baik sejak awal membantu menghindari schema API yang secara teknis benar tetapi kurang bermanfaat dalam praktik."
    ]
  },

  {
    id: "3",
    slug: "javascript-closures-explained-simply",
    title: "Closure JavaScript, Dijelaskan dengan Sederhana",
    excerpt:
      "Closure muncul hampir di seluruh bagian JavaScript, mulai dari event handler hingga hooks. Berikut cara sederhana untuk memahaminya.",
    category: "javascript",
    author: "Depal",
    date: "2026-04-27",
    readTime: "5 menit baca",
    coverLabel: "JS",
    content: [
      "Closure adalah fungsi yang mengingat variabel dari tempat fungsi tersebut dibuat, bahkan setelah fungsi luar selesai dijalankan. Itulah inti dari closure, sedangkan hal lainnya merupakan penerapannya.",

      "Inilah alasan sebuah fungsi counter dapat menyimpan jumlahnya sendiri tanpa menggunakan variabel global. Hal yang sama juga membantu menjelaskan bagaimana hook React seperti useState dapat mempertahankan nilai di antara proses render.",

      "Kesalahan yang sering terjadi adalah closure di dalam loop menangkap variabel yang sama, bukan variabel baru untuk setiap iterasi. Menggunakan let daripada var, atau membuat scope baru secara eksplisit, dapat menghindari masalah tersebut.",

      "Memahami closure membuat banyak hal yang terlihat seperti 'sihir' dalam library JavaScript terasa lebih masuk akal. Biasanya semuanya hanyalah fungsi yang tetap menyimpan scope tempat fungsi tersebut dibuat."
    ]
  },

  {
    id: "4",
    slug: "what-makes-an-api-actually-scalable",
    title: "Apa yang Membuat Sebuah API Benar-Benar Skalabel",
    excerpt:
      "Skalabilitas sering dianggap hanya sebagai masalah performa, padahal sebagian besar berkaitan dengan bagaimana sebuah service dirancang agar dapat terus berubah.",
    category: "backend",
    author: "Depal",
    date: "2026-04-09",
    readTime: "8 menit baca",
    coverLabel: "BACKEND",
    content: [
      "Kemampuan menangani traffic adalah salah satu bagian dari skalabilitas, tetapi masalah yang lebih sering terjadi adalah service yang tidak dapat berubah tanpa merusak pengguna atau sistem yang bergantung padanya. Endpoint yang memiliki versi dan bentuk response yang konsisten ternyata lebih penting daripada yang diperkirakan banyak tim pada tahap awal.",

      "Statelessness membantu proses scaling secara horizontal, tetapi juga membuat proses debugging lebih sederhana. Request yang gagal dapat dicoba kembali di server mana pun tanpa efek samping dari percobaan sebelumnya.",

      "Caching sebaiknya diterapkan pada data yang jauh lebih sering dibaca daripada diubah, bukan digunakan di mana-mana secara default. Caching pada data yang salah dapat menciptakan masalah data kedaluwarsa yang justru lebih sulit diperbaiki daripada masalah performa yang ingin diselesaikan.",

      "Skalabel bukan berarti hanya mampu menangani lebih banyak request. Sistem yang skalabel adalah sistem yang dapat menerima kebutuhan baru, traffic yang lebih besar, client baru, dan data baru tanpa harus ditulis ulang dari awal."
    ]
  },

  {
    id: "5",
    slug: "clean-code-is-a-habit-not-a-rulebook",
    title: "Clean Code adalah Kebiasaan, Bukan Buku Aturan",
    excerpt:
      "Penamaan, ukuran fungsi, dan konsistensi lebih penting dalam pekerjaan sehari-hari daripada sebagian besar aturan yang terdapat dalam style guide.",
    category: "software-engineering",
    author: "Depal",
    date: "2026-03-22",
    readTime: "6 menit baca",
    coverLabel: "ENG",
    content: [
      "Panduan clean code sering berubah menjadi daftar aturan yang harus dicentang. Padahal, sebagian besar hal yang membuat kode mudah digunakan berasal dari beberapa kebiasaan yang dilakukan secara konsisten: nama yang jelas, fungsi yang kecil, dan struktur yang mudah diprediksi.",

      "Nama sebuah fungsi sebaiknya cukup jelas untuk menjelaskan apa yang dilakukan fungsi tersebut sehingga membaca isi fungsinya menjadi pilihan, bukan keharusan. Jika sebuah nama membutuhkan komentar agar dapat dipahami, biasanya nama tersebutlah yang perlu diperbaiki.",

      "Konsistensi dalam sebuah codebase lebih penting daripada memastikan setiap aturan tertentu selalu 'benar'. Tim yang menyepakati satu konvensi yang mungkin tidak sempurna tetap dapat bergerak lebih cepat daripada tim yang memperdebatkan konvensi ideal pada setiap file.",

      "Clean code bukan sekadar mengikuti style guide. Lebih dari itu, clean code berarti menghargai orang berikutnya yang harus membaca kode tersebut, yang sering kali adalah diri kita sendiri di masa depan."
    ]
  },

  {
    id: "6",
    slug: "performance-basics-for-modern-web-apps",
    title: "Dasar-Dasar Performa untuk Aplikasi Web Modern",
    excerpt:
      "Daftar singkat kebiasaan optimasi performa yang paling penting sebelum menggunakan teknik optimasi yang lebih kompleks.",
    category: "web-development",
    author: "Depal",
    date: "2026-03-05",
    readTime: "5 menit baca",
    coverLabel: "WEB",
    content: [
      "Sebelum menggunakan profiling tools dan teknik optimasi tingkat lanjut, beberapa hal dasar sudah mencakup sebagian besar masalah performa di dunia nyata: gambar yang tidak dioptimalkan, render ulang yang tidak diperlukan, dan script yang menghambat proses rendering.",

      "Memuat hanya resource yang dibutuhkan sebuah halaman dan menunda sisanya biasanya memberikan dampak yang lebih besar daripada melakukan optimasi kecil pada kode yang sebenarnya sudah berjalan dengan cepat.",

      "Melakukan pengukuran sebelum optimasi membantu menghindari perbaikan terhadap masalah yang sebenarnya tidak ada. Developer tools pada browser dan Lighthouse biasanya sudah cukup untuk menemukan bagian mana yang benar-benar menghabiskan waktu.",

      "Cepat adalah sebuah fitur. Pengguna akan menyadari ketika sebuah antarmuka terasa lambat meskipun mereka tidak selalu dapat menjelaskan mengapa pengalaman tersebut terasa kurang nyaman."
    ]
  },

  {
    id: "7",
    slug: "state-management-without-overengineering",
    title: "State Management Tanpa Overengineering",
    excerpt:
      "Tidak semua aplikasi membutuhkan global store. Berikut panduan praktis mengenai kapan local state, context, dan library eksternal sebaiknya digunakan.",
    category: "react",
    author: "Depal",
    date: "2026-02-14",
    readTime: "6 menit baca",
    coverLabel: "REACT",
    content: [
      "Keinginan untuk langsung menggunakan library state management sejak awal sering menambahkan kompleksitas yang sebenarnya belum dibutuhkan oleh sebuah proyek. Local state pada komponen sudah cukup untuk menangani sebagian besar kebutuhan UI.",

      "Context cocok digunakan untuk state yang memang digunakan bersama dan jarang berubah, seperti tema atau pengguna yang sudah terautentikasi. Context kurang cocok untuk state yang sering berubah dan hanya dibutuhkan oleh beberapa komponen.",

      "Library state eksternal layak digunakan ketika sebuah aplikasi memiliki state yang kompleks, saling bergantung, dan digunakan oleh banyak bagian UI yang tidak saling berkaitan. Library tersebut tidak perlu digunakan sebelum masalah tersebut benar-benar muncul.",

      "Jumlah state management yang tepat adalah jumlah paling sedikit yang membuat kode tetap mudah dipahami. Menambahkan pengelolaan state lebih lanjut di kemudian hari bukan masalah ketika aplikasi memang sudah membutuhkannya."
    ]
  },

  {
    id: "8",
    slug: "writing-python-services-that-age-well",
    title: "Membangun Python Service yang Tetap Terawat",
    excerpt:
      "Type hint, batas modul yang jelas, dan dependency yang sedikit membantu menjaga Python service tetap mudah dirawat bahkan setelah bertahun-tahun.",
    category: "python",
    author: "Depal",
    date: "2026-01-27",
    readTime: "7 menit baca",
    coverLabel: "PYTHON",
    content: [
      "Fleksibilitas Python sangat membantu di tahap awal, tetapi dapat menjadi masalah di kemudian hari jika sebuah codebase tidak memiliki batasan yang jelas. Type hint, meskipun hanya digunakan sebagian, dapat menemukan banyak bug penting sebelum aplikasi dijalankan.",

      "Menjaga setiap modul tetap fokus pada satu tanggung jawab, seperti akses database, validasi request, dan aturan bisnis, membuat kita lebih mudah mengubah satu bagian tanpa harus memahami keseluruhan service.",

      "Dependency bukan hanya kemudahan, tetapi juga biaya pemeliharaan. Daftar dependency yang lebih kecil dan dipahami dengan baik akan lebih mudah dirawat dalam jangka panjang dibandingkan daftar dependency besar yang dipilih hanya demi kecepatan jangka pendek.",

      "Service yang dapat bertahan dengan baik bukanlah service yang berhasil menghindari semua technical debt. Service yang baik adalah service yang technical debt-nya terlihat, terkontrol, dan mudah dipahami."
    ]
  }
];

export default articles;