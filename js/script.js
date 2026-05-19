// ─── Scroll Reveal ────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ─── Contact Form ─────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const original = btn.textContent;

  btn.textContent = 'Message Sent! ✓';
  btn.style.background = '#3d6b5e';

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}