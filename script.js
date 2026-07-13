// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with persistence + system preference
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '☀' : '☾';
  }
  apply(initial);

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('theme', next);
  });
})();

// Publication filter
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const pubs = document.querySelectorAll('.pub');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      pubs.forEach(function (pub) {
        const show = filter === 'all' || pub.dataset.type === filter;
        pub.style.display = show ? '' : 'none';
      });
    });
  });
})();
