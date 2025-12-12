// Toggle menu functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-btn';
  toggleBtn.innerHTML = '☰';
  toggleBtn.setAttribute('aria-label', 'Toggle navigation');
  
  // Add to body
  document.body.appendChild(toggleBtn);
  
  // Get sidebar
  const sidebar = document.querySelector('.sidebar');
  
  // Toggle functionality
  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    toggleBtn.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
  });
  
  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      toggleBtn.innerHTML = '☰';
    }
  });
});