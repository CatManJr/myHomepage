// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation elements and content sections
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to navigation elements
    navLinks.forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all navigation elements
            navLinks.forEach(n => n.classList.remove('active'));
            
            // Add active class to clicked element
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle direct URL navigation
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(`[data-section="${hash}"]`);
            const targetSection = document.getElementById(hash);
            
            if (targetLink && targetSection) {
                // Remove active from all
                navLinks.forEach(nav => nav.classList.remove('active'));
                contentSections.forEach(section => section.classList.remove('active'));
                
                // Activate target
                targetLink.classList.add('active');
                targetSection.classList.add('active');
            }
        }
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial page load
    handleHashChange();
    
    console.log('Navigation functionality initialized successfully!');
});