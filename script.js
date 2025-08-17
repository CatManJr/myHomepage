// Navigation functionality for both sidebar and top navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation tabs and links, and content sections
    const navTabs = document.querySelectorAll('.nav-tab');
    const navLinks = document.querySelectorAll('.nav-link');
    const allNavElements = [...navTabs, ...navLinks];
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to all navigation elements
    allNavElements.forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all navigation elements
            allNavElements.forEach(n => n.classList.remove('active'));
            
            // Add active class to clicked element
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section without animation
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
    
    // Remove all hover effects and animations
    // No more interactive element animations
    
    // Responsive navigation for mobile
    function handleMobileNavigation() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 1024) {
            // Mobile behavior
            if (sidebar) {
                sidebar.style.position = 'relative';
                sidebar.style.height = 'auto';
            }
        } else {
            // Desktop behavior
            if (sidebar) {
                sidebar.style.position = 'sticky';
                sidebar.style.height = '100vh';
            }
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', handleMobileNavigation);
    handleMobileNavigation(); // Initial call
    
    // Remove all visual feedback and animations
    // No more external link animations
    
    // Handle direct URL navigation
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(`[data-section="${hash}"]`);
            const targetSection = document.getElementById(hash);
            
            if (targetLink && targetSection) {
                // Remove active from all
                allNavElements.forEach(nav => nav.classList.remove('active'));
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
    
    console.log('Basic navigation functionality initialized successfully!');
});