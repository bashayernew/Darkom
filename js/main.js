// Initialize AOS if present
if (typeof AOS !== 'undefined') {
  AOS.init({ once: true, duration: 700, easing: 'ease-out' });
}

// Sticky nav (apply .sticky when scrolling past header)
(function() {
  const header = document.querySelector('.site-header, .top-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('sticky');
    else header.classList.remove('sticky');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  if (id.length <= 1) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Hero video lightbox
(function() {
  const btn = document.getElementById('watchWorkBtn');
  const lb = document.getElementById('workLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const promo = document.getElementById('promoVideo');
  if (!btn || !lb) return;
  const open = () => { lb.classList.add('open'); promo && promo.play && promo.play(); };
  const close = () => { lb.classList.remove('open'); promo && promo.pause && promo.pause(); };
  btn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// Autoplay-like carousel for services/about/team (pause on hover) - horizontal scroll container
document.querySelectorAll('.services-carousel, .team-carousel').forEach((container) => {
  let idx = 0;
  let timer;
  const card = container.querySelector(':scope > *');
  if (!card) return;
  const start = () => {
    stop();
    timer = setInterval(() => {
      const cardWidth = card.offsetWidth + 20; // include gap
      idx = (idx + 1) % container.children.length;
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    }, 3000);
  };
  const stop = () => { if (timer) clearInterval(timer); };
  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);
  start();
});

// Footer quick form minimal handler
const quickForm = document.getElementById('footerQuickForm');
if (quickForm) {
  quickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = quickForm.querySelector('button[type="submit"]');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Sent ✓';
      setTimeout(() => (btn.textContent = original), 2000);
    }
    quickForm.reset();
  });
}

// Lazy-load images ensure attribute present (progressive enhancement)
document.querySelectorAll('img:not([loading])').forEach(img => img.setAttribute('loading','lazy'));


