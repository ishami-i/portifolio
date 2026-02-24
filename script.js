const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const themeLabel  = document.getElementById('themeLabel');

// Apply saved preference on load
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
updateThemeBtn(saved);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

function updateThemeBtn(theme) {
  if (theme === 'dark') {
    themeIcon.textContent  = '☀️';
    themeLabel.textContent = 'Light';
  } else {
    themeIcon.textContent  = '🌙';
    themeLabel.textContent = 'Dark';
  }
}

// ── BURGER MENU ────────────────────────────────────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const nav        = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close nav when a link is clicked (mobile UX)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// ── CONTACT FORM ───────────────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');

  btn.textContent        = 'Message Sent ✓';
  btn.style.background   = '#22c55e';
  btn.style.color        = '#fff';

  setTimeout(() => {
    btn.textContent      = 'Send Message →';
    btn.style.background = '';
    btn.style.color      = '';
    e.target.reset();
  }, 3000);
});