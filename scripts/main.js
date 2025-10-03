// Global variables
let currentPage = 'home';
let mobileMenuOpen = false;

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show the home page by default
    showPage('home');
    
    // Set minimum date for quote pickup date
    const pickupDateInput = document.getElementById('pickupDate');
    if (pickupDateInput) {
        const today = new Date().toISOString().split('T')[0];
        pickupDateInput.setAttribute('min', today);
    }
    
    // Add form event listeners
    setupFormHandlers();
});

// Page navigation function
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation active state
    updateNavigation(pageId);
    
    // Close mobile menu if open
    closeMobileMenu();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update current page
    currentPage = pageId;
}

// Update navigation active states
function updateNavigation(activePageId) {
    // Update desktop navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === activePageId) {
            link.classList.add('active');
        }
    });
    
    // Update mobile navigation
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === activePageId) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileNav.classList.add('show');
        menuBtn.classList.add('open');
    } else {
        mobileNav.classList.remove('show');
        menuBtn.classList.remove('open');
    }
}

// Close mobile menu
function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenuOpen = false;
    mobileNav.classList.remove('show');
    menuBtn.classList.remove('open');
}

// Calculate estimate for quote form
function calculateEstimate() {
    const metalTypeSelect = document.getElementById('metalType');
    const weightInput = document.getElementById('estimatedWeight');
    const estimateCard = document.getElementById('estimateCard');
    const estimateValue = document.getElementById('estimateValue');
    
    if (!metalTypeSelect || !weightInput || !estimateCard || !estimateValue) {
        return;
    }
    
    const selectedOption = metalTypeSelect.options[metalTypeSelect.selectedIndex];
    const price = parseFloat(selectedOption.getAttribute('data-price'));
    const weight = parseFloat(weightInput.value);
    
    if (price && weight && weight > 0) {
        const estimate = price * weight;
        estimateValue.textContent = '$' + estimate.toFixed(2);
        estimateCard.style.display = 'block';
    } else {
        estimateCard.style.display = 'none';
    }
}

// Setup form handlers
function setupFormHandlers() {
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
    
    // Quote form handler
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleQuoteForm();
        });
    }
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (let field of requiredFields) {
        if (!formData.get(field)) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
}

// Handle quote form submission
function handleQuoteForm() {
    const form = document.getElementById('quoteForm');
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'metalType', 'weight'];
    for (let field of requiredFields) {
        if (!formData.get(field)) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
    }
    
    // Check agreement checkbox
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        showNotification('Please agree to the terms and conditions.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Quote request submitted successfully! We\'ll contact you within 2 hours with a detailed quote.', 'success');
    
    // Reset form and hide estimate
    form.reset();
    const estimateCard = document.getElementById('estimateCard');
    if (estimateCard) {
        estimateCard.style.display = 'none';
    }
}

// Show notification (simple toast-like notification)
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: '#ffffff',
        fontSize: '0.875rem',
        fontWeight: '500',
        zIndex: '10000',
        maxWidth: '400px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        animation: 'slideInRight 0.3s ease-out',
        cursor: 'pointer'
    });
    
    // Set background color based on type
    const colors = {
        success: '#22c55e',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Remove on click
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuOpen && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768 && mobileMenuOpen) {
        closeMobileMenu();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add loading state to buttons
function addLoadingState(button, originalText) {
    button.disabled = true;
    button.textContent = 'Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
    }, 2000);
}

// Enhanced form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^(\+?61|0)[2-9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Add real-time validation to forms
document.addEventListener('input', function(e) {
    if (e.target.type === 'email') {
        const isValid = validateEmail(e.target.value);
        e.target.style.borderColor = e.target.value === '' ? '' : (isValid ? '#22c55e' : '#ef4444');
    }
    
    if (e.target.type === 'tel') {
        const isValid = validatePhone(e.target.value);
        e.target.style.borderColor = e.target.value === '' ? '' : (isValid ? '#22c55e' : '#ef4444');
    }
});

// Initialize any additional functionality
function initializeAdditionalFeatures() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .service-card, .contact-card, .offer-card, .price-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to floating buttons
    const floatingBtns = document.querySelectorAll('.floating-btn');
    floatingBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAdditionalFeatures);