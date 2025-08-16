const ySpan = document.getElementById('y');
if (ySpan) ySpan.textContent = new Date().getFullYear();

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (!m) return;
  m.classList.toggle('hidden');
}

function openModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.remove('hidden');
}

function closeModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.add('hidden');
}

// Highlight active nav on scroll
const sections = ['hero','problema','servicios','proceso','beneficios','casos','testimonios','precios','faq'];
const navLinks = document.querySelectorAll('.nav-link');
const opts = { root: null, rootMargin: '0px 0px -70% 0px', threshold: 0 };
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    const id = e.target.getAttribute('id');
    const link = Array.from(navLinks).find(a=>a.getAttribute('href') === `#${id}`);
    if (link) {
      if (e.isIntersecting) {
        navLinks.forEach(a=>a.classList.remove('text-primary-900','underline'));
        link.classList.add('text-primary-900','underline');
      }
    }
  })
}, opts);
sections.forEach(id=>{ const el = document.getElementById(id); if (el) obs.observe(el); });

// Contact form fake submit
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if (!submitBtn) return;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Enviando…';
    // TODO: Reemplazar por fetch() a tu endpoint / servicio (Zapier, Make, Formspree…)
    await new Promise(r=>setTimeout(r, 1200));
    submitBtn.classList.remove('loading');
    submitBtn.textContent = 'Enviar solicitud';
    if (statusEl) statusEl.textContent = '¡Gracias! Te contactaremos en <15 minutos.';
    form.reset();
  });
}
