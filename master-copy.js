(() => {
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function applyMasterCopy() {
    setText('.eyebrow', 'Open to entry-level IT opportunities across Indonesia');
    setText('#about-title', 'Practical IT support with ERP implementation experience.');
    setText('#highlights-title', 'A snapshot of my experience and track record.');
    setText('#highlights-title + p', 'Selected figures from my education and hands-on experience.');
    setText('#projects-title', 'Selected work and academic projects.');
    setText('#projects-title + p', 'Selected case studies based on documented experience. Client-specific information and internal materials are omitted.');
    setText('#experience-title', 'Technical experience first, supported by broader experience.');
    setText('#experience-title + p', 'My technical experience comes first, supported by field and leadership experience that strengthened my coordination, accountability, and communication.');
    setText('#skills-title', 'Skills grounded in hands-on experience.');
    setText('#skills-title + p', 'My skills focus on areas where I have direct hands-on experience.');
    setText('#why-title', 'Why I fit entry-level IT Support & ERP roles.');
    setText('#why-title + p', 'I bring practical technical skills, business-process understanding, user communication, and disciplined documentation to entry-level IT roles.');
    setText('#contact-title', 'Open to my next IT opportunity.');
    setText('#education .edu-facts > div:nth-child(2) strong', 'Jul 2019 – May 2026');
    setText('#education .edu-facts > div:nth-child(3) strong', 'Graduated: 25 May 2026');
    setText('.thesis-box small', 'Degree requirements completed; graduation recorded on 25 May 2026.');
    setText('.skill-card:nth-child(3) h3', 'UAT & Technical Documentation');
    setText('.skill-card:nth-child(4) h3', 'Networking & OS Basics');
    setText('.skill-card:nth-child(5) h3', 'Tools & Productivity');
    setText('.skill-card:nth-child(5) p', 'Microsoft Office, Kanban and Scrum fundamentals, and SPSS for quantitative analysis.');
    setText('#projects .project-card:nth-child(4) .project-label', 'ACADEMIC RESEARCH');
    setText('#projects .project-card:nth-child(2) h3', 'UAT & defect tracking workflow');
    setText('#projects .project-card:nth-child(2) p', 'Built and executed UAT checklists across ERP modules, identified and logged around 1–3 defects per module, and escalated issues through a ticketing workflow on the same day.');
    setText('#projects .project-card:nth-child(3) p', 'Documented technical gaps and change requests using FRD / CR, helping developers address configuration gaps before go-live. Created user documentation to support handover.');
    setText('#projects .project-card:nth-child(4) p', 'Bachelor’s thesis research using the End User Computing Satisfaction (EUCS) framework with SPSS and 70 respondents to evaluate user satisfaction.');

    const stats = document.querySelector('#highlights .stats-grid');
    if (stats) {
      stats.innerHTML = `
        <div class="stat reveal"><strong>3.80</strong><span>GPA / 4.00</span></div>
        <div class="stat reveal"><strong>09</strong><span>ERP client rollouts</span></div>
        <div class="stat reveal"><strong>05</strong><span>ERP modules</span></div>
        <div class="stat reveal"><strong>1–3</strong><span>defects identified per module</span></div>`;
    }

    const description = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const value = 'Daud Rio Yurdanus, S.Kom. Information Systems graduate with hands-on experience in IT support, ERP implementation, troubleshooting, UAT, and technical documentation.';
    [description, ogDescription, twitterDescription].forEach(meta => meta && meta.setAttribute('content', value));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMasterCopy, { once: true });
  } else {
    applyMasterCopy();
  }
})();
