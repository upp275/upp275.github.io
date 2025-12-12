document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return;
  
  const savedTheme = localStorage.getItem('theme') || 'air';
  applySkin(savedTheme);
  
  toggleBtn.addEventListener('click', function() {
    const currentSkin = localStorage.getItem('theme') || 'air';
    const newSkin = currentSkin === 'dark' ? 'air' : 'dark';
    
    applySkin(newSkin);
    localStorage.setItem('theme', newSkin);
  });
  
  function applySkin(skin) {
    const existingLink = document.getElementById('theme-css');
    if (existingLink) {
      existingLink.remove();
    }
    
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.href = `/assets/css/${skin}.css`;
    document.head.appendChild(link);
    
    toggleBtn.textContent = skin === 'dark' ? '☀️' : '🌙';
  }
});