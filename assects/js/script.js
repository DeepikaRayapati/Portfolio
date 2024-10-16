document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation triggers
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .fade-in-up');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            if (rect.top < viewportHeight - 100) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
