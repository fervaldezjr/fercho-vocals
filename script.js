document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('hidden');
    });

    const servicesMobileButton = document.getElementById('services-mobile');
    const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');

    servicesMobileButton.addEventListener('click', () => {
        mobileServicesDropdown.classList.toggle('hidden');
    });
});
