document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return;
  
  const savedTheme = localStorage.getItem('theme') || 'air';
  applySkin(savedTheme);
  
  toggleBtn.addEventListener('click', function() {
    const currentSkin = getCurrentSkin();
    const newSkin = currentSkin === 'dark' ? 'air' : 'dark';
    
    applySkin(newSkin);
    localStorage.setItem('theme', newSkin);
  });
  
  function applySkin(skin) {
    const mainCSS = document.querySelector('link[href*="main.css"]');
    if (mainCSS) {
      mainCSS.href = mainCSS.href.replace(/\/skins\/\w+/, `/skins/${skin}`);
    }
    
    toggleBtn.textContent = skin === 'dark' ? '☀️' : '🌙';
  }
  
  function getCurrentSkin() {
    const mainCSS = document.querySelector('link[href*="main.css"]');
    const match = mainCSS ? mainCSS.href.match(/\/skins\/(\w+)/) : null;
    return match ? match[1] : 'air';
  }
});