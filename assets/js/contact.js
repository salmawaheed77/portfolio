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

    // Actual email submission to salmawaheed577@gmail.com
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span><i data-lucide="loader" class="spin"></i> Sending to Gmail...</span>`;
    if (window.lucide) lucide.createIcons();

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      _subject: `New Portfolio Message from ${nameInput.value.trim()}: ${subjectInput.value.trim()}`,
      _captcha: 'false',
      _template: 'table'
    };

    fetch('https://formsubmit.co/ajax/salmawaheed577@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
      if (window.lucide) lucide.createIcons();

      if (data.success === 'true' || data.success === true || (data.message && data.message.includes('success'))) {
        window.showToast('Message sent! Salma received your inquiry at salmawaheed577@gmail.com.', 'success');
        form.reset();
      } else {
        // FormSubmit confirmation or first-time notification
        window.showToast('Message submitted! Forwarding to Salma at salmawaheed577@gmail.com.', 'success');
        form.reset();
      }
    })
    .catch(err => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
      if (window.lucide) lucide.createIcons();

      // Graceful fallback to direct Gmail Web compose
      const encSubject = encodeURIComponent(subjectInput.value.trim());
      const encBody = encodeURIComponent(`From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=salmawaheed577@gmail.com&su=${encSubject}&body=${encBody}`;
      
      window.open(gmailUrl, '_blank');
      window.showToast('Opened Gmail web compose for salmawaheed577@gmail.com. Please click Send!', 'info');
      form.reset();
    });
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
