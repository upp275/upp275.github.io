document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return;
  
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  
  toggleBtn.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
});