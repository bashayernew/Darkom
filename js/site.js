document.addEventListener('DOMContentLoaded', () => {
  // Optional: AOS animations init if present
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 700, easing: 'ease-out' });
  }
  // Mobile nav: toggle panel and focus trap
  const header = document.querySelector('.top-header');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navPanel = document.getElementById('navPanel');
  let lastFocusedBeforeNav = null;

  const focusableSelectors = 'a[href], button:not([disabled])';

  function openNav() {
    if (!navPanel) return;
    navPanel.classList.add('open');
    toggleBtn && toggleBtn.setAttribute('aria-expanded', 'true');
    lastFocusedBeforeNav = document.activeElement;
    const firstFocusable = navPanel.querySelector(focusableSelectors);
    firstFocusable && firstFocusable.focus();
    document.addEventListener('keydown', trapFocus);
  }

  function closeNav() {
    if (!navPanel) return;
    navPanel.classList.remove('open');
    toggleBtn && toggleBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', trapFocus);
    lastFocusedBeforeNav && lastFocusedBeforeNav.focus();
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusables = navPanel.querySelectorAll(focusableSelectors);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  if (toggleBtn && navPanel) {
    toggleBtn.addEventListener('click', () => {
      navPanel.classList.contains('open') ? closeNav() : openNav();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
  }

  // Header scrolled state
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Promo lightbox
  const promoBox = document.getElementById('promoBox');
  const openPromoBtn = document.querySelector('[data-open-promo]');
  const closePromoBtn = document.querySelector('[data-close-promo]');
  const promoVideo = promoBox ? promoBox.querySelector('video') : null;
  function openPromo() { if (!promoBox) return; promoBox.classList.add('open'); promoVideo && promoVideo.play && promoVideo.play(); }
  function closePromo() { if (!promoBox) return; promoBox.classList.remove('open'); promoVideo && promoVideo.pause && promoVideo.pause(); }
  openPromoBtn && openPromoBtn.addEventListener('click', openPromo);
  closePromoBtn && closePromoBtn.addEventListener('click', closePromo);
  promoBox && promoBox.addEventListener('click', (e) => { if (e.target === promoBox) closePromo(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePromo(); });

  // Image lightbox for project cards (optional)
  const projectGrid = document.querySelector('.project-cards');
  if (projectGrid) {
    const imgBox = document.createElement('div');
    imgBox.className = 'lightbox';
    imgBox.innerHTML = '<button class="lightbox__close" aria-label="Close">×</button><img alt="Project image" style="max-width:min(1200px,90vw);max-height:80vh;border:2px solid var(--gold);border-radius:10px;background:#000" />';
    document.body.appendChild(imgBox);
    const imgEl = imgBox.querySelector('img');
    const closeBtn = imgBox.querySelector('button');
    const closeImg = () => { imgBox.classList.remove('open'); };
    closeBtn.addEventListener('click', closeImg);
    imgBox.addEventListener('click', (e) => { if (e.target === imgBox) closeImg(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeImg(); });
    projectGrid.querySelectorAll('img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => { imgEl.src = img.src; imgEl.alt = img.alt || 'Project image'; imgBox.classList.add('open'); });
    });
  }

  // Team modal accessibility (team.html)
  const teamModal = document.getElementById('profile-modal');
  if (teamModal) {
    const closeBtn = teamModal.querySelector('.close-modal');
    let lastTrigger = null;
    document.querySelectorAll('.team-member').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
      card.addEventListener('click', () => { lastTrigger = card; });
    });
    const closeModal = () => {
      teamModal.classList.remove('open');
      document.body.classList.remove('modal-open');
      lastTrigger && lastTrigger.focus();
    };
    closeBtn && closeBtn.addEventListener('click', closeModal);
    teamModal.addEventListener('click', (e) => { if (e.target === teamModal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  // Back-to-top button
  const toTop = document.createElement('button');
  toTop.id = 'toTop';
  toTop.textContent = '↑';
  Object.assign(toTop.style, { position:'fixed', right:'16px', bottom:'18px', display:'none', padding:'10px 12px', borderRadius:'8px', border:'2px solid var(--gold)', background:'rgba(0,0,0,.6)', color:'var(--text)', cursor:'pointer', zIndex:'1200' });
  document.body.appendChild(toTop);
  window.addEventListener('scroll', () => { toTop.style.display = window.scrollY > 600 ? 'block' : 'none'; });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Contact form success message
  const contactForm = document.getElementById('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn && (btn.innerText = 'Sent ✓');
      const msg = document.createElement('p');
      msg.textContent = 'Thanks! We will contact you shortly.';
      msg.style.marginTop = '12px'; msg.style.color = 'var(--gold)';
      contactForm.appendChild(msg);
      setTimeout(() => { btn && (btn.innerText = 'Send Message'); msg.remove(); }, 2500);
      contactForm.reset();
    });
  }

  // Booking overlay ESC (booking.html)
  const bookingOverlay = document.getElementById('profileOverlay');
  if (bookingOverlay) {
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') bookingOverlay.classList.remove('open'); });
  }

  // Ensure all non-logo images lazy-load
  document.querySelectorAll('img:not(.footer-logo):not(.spinning-logo):not([loading]))'
    .forEach(img => img.setAttribute('loading', 'lazy'));
});


