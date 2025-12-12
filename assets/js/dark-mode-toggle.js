document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'air';
  body.setAttribute('data-theme', savedTheme);
  
  if (savedTheme === 'dark') {
    toggleBtn.textContent = '☀️';
    loadTheme('dark');
  } else {
    toggleBtn.textContent = '🌙';
    loadTheme('air');
  }
  
  toggleBtn.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'air' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      toggleBtn.textContent = '☀️';
      loadTheme('dark');
    } else {
      toggleBtn.textContent = '🌙';
      loadTheme('air');
    }
  });
  
  function loadTheme(theme) {
    const existingLink = document.getElementById('theme-css');
    if (existingLink) {
      existingLink.remove();
    }
    
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.href = `/assets/css/skins/${theme}.css`;
    document.head.appendChild(link);
  }
});