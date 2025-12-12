document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return;
  
  const html = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  
  toggleBtn.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      toggleBtn.textContent = '☀️';
      loadDarkCSS();
    } else {
      toggleBtn.textContent = '🌙';
      removeDarkCSS();
    }
  }
  
  function loadDarkCSS() {
    if (document.getElementById('dark-theme-css')) return;
    
    const link = document.createElement('link');
    link.id = 'dark-theme-css';
    link.rel = 'stylesheet';
    link.href = '/assets/css/skins/dark.css';
    document.head.appendChild(link);
  }
  
  function removeDarkCSS() {
    const darkCSS = document.getElementById('dark-theme-css');
    if (darkCSS) {
      darkCSS.remove();
    }
  }
});