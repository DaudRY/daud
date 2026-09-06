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

year.textContent = new Date().getFullYear();

const translations = {
  id: {
    nav:{about:'Profil',highlights:'Highlights',experience:'Experience',projects:'Projects',skills:'Skills',contact:'Contact'},
    hero:{availability:'<span class="status-dot"></span> Terbuka untuk peluang di seluruh Indonesia',title:'Information Systems Graduate <span>|</span> IT Support <span>|</span> ERP Implementation',lead:'Hands-on experience in end-user support, ERP implementation, troubleshooting, UAT, and technical documentation.',ctaPortfolio:'Lihat Portfolio <span>↗</span>',ctaCv:'Unduh CV <span>↓</span>',meta1:'Based in Samarinda',meta2:'Open to relocation',meta3:'IT Support · ERP · Business Systems',erpLabel:'ERP Rollouts',erpSmall:'client implementations',modulesLabel:'Core Modules',modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'},
    highlights:{kicker:'02 · CAREER HIGHLIGHTS',title:'Beberapa angka yang layak diingat.',intro:'Angka-angka ini saya tampilkan untuk memberi gambaran cepat tentang skala pekerjaan, bukan untuk menghias halaman dengan statistik yang tidak jelas asal-usulnya.'},
    stats:{gpa:'GPA / 4.00',erp:'ERP client rollouts',modules:'ERP modules configured',members:'members led in BLM',respondents:'thesis respondents'},
    about:{kicker:'01 · PROFILE',title:'Technical thinking, with an operational mindset.',p1:'Saya adalah lulusan Sistem Informasi Universitas Mulawarman dengan IPK 3.80/4.00. Pengalaman profesional saya dibentuk melalui support pengguna dan implementasi ERP secara remote, dari instalasi, pengaturan akses, konfigurasi modul, UAT, sampai dokumentasi issue.',p2:'Saya nyaman bekerja di titik temu antara kebutuhan pengguna dan kebutuhan teknis: memahami masalah, mendokumentasikan gap, mengeskalasikan defect, lalu memastikan hasilnya dapat digunakan end-user.'},
    pill:{itSupport:'IT Support',erp:'ERP Implementation',uat:'UAT',docs:'Technical Documentation',network:'Basic Networking'},
    projects:{kicker:'03 · FEATURED PROJECTS',title:'Evidence over adjectives.',intro:'Saya mengubah pengalaman kerja menjadi case study yang aman untuk publik: tanpa nama file internal, data klien, kredensial, atau informasi perusahaan yang bersifat confidential.'},
    project:{erp:{label:'ERP IMPLEMENTATION',title:'Multi-client ERP rollout & end-user support',desc:'Supported nine client rollouts across Sales, Purchase, Inventory, POS, and Accounting, including remote access setup, configuration, troubleshooting, UAT, and handover documentation.',m1:'rollouts',m2:'modules',m3:'defects / module found'},uat:{label:'UAT & QA WORKFLOW',title:'From test checklist to same-day defect escalation',desc:'Built and executed UAT checklists, identified around 1–3 defects per module, and logged each issue through a ticketing workflow on the same day.'},docs:{label:'TECHNICAL DOCUMENTATION',title:'FRD, Change Request & user documentation',desc:'Turned configuration gaps and change needs into structured documentation so developers and end-users had a clearer handover path before go-live.'},research:{label:'RESEARCH',title:'E-Office user satisfaction study',desc:'Thesis research using the End User Computing Satisfaction (EUCS) method with SPSS and 70 respondents to evaluate user satisfaction.'},viewCase:'Lihat case study →'},
    experience:{kicker:'04 · EXPERIENCE',title:'Professional experience first. Leadership as a strength.',intro:'Saya menempatkan pengalaman teknis di depan, lalu menggunakan pengalaman lapangan dan leadership sebagai bukti bahwa saya bisa bekerja rapi, bertanggung jawab, dan berkomunikasi lintas fungsi.',erpTag:'ERP / IT Support',fieldTag:'Additional Experience',leadershipTag:'Leadership'},
    timeline1:{li1:'Memberikan remote technical support dan troubleshooting untuk pengguna ERP di <strong>9 client rollouts</strong>, termasuk Motul dan Yokohama.',li2:'Mengonfigurasi <strong>Sales, Purchase, Inventory, POS, dan Accounting</strong> sesuai workflow tiap klien; seluruh sembilan implementasi selesai sesuai jadwal.',li3:'Menyusun checklist dan menjalankan <strong>UAT</strong>, menemukan sekitar 1–3 defect per modul, lalu mengeskalasikan setiap issue melalui workflow ticketing pada hari yang sama.',li4:'Menyusun <strong>FRD / Change Request</strong> untuk menutup gap konfigurasi sebelum go-live serta menyiapkan Accounting Manual Guide untuk end-user.'},
    timeline2:{li1:'Melakukan survei topografi pada area konsesi pertambangan dan infrastruktur selama 18 bulan untuk menghasilkan data terrain dan contour.',li2:'Mengubah data lapangan menjadi contour maps dan technical reports yang dapat digunakan tim engineering untuk tahap perencanaan.',li3:'Memeriksa koordinat dan elevasi terhadap standar geodesi dan pemetaan sebelum laporan diterbitkan.'},
    timeline3:{li1:'Menangani dokumentasi notulen rapat, izin kegiatan, dan proposal acara agar dokumentasi berkala tetap mutakhir.',li2:'Mengoordinasikan tim berjumlah 60 anggota dan menjalankan tanggung jawab leadership harian sejak 2026.'},
    timeline4:{li1:'Memimpin reformasi tata kelola dengan <strong>15 work programs</strong> dan tim berjumlah <strong>55 anggota</strong>.',li2:'Mengawasi gabungan anggaran sekitar <strong>IDR 135 juta</strong> dan memimpin <strong>72 rapat/evaluasi</strong> selama satu periode.'},
    skills:{kicker:'05 · CAPABILITIES',title:'Skills that map to real work.',intro:'Skill set ini saya susun berdasarkan pekerjaan yang benar-benar pernah saya lakukan, bukan daftar teknologi yang kebetulan pernah saya dengar.',it:{title:'IT Support',desc:'Instalasi hardware, upgrade SSD, end-user troubleshooting, software setup, maintenance, TeamViewer, dan AnyDesk.'},erp:{title:'ERP & Business Systems',desc:'ERP configuration, pemahaman business process, user access setup, UAT, FRD, dan Change Request.'},network:{title:'Networking & OS Basics',desc:'Troubleshooting Wi-Fi/router, sistem operasi dasar, dan crimping RJ45.'},docs:{title:'Documentation & Workflow',desc:'Technical reports, FRD / CR, ticketing workflow, Kanban, Scrum fundamentals, SPSS, dan Microsoft Office.'}},
    why:{kicker:'06 · WHY ME',title:'A useful bridge between users and systems.',intro:'Kekuatan utama saya ada pada kombinasi kemampuan teknis dasar, pemahaman proses bisnis, komunikasi pengguna, dan disiplin dokumentasi.',card1:{title:'Troubleshooting mindset',desc:'Saya terbiasa memecah masalah pengguna menjadi langkah yang dapat diuji, dicatat, dan ditindaklanjuti.'},card2:{title:'Business + technical context',desc:'Pengalaman ERP membantu saya melihat kebutuhan user bukan hanya sebagai tiket, tetapi sebagai bagian dari workflow bisnis.'},card3:{title:'Structured execution',desc:'UAT, ticketing, FRD / CR, dan handover documentation membentuk cara kerja yang rapi dan dapat ditelusuri.'},card4:{title:'Leadership & accountability',desc:'Pengalaman memimpin organisasi memberi saya latihan nyata dalam koordinasi, keputusan, dan tanggung jawab.'}},
    education:{kicker:'07 · EDUCATION',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'GPA',studyKey:'Study',statusKey:'Status',statusValue:'Degree requirements completed',thesisLabel:'THESIS',thesis:'<strong>E-OFFICE user satisfaction study</strong> using the EUCS method with SPSS, n=70 respondents.'},
    certs:{kicker:'CERTIFICATIONS',title:'Professional learning'},language:{label:'Language',value:'English — Intermediate written communication; basic conversational proficiency.'},
    contact:{kicker:'08 · LET\'S CONNECT',title:'Open to the next technical opportunity.',intro:'Open to IT Support, IT Engineer, ERP / Business Systems, and Management Trainee opportunities.',email:'Kirim Email ↗',linkedin:'LinkedIn ↗',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Kembali ke atas ↑'}
  },
  en: {
    nav:{about:'Profile',highlights:'Highlights',experience:'Experience',projects:'Projects',skills:'Skills',contact:'Contact'},
    hero:{availability:'<span class="status-dot"></span> Open to opportunities across Indonesia',title:'Information Systems Graduate <span>|</span> IT Support <span>|</span> ERP Implementation',lead:'Hands-on experience in end-user support, ERP implementation, troubleshooting, UAT, and technical documentation.',ctaPortfolio:'View Portfolio <span>↗</span>',ctaCv:'Download CV <span>↓</span>',meta1:'Based in Samarinda',meta2:'Open to relocation',meta3:'IT Support · ERP · Business Systems',erpLabel:'ERP Rollouts',erpSmall:'client implementations',modulesLabel:'Core Modules',modulesSmall:'Sales · Purchase · Inventory · POS · Accounting'},
    highlights:{kicker:'02 · CAREER HIGHLIGHTS',title:'A few numbers worth remembering.',intro:'These figures give a quick sense of the scale of the work, rather than decorating the page with mysterious statistics.'},
    stats:{gpa:'GPA / 4.00',erp:'ERP client rollouts',modules:'ERP modules configured',members:'members led in BLM',respondents:'thesis respondents'},
    about:{kicker:'01 · PROFILE',title:'Technical thinking, with an operational mindset.',p1:'I am an Information Systems graduate from Universitas Mulawarman with a 3.80/4.00 GPA. My professional experience was shaped by remote user support and ERP implementation, covering installation, access setup, module configuration, UAT, and issue documentation.',p2:'I work comfortably at the intersection of user needs and technical requirements: understanding problems, documenting gaps, escalating defects, and helping ensure the final result works for end-users.'},
    pill:{itSupport:'IT Support',erp:'ERP Implementation',uat:'UAT',docs:'Technical Documentation',network:'Basic Networking'},
    projects:{kicker:'03 · FEATURED PROJECTS',title:'Evidence over adjectives.',intro:'I turn professional experience into public-safe case studies without exposing internal filenames, client data, credentials, or confidential company information.'},
    project:{erp:{label:'ERP IMPLEMENTATION',title:'Multi-client ERP rollout & end-user support',desc:'Supported nine client rollouts across Sales, Purchase, Inventory, POS, and Accounting, including remote access setup, configuration, troubleshooting, UAT, and handover documentation.',m1:'rollouts',m2:'modules',m3:'defects / module found'},uat:{label:'UAT & QA WORKFLOW',title:'From test checklist to same-day defect escalation',desc:'Built and executed UAT checklists, identified around 1–3 defects per module, and logged each issue through a ticketing workflow on the same day.'},docs:{label:'TECHNICAL DOCUMENTATION',title:'FRD, Change Request & user documentation',desc:'Turned configuration gaps and change needs into structured documentation so developers and end-users had a clearer handover path before go-live.'},research:{label:'RESEARCH',title:'E-Office user satisfaction study',desc:'Thesis research using the End User Computing Satisfaction (EUCS) method with SPSS and 70 respondents to evaluate user satisfaction.'},viewCase:'View case study →'},
    experience:{kicker:'04 · EXPERIENCE',title:'Professional experience first. Leadership as a strength.',intro:'I place technical experience first, then use field and leadership experience as evidence that I can work carefully, take responsibility, and communicate across functions.',erpTag:'ERP / IT Support',fieldTag:'Additional Experience',leadershipTag:'Leadership'},
    timeline1:{li1:'Provided remote technical support and troubleshooting for ERP users across <strong>9 client rollouts</strong>, including Motul and Yokohama.',li2:'Configured <strong>Sales, Purchase, Inventory, POS, and Accounting</strong> modules to client workflows; all nine implementations were delivered on schedule.',li3:'Built and executed <strong>UAT</strong> checklists, identified around 1–3 defects per module, and escalated each issue through ticketing on the same day.',li4:'Documented <strong>FRD / Change Requests</strong> to close configuration gaps before go-live and prepared an Accounting Manual Guide for end-users.'},
    timeline2:{li1:'Conducted topographic surveys across mining-concession and infrastructure areas over 18 months to produce terrain and contour data.',li2:'Converted field data into contour maps and technical reports used by engineering teams for planning work.',li3:'Checked coordinates and elevations against mapping and geodetic standards before reports were issued.'},
    timeline3:{li1:'Handled meeting minutes, activity permits, and event proposals to keep recurring documentation current.',li2:'Coordinated a 60-member team and took on daily leadership duties from 2026.'},
    timeline4:{li1:'Led a governance reform initiative with <strong>15 work programs</strong> and a team of <strong>55 members</strong>.',li2:'Oversaw a combined budget of about <strong>IDR 135 million</strong> and chaired <strong>72 meetings and evaluations</strong> across one term.'},
    skills:{kicker:'05 · CAPABILITIES',title:'Skills that map to real work.',intro:'This skill set reflects work I have actually performed, not a list of technologies I happened to encounter.',it:{title:'IT Support',desc:'Hardware installation, SSD upgrades, end-user troubleshooting, software setup, maintenance, TeamViewer, and AnyDesk.'},erp:{title:'ERP & Business Systems',desc:'ERP configuration, business process understanding, user access setup, UAT, FRD, and Change Request.'},network:{title:'Networking & OS Basics',desc:'Wi-Fi/router troubleshooting, basic operating systems, and RJ45 crimping.'},docs:{title:'Documentation & Workflow',desc:'Technical reports, FRD / CR, ticketing workflow, Kanban, Scrum fundamentals, SPSS, and Microsoft Office.'}},
    why:{kicker:'06 · WHY ME',title:'A useful bridge between users and systems.',intro:'My strongest value comes from combining practical technical basics, business-process understanding, user communication, and disciplined documentation.',card1:{title:'Troubleshooting mindset',desc:'I am used to breaking user problems into steps that can be tested, documented, and followed through.'},card2:{title:'Business + technical context',desc:'ERP experience helps me see user needs not only as tickets, but as part of a larger business workflow.'},card3:{title:'Structured execution',desc:'UAT, ticketing, FRD / CR, and handover documentation shaped a work style that is organized and traceable.'},card4:{title:'Leadership & accountability',desc:'Leadership roles gave me practical training in coordination, decisions, and ownership.'}},
    education:{kicker:'07 · EDUCATION',school:'Universitas Mulawarman',degree:'Bachelor of Computer Science (S.Kom), Information Systems',gpaKey:'GPA',studyKey:'Study',statusKey:'Status',statusValue:'Degree requirements completed',thesisLabel:'THESIS',thesis:'<strong>E-OFFICE user satisfaction study</strong> using the EUCS method with SPSS, n=70 respondents.'},
    certs:{kicker:'CERTIFICATIONS',title:'Professional learning'},language:{label:'Language',value:'English — Intermediate written communication; basic conversational proficiency.'},
    contact:{kicker:'08 · LET\'S CONNECT',title:'Open to the next technical opportunity.',intro:'Open to IT Support, IT Engineer, ERP / Business Systems, and Management Trainee opportunities.',email:'Send Email ↗',linkedin:'LinkedIn ↗',whatsapp:'WhatsApp <span>→</span>'},
    footer:{top:'Back to top ↑'}
  }
};

const caseStudies = {
  id:{
    erp:{kicker:'CASE STUDY · ERP',title:'Multi-client ERP rollout & end-user support',summary:'Versi publik yang merangkum alur kerja tanpa membocorkan data klien atau dokumen internal.',blocks:[['Context','Mendukung 9 client rollouts melalui remote support dan konfigurasi ERP pada 5 core modules.'],['My role',['Menyiapkan user access','Mengonfigurasi Sales, Purchase, Inventory, POS, dan Accounting','Menjalankan UAT dan troubleshooting','Mendokumentasikan gap serta Change Request','Mendukung handover ke end-user']],['Public-safe evidence','9 rollouts · 5 modules · seluruh implementasi selesai sesuai jadwal'],['What is intentionally omitted','Nama file internal, data transaksi, credentials, screenshot sistem klien, konfigurasi proprietary, dan informasi sensitif lainnya.']]},
    uat:{kicker:'CASE STUDY · UAT',title:'UAT & defect tracking workflow',summary:'Contoh sanitized workflow yang menunjukkan cara berpikir dan alur kerja, bukan data project asli.',blocks:[['Workflow',['Prepare test scenario','Execute UAT','Record defect','Escalate through ticketing','Retest after fix']],['Defect log sample','Contoh field publik: Module · Scenario · Expected Result · Actual Result · Severity · Status · Retest Date'],['Public-safe evidence','Around 1–3 defects per module identified and escalated on the same day.'],['What is intentionally omitted','Client name, issue screenshot, user account, server details, release branch, and internal ticket IDs.']]},
    docs:{kicker:'CASE STUDY · DOCUMENTATION',title:'FRD, Change Request & user documentation',summary:'Struktur contoh untuk menunjukkan kualitas dokumentasi tanpa menyalin dokumen perusahaan.',blocks:[['FRD sample structure',['Business need','Current process','Gap / problem','Functional requirement','Acceptance criteria']],['Change Request sample',['Requested change','Reason','Impact area','Priority','Validation / UAT notes']],['User guide sample','Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],['Public-safe evidence','Documentation used to close configuration gaps before go-live and support end-user handover.']]},
    research:{kicker:'CASE STUDY · RESEARCH',title:'E-Office user satisfaction study',summary:'Ringkasan skripsi yang menonjolkan metode dan kemampuan analitis.',blocks:[['Research focus','Evaluating e-office user satisfaction using the End User Computing Satisfaction (EUCS) framework.'],['Method',['Questionnaire-based research','70 respondents','Quantitative analysis with SPSS']],['Portfolio evidence','Methodology summary · variable structure · sanitized statistical output · interpretation of results'],['What is intentionally omitted','Personal respondent data and institution-specific sensitive information.']]}
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
    const value = getPath(translations[lang], el.dataset.i18n);
    if(value === undefined) return;
    if(el.dataset.i18nHtml === 'true'){el.innerHTML=value}else{el.textContent=value}
  });
  langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
  html.lang = lang;
  document.title = lang === 'id' ? 'Daud Rio Yurdanus | IT Support & ERP Implementation' : 'Daud Rio Yurdanus | IT Support & ERP Implementation';
  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.content = lang === 'id' ? 'Daud Rio Yurdanus, S.Kom. Information Systems Graduate | IT Support | ERP Implementation.' : 'Daud Rio Yurdanus, S.Kom. Information Systems Graduate | IT Support | ERP Implementation.';
  closeMenu();
}
function applyTheme(){
  html.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.textContent = dark ? '☀' : '☾';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeColorMeta.content = dark ? '#07101d' : '#f7f9fc';
}
function closeMenu(){siteNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}

langToggle.addEventListener('click',()=>{
  lang = lang === 'id' ? 'en' : 'id';
  localStorage.setItem('portfolio-lang',lang);
  applyTranslations();
});
themeToggle.addEventListener('click',()=>{
  dark = !dark;
  localStorage.setItem('portfolio-theme',dark ? 'dark' : 'light');
  applyTheme();
});
menuToggle.addEventListener('click',()=>{
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));

function updateProgress(){
  const doc=document.documentElement;
  const max=doc.scrollHeight-doc.clientHeight;
  progressBar.style.width = max>0 ? `${(doc.scrollTop/max)*100}%` : '0%';
}
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function openCase(type){
  const item = caseStudies[lang][type];
  if(!item) return;
  modalKicker.textContent=item.kicker;
  modalTitle.textContent=item.title;
  modalSummary.textContent=item.summary;
  modalBody.innerHTML=item.blocks.map(([heading,body])=>{
    const content=Array.isArray(body)
      ? `<div class="sample-grid">${body.map(x=>`<div class="sample-chip">${x}</div>`).join('')}</div>`
      : `<p>${body}</p>`;
    return `<section class="modal-block"><h3>${heading}</h3>${content}</section>`;
  }).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  modalClose.focus();
}
function closeCase(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
document.querySelectorAll('[data-case]').forEach(btn=>btn.addEventListener('click',()=>openCase(btn.dataset.case)));
modalClose.addEventListener('click',closeCase);
modal.addEventListener('click',e=>{if(e.target.matches('[data-close-modal]')) closeCase()});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && modal.classList.contains('open')) closeCase()});

applyTheme();
applyTranslations();
