(function () {
  var toggle = document.getElementById('theme-toggle');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var saved = localStorage.getItem('theme');

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
