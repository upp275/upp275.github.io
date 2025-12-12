// Animated expandable navigation
document.addEventListener('DOMContentLoaded', function() {
  const navTitles = document.querySelectorAll('.nav__title');
  
  navTitles.forEach(function(title) {
    const parentItem = title.parentElement;
    const childItems = parentItem.querySelector('.nav__items');
    
    if (childItems) {
      title.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle expanded class
        title.classList.toggle('expanded');
        childItems.classList.toggle('active');
        
        // Close other open menus
        navTitles.forEach(function(otherTitle) {
          if (otherTitle !== title) {
            otherTitle.classList.remove('expanded');
            const otherChildItems = otherTitle.parentElement.querySelector('.nav__items');
            if (otherChildItems) {
              otherChildItems.classList.remove('active');
            }
          }
        });
      });
    }
  });
});