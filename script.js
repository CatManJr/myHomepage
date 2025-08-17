// Navigation functionality for sidebar tabs
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation tabs and content sections
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section with animation
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.classList.add('active');
                }, 100);
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
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.academic-item, .research-item, .project-item, .experience-item, .award-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Enhanced contact link interactions
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.2s ease';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag, .interest-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add loading animation for content sections
    function animateContentLoad() {
        const contentBlocks = document.querySelectorAll('.content-block');
        
        contentBlocks.forEach((block, index) => {
            block.style.opacity = '0';
            block.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                block.style.transition = 'all 0.5s ease';
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Trigger content load animation when switching sections
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            setTimeout(animateContentLoad, 200);
        });
    });
    
    // Initial load animation
    animateContentLoad();
    
    // Responsive navigation for mobile
    function handleMobileNavigation() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 1024) {
            // Mobile behavior
            sidebar.style.position = 'relative';
            sidebar.style.height = 'auto';
        } else {
            // Desktop behavior
            sidebar.style.position = 'sticky';
            sidebar.style.height = '100vh';
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', handleMobileNavigation);
    handleMobileNavigation(); // Initial call
    
    // Add click tracking for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add visual feedback for external link clicks
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Enhanced university logo interactions
    const universityLogos = document.querySelectorAll('.university-logo');
    
    universityLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add parallax effect to sidebar (desktop only)
    function addParallaxEffect() {
        if (window.innerWidth > 1024) {
            const sidebar = document.querySelector('.sidebar');
            const mainContent = document.querySelector('.main-content');
            
            mainContent.addEventListener('scroll', function() {
                const scrollTop = this.scrollTop;
                const parallaxOffset = scrollTop * 0.1;
                
                if (sidebar) {
                    sidebar.style.transform = `translateY(${parallaxOffset}px)`;
                }
            });
        }
    }
    
    addParallaxEffect();
    
    // Add smooth transitions for all interactive elements
    const allInteractiveElements = document.querySelectorAll('button, a, .nav-tab, .contact-link, .project-link');
    
    allInteractiveElements.forEach(element => {
        element.style.transition = 'all 0.2s ease';
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Enhance tab navigation visibility
            const focusedElement = document.activeElement;
            if (focusedElement) {
                focusedElement.style.outline = '2px solid var(--accent-color)';
                focusedElement.style.outlineOffset = '2px';
            }
        }
    });
    
    // Remove focus outline when clicking
    document.addEventListener('click', function() {
        const focusedElement = document.activeElement;
        if (focusedElement) {
            focusedElement.style.outline = 'none';
        }
    });
    
    console.log('Sidebar navigation and enhanced interactions initialized successfully!');
});