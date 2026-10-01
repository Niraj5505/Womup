// ========================================================
// WOMUP - Interactive Behaviors & Modal Handlers
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Video Modal Elements
  const videoBtn = document.getElementById('videoBtn');
  const videoModal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalClose');
  const videoIframe = document.getElementById('videoIframe');

  // App Download Modal Elements
  const downloadBtn = document.getElementById('downloadBtn');
  const joinBtn = document.getElementById('joinBtn');
  const joinNowBtn = document.getElementById('joinNowBtn');
  const startShoppingBtn = document.getElementById('startShoppingBtn');
  const registerVendorBtn = document.getElementById('registerVendorBtn');
  const knowMoreBtn = document.getElementById('knowMoreBtn');
  const viewAllShopsBtn = document.getElementById('viewAllShopsBtn');
  const viewAllShopsBtnIndex = document.getElementById('viewAllShopsBtnIndex');
  const googlePlayBtn = document.getElementById('googlePlayBtn');
  const appleStoreBtn = document.getElementById('appleStoreBtn');
  const appModal = document.getElementById('appModal');
  const appModalClose = document.getElementById('appModalClose');

  // Mobile Menu Elements
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  // Open Video Modal
  if (videoBtn && videoModal) {
    videoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      videoModal.setAttribute('aria-hidden', 'false');
      // Reset iframe src to autoplay if supported
      const currentSrc = videoIframe.src;
      if (!currentSrc.includes('autoplay=1')) {
        videoIframe.src = currentSrc + '&autoplay=1';
      }
    });
  }

  // Close Video Modal
  if (modalClose && videoModal) {
    modalClose.addEventListener('click', () => {
      videoModal.classList.remove('active');
      videoModal.setAttribute('aria-hidden', 'true');
      // Stop video playback by resetting src
      videoIframe.src = videoIframe.src.replace('&autoplay=1', '');
    });
  }

  // Open App Download Modal
  const openAppModal = (e) => {
    e.preventDefault();
    if (appModal) {
      appModal.classList.add('active');
      appModal.setAttribute('aria-hidden', 'false');
    }
  };

  if (downloadBtn) downloadBtn.addEventListener('click', openAppModal);
  if (joinBtn) joinBtn.addEventListener('click', openAppModal);
  if (joinNowBtn) joinNowBtn.addEventListener('click', openAppModal);
  if (startShoppingBtn) startShoppingBtn.addEventListener('click', openAppModal);
  if (registerVendorBtn) registerVendorBtn.addEventListener('click', openAppModal);
  if (knowMoreBtn) knowMoreBtn.addEventListener('click', openAppModal);
  if (viewAllShopsBtn) viewAllShopsBtn.addEventListener('click', openAppModal);
  if (viewAllShopsBtnIndex) viewAllShopsBtnIndex.addEventListener('click', openAppModal);
  if (googlePlayBtn) googlePlayBtn.addEventListener('click', openAppModal);
  if (appleStoreBtn) appleStoreBtn.addEventListener('click', openAppModal);

  // Close App Download Modal
  if (appModalClose && appModal) {
    appModalClose.addEventListener('click', () => {
      appModal.classList.remove('active');
      appModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Close modals when clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('active');
      videoModal.setAttribute('aria-hidden', 'true');
      videoIframe.src = videoIframe.src.replace('&autoplay=1', '');
    }
    if (e.target === appModal) {
      appModal.classList.remove('active');
      appModal.setAttribute('aria-hidden', 'true');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });
  }

  // Interactive badge pills
  const badgePills = document.querySelectorAll('.badge-pill');
  badgePills.forEach(pill => {
    pill.addEventListener('click', openAppModal);
  });

  // Feature cards click interaction
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach(item => {
    item.addEventListener('click', openAppModal);
  });

  // Shop Categories cards click interaction
  const scCards = document.querySelectorAll('.sc-card');
  scCards.forEach(card => {
    card.addEventListener('click', openAppModal);
  });

  // Mobile menu close on nav link click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.classList.remove('active');
      }
    });
  });

  // Automatically ensure current page navbar link is highlighted as active
  const currentFileName = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetPage = href.split('#')[0].split('/').pop();
    if (targetPage === currentFileName || (currentFileName === '' && targetPage === 'index.html')) {
      link.classList.add('active');
    } else if (targetPage && targetPage !== currentFileName) {
      link.classList.remove('active');
    }
  });

  // ========================================================
  // Contact & Join Interactivity
  // ========================================================
  const pathwayCards = document.querySelectorAll('.pathway-card');
  const userOptionSelect = document.getElementById('userOption');
  const contactForm = document.getElementById('contactForm');
  const contactSuccessModal = document.getElementById('contactSuccessModal');
  const successModalClose = document.getElementById('successModalClose');
  const btnSuccessClose = document.getElementById('btnSuccessClose');
  const successMessageText = document.getElementById('successMessageText');
  const formFeedback = document.getElementById('formFeedback');

  // Pathway Cards Selection
  if (pathwayCards.length > 0) {
    pathwayCards.forEach(card => {
      card.addEventListener('click', () => {
        pathwayCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const selectedOption = card.getAttribute('data-option');
        if (userOptionSelect && selectedOption) {
          userOptionSelect.value = selectedOption;
        }
      });
    });
  }

  // Update Pathway Cards when dropdown option changes manually
  if (userOptionSelect) {
    userOptionSelect.addEventListener('change', () => {
      const val = userOptionSelect.value;
      pathwayCards.forEach(card => {
        if (card.getAttribute('data-option') === val) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  }

  // Contact Form Submission Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const mobileInput = document.getElementById('userMobile');
      const optionInput = document.getElementById('userOption');
      const messageInput = document.getElementById('userMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const mobile = mobileInput ? mobileInput.value.trim() : '';
      const option = optionInput ? optionInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Validation
      if (!name) {
        showFormFeedback('Please enter your name.', 'error');
        nameInput && nameInput.focus();
        return;
      }

      if (!mobile || !/^[0-9]{10}$/.test(mobile.replace(/\D/g, ''))) {
        showFormFeedback('Please enter a valid 10-digit mobile number.', 'error');
        mobileInput && mobileInput.focus();
        return;
      }

      if (!option) {
        showFormFeedback('Please select an option (Customer, Vendor, or Business Plan).', 'error');
        optionInput && optionInput.focus();
        return;
      }

      if (!message) {
        showFormFeedback('Please enter your message.', 'error');
        messageInput && messageInput.focus();
        return;
      }

      // Success Display
      if (successMessageText) {
        successMessageText.innerHTML = `Thank you <strong>${name}</strong>! Your inquiry for <strong>${option}</strong> has been received. Our WOMUP executive will contact you at <strong>${mobile}</strong> shortly.`;
      }

      if (contactSuccessModal) {
        contactSuccessModal.classList.add('active');
        contactSuccessModal.setAttribute('aria-hidden', 'false');
      } else {
        showFormFeedback(`Thank you ${name}! Your inquiry for ${option} has been received.`, 'success');
      }

      // Reset form fields
      contactForm.reset();
      if (formFeedback) {
        formFeedback.style.display = 'none';
      }
    });
  }

  const showFormFeedback = (msg, type) => {
    if (formFeedback) {
      formFeedback.textContent = msg;
      formFeedback.className = `form-feedback ${type}`;
      formFeedback.style.display = 'block';
    } else {
      alert(msg);
    }
  };

  // Close Contact Success Modal
  const closeSuccessModal = () => {
    if (contactSuccessModal) {
      contactSuccessModal.classList.remove('active');
      contactSuccessModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (successModalClose) successModalClose.addEventListener('click', closeSuccessModal);
  if (btnSuccessClose) btnSuccessClose.addEventListener('click', closeSuccessModal);

  window.addEventListener('click', (e) => {
    if (e.target === contactSuccessModal) {
      closeSuccessModal();
    }
  });
});

