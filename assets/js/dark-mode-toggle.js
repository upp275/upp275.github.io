// Apply saved theme immediately on script load (before DOM ready)
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Initialize toggle button on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return;
  
  // Set initial button text
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  // Add click handler
  toggleBtn.addEventListener('click', function() {
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
});
