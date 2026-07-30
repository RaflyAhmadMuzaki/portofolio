/**
 * Native Client-Side i18n Translation Engine
 * 100% Reliable, 0ms latency, zero browser popups, works offline & on file:// protocol.
 * Portofolio Rafly Ahmad Muzaki
 */

const TRANSLATIONS = {
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang Saya",
    nav_skills: "Skill & Belajar",
    nav_contact: "Media Sosial",

    hero_badge: "PORTOFOLIO • RAFLY AHMAD MUZAKI",
    hero_greeting: "Halo kawan! Saya ",
    hero_titles: [
      "Pelajar & Learner Web Dev",
      "Suka Motoran & Riding Santai",
      "Eksplorasi Tampilan Web"
    ],
    hero_bio: "Selamat datang di website portofolio pribadi saya. Tempat dokumentasi proses belajar web development dan hobi sehari-hari.",
    btn_skills: "⚡ Lihat Skill Saya",
    btn_about: "📸 Tentang Saya",
    btn_contact: "🌐 Media Sosial",

    about_tag: "[ KISAH & HOBI ]",
    about_title_prefix: "Tentang ",
    about_title_highlight: "Saya & Hobi",
    about_subtitle: "Pilih foto di bawah untuk membaca cerita singkat di baliknya:",
    
    photo1_tab: "📸 Profil Saya",
    photo1_badge: "TENTANG RAFLY",
    photo1_title: "Tentang Rafly Ahmad Muzaki",
    photo1_story: "Halo! Saya Rafly Ahmad Muzaki, mahasiswa S1 Teknik Informatika di UIN Sunan Gunung Djati Bandung. Lagi fokus belajar dan ngembangin skill di bidang Web Development serta UI/UX Design. Saat ini masih terus eksplor teknologi web, mulai dari ngoding sampai bikin tampilan yang enak dilihat dan nyaman dipakai.\n\nWebsite portofolio ini saya bikin sebagai tempat buat nyimpen hasil belajar, dokumentasi proyek, dan perjalanan selama ngembangin skill. Masih banyak yang perlu dipelajari, tapi saya percaya setiap proyek adalah langkah kecil buat jadi lebih baik.",
    photo1_tags: ["Learning", "Web Enthusiast", "Santai & Konsisten"],

    photo2_tab: "🏍️ Hobi & Motoran",
    photo2_badge: "HOBI MOTORAN",
    photo2_title: "Hobi & Motor Kesayangan",
    photo2_story: "Di luar dunia coding dan desain, saya juga menyempatkan waktu untuk recharge. Biasanya saya motoran santai bersama Axel, motor kesayangan yang selalu menemani mencari udara segar. Bagi saya, riding adalah cara sederhana untuk refreshing, menjernihkan pikiran, dan kembali fokus saat mengerjakan proyek atau memecahkan bug.",
    photo2_tags: ["Motoran / Riding", "Refreshing & Chill"],

    skills_tag: "[ SKILL & PROGRESS ]",
    skills_title_prefix: "Kemampuan & ",
    skills_title_highlight: "Hal yang Dipelajari",
    skills_subtitle: "Persentase di bawah ini dibuat jujur sesuai tingkat pemahaman dasar yang lagi saya pelajari saat ini:",

    skills_list: [
      { name: "HTML5 (Dasar Web)", desc: "Paham struktur tag, tabel, form, dan tata letak halaman dasar." },
      { name: "CSS3 (Styling & Tampilan)", desc: "Bisa atur warna, font, flexbox, margin, dan efek visual sederhana." },
      { name: "Python (Syntax & Logic Dasar)", desc: "Paham variabel, kondisi (if-else), perulangan, dan fungsi dasar." },
      { name: "JavaScript (Interaksi Dikit-Dikit)", desc: "Masih belajar DOM dasar, event listener, dan logika interaktif." },
      { name: "C++ / Bahasa Lain", desc: "Pernah dengar dan coba kodingan Hello World dasar banget." },
      { name: "Tools & Ecosystem Lainnya", desc: "Baru tahu nama-nama toolsnya dan masih proses baca-baca." }
    ],

    contact_tag: "[ MEDIA SOSIAL & JEJARING ]",
    contact_title_prefix: "Jejaring & ",
    contact_title_highlight: "Media Sosial",
    contact_subtitle: "Temukan dan terhubung dengan Rafly Ahmad Muzaki melalui akun media sosial & platform resmi di bawah ini:",
    contact_wa_badge: "🌐 MEDIA SOSIAL & JEJARING",
    contact_wa_label: "Social Media",
    contact_social_badge: "🌐 JEJARING & MEDSOS",

    contact_ig_desc: "Akun Instagram Pribadi & Kegiatan Harian",
    contact_ig_btn: "Ikuti di Instagram",
    contact_li_desc: "Profil Profesional & Koneksi Karir",
    contact_li_btn: "Hubungkan di LinkedIn",
    contact_gh_desc: "Repository Kode & Proyek Belajar",
    contact_gh_btn: "Lihat Repository",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Web Portofolio Santai & Futuristic",
    footer_status_label: "Status: ",
    footer_status_val: "● Safe & Active"
  },

  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_skills: "Skills & Learning",
    nav_contact: "Social Media",

    hero_badge: "PORTFOLIO • RAFLY AHMAD MUZAKI",
    hero_greeting: "Hello friends! I'm ",
    hero_titles: [
      "Student & Web Dev Learner",
      "Motorcycling & Chill Riding",
      "Exploring Web UI Design"
    ],
    hero_bio: "Welcome to my personal portfolio website! A place documenting my web development learning process and daily hobbies.",
    btn_skills: "⚡ View My Skills",
    btn_about: "📸 About Me",
    btn_contact: "🌐 Social Media",

    about_tag: "[ STORIES & HOBBIES ]",
    about_title_prefix: "About ",
    about_title_highlight: "Me & Hobbies",
    about_subtitle: "Click a photo below to read the short story behind it:",

    photo1_tab: "📸 My Profile",
    photo1_badge: "ABOUT RAFLY",
    photo1_title: "About Rafly Ahmad Muzaki",
    photo1_story: "Hello! I am Rafly Ahmad Muzaki, an undergraduate Informatics Engineering student at UIN Sunan Gunung Djati Bandung. Currently focusing on learning and developing skills in Web Development and UI/UX Design. I am actively exploring web technology, from coding to creating visually appealing and user-friendly interfaces.\n\nI built this portfolio website as a space to store my learning outcomes, project documentation, and skill development journey. There is still much to learn, but I believe every project is a small step toward becoming better.",
    photo1_tags: ["Learning", "Web Enthusiast", "Consistent & Relaxed"],

    photo2_tab: "🏍️ Hobby & Riding",
    photo2_badge: "MOTORCYCLE HOBBY",
    photo2_title: "Hobby & Beloved Motorcycle",
    photo2_story: "Outside the world of coding and design, I also take time to recharge. I usually enjoy casual motorcycle riding with Axel, my beloved bike that always accompanies me to get fresh air. For me, riding is a simple way to refresh, clear my mind, and regain focus when working on projects or fixing bugs.",
    photo2_tags: ["Riding / Cruising", "Refreshing & Chill"],

    skills_tag: "[ SKILLS & PROGRESS ]",
    skills_title_prefix: "Abilities & ",
    skills_title_highlight: "Learning Journey",
    skills_subtitle: "The percentages below honestly reflect my basic understanding level currently being learned:",

    skills_list: [
      { name: "HTML5 (Web Fundamentals)", desc: "Understands tag structures, tables, forms, and basic layouts." },
      { name: "CSS3 (Styling & Visuals)", desc: "Can manage colors, fonts, flexbox, margins, and simple visual effects." },
      { name: "Python (Basic Syntax & Logic)", desc: "Understands variables, conditions (if-else), loops, and basic functions." },
      { name: "JavaScript (Interactive Logic)", desc: "Currently learning basic DOM, event listeners, and interactive logic." },
      { name: "C++ / Other Languages", desc: "Tried basic Hello World code & introductory concepts." },
      { name: "Tools & Other Ecosystems", desc: "Learning tool names and reading documentation." }
    ],

    contact_tag: "[ SOCIAL MEDIA & NETWORKS ]",
    contact_title_prefix: "Networks & ",
    contact_title_highlight: "Social Media",
    contact_subtitle: "Find and connect with Rafly Ahmad Muzaki through official social platforms below:",
    contact_wa_badge: "🌐 SOCIAL MEDIA & NETWORKS",
    contact_wa_label: "Social Media",
    contact_social_badge: "🌐 SOCIAL NETWORKS",

    contact_ig_desc: "Personal Instagram & Daily Activities",
    contact_ig_btn: "Follow on Instagram",
    contact_li_desc: "Professional Profile & Career Connections",
    contact_li_btn: "Connect on LinkedIn",
    contact_gh_desc: "Code Repositories & Learning Projects",
    contact_gh_btn: "View Repository",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Relaxed & Futuristic Web Portfolio",
    footer_status_label: "Status: ",
    footer_status_val: "● Safe & Active"
  },

  ja: {
    nav_home: "ホーム",
    nav_about: "私について",
    nav_skills: "スキル＆学習",
    nav_contact: "お問い合わせ",

    hero_badge: "ポートフォリオ • RAFLY AHMAD MUZAKI",
    hero_greeting: "こんにちは！私は ",
    hero_titles: [
      "学生＆Web開発学習者",
      "バイクツーリング好き",
      "Web UIデザインを探求中"
    ],
    hero_bio: "ポートフォリオサイトへようこそ！Web開発の学習プロセスや日常の趣味を記録する個人的なWebサイトです。",
    btn_skills: "⚡ スキルを見る",
    btn_about: "📸 私について",
    btn_contact: "📡 お問い合わせ",

    about_tag: "[ ストーリー＆趣味 ]",
    about_title_prefix: "プロフィールと",
    about_title_highlight: "趣味について",
    about_subtitle: "下の写真をクリックして、その背後にあるストーリーをお読みください:",

    photo1_tab: "📸 プロフィール",
    photo1_badge: "ラフリーについて",
    photo1_title: "Rafly Ahmad Muzakiについて",
    photo1_story: "こんにちは！Rafly Ahmad Muzakiです。UIN Sunan Gunung Djati BandungのWeb開発およびUI/UXデザインを学んでいる情報工学専攻の大学生です。コーディングから使いやすく美しいインターフェースのデザインまで、Web技術を継続的に探求しています。\n\nこのポートフォリオサイトは、学習成果、プロジェクトの記録、スキル開発のプロセスを保管するデジタルログとして作成しました。学ぶべきことはまだたくさんありますが、すべてのプロジェクトが成長のための大切な一歩だと信じています。",
    photo1_tags: ["学習中", "Webファン", "着実＆リラックス"],

    photo2_tab: "🏍️ 趣味＆バイク",
    photo2_badge: "バイク趣味",
    photo2_title: "趣味と愛車",
    photo2_story: "コーディングやデザイン以外の時間には、リチャージのための時間を大切にしています。愛車の「Axel」と一緒にゆったりとバイクに乗って新鮮な空気を感じています。ツーリングは、頭をリフレッシュし、新しいプロジェクトやバグ修正に再び集中するためのシンプルで効果的な方法です。",
    photo2_tags: ["バイクライディング", "リフレッシュ＆リラックス"],

    skills_tag: "[ スキルと進捗 ]",
    skills_title_prefix: "スキルと",
    skills_title_highlight: "学習内容",
    skills_subtitle: "以下のパーセンテージは、現在学習中の基礎的な理解度を正直に表しています:",

    skills_list: [
      { name: "HTML5 (Web基礎)", desc: "タグ構造、フォーム、基本レイアウトの理解。" },
      { name: "CSS3 (スタイリング)", desc: "カラー、フォント、Flexbox、マージンの設定が可能。" },
      { name: "Python (基礎構文＆ロジック)", desc: "変数、条件分岐、繰り返し、基本関数の理解。" },
      { name: "JavaScript (対話的ロジック)", desc: "DOM操作、イベントリスナー、インタラクティブ機能の学習中。" },
      { name: "C++ / その他の言語", desc: "基本的なHello Worldコードの試行。" },
      { name: "ツールとエコシステム", desc: "各種ツールのドキュメントを読破・学習中。" }
    ],

    contact_tag: "[ お問い合わせ＆SNS ]",
    contact_title_prefix: "お問い合わせ: ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "WhatsAppで直接メッセージを送るか、以下のSNSをチェックしてください:",
    contact_wa_badge: "🟢 メイン連絡先 (WHATSAPP)",
    contact_wa_label: "WhatsApp Direct",
    contact_social_badge: "🌐 SNS & ネットワーク",

    contact_ig_desc: "個人Instagram＆日常のアクティビティ",
    contact_ig_btn: "Instagramでフォロー",
    contact_li_desc: "プロフェッショナルプロフィール＆キャリア",
    contact_li_btn: "LinkedInでつながる",
    contact_gh_desc: "コードリポジトリ＆学習プロジェクト",
    contact_gh_btn: "リポジトリを見る",

    contact_form_name_label: "お名前",
    contact_form_name_ph: "お名前を入力してください...",
    contact_form_email_label: "メールアドレス",
    contact_form_email_ph: "your@domain.com",
    contact_form_msg_label: "メッセージ",
    contact_form_msg_ph: "ここにメッセージを入力...",
    contact_form_btn: "WA Directでメッセージ送信 ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • 近未来風Webポートフォリオ",
    footer_status_label: "ステータス: ",
    footer_status_val: "● 安全＆アクティブ"
  },

  ko: {
    nav_home: "홈",
    nav_about: "소개",
    nav_skills: "기술 및 학습",
    nav_contact: "연락처",

    hero_badge: "포트폴리오 • RAFLY AHMAD MUZAKI",
    hero_greeting: "안녕하세요! 저는 ",
    hero_titles: [
      "학생 및 웹 개발 학습자",
      "오토바이 라이딩 취미",
      "웹 UI 디자인 탐구 중"
    ],
    hero_bio: "개인 포트폴리오 웹사이트에 오신 것을 환영합니다! 웹 개발 학습 과정과 일상 취미를 기록하는 공간입니다.",
    btn_skills: "⚡ 기술 보기",
    btn_about: "📸 소개 보기",
    btn_contact: "📡 연락하기",

    about_tag: "[ 이야기 & 취미 ]",
    about_title_prefix: "소개 및 ",
    about_title_highlight: "취미 이야기",
    about_subtitle: "아래 사진을 클릭하여 비하인드 스토리를 읽어보세요:",

    photo1_tab: "📸 프로필",
    photo1_badge: "라플리 소개",
    photo1_title: "Rafly Ahmad Muzaki 소개",
    photo1_story: "안녕하세요! 저는 인도네시아 UIN Sunan Gunung Djati Bandung에서 정보공학을 전공하는 Rafly Ahmad Muzaki입니다. 현재 웹 개발 및 UI/UX 디자인 분야의 기술 학습과 향상에 집중하고 있습니다. 코드 작성부터 직관적이고 편안한 웹 인터페이스 제작까지 지속적으로 탐구 중입니다.\n\n이 포트폴리오 웹사이트는 학습 결과, 프로젝트 기록, 기술 개발 여정을 저장하는 공간으로 제작했습니다. 아직 배울 것이 많지만, 모든 프로젝트가 더 나아지기 위한 소중한 한 걸음이라고 믿습니다.",
    photo1_tags: ["학습 중", "웹 애호가", "꾸준함"],

    photo2_tab: "🏍️ 오토바이 취미",
    photo2_badge: "오토바이 취미",
    photo2_title: "취미 & 소중한 오토바이",
    photo2_story: "코딩과 디자인 영역 외에도 재충전을 위한 시간을 가집니다. 보통은 저의 소중한 오토바이 'Axel'과 함께 느긋하게 라이딩을 즐기며 신선한 공기를 마십니다. 라이딩은 기분을 전환하고 머리를 식히며, 다시 프로젝트 작업이나 버그 해결에 집중할 수 있게 해주는 간단한 방법입니다.",
    photo2_tags: ["라이딩", "휴식 & 힐링"],

    skills_tag: "[ 기술 & 진행 상황 ]",
    skills_title_prefix: "보유 기술 & ",
    skills_title_highlight: "학습 내용",
    skills_subtitle: "아래 백분율은 현재 학습 중인 기초 이해 수준을 솔직하게 나타냅니다:",

    skills_list: [
      { name: "HTML5 (웹 기초)", desc: "태그 구조, 폼, 기본 레이아웃 이해." },
      { name: "CSS3 (스타일링)", desc: "색상, 폰트, Flexbox, 마진 및 간단한 시각 효과 다룸." },
      { name: "Python (기초 구문 & 로직)", desc: "변수, 조건문, 반복문, 기본 함수 이해." },
      { name: "JavaScript (인터랙션)", desc: "기초 DOM, 이벤트 리스너, 인터랙티브 로직 학습 중." },
      { name: "C++ / 기타 언어", desc: "기초 Hello World 코드 체험." },
      { name: "기타 툴 & 생태계", desc: "다양한 개발 툴 문서 읽기 및 독학 중." }
    ],

    contact_tag: "[ 연락처 & 소셜 미디어 ]",
    contact_title_prefix: "연락처: ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "WhatsApp을 통해 직접 메시지를 보내거나 아래 소셜 미디어를 확인해보세요:",
    contact_wa_badge: "🟢 메인 연락처 (WHATSAPP)",
    contact_wa_label: "WhatsApp Direct",
    contact_social_badge: "🌐 소셜 네트워크",

    contact_ig_desc: "개인 Instagram 및 일상 활동",
    contact_ig_btn: "Instagram 팔로우",
    contact_li_desc: "전문 프로필 및 경력 네트워크",
    contact_li_btn: "LinkedIn에서 연결",
    contact_gh_desc: "코드 리포지토리 및 학습 프로젝트",
    contact_gh_btn: "리포지토리 보기",

    contact_form_name_label: "이름",
    contact_form_name_ph: "이름을 입력하세요...",
    contact_form_email_label: "이메일",
    contact_form_email_ph: "youremail@domain.com",
    contact_form_msg_label: "메시지 / 메모",
    contact_form_msg_ph: "여기에 메시지를 작성하세요...",
    contact_form_btn: "WA Direct 메시지 전송 ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • 미래지향적 포트폴리오",
    footer_status_label: "상태: ",
    footer_status_val: "● 안전 및 활성"
  },

  zh: {
    nav_home: "首页",
    nav_about: "关于我",
    nav_skills: "技能与学习",
    nav_contact: "联系我",

    hero_badge: "作品集 • RAFLY AHMAD MUZAKI",
    hero_greeting: "你好朋友！我是 ",
    hero_titles: [
      "学生 & Web开发初学者",
      "喜欢骑行 & 休闲骑车",
      "探索Web UI界面设计"
    ],
    hero_bio: "欢迎来到我的个人作品集网站！这里记录了我的Web开发学习历程和日常兴趣爱好。",
    btn_skills: "⚡ 查看技能",
    btn_about: "📸 关于我",
    btn_contact: "📡 联系我",

    about_tag: "[ 故事 & 爱好 ]",
    about_title_prefix: "关于 ",
    about_title_highlight: "我与我的爱好",
    about_subtitle: "点击下方照片阅读背后的简短故事：",

    photo1_tab: "📸 个人简介",
    photo1_badge: "关于 RAFLY",
    photo1_title: "关于 Rafly Ahmad Muzaki",
    photo1_story: "你好！我是 Rafly Ahmad Muzaki，目前是 UIN Sunan Gunung Djati Bandung 信息工程专业的本科生。正在专注于学习和提升 Web 开发与 UI/UX 设计方面的技能。目前一直在不断探索 Web 技术，从编写代码到打造美观易用的界面。\n\n建立这个作品集网站，是为了保存我的学习成果、项目文档以及技能提升的过程。虽然还有很多需要学习的内容，但我相信每一个项目都是变得更好的坚实一步。",
    photo1_tags: ["学习中", "Web爱好者", "踏实稳定"],

    photo2_tab: "🏍️ 摩托车爱好",
    photo2_badge: "摩托车爱好",
    photo2_title: "爱好 & 挚爱摩托",
    photo2_story: "在代码和设计的世界之外，我也留出时间来充电。通常我会骑着我心爱的摩托车“Axel”惬意散心，呼吸新鲜空气。对我来说，骑行是一种简单的放松方式，能让我清空大脑，重新专注于项目开发与 Bug 修复。",
    photo2_tags: ["骑行散心", "放松 & 休闲"],

    skills_tag: "[ 技能与进度 ]",
    skills_title_prefix: "个人技能与 ",
    skills_title_highlight: "正在学习的内容",
    skills_subtitle: "以下百分比真实反映了我目前正在学习的基础理解程度：",

    skills_list: [
      { name: "HTML5 (网页基础)", desc: "理解标签结构、表单和基础网页布局。" },
      { name: "CSS3 (样式与视觉)", desc: "掌握颜色、字体、Flexbox布局及简单视觉效果。" },
      { name: "Python (基础语法与逻辑)", desc: "理解变量、条件判断、循环和基础函数。" },
      { name: "JavaScript (交互逻辑)", desc: "正在学习基础DOM操作、事件监听器和交互逻辑。" },
      { name: "C++ / 其他语言", desc: "尝试过基础的 Hello World 代码。" },
      { name: "工具与其他生态", desc: "正在了解各类开发工具并阅读文档。" }
    ],

    contact_tag: "[ 联系与社交媒体 ]",
    contact_title_prefix: "联系 ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "你可以通过 WhatsApp 直接给我发消息，或者关注下方社交媒体：",
    contact_wa_badge: "🟢 主要联系方式 (WHATSAPP)",
    contact_wa_label: "WhatsApp 直连",
    contact_social_badge: "🌐 社交网络",

    contact_ig_desc: "个人 Instagram 与日常活动",
    contact_ig_btn: "在 Instagram 上关注",
    contact_li_desc: "职业履历与职场社交",
    contact_li_btn: "在 LinkedIn 上建立联系",
    contact_gh_desc: "代码仓库与学习项目",
    contact_gh_btn: "查看代码仓库",

    contact_form_name_label: "您的姓名",
    contact_form_name_ph: "请输入您的姓名...",
    contact_form_email_label: "您的邮箱",
    contact_form_email_ph: "youremail@domain.com",
    contact_form_msg_label: "留言 / 备注",
    contact_form_msg_ph: "在此处输入您的留言...",
    contact_form_btn: "通过WA Direct发送消息 ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • 赛博朋克风作品集",
    footer_status_label: "状态: ",
    footer_status_val: "● 安全并活跃"
  },

  de: {
    nav_home: "Startseite",
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten & Lernen",
    nav_contact: "Kontakt",

    hero_badge: "PORTFOLIO • RAFLY AHMAD MUZAKI",
    hero_greeting: "Hallo Freunde! Ich bin ",
    hero_titles: [
      "Student & Web-Dev-Lernender",
      "Motorrad- & Entspannungsfahrer",
      "Erkundung von Web-UI-Design"
    ],
    hero_bio: "Willkommen auf meiner persönlichen Portfolio-Website! Ein Ort, an dem mein Lernprozess in der Webentwicklung und meine täglichen Hobbys dokumentiert sind.",
    btn_skills: "⚡ Fähigkeiten ansehen",
    btn_about: "📸 Über mich",
    btn_contact: "📡 Kontaktieren",

    about_tag: "[ GESCHICHTEN & HOBBYS ]",
    about_title_prefix: "Über ",
    about_title_highlight: "Mich & Hobbys",
    about_subtitle: "Klicke unten auf ein Foto, um die kurze Geschichte dahinter zu lesen:",

    photo1_tab: "📸 Mein Profil",
    photo1_badge: "ÜBER RAFLY",
    photo1_title: "Über Rafly Ahmad Muzaki",
    photo1_story: "Hallo! Ich bin Rafly Ahmad Muzaki, Informatikstudent an der UIN Sunan Gunung Djati Bandung. Derzeit konzentriere ich mich darauf, meine Fähigkeiten in Webentwicklung und UI/UX-Design auszubauen. Ich erkunde kontinuierlich Webtechnologien von sauberem Code bis hin zu benutzerfreundlichen Interfaces.\n\nDiese Portfolio-Website dient als Ort zur Dokumentation meiner Lernfortschritte, Projekte und Fähigkeiten. Es gibt noch viel zu lernen, aber ich glaube, jedes Projekt ist ein kleiner Schritt nach vorne.",
    photo1_tags: ["Lernen", "Web-Enthusiast", "Konsequent & Entspannt"],

    photo2_tab: "🏍️ Hobby & Motorrad",
    photo2_badge: "MOTORRAD-HOBBY",
    photo2_title: "Hobby & Geliebtes Motorrad",
    photo2_story: "Abseits von Code und Design nehme ich mir Zeit zum Auftanken. Meistens fahre ich entspannt mit Axel, meinem geliebten Motorrad. Das Fahren ist für mich eine einfache Möglichkeit, den Kopf frei zu bekommen und mich wieder voller Fokus auf Projekte und Bugs zu konzentrieren.",
    photo2_tags: ["Motorradfahren", "Erfrischend & Chill"],

    skills_tag: "[ FÄHIGKEITEN & FORTSCHRITT ]",
    skills_title_prefix: "Fähigkeiten & ",
    skills_title_highlight: "Lernreise",
    skills_subtitle: "Die folgenden Prozentwerte spiegeln ehrlich mein aktuelles Grundverständnis wider:",

    skills_list: [
      { name: "HTML5 (Web-Grundlagen)", desc: "Versteht Tag-Strukturen, Tabellen, Formulare und grundlegende Layouts." },
      { name: "CSS3 (Styling & Visuelles)", desc: "Kann Farben, Schriftarten, Flexbox, Ränder und einfache visuelle Effekte verwalten." },
      { name: "Python (Basissyntax & Logik)", desc: "Versteht Variablen, Bedingungen (if-else), Schleifen und Grundfunktionen." },
      { name: "JavaScript (Interaktive Logik)", desc: "Lernt derzeit grundlegendes DOM, Event-Listener und interaktive Logik." },
      { name: "C++ / Andere Sprachen", desc: "Grundlegenden Hello World-Code ausprobiert." },
      { name: "Werkzeuge & Ökosysteme", desc: "Lernt Werkzeugnamen und liest Dokumentationen." }
    ],

    contact_tag: "[ KONTAKT & SOZIALE MEDIEN ]",
    contact_title_prefix: "Kontakt ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "Du kannst mir direkt eine Nachricht über WhatsApp senden oder meine sozialen Netzwerke unten ansehen:",
    contact_wa_badge: "🟢 HAUPTKONTAKT (WHATSAPP)",
    contact_wa_label: "WhatsApp Direkt",
    contact_social_badge: "🌐 SOZIALE NETZWERKE",

    contact_ig_desc: "Persönliches Instagram & Tägliche Aktivitäten",
    contact_ig_btn: "Auf Instagram folgen",
    contact_li_desc: "Berufliches Profil & Karriere-Netzwerk",
    contact_li_btn: "Auf LinkedIn vernetzen",
    contact_gh_desc: "Code-Repositories & Lernprojekte",
    contact_gh_btn: "Repositories ansehen",

    contact_form_name_label: "IHR NAME",
    contact_form_name_ph: "Wie heißen Sie?",
    contact_form_email_label: "IHRE E-MAIL",
    contact_form_email_ph: "ihreemail@domain.com",
    contact_form_msg_label: "NACHRICHT / NOTIZ",
    contact_form_msg_ph: "Schreiben Sie Ihre Nachricht hier...",
    contact_form_btn: "Nachricht via WA Senden ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Futuristisches Web-Portfolio",
    footer_status_label: "Status: ",
    footer_status_val: "● Sicher & Aktiv"
  },

  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades y Aprendizaje",
    nav_contact: "Contacto",

    hero_badge: "PORTAFOLIO • RAFLY AHMAD MUZAKI",
    hero_greeting: "¡Hola amigos! Soy ",
    hero_titles: [
      "Estudiante y Aprendiz de Web Dev",
      "Aficionado a las Motos y Rutas",
      "Explorando Diseño Web UI"
    ],
    hero_bio: "¡Bienvenido a mi sitio web de portafolio personal! Un lugar para documentar mi proceso de aprendizaje en desarrollo web y mis pasatiempos diarios.",
    btn_skills: "⚡ Ver Habilidades",
    btn_about: "📸 Sobre mí",
    btn_contact: "📡 Contactarme",

    about_tag: "[ HISTORIAS Y HOBBIES ]",
    about_title_prefix: "Sobre ",
    about_title_highlight: "Mí y Mis Hobbies",
    about_subtitle: "Haz clic en una foto a continuación para leer la historia corta:",

    photo1_tab: "📸 Mi Perfil",
    photo1_badge: "SOBRE RAFLY",
    photo1_title: "Sobre Rafly Ahmad Muzaki",
    photo1_story: "¡Hola! Soy Rafly Ahmad Muzaki, estudiante de Ingeniería Informática en la UIN Sunan Gunung Djati Bandung. Me enfoco en aprender y desarrollar habilidades en Desarrollo Web y Diseño UI/UX. Exploro activamente las tecnologías web, desde programar hasta crear interfaces atractivas y cómodas de usar.\n\nCreé este sitio web de portafolio para guardar mis aprendizajes, documentación de proyectos y mi trayectoria. Aún queda mucho por aprender, pero creo que cada proyecto es un pequeño paso para mejorar.",
    photo1_tags: ["Aprendizaje", "Entusiasta Web", "Constante y Relajado"],

    photo2_tab: "🏍️ Pasatiempo y Motos",
    photo2_badge: "HOBBY DE MOTOS",
    photo2_title: "Hobby y Mi Moto Querida",
    photo2_story: "Fuera de la programación y el diseño, me tomo un tiempo para recargar energías. Suelo salir a rodar tranquilamente con Axel, mi querida moto que me acompaña a tomar aire fresco. Para mí, rodar es una forma sencilla de despejar la mente y volver a enfocarme al trabajar en proyectos o solucionar bugs.",
    photo2_tags: ["Paseo en Moto", "Refrescante y Tranquilo"],

    skills_tag: "[ HABILIDADES Y PROGRESO ]",
    skills_title_prefix: "Habilidades y ",
    skills_title_highlight: "Proceso de Aprendizaje",
    skills_subtitle: "Los porcentajes reflejan honestamente mi nivel de comprensión básica actual:",

    skills_list: [
      { name: "HTML5 (Fundamentos Web)", desc: "Comprende estructuras de etiquetas, tablas, formularios y diseños básicos." },
      { name: "CSS3 (Estilos y Visuales)", desc: "Puede manejar colores, fuentes, flexbox, márgenes y efectos visuales simples." },
      { name: "Python (Sintaxis y Lógica)", desc: "Comprende variables, condiciones (if-else), bucles y funciones básicas." },
      { name: "JavaScript (Lógica Interactiva)", desc: "Aprendiendo DOM básico, escuchadores de eventos y lógica interactiva." },
      { name: "C++ / Otros Lengajes", desc: "He probado código básico de Hello World." },
      { name: "Herramientas y Ecosistema", desc: "Aprendiendo nombres de herramientas y leyendo documentación." }
    ],

    contact_tag: "[ CONTACTO Y REDES SOCIALES ]",
    contact_title_prefix: "Contacto con ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "Puedes enviarme un mensaje directamente por WhatsApp o revisar mis redes sociales:",
    contact_wa_badge: "🟢 CONTACTO PRINCIPAL (WHATSAPP)",
    contact_wa_label: "WhatsApp Directo",
    contact_social_badge: "🌐 REDES SOCIALES",

    contact_ig_desc: "Cuenta personal de Instagram y actividades diarias",
    contact_ig_btn: "Seguir en Instagram",
    contact_li_desc: "Perfil profesional y conexiones de carrera",
    contact_li_btn: "Conectar en LinkedIn",
    contact_gh_desc: "Repositorios de código y proyectos de aprendizaje",
    contact_gh_btn: "Ver repositorios",

    contact_form_name_label: "TU NOMBRE",
    contact_form_name_ph: "¿Cuál es tu nombre?",
    contact_form_email_label: "TU EMAIL",
    contact_form_email_ph: "tuemail@domain.com",
    contact_form_msg_label: "MENSAJE / NOTA",
    contact_form_msg_ph: "Escribe tu mensaje aquí...",
    contact_form_btn: "Enviar mensaje via WA Direct ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Portafolio Web Futurista",
    footer_status_label: "Estado: ",
    footer_status_val: "● Seguro y Activo"
  },

  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences & Apprentissage",
    nav_contact: "Contact",

    hero_badge: "PORTFOLIO • RAFLY AHMAD MUZAKI",
    hero_greeting: "Salut les amis ! Je suis ",
    hero_titles: [
      "Étudiant & Apprenant Web Dev",
      "Passionné de Moto & Balades",
      "Exploration du Design Web UI"
    ],
    hero_bio: "Bienvenue sur mon site portfolio personnel ! Un espace documentant mon apprentissage en développement web et mes passions quotidiennes.",
    btn_skills: "⚡ Voir mes compétences",
    btn_about: "📸 À propos de moi",
    btn_contact: "📡 Me contacter",

    about_tag: "[ HISTOIRES & PASSIONS ]",
    about_title_prefix: "À propos de ",
    about_title_highlight: "Moi & Mes Passions",
    about_subtitle: "Cliquez sur une photo ci-dessous pour lire l'histoire courte :",

    photo1_tab: "📸 Mon Profil",
    photo1_badge: "À PROPOS DE RAFLY",
    photo1_title: "À propos de Rafly Ahmad Muzaki",
    photo1_story: "Bonjour ! Je suis Rafly Ahmad Muzaki, étudiant en informatique à l'UIN Sunan Gunung Djati Bandung. Je me concentre actuellement sur l'apprentissage du développement Web et du design UI/UX, de la programmation à la création d'interfaces agréables et intuitives.\n\nJ'ai créé ce portfolio pour conserver mes acquis, la documentation de mes projets et mon parcours d'apprentissage. Il me reste beaucoup à apprendre, mais je crois que chaque projet est un pas de plus vers l'amélioration.",
    photo1_tags: ["Apprentissage", "Passionné du Web", "Régulier & Relax"],

    photo2_tab: "🏍️ Passion & Moto",
    photo2_badge: "PASSION MOTO",
    photo2_title: "Passion & Ma Moto Préférée",
    photo2_story: "En dehors du code et du design, je prends le temps de me ressourcer. Je fais généralement de simples balades à moto avec Axel, ma moto préférée. Rouler est pour moi un moyen simple de me rafraîchir l'esprit et de retrouver ma concentration pour résoudre des bugs ou travailler sur des projets.",
    photo2_tags: ["Balade à moto", "Rafraîchissant & Chill"],

    skills_tag: "[ COMPÉTENCES & PROGRÈS ]",
    skills_title_prefix: "Compétences & ",
    skills_title_highlight: "Parcours d'apprentissage",
    skills_subtitle: "Les pourcentages ci-dessous reflètent honnêtement mon niveau de compréhension de base :",

    skills_list: [
      { name: "HTML5 (Bases du Web)", desc: "Comprend les structures de balises, formulaires et mises en page de base." },
      { name: "CSS3 (Styles & Visuels)", desc: "Gère les couleurs, polices, flexbox, marges et effets visuels simples." },
      { name: "Python (Syntaxe & Logique)", desc: "Comprend les variables, conditions (if-else), boucles et fonctions de base." },
      { name: "JavaScript (Logique Interactive)", desc: "Apprentissage du DOM de base, des écouteurs d'événements et de la logique." },
      { name: "C++ / Autres Langages", desc: "Test du code de base Hello World." },
      { name: "Outils & Écosystème", desc: "Découverte des outils et lecture des documentations." }
    ],

    contact_tag: "[ CONTACT & RÉSEAUX SOCIAUX ]",
    contact_title_prefix: "Contacter ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "Vous pouvez m'envoyer un message direct via WhatsApp ou consulter mes réseaux ci-dessous :",
    contact_wa_badge: "🟢 CONTACT PRINCIPAL (WHATSAPP)",
    contact_wa_label: "WhatsApp Direct",
    contact_social_badge: "🌐 RÉSEAUX SOCIAUX",

    contact_ig_desc: "Compte Instagram personnel & activités quotidiennes",
    contact_ig_btn: "Suivre sur Instagram",
    contact_li_desc: "Profil professionnel & réseau de carrière",
    contact_li_btn: "Se connecter sur LinkedIn",
    contact_gh_desc: "Dépôts de code & projets d'apprentissage",
    contact_gh_btn: "Voir les dépôts",

    contact_form_name_label: "VOTRE NOM",
    contact_form_name_ph: "Quel est votre nom ?",
    contact_form_email_label: "VOTRE EMAIL",
    contact_form_email_ph: "votreemail@domain.com",
    contact_form_msg_label: "MESSAGE / NOTE",
    contact_form_msg_ph: "Écrivez votre message ici...",
    contact_form_btn: "Envoyer message via WA Direct ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Portfolio Web Futuriste",
    footer_status_label: "Statut : ",
    footer_status_val: "● Sécurisé & Actif"
  },

  ru: {
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки и обучение",
    nav_contact: "Контакты",

    hero_badge: "ПОРТФОЛИО • RAFLY AHMAD MUZAKI",
    hero_greeting: "Привет, друзья! Я ",
    hero_titles: [
      "Студент и начинающий веб-разработчик",
      "Любитель мотоциклов и покатушек",
      "Изучаю UI-дизайн веб-сайтов"
    ],
    hero_bio: "Добро пожаловать на мой личный сайт-портфолио! Место, где я документирую процесс изучения веб-разработки и повседневные хобби.",
    btn_skills: "⚡ Посмотреть навыки",
    btn_about: "📸 Обо мне",
    btn_contact: "📡 Связаться со мной",

    about_tag: "[ ИСТОРИИ И ХОББИ ]",
    about_title_prefix: "О ",
    about_title_highlight: "Себе и Хобби",
    about_subtitle: "Нажмите на фото ниже, чтобы прочитать историю:",

    photo1_tab: "📸 Мой Профиль",
    photo1_badge: "О RAFLY",
    photo1_title: "О Рафли Ахмаде Музаки",
    photo1_story: "Привет! Я Рафли Ахмад Музаки, студент факультета информатики в UIN Sunan Gunung Djati Bandung. В настоящее время я сосредоточен на изучении и развитии навыков в области веб-разработки и UI/UX дизайна — от написания кода до создания красивых и удобных интерфейсов.\n\nЯ создал этот портфолио-сайт как место для сохранения результатов обучения, документации проектов и истории своего развития. Многое еще предстоит узнать, но я верю, что каждый проект — это небольшой шаг к лучшему.",
    photo1_tags: ["Обучение", "Веб-энтузиаст", "Постоянство"],

    photo2_tab: "🏍️ Хобби и Мотоциклы",
    photo2_badge: "МОТО-ХОББИ",
    photo2_title: "Хобби и Любимый Мотоцикл",
    photo2_story: "Вне мира кода и дизайна я также нахожу время для перезагрузки. Обычно я отправляюсь на спокойную прогулку на моем любимом мотоцикле Axel, который всегда помогает мне подышать свежим воздухом. Поездки — это простой способ освежить мысли и снова сосредоточиться на проектах и исправлении багов.",
    photo2_tags: ["Мотопоездки", "Отдых и Релакс"],

    skills_tag: "[ НАВЫКИ И ПРОГРЕСС ]",
    skills_title_prefix: "Навыки и ",
    skills_title_highlight: "Путь Обучения",
    skills_subtitle: "Проценты ниже честно отражают мой текущий базовый уровень понимания:",

    skills_list: [
      { name: "HTML5 (Основы Веба)", desc: "Понимание структуры тегов, таблиц, форм и базовой верстки." },
      { name: "CSS3 (Стили и Визуал)", desc: "Управление цветами, шрифтами, flexbox, отступами и простыми эффектами." },
      { name: "Python (Базовый синтаксис)", desc: "Понимание переменных, условий (if-else), циклов и базовых функций." },
      { name: "JavaScript (Интерактив)", desc: "Изучение базового DOM, обработчиков событий и интерактивной логики." },
      { name: "C++ / Другие языки", desc: "Пробовал базовый код Hello World." },
      { name: "Инструменты и экосистема", desc: "Изучение названий инструментов и чтение документации." }
    ],

    contact_tag: "[ КОНТАКТЫ И СОЦСЕТИ ]",
    contact_title_prefix: "Связаться с ",
    contact_title_highlight: "Rafly Ahmad Muzaki",
    contact_subtitle: "Вы можете написать мне прямо в WhatsApp или посмотреть мои соцсети ниже:",
    contact_wa_badge: "🟢 ОСНОВНОЙ КОНТАКТ (WHATSAPP)",
    contact_wa_label: "WhatsApp Прямой",
    contact_social_badge: "🌐 СОЦСЕТИ И СВЯЗЬ",

    contact_ig_desc: "Личный аккаунт Instagram и повседневность",
    contact_ig_btn: "Читать в Instagram",
    contact_li_desc: "Профессиональный профиль и карьеры",
    contact_li_btn: "Связаться в LinkedIn",
    contact_gh_desc: "Репозитории кода и учебные проекты",
    contact_gh_btn: "Посмотреть репозитории",

    contact_form_name_label: "ВАШЕ ИМЯ",
    contact_form_name_ph: "Как вас зовут?",
    contact_form_email_label: "ВАШ EMAIL",
    contact_form_email_ph: "youremail@domain.com",
    contact_form_msg_label: "СООБЩЕНИЕ",
    contact_form_msg_ph: "Напишите ваше сообщение здесь...",
    contact_form_btn: "Отправить в WA Direct ⚡",

    footer_copy: "© 2026 Rafly Ahmad Muzaki • Футуристическое портфолио",
    footer_status_label: "Статус: ",
    footer_status_val: "● Безопасно и Активно"
  }
};

