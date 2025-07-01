var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"), 
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6856183dc44c79190f98815b/1iu84tcbu';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

const isSlowDevice = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet)/i.test(navigator.userAgent)
    && !/Chrome|Safari|Firefox|Edge|SamsungBrowser|Opera/i.test(navigator.userAgent);

if (isSlowDevice) {
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
}

// Resource preloading
const preloads = [
    '/assets/img/hero-bg.webp',
    '/assets/css/style.css'
];

preloads.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.includes('.css') ? 'style' : 'image';
    document.head.appendChild(link);
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('assets/js/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // First load the header and footer
    Promise.all([
        fetch('/_includes/header.html').then(r => r.text()),
        fetch('/_includes/footer.html').then(r => r.text())
    ])
    .then(([headerHtml, footerHtml]) => {
        // Insert the loaded HTML
        document.getElementById('header').innerHTML = headerHtml;
        document.getElementById('footer').innerHTML = footerHtml;

        // Now setup the hamburger menu after content is loaded
        setupHamburgerMenu();
    })
    .catch(err => {
        console.error('Error loading templates:', err);
    });
});

function setupHamburgerMenu() {
    const menuToggle = document.querySelector('#menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = mainNav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Optional: Toggle hamburger icon animation
            menuToggle.classList.toggle('is-active');
        });
    } else {
        console.warn('Hamburger menu elements not found');
    }
}