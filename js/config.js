const PORTFOLIO_CONFIG = {
  hero: {
    badge: "PORTFOLIO • RAFLY AHMAD MUZAKI",
    greeting: "Halo! Saya",
    name: "Rafly Ahmad Muzaki",
    profileImg: "assets/bre.jpg",
    titles: [
      "Pelajar & Learner Web Dev",
      "Suka Motoran & Riding Santai",
      "Eksplorasi Tampilan Web"
    ],
    shortBio: "Selamat datang di website portofolio pribadi saya. Tempat dokumentasi proses belajar web development dan hobi sehari-hari.",
    status: {
      text: "Proses Belajar & Eksplorasi",
      available: true
    },
    cta: {
      primaryText: "Skill & Belajar",
      primaryLink: "#skills",
      secondaryText: "Hubungi Saya",
      secondaryLink: "#contact"
    }
  },

  about: {
    subtitle: "Cerita Singkat & Sisi Lain",
    photos: [
      {
        id: "profil-rafly",
        src: "assets/dem.jpg",
        alt: "Foto Profil Rafly Ahmad Muzaki",
        badge: "TENTANG RAFLY",
        tabName: "📸 Profil Saya",
        title: "Tentang Rafly Ahmad Muzaki",
        story: "Halo! saya Rafly Ahmad Muzaki, mahasiswa S1 Teknik Informatika di UIN Sunan Gunung Djati Bandung. Lagi fokus belajar dan ngembangin skill di bidang Web Development serta UI/UX Design. Saat ini masih terus eksplor teknologi web, mulai dari ngoding sampai bikin tampilan yang enak dilihat dan nyaman dipakai. Website portofolio ini saya bikin sebagai tempat buat nyimpen hasil belajar, dokumentasi proyek, dan perjalanan selama ngembangin skill. Masih banyak yang perlu dipelajari, tapi saya percaya setiap proyek adalah langkah kecil buat jadi lebih baik.",
        tags: ["Learning", "Web Enthusiast", "Santai & Konsisten"],
        featured: true
      },
      {
        id: "hobi-motor",
        src: "assets/tampan.jpg",
        alt: "axel",
        badge: "HOBI MOTORAN",
        tabName: "🏍️ Hobi & Motoran",
        title: "Hobi & Motor Kesayangan",
        story: "Di luar dunia coding dan desain, saya juga menyempatkan waktu untuk recharge. Biasanya saya motoran santai bersama 'Axel', motor kesayangan yang selalu menemani mencari udara segar. Bagi saya, riding adalah cara sederhana untuk refreshing, menjernihkan pikiran, dan kembali fokus saat mengerjakan proyek atau memecahkan bug.",
        tags: ["Motoran / Riding", "Refreshing & Chill"],
        featured: false
      }
    ]
  },

  skills: [
    { name: "HTML5 (Dasar Web)", level: 45, icon: "🌐", color: "#ff5722", desc: "Paham struktur tag, tabel, form, dan tata letak halaman dasar." },
    { name: "CSS3 (Styling & Tampilan)", level: 35, icon: "🎨", color: "#2965f1", desc: "Bisa atur warna, font, flexbox, margin, dan efek visual sederhana." },
    { name: "Python (Syntax & Logic Dasar)", level: 20, icon: "🐍", color: "#3776ab", desc: "Paham variabel, kondisi (if-else), perulangan, dan fungsi dasar." },
    { name: "JavaScript (Interaksi Dikit-Dikit)", level: 20, icon: "⚡", color: "#f7df1e", desc: "Masih belajar DOM dasar, event listener, dan logika interaktif." },
    { name: "C++ / Bahasa Lain", level: 5, icon: "💻", color: "#00599c", desc: "Pernah dengar dan coba kodingan Hello World dasar banget." },
    { name: "Tools & Ecosystem Lainnya", level: 2, icon: "🛠️", color: "#a855f7", desc: "Baru tahu nama-nama toolsnya dan masih proses baca-baca." }
  ],

  projects: [
    {
      id: "web-portofolio",
      title: "Web Portofolio Futuristik",
      category: "web",
      description: "Project portofolio interaktif yang dibuat untuk wadah nampilkan identitas, hobi, dan progress belajar koding.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      badge: "PROJECT UTAMA"
    },
    {
      id: "python-basics",
      title: "Latihan Logika Python Dasar",
      category: "python",
      description: "Kumpulan script latihan sederhana Python untuk melatih logika seperti kalkulator dan program perulangan.",
      tags: ["Python 3", "Basic Logic"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      badge: "EXPERIMENT"
    }
  ],

  journey: [
    {
      year: "Awal",
      title: "Mulai Kenal Dunia Koding",
      subtitle: "Penasaran Gimana Web Dibuat",
      desc: "Mulai buka-buka tutorial dasar HTML & CSS di internet karena tertarik ingin punya web sendiri."
    },
    {
      year: "Proses",
      title: "Belajar Dasar Python & JS",
      subtitle: "Melatih Logika Pemrograman",
      desc: "Mulai mencoba menulis kode Python 20% untuk dasar logika dan sedikit-sedikit mempelajari JavaScript."
    },
    {
      year: "Sekarang",
      title: "Bikin Web Portofolio",
      subtitle: "Merapikan Hasil Belajar",
      desc: "Mengumpulkan hasil latihan dan membuat tampilan web yang rapi untuk dokumentasi pribadi."
    }
  ],

  contact: {
    email: "raflyahmadmuzaki@example.com",
    whatsapp: "082263074525",
    whatsappLink: "https://wa.me/6282263074525?text=Halo%20Rafly!%20Saya%20lihat%20portofolio%20anda",
    instagram: "https://www.instagram.com/keepflyy___?igsh=NXg0N216bDI0bTZ5",
    linkedin: "https://www.linkedin.com/in/rafly-ahmad-muzaki-4b50282a2/",
    github: "https://github.com/RaflyAhmadMuzaki",
    location: "Indonesia 🇮🇩"
  },

  adminPin: "925414",
  telegramToken: "8800524334:AAF7Ye417oGkN9WVGPV3fcJKMyCc03zwsXE",
  telegramChatId: "6939465787"
};

Object.freeze(PORTFOLIO_CONFIG);