const TranslateManager = {
  currentLang: 'id',
  
  languages: {
    'id': { name: 'Indonesia', flag: '🇮🇩', label: 'ID' },
    'en': { name: 'English', flag: '🇬🇧', label: 'EN' },
    'ja': { name: '日本語', flag: '🇯🇵', label: 'JA' },
    'ko': { name: '한국어', flag: '🇰🇷', label: 'KO' },
    'zh': { name: '中文', flag: '🇨🇳', label: 'ZH' },
    'de': { name: 'Deutsch', flag: '🇩🇪', label: 'DE' },
    'es': { name: 'Español', flag: '🇪🇸', label: 'ES' },
    'fr': { name: 'Français', flag: '🇫🇷', label: 'FR' },
    'ru': { name: 'Русский', flag: '🇷🇺', label: 'RU' }
  },

  init() {
    this.currentLang = localStorage.getItem('cyber_lang') || 'id';
    this.setupDropdownUI();
    this.applyTranslations(this.currentLang);
  },

  setupDropdownUI() {
    const btn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof SoundEngine !== 'undefined') SoundEngine.playClick();
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    const options = dropdown.querySelectorAll('.lang-option');
    options.forEach(opt => {
      opt.addEventListener('mouseenter', () => {
        if (typeof SoundEngine !== 'undefined') SoundEngine.playHover();
      });

      opt.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof SoundEngine !== 'undefined') SoundEngine.playClick();
        const targetLang = opt.getAttribute('data-lang');
        this.changeLanguage(targetLang);
        dropdown.classList.add('hidden');
      });
    });
  },

  updateUIButton(langCode) {
    const currentText = document.getElementById('current-lang-text');
    const currentFlag = document.getElementById('current-lang-flag');
    const langInfo = this.languages[langCode] || { flag: '🌐', label: langCode.toUpperCase() };

    if (currentText) currentText.textContent = langInfo.label;
    if (currentFlag) currentFlag.textContent = langInfo.flag;

    const options = document.querySelectorAll('.lang-option');
    options.forEach(opt => {
      const isSelected = opt.getAttribute('data-lang') === langCode;
      if (isSelected) {
        opt.classList.add('bg-cyan-500/20', 'text-cyan-300', 'font-bold');
        opt.classList.remove('text-gray-300');
      } else {
        opt.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'font-bold');
        opt.classList.add('text-gray-300');
      }
    });
  },

  changeLanguage(langCode) {
    this.currentLang = langCode;
    localStorage.setItem('cyber_lang', langCode);
    this.applyTranslations(langCode);
  },

  applyTranslations(langCode) {
    const t = TRANSLATIONS[langCode] || TRANSLATIONS['en'] || TRANSLATIONS['id'];
    this.updateUIButton(langCode);

    // Update navigation elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (t[key]) {
        elem.textContent = t[key];
      }
    });

    // Update Hero Badge, Greeting, Bio & CTA
    const heroBadge = document.getElementById('hero-badge-text');
    if (heroBadge && t.hero_badge) heroBadge.textContent = t.hero_badge;

    const heroGreeting = document.getElementById('hero-greeting');
    if (heroGreeting && t.hero_greeting) heroGreeting.textContent = t.hero_greeting;

    const heroBio = document.getElementById('hero-bio');
    if (heroBio && t.hero_bio) heroBio.textContent = t.hero_bio;

    const btnSkills = document.getElementById('btn-hero-skills');
    if (btnSkills && t.btn_skills) btnSkills.textContent = t.btn_skills;

    const btnAbout = document.getElementById('btn-hero-about');
    if (btnAbout && t.btn_about) btnAbout.textContent = t.btn_about;

    const btnContact = document.getElementById('btn-hero-contact');
    if (btnContact && t.btn_contact) btnContact.textContent = t.btn_contact;

    // Update Section Headers
    const aboutTag = document.getElementById('about-sec-tag');
    if (aboutTag && t.about_tag) aboutTag.textContent = t.about_tag;

    const aboutTitlePrefix = document.getElementById('about-sec-title-prefix');
    if (aboutTitlePrefix && t.about_title_prefix) aboutTitlePrefix.textContent = t.about_title_prefix;

    const aboutTitleHighlight = document.getElementById('about-sec-title-highlight');
    if (aboutTitleHighlight && t.about_title_highlight) aboutTitleHighlight.textContent = t.about_title_highlight;

    const aboutSubtitle = document.getElementById('about-sec-subtitle');
    if (aboutSubtitle && t.about_subtitle) aboutSubtitle.textContent = t.about_subtitle;

    const skillsTag = document.getElementById('skills-sec-tag');
    if (skillsTag && t.skills_tag) skillsTag.textContent = t.skills_tag;

    const skillsTitlePrefix = document.getElementById('skills-sec-title-prefix');
    if (skillsTitlePrefix && t.skills_title_prefix) skillsTitlePrefix.textContent = t.skills_title_prefix;

    const skillsTitleHighlight = document.getElementById('skills-sec-title-highlight');
    if (skillsTitleHighlight && t.skills_title_highlight) skillsTitleHighlight.textContent = t.skills_title_highlight;

    const skillsSubtitle = document.getElementById('skills-sec-subtitle');
    if (skillsSubtitle && t.skills_subtitle) skillsSubtitle.textContent = t.skills_subtitle;

    const contactTag = document.getElementById('contact-sec-tag');
    if (contactTag && t.contact_tag) contactTag.textContent = t.contact_tag;

    const contactTitlePrefix = document.getElementById('contact-sec-title-prefix');
    if (contactTitlePrefix && t.contact_title_prefix) contactTitlePrefix.textContent = t.contact_title_prefix;

    const contactTitleHighlight = document.getElementById('contact-sec-title-highlight');
    if (contactTitleHighlight && t.contact_title_highlight) contactTitleHighlight.textContent = t.contact_title_highlight;

    const contactSubtitle = document.getElementById('contact-sec-subtitle');
    if (contactSubtitle && t.contact_subtitle) contactSubtitle.textContent = t.contact_subtitle;

    const contactWaBadge = document.getElementById('contact-wa-badge');
    if (contactWaBadge && t.contact_wa_badge) contactWaBadge.textContent = t.contact_wa_badge;

    // Contact Form & Footer Updates
    const nameLabel = document.getElementById('label-contact-name');
    if (nameLabel && t.contact_form_name_label) nameLabel.textContent = t.contact_form_name_label;

    const nameInput = document.getElementById('contact-name');
    if (nameInput && t.contact_form_name_ph) nameInput.placeholder = t.contact_form_name_ph;

    const emailLabel = document.getElementById('label-contact-email');
    if (emailLabel && t.contact_form_email_label) emailLabel.textContent = t.contact_form_email_label;

    const emailInput = document.getElementById('contact-email');
    if (emailInput && t.contact_form_email_ph) emailInput.placeholder = t.contact_form_email_ph;

    const msgLabel = document.getElementById('label-contact-msg');
    if (msgLabel && t.contact_form_msg_label) msgLabel.textContent = t.contact_form_msg_label;

    const msgInput = document.getElementById('contact-msg');
    if (msgInput && t.contact_form_msg_ph) msgInput.placeholder = t.contact_form_msg_ph;

    const submitBtnText = document.querySelector('#contact-form button[type="submit"] span');
    if (submitBtnText && t.contact_form_btn) submitBtnText.textContent = t.contact_form_btn;

    const socialBadge = document.getElementById('contact-social-badge');
    if (socialBadge && t.contact_social_badge) socialBadge.textContent = t.contact_social_badge;

    const footerCopy = document.getElementById('footer-copy');
    if (footerCopy && t.footer_copy) footerCopy.textContent = t.footer_copy;

    const footerStatusLabel = document.getElementById('footer-status-label');
    if (footerStatusLabel && t.footer_status_label) footerStatusLabel.textContent = t.footer_status_label;

    const footerStatusVal = document.getElementById('footer-status-val');
    if (footerStatusVal && t.footer_status_val) footerStatusVal.textContent = t.footer_status_val;

    // Dynamically Update PORTFOLIO_CONFIG object in memory so sections re-render cleanly
    if (typeof PORTFOLIO_CONFIG !== 'undefined') {
      if (t.hero_badge) {
        PORTFOLIO_CONFIG.hero.badge = t.hero_badge;
      }
      if (t.hero_titles) {
        PORTFOLIO_CONFIG.hero.titles = t.hero_titles;
      }
      
      if (t.photo1_story && PORTFOLIO_CONFIG.about && PORTFOLIO_CONFIG.about.photos) {
        const p1 = PORTFOLIO_CONFIG.about.photos[0];
        if (p1) {
          p1.tabName = t.photo1_tab || p1.tabName;
          p1.badge = t.photo1_badge || p1.badge;
          p1.title = t.photo1_title || p1.title;
          p1.story = t.photo1_story || p1.story;
          p1.tags = t.photo1_tags || p1.tags;
        }

        const p2 = PORTFOLIO_CONFIG.about.photos[1];
        if (p2) {
          p2.tabName = t.photo2_tab || p2.tabName;
          p2.badge = t.photo2_badge || p2.badge;
          p2.title = t.photo2_title || p2.title;
          p2.story = t.photo2_story || p2.story;
          p2.tags = t.photo2_tags || p2.tags;
        }
      }

      if (t.skills_list && PORTFOLIO_CONFIG.skills) {
        PORTFOLIO_CONFIG.skills.forEach((skill, idx) => {
          if (t.skills_list[idx]) {
            skill.name = t.skills_list[idx].name;
            skill.desc = t.skills_list[idx].desc;
          }
        });
      }
    }

    // Trigger re-render of active components if functions are defined
    if (typeof initAboutSection === 'function') {
      initAboutSection();
    }
    if (typeof initSkillsSection === 'function') {
      initSkillsSection();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  TranslateManager.init();
});
