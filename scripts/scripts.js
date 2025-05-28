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
                form.reset(); // Clear the form
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
            }
        } catch (error) {
            formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again later.</div>';
        }
    });
})
    