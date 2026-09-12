const html = document.documentElement;
const year = document.getElementById('year');
const progressBar = document.getElementById('progressBar');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const modal = document.getElementById('caseModal');
const modalDialog = modal?.querySelector('.modal-dialog');
const modalClose = document.getElementById('modalClose');
const modalKicker = document.getElementById('modalKicker');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalBody = document.getElementById('modalBody');
const themeColorMeta = document.getElementById('themeColorMeta');
let lastModalTrigger = null;

const caseStudies = {
  erp: {
    kicker: 'CASE STUDY · ERP',
    title: 'Multi-client ERP rollout & end-user support',
    summary: 'A concise view of the workflow, responsibilities, and measurable scope of the work.',
    blocks: [
      ['Context', 'Supported nine client rollouts through remote support and ERP configuration across five core modules.'],
      ['My role', ['Set up user access', 'Configured Sales, Purchase, Inventory, POS, and Accounting', 'Executed UAT and troubleshooting', 'Documented configuration gaps and Change Requests', 'Supported end-user handover']],
      ['Evidence', '<div class="evidence-table"><div><span>Scope</span><strong>9 client rollouts</strong></div><div><span>Modules</span><strong>5 core modules</strong></div><div><span>Testing</span><strong>UAT + defect escalation</strong></div><div><span>Handover</span><strong>User documentation</strong></div></div>'],
      ['Scope note', 'Client-specific records and internal materials are not reproduced.']
    ]
  },
  uat: {
    kicker: 'CASE STUDY · UAT',
    title: 'UAT & defect tracking workflow',
    summary: 'A representative workflow example showing how a test issue can be recorded and followed through.',
    blocks: [
      ['Workflow', ['Prepare test scenario', 'Execute UAT', 'Record defect', 'Escalate through ticketing', 'Retest after fix']],
      ['Representative defect example', '<div class="evidence-table"><div><span>Module</span><strong>Inventory</strong></div><div><span>Scenario</span><strong>Stock Adjustment</strong></div><div><span>Expected</span><strong>Adjustment saved</strong></div><div><span>Actual</span><strong>Validation error</strong></div><div><span>Severity</span><strong>Medium</strong></div><div><span>Status</span><strong>Resolved</strong></div></div>'],
      ['Evidence', 'Around 1–3 defects per module were identified and escalated on the same day.'],
      ['Scope note', 'Client-specific details and internal ticket IDs are omitted.']
    ]
  },
  docs: {
    kicker: 'CASE STUDY · DOCUMENTATION',
    title: 'FRD, Change Request & user documentation',
    summary: 'A representative documentation structure showing how requirements and changes can be made traceable.',
    blocks: [
      ['FRD sample structure', ['Business need', 'Current process', 'Gap / problem', 'Functional requirement', 'Acceptance criteria']],
      ['Change Request sample', ['Requested change', 'Reason', 'Impact area', 'Priority', 'Validation / UAT notes']],
      ['User guide sample', 'Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],
      ['Evidence', '<div class="evidence-table"><div><span>Input</span><strong>Configuration gap / change need</strong></div><div><span>Output</span><strong>FRD / CR / user guide</strong></div><div><span>Purpose</span><strong>Clearer developer handover</strong></div><div><span>Timing</span><strong>Before go-live</strong></div></div>']
    ]
  },
  research: {
    kicker: 'CASE STUDY · RESEARCH',
    title: 'E-Office user satisfaction study',
    summary: 'A thesis summary focused on the research method, sample, and analytical workflow.',
    blocks: [
      ['Research focus', 'Evaluating e-office user satisfaction using the End User Computing Satisfaction (EUCS) framework.'],
      ['Method', ['Questionnaire-based research', '70 respondents', 'Quantitative analysis with SPSS']],
      ['Evidence', '<div class="evidence-table"><div><span>Framework</span><strong>EUCS</strong></div><div><span>Sample</span><strong>n = 70</strong></div><div><span>Tool</span><strong>SPSS</strong></div><div><span>Output</span><strong>Statistical analysis + interpretation</strong></div></div>'],
      ['Scope note', 'Personal respondent data and sensitive institution-specific information are not reproduced.']
    ]
  }
};

function getPreferredTheme() {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (_) {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function syncThemeToggleAppearance(dark) {
  if (!themeToggle) return;
  themeToggle.style.setProperty('background-color', dark ? '#0d1728' : '#ffffff', 'important');
  themeToggle.style.setProperty('color', dark ? '#f6f9fd' : '#0a1322', 'important');
  themeToggle.style.setProperty('border-color', dark ? '#22344b' : '#dbe4ef', 'important');
  themeToggle.style.setProperty('box-shadow', 'none', 'important');
}

function applyTheme(theme) {
  const dark = theme === 'dark';
  html.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.innerHTML = `<span aria-hidden="true">${dark ? '☀' : '☾'}</span>`;
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    syncThemeToggleAppearance(dark);
  }
  if (themeColorMeta) themeColorMeta.content = dark ? '#07101d' : '#f7f9fc';
}

function closeMenu() {
  if (!siteNav || !menuToggle) return;
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

function updateProgress() {
  if (!progressBar) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progressBar.style.width = max > 0 ? `${(doc.scrollTop / max) * 100}%` : '0%';
}

function createBlock([heading, body]) {
  const section = document.createElement('section');
  section.className = 'modal-block';
  const h3 = document.createElement('h3');
  h3.textContent = heading;
  section.appendChild(h3);
  if (Array.isArray(body)) {
    const grid = document.createElement('div');
    grid.className = 'sample-grid';
    body.forEach(value => {
      const chip = document.createElement('div');
      chip.className = 'sample-chip';
      chip.textContent = value;
      grid.appendChild(chip);
    });
    section.appendChild(grid);
  } else if (body.trim().startsWith('<div')) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = body;
    section.appendChild(wrapper.firstElementChild);
  } else {
    const p = document.createElement('p');
    p.textContent = body;
    section.appendChild(p);
  }
  return section;
}

function openCase(type, trigger) {
  const item = caseStudies[type];
  if (!item || !modal || !modalDialog) return;
  lastModalTrigger = trigger || document.activeElement;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalBody.replaceChildren(...item.blocks.map(createBlock));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalDialog.focus();
}

function getFocusableElements() {
  if (!modalDialog) return [];
  return [...modalDialog.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.disabled && el.getAttribute('aria-hidden') !== 'true');
}

function closeCase() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  const target = lastModalTrigger;
  lastModalTrigger = null;
  if (target instanceof HTMLElement) target.focus();
}

function installProjectVisualFixes() {
  const cards = [...document.querySelectorAll('#projects .project-card')];
  const visuals = [
    ['assets/01-erp-implementation-sanitized.svg', 'Sanitized ERP implementation workflow showing rollout scope, core modules, configuration, UAT, defect tracking, retest, and handover.'],
    ['assets/02-uat-inventory-sanitized.svg', 'Sanitized Inventory UAT test case showing internal transfer validation and QA steps.'],
    ['assets/03-frd-change-request-sanitized.svg', 'Sanitized FRD and Change Request examples derived from documented Purchase and POS requirements.'],
    ['assets/04-eoffice-research-sanitized.svg', 'Sanitized research visual showing the EUCS method, 70 respondents, and SPSS analysis workflow.']
  ];
  cards.forEach((card, index) => {
    card.classList.remove('featured');
    const existing = card.querySelector('.project-media, .evidence-panel');
    if (!existing || !visuals[index]) return;
    const media = document.createElement('div');
    media.className = 'project-media';
    const link = document.createElement('a');
    link.className = 'project-visual-link';
    link.href = visuals[index][0];
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', `Open full-size project visual ${index + 1}`);
    const img = document.createElement('img');
    img.src = visuals[index][0];
    img.alt = visuals[index][1];
    img.loading = 'lazy';
    img.decoding = 'async';
    const label = document.createElement('span');
    label.className = 'media-label';
    label.textContent = 'View full visual ↗';
    link.append(img, label);
    media.appendChild(link);
    existing.replaceWith(media);
  });
}

function installBackToTop() {
  document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    });
  });
}

applyTheme(getPreferredTheme());
installProjectVisualFixes();
installBackToTop();

year && (year.textContent = new Date().getFullYear());

themeToggle?.addEventListener('click', () => {
  const nextTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) {}
  applyTheme(nextTheme);
});

menuToggle?.addEventListener('click', () => {
  const open = siteNav?.classList.toggle('open') || false;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

siteNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 1020) closeMenu(); updateProgress(); });
updateProgress();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => openCase(button.dataset.case, button));
});
modalClose?.addEventListener('click', closeCase);
modal?.addEventListener('click', event => { if (event.target.matches('[data-close-modal]')) closeCase(); });

document.addEventListener('keydown', event => {
  if (!modal?.classList.contains('open')) {
    if (event.key === 'Escape' && siteNav?.classList.contains('open')) closeMenu();
    return;
  }
  if (event.key === 'Escape') { closeCase(); return; }
  if (event.key === 'Tab') {
    const focusables = getFocusableElements();
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...(siteNav?.querySelectorAll('a[href^="#"]') || [])];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));
