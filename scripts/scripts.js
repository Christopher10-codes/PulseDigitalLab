document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer for FOMO
    function updateCountdown() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999);
        
        const diff = endOfMonth - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m left!`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Testimonial Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
    
    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers first
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            document.querySelectorAll('.faq-question i').forEach(icon => {
                icon.style.transform = 'rotate(0deg)';
            });
            
            // Open clicked one if it wasn't active
            if (!isActive) {
                answer.classList.add('active');
                question.querySelector('i').style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Form Submission
    const form = document.getElementById('website-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const business = document.getElementById('business').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const package = document.getElementById('package').value;
            
            // Here you would typically send this data to your server
            // For demonstration, we'll just show a thank you message
            form.innerHTML = `
                <div class="form-success">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: 1rem;"></i>
                    <h3>Thank You, ${name}!</h3>
                    <p>We've received your request for a ${package === 'basic' ? 'Basic Website' : 'Website + Maintenance'}.</p>
                    <p>We'll contact you within 24 hours to discuss your project.</p>
                    <p>For immediate assistance, please <a href="https://wa.me/27XXXXXXXXX" style="color: var(--primary); font-weight: 600;">message us on WhatsApp</a>.</p>
                </div>
            `;
            
            // In a real implementation, you would send this data to your backend
            // Example using fetch:
            /*
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    business,
                    phone,
                    email,
                    package
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Show success message
            })
            .catch((error) => {
                console.error('Error:', error);
                // Show error message
            });
            */
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Track button clicks for analytics
    document.querySelectorAll('.cta-button, .whatsapp-button, .call-button').forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, you would send this to your analytics
            console.log('CTA clicked:', this.textContent.trim());
            
            // Example using Google Analytics:
            /*
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': this.textContent.trim()
            });
            */
        });
    });
    
    // Show floating button after scrolling
    window.addEventListener('scroll', function() {
        const floatingBtn = document.querySelector('.floating-whatsapp');
        if (window.scrollY > 500) {
            floatingBtn.style.display = 'block';
        } else {
            floatingBtn.style.display = 'none';
        }
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
                formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent, We will respond within 24 hours</div>';
                form.reset(); // Clear the form
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
            }
        } catch (error) {
            formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again later.</div>';
        }
    });

    