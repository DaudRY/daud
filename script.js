const html = document.documentElement;
const year = document.getElementById('year');
const progressBar = document.getElementById('progressBar');
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

const caseStudies = {
  erp: {
    kicker: 'CASE STUDY · ERP',
    title: 'Multi-client ERP rollout & end-user support',
    summary: 'A public-safe summary of the workflow without exposing client data or internal documents.',
    blocks: [
      ['Context', 'Supported nine client rollouts through remote support and ERP configuration across five core modules.'],
      ['My role', ['Set up user access', 'Configured Sales, Purchase, Inventory, POS, and Accounting', 'Executed UAT and troubleshooting', 'Documented configuration gaps and Change Requests', 'Supported end-user handover']],
      ['Public-safe evidence', 'Nine rollouts · five modules · all implementations delivered on schedule.'],
      ['Intentionally omitted', 'Internal filenames, transaction data, credentials, client-system screenshots, proprietary configuration, and other sensitive information.']
    ]
  },
  uat: {
    kicker: 'CASE STUDY · UAT',
    title: 'UAT & defect tracking workflow',
    summary: 'A sanitized workflow example that shows the working method, not real project data.',
    blocks: [
      ['Workflow', ['Prepare test scenario', 'Execute UAT', 'Record defect', 'Escalate through ticketing', 'Retest after fix']],
      ['Defect log sample', 'Public-safe fields: Module · Scenario · Expected Result · Actual Result · Severity · Status · Retest Date.'],
      ['Public-safe evidence', 'Around 1–3 defects per module were identified and escalated on the same day.'],
      ['Intentionally omitted', 'Client names, issue screenshots, user accounts, server details, release branches, and internal ticket IDs.']
    ]
  },
  docs: {
    kicker: 'CASE STUDY · DOCUMENTATION',
    title: 'FRD, Change Request & user documentation',
    summary: 'An example structure that demonstrates documentation quality without copying company documents.',
    blocks: [
      ['FRD sample structure', ['Business need', 'Current process', 'Gap / problem', 'Functional requirement', 'Acceptance criteria']],
      ['Change Request sample', ['Requested change', 'Reason', 'Impact area', 'Priority', 'Validation / UAT notes']],
      ['User guide sample', 'Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],
      ['Public-safe evidence', 'Documentation was used to close configuration gaps before go-live and support end-user handover.']
    ]
  },
  research: {
    kicker: 'CASE STUDY · RESEARCH',
    title: 'E-Office user satisfaction study',
    summary: 'A thesis summary focused on research method and analytical capability.',
    blocks: [
      ['Research focus', 'Evaluating e-office user satisfaction using the End User Computing Satisfaction (EUCS) framework.'],
      ['Method', ['Questionnaire-based research', '70 respondents', 'Quantitative analysis with SPSS']],
      ['Portfolio evidence', 'Methodology summary · variable structure · sanitized statistical output · interpretation of results.'],
      ['Intentionally omitted', 'Personal respondent data and institution-specific sensitive information.']
    ]
  }
};

year.textContent = new Date().getFullYear();
localStorage.removeItem('portfolio-lang');

function getPreferredTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const dark = theme === 'dark';
  html.dataset.theme = theme;
  themeToggle.textContent = dark ? '☀' : '☾';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeColorMeta.content = dark ? '#07101d' : '#f7f9fc';
}

function closeMenu() {
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

function updateProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progressBar.style.width = max > 0 ? `${(doc.scrollTop / max) * 100}%` : '0%';
}

function openCase(type) {
  const item = caseStudies[type];
  if (!item) return;
  modal.dataset.caseType = type;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalBody.innerHTML = item.blocks.map(([heading, body]) => {
    const content = Array.isArray(body)
      ? `<div class="sample-grid">${body.map(value => `<div class="sample-chip">${value}</div>`).join('')}</div>`
      : `<p>${body}</p>`;
    return `<section class="modal-block"><h3>${heading}</h3>${content}</section>`;
  }).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeCase() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  delete modal.dataset.caseType;
}

const theme = getPreferredTheme();
applyTheme(theme);

themeToggle.addEventListener('click', () => {
  const nextTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', nextTheme);
  applyTheme(nextTheme);
});

menuToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 1020) closeMenu();
  updateProgress();
});
updateProgress();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.case)));
modalClose.addEventListener('click', closeCase);
modal.addEventListener('click', event => {
  if (event.target.matches('[data-close-modal]')) closeCase();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeCase();
});
