const progressBar = document.getElementById('progressBar');
const year = document.getElementById('year');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

year.textContent = new Date().getFullYear();

const translations = {
  id: {
    brand: 'Daud Rio Yurdanus',
    nav: { profile:'Profil', experience:'Pengalaman', projects:'Proyek', skills:'Keahlian', contact:'Hubungi' },
    hero: {
      availability:'<span class="status-dot"></span> Terbuka untuk peluang di seluruh Indonesia',
      title:'Information Systems <span>Graduate</span> with IT Support & ERP Experience.',
      lead:'Saya menggabungkan troubleshooting end-user, implementasi ERP, UAT, dokumentasi teknis, dan koordinasi lintas tim untuk membantu sistem berjalan lebih rapi dan pengguna bekerja lebih lancar.',
      ctaPortfolio:'Lihat Portfolio <span>↗</span>', ctaCv:'Unduh CV <span>↓</span>',
      meta1:'Based in Samarinda', meta2:'Open to relocation', meta3:'IT Support · ERP · Business Systems', gpaLabel:'GPA / 4.00',
      erpLabel:'ERP Rollouts', erpSmall:'client implementations', modulesLabel:'Core Modules', modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'
    },
    stats:{erp:'ERP client rollouts',modules:'ERP modules configured',members:'members led in BLM',respondents:'thesis respondents'},
    about:{kicker:'01 · PROFILE',title:'Technical thinking, with an operational mindset.',p1:'Saya adalah lulusan Sistem Informasi Universitas Mulawarman dengan IPK 3.80/4.00. Pengalaman profesional saya dibentuk melalui support pengguna dan implementasi ERP secara remote, dari instalasi, pengaturan akses, konfigurasi modul, UAT, sampai dokumentasi issue.',p2:'Saya nyaman bekerja di titik temu antara kebutuhan pengguna dan kebutuhan teknis: memahami masalah, mendokumentasikan gap, mengeskalasikan defect, lalu memastikan hasilnya dapat digunakan end-user.'},
    pill:{itSupport:'IT Helpdesk Support',erp:'ERP Implementation',uat:'UAT',docs:'Technical Documentation',network:'Basic Networking'},
    experience:{kicker:'02 · EXPERIENCE',title:'Pengalaman yang relevan untuk dunia kerja nyata.',intro:'Bukan sekadar daftar jabatan. Fokusnya pada apa yang dikerjakan, masalah yang dihadapi, dan hasil yang bisa ditunjukkan.',erpTag:'ERP / IT Support',fieldTag:'Field Operations',leadershipTag:'Leadership',leadershipTag2:'Leadership'},
    timeline1:{
      li1:'Memberikan remote technical support dan troubleshooting untuk pengguna ERP di <strong>9 client rollouts</strong>, termasuk Motul dan Yokohama.',
      li2:'Mengonfigurasi modul <strong>Sales, Purchase, Inventory, POS, dan Accounting</strong> sesuai workflow tiap klien. Semua implementasi selesai sesuai jadwal.',
      li3:'Menyusun checklist dan menjalankan <strong>UAT</strong>, menemukan sekitar 1–3 defect per modul dan mengeskalasikannya pada hari yang sama melalui workflow ticketing.',
      li4:'Menyusun <strong>FRD / Change Request</strong> untuk menutup gap konfigurasi sebelum go-live serta menyiapkan panduan Accounting Manual untuk end-user.'
    },
    timeline2:{
      li1:'Melakukan survei topografi pada area konsesi pertambangan dan infrastruktur selama 18 bulan untuk menghasilkan data terrain dan contour.',
      li2:'Mengubah data lapangan menjadi contour maps dan technical reports yang dapat langsung digunakan tim engineering untuk tahap perencanaan.',
      li3:'Memeriksa koordinat dan elevasi terhadap standar geodesi dan pemetaan sebelum laporan diterbitkan.'
    },
    timeline3:{
      li1:'Menangani dokumentasi notulen rapat, izin kegiatan, dan proposal acara.',
      li2:'Mengoordinasikan tim dan memimpin rapat internal berdasarkan konsensus, termasuk tanggung jawab koordinasi harian sejak 2026.'
    },
    timeline4:{
      li1:'Memimpin reformasi tata kelola dengan <strong>15 work programs</strong> dan tim berjumlah <strong>55 anggota</strong>.',
      li2:'Mengawasi gabungan anggaran sekitar <strong>IDR 135 juta</strong> dan memimpin <strong>72 rapat/evaluasi</strong> selama satu periode.'
    },
    tag:{erpConfig:'ERP Configuration',uat:'UAT',frdcr:'FRD / CR',teamviewer:'TeamViewer',anydesk:'AnyDesk',fieldData:'Field Data',qc:'Quality Control',reporting:'Technical Reporting',erp:'ERP',remote:'Remote Support',spss:'SPSS',eucs:'EUCS',research:'Research',frd:'FRD',cr:'CR',documentation:'Documentation'},
    projects:{
      kicker:'03 · SELECTED WORK',title:'Selected projects & case highlights.',intro:'Portfolio ini menampilkan pekerjaan yang paling relevan dengan peran IT Support, ERP, Business Systems, dan entry-level technology roles.',
      erpLabel:'ERP IMPLEMENTATION',erpTitle:'Multi-client ERP rollout & end-user support',erpDesc:'Mengonfigurasi core ERP modules untuk sembilan klien dengan workflow berbeda, mendukung user access setup, remote troubleshooting, UAT, dan handover documentation.',metricRollouts:'rollouts',metricModules:'modules',metricDefects:'defects/module found',
      researchLabel:'RESEARCH',researchTitle:'E-Office user satisfaction study',researchDesc:'Skripsi menggunakan metode End User Computing Satisfaction (EUCS) dengan pengujian statistik menggunakan SPSS terhadap <strong>70 responden</strong>.',researchNote:'Fokus: user satisfaction · usability · quantitative analysis',
      docsLabel:'TECHNICAL DOCUMENTATION',docsTitle:'FRD, Change Request & user documentation',docsDesc:'Mendokumentasikan configuration gaps dan kebutuhan perubahan agar developer memiliki spesifikasi yang jelas sebelum go-live.',docsNote:'Output: FRD addenda · Change Request · Accounting Manual Guide'
    },
    skills:{kicker:'04 · CAPABILITIES',title:'Keahlian yang bisa langsung dipakai.',intro:'Fokus saya ada pada pekerjaan operasional yang membutuhkan ketelitian, komunikasi pengguna, troubleshooting, dan dokumentasi yang jelas.',it:{title:'IT Support',desc:'Hardware, software, end-user troubleshooting, installation, maintenance, dan remote support.'},erp:{title:'ERP & Business Systems',desc:'ERP configuration, business process mapping, UAT, user access setup, FRD dan Change Request.'},network:{title:'Networking Basics',desc:'Wi-Fi/router troubleshooting, basic operating systems, dan RJ45 crimping.'},data:{title:'Data & Documentation',desc:'SPSS, quantitative research, technical reports, ticketing workflows, dan MS Office.'}},
    education:{kicker:'05 · EDUCATION',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'GPA',studyKey:'Study',statusKey:'Status',statusValue:'Degree requirements completed',thesisLabel:'THESIS',thesis:'<strong>E-OFFICE user satisfaction study</strong> using the EUCS method with SPSS, n=70 respondents.'},
    certs:{kicker:'CERTIFICATIONS',title:'Professional learning',support:{title:'IT Customer Support Basics',issuer:'Cisco Networking Academy'},kanban:{title:'Kanban Essentials Certified (KEC)',issuer:'KanbanStudy'},scrum:{title:'Scrum Fundamentals Certified (SFC)',issuer:'SCRUMstudy'},cyber:{title:'Basic Cyber Security for the Healthcare Sector',issuer:'Kominfo'}},
    contact:{kicker:'06 · LET\'S CONNECT',title:'Open to the next technical challenge.',intro:'Terbuka untuk IT Support, ERP / Business Systems, Management Trainee, Officer Development Program, dan posisi entry-level teknologi yang memberi ruang untuk belajar dan berkontribusi.',email:'Kirim Email ↗',linkedin:'LinkedIn ↗',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Back to top ↑'}
  },
  en: {
    brand: 'Daud Rio Yurdanus',
    nav: { profile:'Profile', experience:'Experience', projects:'Projects', skills:'Skills', contact:'Contact' },
    hero: {
      availability:'<span class="status-dot"></span> Open to opportunities across Indonesia',
      title:'Information Systems <span>Graduate</span> with IT Support & ERP Experience.',
      lead:'I combine end-user troubleshooting, ERP implementation, UAT, technical documentation, and cross-team coordination to help systems run reliably and users work more effectively.',
      ctaPortfolio:'View Portfolio <span>↗</span>', ctaCv:'Download CV <span>↓</span>',
      meta1:'Based in Samarinda', meta2:'Open to relocation', meta3:'IT Support · ERP · Business Systems', gpaLabel:'GPA / 4.00',
      erpLabel:'ERP Rollouts', erpSmall:'client implementations', modulesLabel:'Core Modules', modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'
    },
    stats:{erp:'ERP client rollouts',modules:'ERP modules configured',members:'members led in BLM',respondents:'thesis respondents'},
    about:{kicker:'01 · PROFILE',title:'Technical thinking with an operational mindset.',p1:'I am an Information Systems graduate from Universitas Mulawarman with a 3.80/4.00 GPA. My professional experience has been shaped by remote user support and ERP implementation, covering installation, access setup, module configuration, UAT, and issue documentation.',p2:'I work comfortably at the intersection of user needs and technical requirements: understanding problems, documenting gaps, escalating defects, and ensuring the outcome is usable for end users.'},
    pill:{itSupport:'IT Helpdesk Support',erp:'ERP Implementation',uat:'UAT',docs:'Technical Documentation',network:'Basic Networking'},
    experience:{kicker:'02 · EXPERIENCE',title:'Experience built around real operational needs.',intro:'Not just a list of titles. The focus is on what I did, the problems I handled, and the outcomes I delivered.',erpTag:'ERP / IT Support',fieldTag:'Field Operations',leadershipTag:'Leadership',leadershipTag2:'Leadership'},
    timeline1:{
      li1:'Provided remote technical support and troubleshooting for ERP users across <strong>9 client rollouts</strong>, including Motul and Yokohama.',
      li2:'Configured <strong>Sales, Purchase, Inventory, POS, and Accounting</strong> modules for client-specific workflows. All implementations were delivered on schedule.',
      li3:'Built checklists and executed <strong>UAT</strong>, identifying around 1–3 defects per module and escalating them the same day through the ticketing workflow.',
      li4:'Prepared <strong>FRD / Change Requests</strong> to close configuration gaps before go-live and created an Accounting Manual Guide for end users.'
    },
    timeline2:{
      li1:'Conducted topographic surveys across mining concession and infrastructure areas for 18 months to produce terrain and contour data.',
      li2:'Converted field data into contour maps and technical reports that could be used directly by engineering teams during planning.',
      li3:'Checked coordinates and elevations against geodesy and mapping standards before issuing reports.'
    },
    timeline3:{
      li1:'Managed meeting minutes, activity permits, and event proposals.',
      li2:'Coordinated team activities and led internal meetings through consensus, including daily coordination responsibilities since 2026.'
    },
    timeline4:{
      li1:'Led a governance reform initiative with <strong>15 work programs</strong> and a team of <strong>55 members</strong>.',
      li2:'Oversaw a combined budget of approximately <strong>IDR 135 million</strong> and chaired <strong>72 meetings/evaluations</strong> during the term.'
    },
    tag:{erpConfig:'ERP Configuration',uat:'UAT',frdcr:'FRD / CR',teamviewer:'TeamViewer',anydesk:'AnyDesk',fieldData:'Field Data',qc:'Quality Control',reporting:'Technical Reporting',erp:'ERP',remote:'Remote Support',spss:'SPSS',eucs:'EUCS',research:'Research',frd:'FRD',cr:'CR',documentation:'Documentation'},
    projects:{
      kicker:'03 · SELECTED WORK',title:'Selected projects & case highlights.',intro:'A focused selection of work relevant to IT Support, ERP, Business Systems, and entry-level technology roles.',
      erpLabel:'ERP IMPLEMENTATION',erpTitle:'Multi-client ERP rollout & end-user support',erpDesc:'Configured core ERP modules for nine clients with different workflows, supporting user access setup, remote troubleshooting, UAT, and handover documentation.',metricRollouts:'rollouts',metricModules:'modules',metricDefects:'defects/module found',
      researchLabel:'RESEARCH',researchTitle:'E-Office user satisfaction study',researchDesc:'Thesis research using the End User Computing Satisfaction (EUCS) method with statistical testing in SPSS across <strong>70 respondents</strong>.',researchNote:'Focus: user satisfaction · usability · quantitative analysis',
      docsLabel:'TECHNICAL DOCUMENTATION',docsTitle:'FRD, Change Request & user documentation',docsDesc:'Documented configuration gaps and change requirements so developers had clear specifications before go-live.',docsNote:'Outputs: FRD addenda · Change Requests · Accounting Manual Guide'
    },
    skills:{kicker:'04 · CAPABILITIES',title:'Skills ready for practical use.',intro:'My strengths are operational work that demands accuracy, user communication, troubleshooting, and clear documentation.',it:{title:'IT Support',desc:'Hardware, software, end-user troubleshooting, installation, maintenance, and remote support.'},erp:{title:'ERP & Business Systems',desc:'ERP configuration, business process mapping, UAT, user access setup, FRD, and Change Requests.'},network:{title:'Networking Basics',desc:'Wi-Fi/router troubleshooting, basic operating systems, and RJ45 crimping.'},data:{title:'Data & Documentation',desc:'SPSS, quantitative research, technical reports, ticketing workflows, and MS Office.'}},
    education:{kicker:'05 · EDUCATION',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'GPA',studyKey:'Study',statusKey:'Status',statusValue:'Degree requirements completed',thesisLabel:'THESIS',thesis:'<strong>E-OFFICE user satisfaction study</strong> using the EUCS method with SPSS, n=70 respondents.'},
    certs:{kicker:'CERTIFICATIONS',title:'Professional learning',support:{title:'IT Customer Support Basics',issuer:'Cisco Networking Academy'},kanban:{title:'Kanban Essentials Certified (KEC)',issuer:'KanbanStudy'},scrum:{title:'Scrum Fundamentals Certified (SFC)',issuer:'SCRUMstudy'},cyber:{title:'Basic Cyber Security for the Healthcare Sector',issuer:'Kominfo'}},
    contact:{kicker:'06 · LET\'S CONNECT',title:'Open to the next technical challenge.',intro:'Open to IT Support, ERP / Business Systems, Management Trainee, Officer Development Program, and entry-level technology roles that provide room to learn and contribute.',email:'Send Email ↗',linkedin:'LinkedIn ↗',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Back to top ↑'}
  }
};

function getPath(obj, path){ return path.split('.').reduce((acc, key) => acc?.[key], obj); }

function applyLanguage(lang){
  const dict = translations[lang] || translations.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getPath(dict, el.dataset.i18n);
    if (value == null) return;
    if (el.dataset.i18nHtml === 'true' || /<[^>]+>/.test(value)) el.innerHTML = value;
    else el.textContent = value;
  });
  html.lang = lang;
  localStorage.setItem('portfolioLang', lang);
  langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
  langToggle.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia');
  document.title = lang === 'id' ? 'Daud Rio Yurdanus | IT Support & ERP' : 'Daud Rio Yurdanus | IT Support & ERP';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = lang === 'id'
    ? 'Portfolio profesional Daud Rio Yurdanus, S.Kom. Information Systems, IT Support, ERP Implementation, UAT, dan technical documentation.'
    : 'Professional portfolio of Daud Rio Yurdanus, S.Kom. Information Systems, IT Support, ERP implementation, UAT, and technical documentation.';
}

function applyTheme(theme){
  const next = theme === 'dark' ? 'dark' : 'light';
  html.dataset.theme = next;
  localStorage.setItem('portfolioTheme', next);
  themeToggle.innerHTML = next === 'dark'
    ? '<span aria-hidden="true">☀</span>'
    : '<span aria-hidden="true">☾</span>';
  themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('title', next === 'dark' ? 'Light mode' : 'Dark mode');
  if (themeColorMeta) themeColorMeta.content = next === 'dark' ? '#07101d' : '#ffffff';
}

const savedLang = localStorage.getItem('portfolioLang') || 'id';
const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
applyLanguage(savedLang);
applyTheme(savedTheme);

langToggle.addEventListener('click', () => applyLanguage(html.lang === 'id' ? 'en' : 'id'));
themeToggle.addEventListener('click', () => applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));

function updateProgress(){
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
}
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('#siteNav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target) && siteNav.classList.contains('open')) {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
