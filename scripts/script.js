document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value from data attribute
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Add animation class
                    item.classList.add('animate-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-in');
                }
            });
        });
    });
});

// form submission message

const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submit

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent.</div>';
                form.reset(); // Clear the form
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
            }
        } catch (error) {
            formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again later.</div>';
        }
    });


    // togle
    document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    const menuItems = document.querySelectorAll('.nav-links a');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');

    });
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
// toggle close 
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('termsModal');
    const termsLink = document.getElementById('termsLink');
    const closeBtn = document.querySelector('.close-btn');
    
    // Open modal when terms link is clicked
    termsLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});