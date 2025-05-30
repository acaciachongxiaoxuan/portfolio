// Track current section
let currentSection = '';

// Function to set active nav item based on current section
function setActiveNavItem() {
    const sections = ['home', 'projects', 'contact'];
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                if (currentSection !== section) {
                    currentSection = section;
                    updateActiveNavItem();
                }
            }
        }
    });
}

// Update active state in navigation
function updateActiveNavItem() {
    const navLinks = document.querySelectorAll('.topnav #anav');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1); // Remove #
        if (href === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Toggle menu function
function toggleMenu() {
    const nav = document.querySelector('.topnav');
    nav.classList.toggle('responsive');
}

// Close menu function
function closeMenu() {
    const nav = document.querySelector('.topnav');
    nav.classList.remove('responsive');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to nav links
    const navLinks = document.querySelectorAll('.topnav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close menu first
            closeMenu();
            
            // Update active state
            const clickedSection = this.getAttribute('href').substring(1);
            currentSection = clickedSection;
            updateActiveNavItem();
        });
    });

    // Add scroll listener
    window.addEventListener('scroll', setActiveNavItem);
    
    // Set initial active state
    setActiveNavItem();

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.topnav');
        const hamburger = document.querySelector('.topnav .icon');
        if (!nav.contains(e.target) && nav.classList.contains('responsive')) {
            closeMenu();
        }
    });
}); 