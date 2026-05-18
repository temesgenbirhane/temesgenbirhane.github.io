(function () {
  const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');

  if (!toggle) {
    return;
  }

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
  }

  function updateButtonText() {
    toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
  }

  updateButtonText();

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateButtonText();
  });
})();
