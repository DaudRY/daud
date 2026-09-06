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
    summary: 'A public-safe view of the workflow, responsibilities, and measurable scope of the work without exposing client data or internal documents.',
    blocks: [
      ['Context', 'Supported nine client rollouts through remote support and ERP configuration across five core modules.'],
      ['My role', ['Set up user access', 'Configured Sales, Purchase, Inventory, POS, and Accounting', 'Executed UAT and troubleshooting', 'Documented configuration gaps and Change Requests', 'Supported end-user handover']],
      ['Sanitized evidence', '<div class="evidence-table"><div><span>Scope</span><strong>9 client rollouts</strong></div><div><span>Modules</span><strong>5 core modules</strong></div><div><span>Testing</span><strong>UAT + defect escalation</strong></div><div><span>Handover</span><strong>User documentation</strong></div></div>'],
      ['Public-safe boundary', 'Internal filenames, transaction data, credentials, client-system screenshots, proprietary configuration, and other sensitive information are intentionally excluded.']
    ]
  },
  uat: {
    kicker: 'CASE STUDY · UAT',
    title: 'UAT & defect tracking workflow',
    summary: 'A sanitized workflow example that demonstrates how a test issue can be recorded and followed through without using internal project data.',
    blocks: [
      ['Workflow', ['Prepare test scenario', 'Execute UAT', 'Record defect', 'Escalate through ticketing', 'Retest after fix']],
      ['Sanitized defect example', '<div class="evidence-table"><div><span>Module</span><strong>Inventory</strong></div><div><span>Scenario</span><strong>Stock Adjustment</strong></div><div><span>Expected</span><strong>Adjustment saved</strong></div><div><span>Actual</span><strong>Validation error</strong></div><div><span>Severity</span><strong>Medium</strong></div><div><span>Status</span><strong>Resolved</strong></div></div>'],
      ['Public-safe evidence', 'Around 1–3 defects per module were identified and escalated on the same day.'],
      ['Boundary', 'Client names, issue screenshots, user accounts, server details, release branches, and internal ticket IDs are omitted.']
    ]
  },
  docs: {
    kicker: 'CASE STUDY · DOCUMENTATION',
    title: 'FRD, Change Request & user documentation',
    summary: 'A representative documentation structure that demonstrates how requirements and changes can be made traceable without copying company documents.',
    blocks: [
      ['FRD sample structure', ['Business need', 'Current process', 'Gap / problem', 'Functional requirement', 'Acceptance criteria']],
      ['Change Request sample', ['Requested change', 'Reason', 'Impact area', 'Priority', 'Validation / UAT notes']],
      ['User guide sample', 'Step-by-step instructions, prerequisites, expected screen behavior, and common troubleshooting notes.'],
      ['Public-safe evidence', '<div class="evidence-table"><div><span>Input</span><strong>Configuration gap / change need</strong></div><div><span>Output</span><strong>FRD / CR / user guide</strong></div><div><span>Purpose</span><strong>Clearer developer handover</strong></div><div><span>Timing</span><strong>Before go-live</strong></div></div>']
    ]
  },
  research: {
    kicker: 'CASE STUDY · RESEARCH',
    title: 'E-Office user satisfaction study',
    summary: 'A thesis summary focused on the research method, sample, and analytical workflow rather than personal respondent data.',
    blocks: [
      ['Research focus', 'Evaluating e-office user satisfaction using the End User Computing Satisfaction (EUCS) framework.'],
      ['Method', ['Questionnaire-based research', '70 respondents', 'Quantitative analysis with SPSS']],
      ['Portfolio evidence', '<div class="evidence-table"><div><span>Framework</span><strong>EUCS</strong></div><div><span>Sample</span><strong>n = 70</strong></div><div><span>Tool</span><strong>SPSS</strong></div><div><span>Output</span><strong>Statistical analysis + interpretation</strong></div></div>'],
      ['Public-safe boundary', 'Personal respondent data and institution-specific sensitive information are intentionally excluded.']
    ]
  }
};

year.textContent = new Date().getFullYear();

function getPreferredTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const dark = theme === 'dark';
  html.dataset.theme = theme;
  themeToggle.innerHTML = `<span aria-hidden="true">${dark ? '☀' : '☾'}</span>`;
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  if (themeColorMeta) themeColorMeta.content = dark ? '#07101d' : '#f7f9fc';
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
  if (!item) return;

  lastModalTrigger = trigger || document.activeElement;
  modal.dataset.caseType = type;
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
    .filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
}

function closeCase() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  delete modal.dataset.caseType;
  const target = lastModalTrigger;
  lastModalTrigger = null;
  if (target instanceof HTMLElement) target.focus();
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', nextTheme);
    applyTheme(nextTheme);
  });
}

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

document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => openCase(button.dataset.case, button));
});

modalClose.addEventListener('click', closeCase);
modal.addEventListener('click', event => {
  if (event.target.matches('[data-close-modal]')) closeCase();
});

document.addEventListener('keydown', event => {
  if (!modal.classList.contains('open')) {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) closeMenu();
    return;
  }

  if (event.key === 'Escape') {
    closeCase();
    return;
  }

  if (event.key === 'Tab') {
    const focusables = getFocusableElements();
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...siteNav.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));
