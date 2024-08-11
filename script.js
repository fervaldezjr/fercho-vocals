document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isOpen);
      mobileMenu.classList.toggle('hidden');
    });
  
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.querySelector('[role="menu"]');
  
    userMenuButton.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });
  });
  