/**
 * SALMA WAHEED — DATA ENGINEER PORTFOLIO
 * Contact Controller: Form Validation, Clipboard Actions & Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyActions();
});

function initCopyActions() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('salmawaheed577@gmail.com', 'Email copied to clipboard: salmawaheed577@gmail.com');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('01004997507', 'Phone number copied to clipboard: 01004997507');
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(successMsg, 'success');
    }).catch(() => {
      fallbackCopyText(text, successMsg);
    });
  } else {
    fallbackCopyText(text, successMsg);
  }
}

function fallbackCopyText(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    window.showToast(successMsg, 'success');
  } catch (err) {
    window.showToast('Unable to copy automatically. Please copy manually.', 'error');
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      setFieldError(nameInput, 'Please enter your name.');
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      setFieldError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      setFieldError(subjectInput, 'Please provide a subject.');
      isValid = false;
    } else {
      clearFieldError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldError(messageInput, 'Message should be at least 10 characters long.');
      isValid = false;
    } else {
      clearFieldError(messageInput);
    }

    if (!isValid) return;

    // Simulating submission feedback
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const subject = encodeURIComponent(subjectInput.value.trim());
    const message = encodeURIComponent(
      `From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`
    );

    setTimeout(() => {
      // Trigger user's mail client as a direct action
      const mailtoLink = `mailto:salmawaheed577@gmail.com?subject=${subject}&body=${message}`;
      window.location.href = mailtoLink;

      window.showToast('Thank you! Opening your email client to send message to Salma.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }, 700);
  });

  // Clear errors on input
  ['contact-name', 'contact-email', 'contact-subject', 'contact-message'].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('input', () => clearFieldError(el));
  });
}

function setFieldError(inputEl, msg) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  const errorMsg = group.querySelector('.form-error-msg');
  if (errorMsg) errorMsg.textContent = msg;
}

function clearFieldError(inputEl) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
}
