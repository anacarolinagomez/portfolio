/**
 * Ana Carolina Gomez - Portfolio Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation Links
    // This ensures that clicking "Get in Touch" or any nav link slides smoothly
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Reveal Animations on Scroll
    // Elements will fade and slide up slightly as the user scrolls down
    const revealElements = document.querySelectorAll('.portfolio-item, header, section');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1
    });

    revealElements.forEach(el => {
        // Set initial hidden state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(el);
    });

    // 3. Navbar background change on scroll
    // Makes the white navbar slightly more prominent when scrolling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});