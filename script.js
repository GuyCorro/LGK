// Mobile Navigation Toggle - Completely Recreated
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== MOBILE MENU INITIALIZATION ===');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.header-menu ul');
    
    console.log('Elements found:', {
        hamburger: hamburger ? 'Found' : 'NOT FOUND',
        navMenu: navMenu ? 'Found' : 'NOT FOUND'
    });
    
    if (!hamburger || !navMenu) {
        console.error('Mobile menu elements not found!');
        return;
    }
    
    let isMenuOpen = false;
    
    // Function to log menu state
    function logMenuState(action) {
        console.log(`📊 ${action}:`, {
            isMenuOpen,
            hamburgerActive: hamburger.classList.contains('active'),
            navMenuActive: navMenu.classList.contains('active'),
            navMenuLeft: window.getComputedStyle(navMenu).left
        });
    }
    
    // Hamburger click handler
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🍔 Hamburger clicked! Current state:', isMenuOpen);
        
        isMenuOpen = !isMenuOpen;
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Set menu position based on state
        if (isMenuOpen) {
            navMenu.style.left = '0';
        } else {
            navMenu.style.left = '-100vw';
        }
        
        // Immediate debugging
        console.log('🔍 IMMEDIATE DEBUG:', {
            isMenuOpen: isMenuOpen,
            hamburgerClasses: hamburger.className,
            navMenuClasses: navMenu.className,
            navMenuStyle: navMenu.style.cssText,
            navMenuComputedLeft: window.getComputedStyle(navMenu).left,
            navMenuComputedDisplay: window.getComputedStyle(navMenu).display,
            navMenuComputedPosition: window.getComputedStyle(navMenu).position
        });
        
        logMenuState('After hamburger click');
        
        // Force a repaint to ensure CSS changes are applied
        navMenu.offsetHeight;
        
        console.log('Menu state changed to:', isMenuOpen);
    });
    
    // Navigation link click handler
    const navLinks = document.querySelectorAll('.header-link');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            console.log(`🔗 Link ${index + 1} clicked:`, href);
            
            if (href && href.startsWith('#')) {
                console.log('Internal link - closing menu');
                isMenuOpen = false;
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.left = '-100vw';
                logMenuState('After internal link click');
            } else {
                console.log('External link - keeping menu open');
                // Don't close menu for external links
            }
        });
    });
    
    // Click outside to close
    document.addEventListener('click', function(e) {
        if (!isMenuOpen) return;
        
        const clickedElement = e.target;
        const isClickInsideMenu = navMenu.contains(clickedElement);
        const isClickOnHamburger = hamburger.contains(clickedElement);
        
        console.log('📱 Click outside check:', {
            isMenuOpen,
            isClickInsideMenu,
            isClickOnHamburger,
            clickedElement: clickedElement.tagName,
            clickedElementClass: clickedElement.className
        });
        
        if (!isClickInsideMenu && !isClickOnHamburger) {
            console.log('Click outside detected - closing menu');
            isMenuOpen = false;
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navMenu.style.left = '-100vw';
            logMenuState('After click outside');
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            console.log('📱 Screen resized to desktop - closing menu');
            isMenuOpen = false;
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navMenu.style.left = '-100vw';
            logMenuState('After resize');
        }
    });
    
    // Log initial state
    logMenuState('Initial state');
    console.log('✅ Mobile menu initialization complete');
});

// Smooth scrolling for navigation links (separate from mobile menu)
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== SMOOTH SCROLLING INITIALIZATION ===');
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found smooth scroll links:', smoothScrollLinks.length);
    
    smoothScrollLinks.forEach((anchor, index) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            console.log(`📜 Smooth scroll link ${index + 1} clicked:`, href);
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                console.log('Scrolling to target:', target.tagName, target.id);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.warn('Target not found for:', href);
            }
        });
    });
    
    console.log('✅ Smooth scrolling initialization complete');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all service cards and other elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .stat, .contact-item, .hero-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add fade-in class to sections for better mobile experience
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        } else {
            input.style.borderColor = '#e2e8f0';
            input.style.boxShadow = 'none';
        }
    });
    
    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = '#ef4444';
            emailInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            showNotification('Please enter a valid email address.', 'error');
        }
    }
    
    return isValid;
}

// Add form validation to contact form
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            showNotification('Please fill in all required fields correctly.', 'error');
        }
    });
}

// Active navigation highlighting
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav item on scroll
window.addEventListener('scroll', updateActiveNavItem);

// Initialize active nav item
document.addEventListener('DOMContentLoaded', updateActiveNavItem);

// Mobile-specific improvements
function handleMobileImprovements() {
    // Add touch-friendly improvements
    const touchElements = document.querySelectorAll('.btn, .header-link, .contact-item');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Initialize mobile improvements
document.addEventListener('DOMContentLoaded', handleMobileImprovements);

// Add loading animation styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(loadingStyles); 