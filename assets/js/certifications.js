/**
 * SALMA WAHEED — DATA ENGINEER PORTFOLIO
 * Certifications Controller & Full-Resolution Lightbox Viewer
 */

const CERTIFICATIONS_DATA = [
  {
    id: 'ai-literacy-mcit-microsoft',
    title: 'AI Literacy Certificate of Completion',
    issuer: 'MCIT (Ministry of Communications) & Microsoft',
    provider: 'Delivered by Fast Lane',
    date: 'June 2026',
    image: 'assets/images/certifications/ai-literacy-mcit-microsoft.jpg',
    signatories: 'Dr. Hoda Baraka (Advisor to Minister of ICT) & Dr. Mohamed Kassem (Microsoft Egypt GM)',
    description: 'Certified foundational competency in modern artificial intelligence systems, enterprise cloud data workflows, and national digital talent development under the AI Empower Yourself initiative.'
  },
  {
    id: 'cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    provider: 'Cisco Networking Academy Program',
    date: '23 August 2026',
    certId: '9e9d4ef7-f7b5-4b32-a758-2659b333f301',
    image: 'assets/images/certifications/cisco-intro-modern-ai.png',
    signatories: 'Lynn Bloomer (Director, Cisco Networking Academy)',
    description: 'Formal recognition for completing Cisco\'s modern AI curriculum covering foundational machine learning architectures, multimodal AI capabilities, prompt engineering, and intelligent system workflows.'
  },
  {
    id: 'cisco-modern-ai-credential',
    title: 'Modern AI Student Credential & Competencies',
    issuer: 'Cisco Networking Academy',
    provider: 'Cisco Verified Student Credential',
    date: 'August 2026',
    image: 'assets/images/certifications/cisco-intro-modern-ai-credential.png',
    signatories: 'Cisco Networking Academy Credential Board',
    description: 'Demonstrated mastery across core AI disciplines: ML concepts, image segmentation, neural machine translation, Large Language Models (LLMs), multi-turn chatbots, and tool integrations (web scraping & APIs).'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderCertifications(CERTIFICATIONS_DATA);
  initCertLightbox();
});

function renderCertifications(certs) {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = certs.map(cert => `
    <article class="cert-card">
      <div class="cert-preview-frame" onclick="openCertLightbox('${cert.id}')" role="button" tabindex="0" aria-label="View high-resolution certificate for ${cert.title}">
        <img src="${cert.image}" alt="${cert.title}" class="cert-preview-img" loading="lazy">
        <div class="cert-inspect-overlay">
          <i data-lucide="maximize-2"></i>
          <span>View High-Resolution</span>
        </div>
      </div>
      <div class="cert-content">
        <div>
          <div class="cert-issuer">
            <i data-lucide="award"></i> ${cert.issuer}
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-meta">${cert.provider} · <strong>${cert.date}</strong></p>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
            ${cert.description}
          </p>
        </div>

        <div style="padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.775rem; color: var(--text-subtle); font-family: var(--font-mono);">
            ${cert.certId ? `ID: ${cert.certId.substring(0, 15)}...` : 'Verified Credential'}
          </span>
          <button class="btn btn-outline btn-sm" onclick="openCertLightbox('${cert.id}')">
            <i data-lucide="eye"></i> Inspect
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   LIGHTBOX SYSTEM
   ========================================================================== */
function initCertLightbox() {
  const lightbox = document.getElementById('cert-lightbox');
  const closeBtn = document.getElementById('cert-lightbox-close');

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', closeCertLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeCertLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeCertLightbox();
      }
    });
  }
}

window.openCertLightbox = function(certId) {
  const cert = CERTIFICATIONS_DATA.find(c => c.id === certId);
  if (!cert) return;

  const lightbox = document.getElementById('cert-lightbox');
  const imgEl = document.getElementById('cert-lightbox-img');
  const titleEl = document.getElementById('cert-lightbox-title');
  const descEl = document.getElementById('cert-lightbox-desc');

  if (imgEl) imgEl.src = cert.image;
  if (titleEl) titleEl.innerText = `${cert.title} — ${cert.issuer}`;
  if (descEl) descEl.innerText = cert.description;

  lightbox?.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCertLightbox = function() {
  const lightbox = document.getElementById('cert-lightbox');
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
};
