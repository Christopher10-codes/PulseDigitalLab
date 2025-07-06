document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

        // Toggle current
        if (!isOpen) {
          answer.classList.add('open');
          question.classList.add('active');
        }
      });
    });
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
    
    
    // Mobile Menu Toggle
       // Mobile Menu Toggle Functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

        // Toggle menu open
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.style.right = '0';
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });

        // Close menu when overlay is clicked
        overlay.addEventListener('click', closeMobileMenu);

        // Close menu when a mobile nav link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Function to close the mobile menu
        function closeMobileMenu() {
            mobileNav.style.right = '-100%';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    
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
      
    // Show floating button after scrolling
    window.addEventListener('scroll', function() {
        const floatingBtn = document.querySelector('.floating-whatsapp');
        if (window.scrollY > 500) {
            floatingBtn.style.display = 'block';
        } else {
            floatingBtn.style.display = 'none';
        }
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
                form.reset();
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
            }
        } catch (error) {
            formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again later.</div>';
        }
    });
})
    