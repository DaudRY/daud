const html = document.documentElement;
const year = document.getElementById('year');
const progressBar = document.getElementById('progressBar');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const modal = document.getElementById('caseModal');
const modalClose = document.getElementById('modalClose');
const modalKicker = document.getElementById('modalKicker');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalBody = document.getElementById('modalBody');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const profilePhoto = document.getElementById('profilePhoto');

year.textContent = new Date().getFullYear();

const translations = {
  id: {
    nav:{about:'Profil',highlights:'Sorotan Karier',experience:'Pengalaman',projects:'Proyek',skills:'Keahlian',contact:'Kontak'},
    hero:{availability:'<span class="status-dot"></span> Terbuka untuk peluang di seluruh Indonesia',kicker:'SISTEM INFORMASI · ERP IMPLEMENTATION & IT SUPPORT',title:'Information Systems Graduate <span>|</span> IT Support <span>|</span> ERP Implementation',lead:'Pengalaman langsung dalam dukungan pengguna, implementasi ERP, troubleshooting, UAT, dan dokumentasi teknis.',ctaPortfolio:'Lihat Portofolio <span>↗</span>',ctaCv:'Unduh CV <span>↓</span>',meta1:'Berbasis di Samarinda',meta2:'Terbuka untuk relokasi',meta3:'IT Support · ERP · Business Systems',erpLabel:'Implementasi ERP',erpSmall:'implementasi klien',modulesLabel:'Modul Utama',modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'},
    highlights:{kicker:'02 · SOROTAN KARIER',title:'Beberapa angka yang layak diingat.',intro:'Angka-angka ini memberi gambaran singkat tentang skala pekerjaan dan hasil yang pernah saya tangani.'},
    stats:{gpa:'IPK / 4,00',erp:'Implementasi ERP klien',modules:'Modul ERP dikonfigurasi',members:'Anggota dipimpin di BLM',respondents:'Responden penelitian'},
    about:{kicker:'01 · PROFIL',title:'Cara berpikir teknis dengan pola pikir operasional.',p1:'Saya adalah lulusan Sistem Informasi Universitas Mulawarman dengan IPK 3,80/4,00. Pengalaman profesional saya dibentuk melalui dukungan pengguna dan implementasi ERP secara remote, mulai dari instalasi, pengaturan akses, konfigurasi modul, UAT, hingga dokumentasi issue.',p2:'Saya nyaman bekerja di titik temu antara kebutuhan pengguna dan kebutuhan teknis: memahami masalah, mendokumentasikan gap, mengeskalasikan defect, lalu memastikan hasilnya dapat digunakan end-user.'},
    pill:{itSupport:'IT Support',erp:'ERP Implementation',uat:'UAT',docs:'Dokumentasi Teknis',network:'Basic Networking'},
    projects:{kicker:'03 · PROYEK UNGGULAN',title:'Bukti, bukan sekadar kata-kata.',intro:'Saya mengubah pengalaman kerja menjadi studi kasus yang aman untuk publik, tanpa nama file internal, data klien, kredensial, atau informasi perusahaan yang bersifat rahasia.'},
    project:{erp:{label:'IMPLEMENTASI ERP',title:'Implementasi ERP multi-klien & dukungan end-user',desc:'Mendukung sembilan implementasi klien pada Sales, Purchase, Inventory, POS, dan Accounting, termasuk pengaturan remote access, konfigurasi, troubleshooting, UAT, dan dokumentasi handover.',m1:'implementasi',m2:'modul',m3:'defect / modul ditemukan'},uat:{label:'ALUR UAT & QA',title:'Dari checklist pengujian hingga eskalasi defect di hari yang sama',desc:'Menyusun dan menjalankan checklist UAT, menemukan sekitar 1–3 defect per modul, lalu mencatat setiap issue melalui workflow ticketing pada hari yang sama.'},docs:{label:'DOKUMENTASI TEKNIS',title:'FRD, Change Request & dokumentasi pengguna',desc:'Mengubah gap konfigurasi dan kebutuhan perubahan menjadi dokumentasi terstruktur agar developer dan end-user memiliki jalur handover yang lebih jelas sebelum go-live.'},research:{label:'PENELITIAN',title:'Studi kepuasan pengguna E-Office',desc:'Penelitian skripsi menggunakan metode End User Computing Satisfaction (EUCS) dengan SPSS dan 70 responden untuk mengevaluasi kepuasan pengguna.'},viewCase:'Lihat studi kasus →'},
    experience:{kicker:'04 · PENGALAMAN',title:'Pengalaman profesional di depan. Leadership sebagai kekuatan.',intro:'Saya menempatkan pengalaman teknis di depan, lalu menggunakan pengalaman lapangan dan leadership sebagai bukti bahwa saya dapat bekerja rapi, bertanggung jawab, dan berkomunikasi lintas fungsi.',erpTag:'ERP / IT Support',fieldTag:'Pengalaman Tambahan',leadershipTag:'Leadership'},
    timeline1:{li1:'Memberikan remote technical support dan troubleshooting untuk pengguna ERP di <strong>9 client rollouts</strong>, termasuk Motul dan Yokohama.',li2:'Mengonfigurasi <strong>Sales, Purchase, Inventory, POS, dan Accounting</strong> sesuai workflow tiap klien; seluruh sembilan implementasi selesai sesuai jadwal.',li3:'Menyusun checklist dan menjalankan <strong>UAT</strong>, menemukan sekitar 1–3 defect per modul, lalu mengeskalasikan setiap issue melalui workflow ticketing pada hari yang sama.',li4:'Menyusun <strong>FRD / Change Request</strong> untuk menutup gap konfigurasi sebelum go-live serta menyiapkan Accounting Manual Guide untuk end-user.'},
    timeline2:{li1:'Melakukan survei topografi pada area konsesi pertambangan dan infrastruktur selama 18 bulan untuk menghasilkan data terrain dan contour.',li2:'Mengubah data lapangan menjadi contour maps dan technical reports yang dapat digunakan tim engineering untuk tahap perencanaan.',li3:'Memeriksa koordinat dan elevasi terhadap standar geodesi dan pemetaan sebelum laporan diterbitkan.'},
    timeline3:{li1:'Menangani dokumentasi notulen rapat, izin kegiatan, dan proposal acara agar dokumentasi berkala tetap mutakhir.',li2:'Mengoordinasikan tim berjumlah 60 anggota dan menjalankan tanggung jawab leadership harian sejak 2026.'},
    timeline4:{li1:'Memimpin reformasi tata kelola dengan <strong>15 work programs</strong> dan tim berjumlah <strong>55 anggota</strong>.',li2:'Mengawasi gabungan anggaran sekitar <strong>IDR 135 juta</strong> dan memimpin <strong>72 rapat/evaluasi</strong> selama satu periode.'},
    skills:{kicker:'05 · KEAHLIAN',title:'Keahlian yang terbukti dalam pekerjaan nyata.',intro:'Skill set ini saya susun berdasarkan pekerjaan yang benar-benar pernah saya lakukan, bukan daftar teknologi yang kebetulan pernah saya dengar.',it:{title:'IT Support',desc:'Instalasi hardware, upgrade SSD, end-user troubleshooting, software setup, maintenance, TeamViewer, dan AnyDesk.'},erp:{title:'ERP & Business Systems',desc:'Konfigurasi ERP, pemahaman business process, pengaturan user access, UAT, FRD, dan Change Request.'},network:{title:'Networking & OS Basics',desc:'Troubleshooting Wi-Fi/router, sistem operasi dasar, dan crimping RJ45.'},docs:{title:'Dokumentasi & Workflow',desc:'Technical reports, FRD / CR, ticketing workflow, Kanban, Scrum fundamentals, SPSS, dan Microsoft Office.'}},
    why:{kicker:'06 · MENGAPA SAYA',title:'Jembatan yang memahami pengguna dan sistem.',intro:'Kekuatan utama saya ada pada kombinasi kemampuan teknis dasar, pemahaman proses bisnis, komunikasi pengguna, dan disiplin dokumentasi.',card1:{title:'Pola pikir troubleshooting',desc:'Saya terbiasa memecah masalah pengguna menjadi langkah yang dapat diuji, dicatat, dan ditindaklanjuti.'},card2:{title:'Pemahaman bisnis + teknis',desc:'Pengalaman ERP membantu saya melihat kebutuhan user bukan hanya sebagai tiket, tetapi sebagai bagian dari workflow bisnis.'},card3:{title:'Eksekusi terstruktur',desc:'UAT, ticketing, FRD / CR, dan handover documentation membentuk cara kerja yang rapi dan dapat ditelusuri.'},card4:{title:'Leadership & tanggung jawab',desc:'Pengalaman memimpin organisasi memberi saya latihan nyata dalam koordinasi, pengambilan keputusan, dan tanggung jawab.'}},
    education:{kicker:'07 · PENDIDIKAN',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'IPK',studyKey:'Masa Studi',statusKey:'Status',statusValue:'Seluruh persyaratan gelar telah selesai',thesisLabel:'SKRIPSI',thesis:'<strong>Studi kepuasan pengguna E-OFFICE</strong> menggunakan metode EUCS dengan SPSS, n=70 responden.'},
    certs:{kicker:'SERTIFIKASI',title:'Pengembangan profesional'},language:{label:'Bahasa',value:'English — Intermediate written communication; basic conversational proficiency.'},
    contact:{kicker:'08 · HUBUNGI SAYA',title:'Terbuka untuk peluang teknis berikutnya.',intro:'Terbuka untuk posisi IT Support, IT Engineer, ERP / Business Systems, dan Management Trainee.',email:'Kirim Email <span>↗</span>',linkedin:'LinkedIn <span>↗</span>',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Kembali ke atas ↑'},
    tag:{remoteSupport:'Dukungan Remote',frdCr:'FRD / CR',ticketing:'Ticketing',defectTracking:'Pelacakan Defect',changeRequest:'Change Request',documentation:'Dokumentasi',erpConfig:'Konfigurasi ERP',fieldData:'Data Lapangan',qualityControl:'Quality Control',technicalReporting:'Laporan Teknis',quantResearch:'Penelitian Kuantitatif'},
    workflow:{test:'Uji',log:'Catat',escalate:'Eskalasi',retest:'Uji Ulang'},
    skilltag:{hardware:'Hardware',software:'Software',kanban:'Kanban',spss:'SPSS',eucs:'EUCS',msOffice:'MS Office'},
    docPreview:{userGuide:'PANDUAN PENGGUNA'},researchPreview:{methods:'EUCS · SPSS'},
    a11y:{language:'Ganti ke bahasa Inggris',themeDark:'Beralih ke mode gelap',themeLight:'Beralih ke mode terang',menuOpen:'Buka navigasi',menuClose:'Tutup navigasi',close:'Tutup'}
  },
  en: {
    nav:{about:'Profile',highlights:'Career Highlights',experience:'Experience',projects:'Projects',skills:'Skills',contact:'Contact'},
    hero:{availability:'<span class="status-dot"></span> Open to opportunities across Indonesia',kicker:'INFORMATION SYSTEMS · ERP IMPLEMENTATION & IT SUPPORT',title:'Information Systems Graduate <span>|</span> IT Support <span>|</span> ERP Implementation',lead:'Hands-on experience in end-user support, ERP implementation, troubleshooting, UAT, and technical documentation.',ctaPortfolio:'View Portfolio <span>↗</span>',ctaCv:'Download CV <span>↓</span>',meta1:'Based in Samarinda',meta2:'Open to relocation',meta3:'IT Support · ERP · Business Systems',erpLabel:'ERP Rollouts',erpSmall:'client implementations',modulesLabel:'Core Modules',modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'},
    highlights:{kicker:'02 · CAREER HIGHLIGHTS',title:'A few numbers worth remembering.',intro:'These figures give a quick sense of the scale of the work and the outcomes I have contributed to.'},
    stats:{gpa:'GPA / 4.00',erp:'ERP client rollouts',modules:'ERP modules configured',members:'members led in BLM',respondents:'research respondents'},
    about:{kicker:'01 · PROFILE',title:'Technical thinking, with an operational mindset.',p1:'I am an Information Systems graduate from Universitas Mulawarman with a 3.80/4.00 GPA. My professional experience was shaped by remote user support and ERP implementation, from installation and access setup to module configuration, UAT, and issue documentation.',p2:'I am comfortable working at the intersection of user needs and technical needs: understanding problems, documenting gaps, escalating defects, and making sure the outcome works for end-users.'},
    pill:{itSupport:'IT Support',erp:'ERP Implementation',uat:'UAT',docs:'Technical Documentation',network:'Basic Networking'},
    projects:{kicker:'03 · FEATURED PROJECTS',title:'Evidence over adjectives.',intro:'I turn professional experience into public-safe case studies without internal filenames, client data, credentials, or confidential company information.'},
    project:{erp:{label:'ERP IMPLEMENTATION',title:'Multi-client ERP rollout & end-user support',desc:'Supported nine client rollouts across Sales, Purchase, Inventory, POS, and Accounting, including remote access setup, configuration, troubleshooting, UAT, and handover documentation.',m1:'rollouts',m2:'modules',m3:'defects / module found'},uat:{label:'UAT & QA WORKFLOW',title:'From test checklist to same-day defect escalation',desc:'Built and executed UAT checklists, identified around 1–3 defects per module, and logged each issue through a ticketing workflow on the same day.'},docs:{label:'TECHNICAL DOCUMENTATION',title:'FRD, Change Request & dokumentasi pengguna',desc:'Turned configuration gaps and change needs into structured documentation so developers and end-users had a clearer handover path before go-live.'},research:{label:'RESEARCH',title:'E-Office user satisfaction study',desc:'Thesis research using the End User Computing Satisfaction (EUCS) method with SPSS and 70 respondents to evaluate user satisfaction.'},viewCase:'View case study →'},
    experience:{kicker:'04 · EXPERIENCE',title:'Professional experience first. Leadership as a strength.',intro:'I place technical experience first, then use field and leadership experience as evidence that I can work with structure, accountability, and cross-functional communication.',erpTag:'ERP / IT Support',fieldTag:'Additional Experience',leadershipTag:'Leadership'},
    timeline1:{li1:'Provided remote technical support and troubleshooting for ERP users across <strong>9 client rollouts</strong>, including Motul and Yokohama.',li2:'Configured <strong>Sales, Purchase, Inventory, POS, and Accounting</strong> modules to client workflows; all nine implementations were delivered on schedule.',li3:'Built and executed <strong>UAT</strong> checklists, identified around 1–3 defects per module, and escalated each issue through ticketing on the same day.',li4:'Documented <strong>FRD / Change Requests</strong> to close configuration gaps before go-live and prepared an Accounting Manual Guide for end-users.'},
    timeline2:{li1:'Conducted topographic surveys across mining-concession and infrastructure areas over 18 months to produce terrain and contour data.',li2:'Converted field data into contour maps and technical reports used by engineering teams for planning.',li3:'Checked coordinates and elevations against geodetic and mapping standards before reports were issued.'},
    timeline3:{li1:'Handled meeting minutes, activity permits, and event proposals to keep recurring documentation current.',li2:'Coordinated a 60-member team and took on daily leadership duties from 2026.'},
    timeline4:{li1:'Led a governance reform initiative with <strong>15 work programs</strong> and a team of <strong>55 members</strong>.',li2:'Oversaw a combined budget of about <strong>IDR 135 million</strong> and chaired <strong>72 meetings and evaluations</strong> across one term.'},
    skills:{kicker:'05 · CAPABILITIES',title:'Skills that map to real work.',intro:'This skill set reflects work I have actually performed, not a list of technologies I once happened to hear about.',it:{title:'IT Support',desc:'Hardware installation, SSD upgrade, end-user troubleshooting, software setup, maintenance, TeamViewer, and AnyDesk.'},erp:{title:'ERP & Business Systems',desc:'ERP configuration, business process understanding, user access setup, UAT, FRD, and Change Request.'},network:{title:'Networking & OS Basics',desc:'Wi-Fi/router troubleshooting, basic operating systems, and RJ45 crimping.'},docs:{title:'Documentation & Workflow',desc:'Technical reports, FRD / CR, ticketing workflow, Kanban, Scrum fundamentals, SPSS, and Microsoft Office.'}},
    why:{kicker:'06 · WHY ME',title:'A useful bridge between users and systems.',intro:'My strengths sit at the intersection of technical fundamentals, business process understanding, user communication, and documentation discipline.',card1:{title:'Troubleshooting mindset',desc:'I break user problems into steps that can be tested, documented, and followed through.'},card2:{title:'Business + technical context',desc:'ERP experience helps me see user needs not just as tickets, but as part of a business workflow.'},card3:{title:'Structured execution',desc:'UAT, ticketing, FRD / CR, and handover documentation shape a clear and traceable way of working.'},card4:{title:'Leadership & accountability',desc:'Organizational leadership gave me practical experience in coordination, decision-making, and accountability.'}},
    education:{kicker:'07 · EDUCATION',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'GPA',studyKey:'Study Period',statusKey:'Status',statusValue:'Degree requirements completed',thesisLabel:'THESIS',thesis:'<strong>E-OFFICE user satisfaction study</strong> using the EUCS method with SPSS, n=70 respondents.'},
    certs:{kicker:'CERTIFICATIONS',title:'Professional learning'},language:{label:'Language',value:'English — Intermediate written communication; basic conversational proficiency.'},
    contact:{kicker:'08 · LET\'S CONNECT',title:'Open to the next technical opportunity.',intro:'Open to IT Support, IT Engineer, ERP / Business Systems, and Management Trainee opportunities.',email:'Send Email <span>↗</span>',linkedin:'LinkedIn <span>↗</span>',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Back to top ↑'},
    tag:{remoteSupport:'Remote Support',frdCr:'FRD / CR',ticketing:'Ticketing',defectTracking:'Defect Tracking',changeRequest:'Change Request',documentation:'Documentation',erpConfig:'ERP Configuration',fieldData:'Field Data',qualityControl:'Quality Control',technicalReporting:'Technical Reporting',quantResearch:'Quantitative Research'},
    workflow:{test:'Test',log:'Log',escalate:'Escalate',retest:'Retest'},
    skilltag:{hardware:'Hardware',software:'Software',kanban:'Kanban',spss:'SPSS',eucs:'EUCS',msOffice:'MS Office'},
    docPreview:{userGuide:'USER GUIDE'},researchPreview:{methods:'EUCS · SPSS'},
    a11y:{language:'Switch to Indonesian',themeDark:'Switch to dark mode',themeLight:'Switch to light mode',menuOpen:'Open navigation',menuClose:'Close navigation',close:'Close'}
  }
};

const caseStudies = {
  id:{
    erp:{kicker:'STUDI KASUS · ERP',title:'Multi-client ERP rollout & end-user support',summary:'Ringkasan publik yang menjelaskan alur kerja tanpa membocorkan data klien atau dokumen internal.',blocks:[['Konteks','Mendukung 9 client rollouts melalui remote support dan konfigurasi ERP pada 5 core modules.'],['Peran saya',['Menyiapkan user access','Mengonfigurasi Sales, Purchase, Inventory, POS, dan Accounting','Menjalankan UAT dan troubleshooting','Mendokumentasikan gap serta Change Request','Mendukung handover ke end-user']],['Bukti yang aman untuk publik','9 rollouts · 5 modules · seluruh implementasi selesai sesuai jadwal'],['Yang sengaja tidak ditampilkan','Nama file internal, data transaksi, credentials, screenshot sistem klien, konfigurasi proprietary, dan informasi sensitif lainnya.']]},
    uat:{kicker:'STUDI KASUS · UAT',title:'UAT & defect tracking workflow',summary:'Contoh alur kerja yang sudah disanitasi untuk menunjukkan metode kerja, bukan data proyek asli.',blocks:[['Alur kerja',['Menyiapkan skenario pengujian','Menjalankan UAT','Mencatat defect','Mengeskalasi melalui ticketing','Melakukan retest setelah perbaikan']],['Contoh defect log','Field yang aman untuk publik: Module · Scenario · Expected Result · Actual Result · Severity · Status · Retest Date'],['Bukti yang aman untuk publik','Sekitar 1–3 defect per modul ditemukan dan dieskalasikan pada hari yang sama.'],['Yang sengaja tidak ditampilkan','Nama klien, screenshot issue, akun pengguna, server details, release branch, dan internal ticket IDs.']]},
    docs:{kicker:'STUDI KASUS · DOKUMENTASI',title:'FRD, Change Request & user documentation',summary:'Contoh struktur untuk menunjukkan kualitas dokumentasi tanpa menyalin dokumen perusahaan.',blocks:[['Contoh struktur FRD',['Business need','Current process','Gap / problem','Functional requirement','Acceptance criteria']],['Contoh Change Request',['Requested change','Reason','Impact area','Priority','Validation / UAT notes']],['Contoh user guide','Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],['Bukti yang aman untuk publik','Dokumentasi digunakan untuk menutup gap konfigurasi sebelum go-live dan mendukung handover ke end-user.']]},
    research:{kicker:'STUDI KASUS · PENELITIAN',title:'Studi kepuasan pengguna E-Office',summary:'Ringkasan skripsi yang menonjolkan metode dan kemampuan analitis.',blocks:[['Fokus penelitian','Mengevaluasi kepuasan pengguna e-office menggunakan kerangka End User Computing Satisfaction (EUCS).'],['Metode',['Penelitian berbasis kuesioner','70 responden','Analisis kuantitatif dengan SPSS']],['Bukti portfolio','Ringkasan metodologi · struktur variabel · output statistik yang sudah disanitasi · interpretasi hasil'],['Yang sengaja tidak ditampilkan','Data pribadi responden dan informasi sensitif yang bersifat khusus institusi.']]}
  },
  en:{
    erp:{kicker:'CASE STUDY · ERP',title:'Multi-client ERP rollout & end-user support',summary:'A public-safe summary of the workflow without exposing client data or internal documents.',blocks:[['Context','Supported 9 client rollouts through remote support and ERP configuration across 5 core modules.'],['My role',['Set up user access','Configured Sales, Purchase, Inventory, POS, and Accounting','Executed UAT and troubleshooting','Documented gaps and Change Requests','Supported end-user handover']],['Public-safe evidence','9 rollouts · 5 modules · all implementations delivered on schedule'],['Intentionally omitted','Internal filenames, transaction data, credentials, client-system screenshots, proprietary configuration, and other sensitive information.']]},
    uat:{kicker:'CASE STUDY · UAT',title:'UAT & defect tracking workflow',summary:'A sanitized workflow example that shows the working method, not real project data.',blocks:[['Workflow',['Prepare test scenario','Execute UAT','Record defect','Escalate through ticketing','Retest after fix']],['Defect log sample','Public-safe fields: Module · Scenario · Expected Result · Actual Result · Severity · Status · Retest Date'],['Public-safe evidence','Around 1–3 defects per module identified and escalated on the same day.'],['Intentionally omitted','Client name, issue screenshots, user accounts, server details, release branches, and internal ticket IDs.']]},
    docs:{kicker:'CASE STUDY · DOCUMENTATION',title:'FRD, Change Request & user documentation',summary:'An example structure that demonstrates documentation quality without copying company documents.',blocks:[['FRD sample structure',['Business need','Current process','Gap / problem','Functional requirement','Acceptance criteria']],['Change Request sample',['Requested change','Reason','Impact area','Priority','Validation / UAT notes']],['User guide sample','Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],['Public-safe evidence','Documentation used to close configuration gaps before go-live and support end-user handover.']]},
    research:{kicker:'CASE STUDY · RESEARCH',title:'E-Office user satisfaction study',summary:'A thesis summary focused on method and analytical capability.',blocks:[['Research focus','Evaluating e-office user satisfaction using the End User Computing Satisfaction (EUCS) framework.'],['Method',['Questionnaire-based research','70 respondents','Quantitative analysis with SPSS']],['Portfolio evidence','Methodology summary · variable structure · sanitized statistical output · interpretation of results'],['Intentionally omitted','Personal respondent data and institution-specific sensitive information.']]}
  }
};

let lang = localStorage.getItem('portfolio-lang') || 'id';
let dark = localStorage.getItem('portfolio-theme') === 'dark';

function getPath(obj, path){return path.split('.').reduce((acc,key)=>acc && acc[key], obj)}
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=getPath(translations[lang],el.dataset.i18n);
    if(value===undefined) return;
    if(el.dataset.i18nHtml==='true') el.innerHTML=value;
    else el.textContent=value;
  });
  langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
  langToggle.setAttribute('aria-label', translations[lang].a11y.language);
  html.lang=lang;
  document.title = lang==='id' ? 'Daud Rio Yurdanus | IT Support & ERP Implementation' : 'Daud Rio Yurdanus | IT Support & ERP Implementation';
  document.querySelector('meta[name="description"]').content = lang==='id'
    ? 'Daud Rio Yurdanus, S.Kom. Lulusan Sistem Informasi dengan pengalaman IT Support dan implementasi ERP.'
    : 'Daud Rio Yurdanus, S.Kom. Information Systems graduate with IT Support and ERP implementation experience.';
  profilePhoto.alt = lang==='id' ? 'Foto profil Daud Rio Yurdanus' : 'Daud Rio Yurdanus profile photo';
  updateMenuLabel();
  closeMenu();
  if(modal.classList.contains('open')){
    const activeType=modal.dataset.caseType;
    if(activeType) openCase(activeType);
  }
}
function applyTheme(){
  html.dataset.theme=dark?'dark':'light';
  themeToggle.textContent=dark?'☀':'☾';
  themeToggle.setAttribute('aria-pressed',String(dark));
  themeToggle.setAttribute('aria-label',dark?translations[lang].a11y.themeLight:translations[lang].a11y.themeDark);
  themeColorMeta.content=dark?'#07101d':'#f7f9fc';
}
function updateMenuLabel(){
  menuToggle.setAttribute('aria-label',siteNav.classList.contains('open')?translations[lang].a11y.menuClose:translations[lang].a11y.menuOpen);
}
function closeMenu(){siteNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');updateMenuLabel()}

langToggle.addEventListener('click',()=>{lang=lang==='id'?'en':'id';localStorage.setItem('portfolio-lang',lang);applyTranslations();applyTheme();});
themeToggle.addEventListener('click',()=>{dark=!dark;localStorage.setItem('portfolio-theme',dark?'dark':'light');applyTheme();});
menuToggle.addEventListener('click',()=>{const open=siteNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));updateMenuLabel();});
siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));

function updateProgress(){const doc=document.documentElement;const max=doc.scrollHeight-doc.clientHeight;progressBar.style.width=max>0?`${(doc.scrollTop/max)*100}%`:'0%';}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function openCase(type){
  const item=caseStudies[lang][type]; if(!item) return;
  modal.dataset.caseType=type;
  modalKicker.textContent=item.kicker;
  modalTitle.textContent=item.title;
  modalSummary.textContent=item.summary;
  modalBody.innerHTML=item.blocks.map(([heading,body])=>{
    const content=Array.isArray(body)?`<div class="sample-grid">${body.map(x=>`<div class="sample-chip">${x}</div>`).join('')}</div>`:`<p>${body}</p>`;
    return `<section class="modal-block"><h3>${heading}</h3>${content}</section>`;
  }).join('');
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modalClose.setAttribute('aria-label',translations[lang].a11y.close);modalClose.focus();
}
function closeCase(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');delete modal.dataset.caseType;}
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>openCase(btn.dataset.case)));
modalClose.addEventListener('click',closeCase);
modal.addEventListener('click',e=>{if(e.target.matches('[data-close-modal]')) closeCase();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')) closeCase();});

applyTranslations();
applyTheme();
