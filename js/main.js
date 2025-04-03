document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Property Modal Functionality
    const propertyCards = document.querySelectorAll('.view-property');
    const propertyModal = document.getElementById('propertyModal');
    const closeModal = document.querySelector('.close-modal');

    if (propertyCards && propertyModal) {
        propertyCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                propertyModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                propertyModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === propertyModal) {
                propertyModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Property Slider
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    const slides = document.querySelectorAll('.property-slide');

    if (prevSlide && nextSlide && slides.length > 0) {
        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        prevSlide.addEventListener('click', () => showSlide(currentSlide - 1));
        nextSlide.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length > 0 && dots.length > 0) {
        let currentTestimonial = 0;
        
        function showTestimonial(n) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentTestimonial = (n + testimonials.length) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
            dots[currentTestimonial].classList.add('active');
        }
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showTestimonial(index));
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('.faq-toggle i');
                
                // Toggle answer visibility
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            });
        });
    }
    
    // Property Filter Functionality
    const filterForm = document.querySelector('.search-form');
    
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would filter properties based on criteria
            // For demo purposes, we'll just show an alert
            alert('Property search filters applied!');
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Our team will contact you shortly.');
            this.reset();
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Property Favorites Functionality
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    if (favoriteButtons) {
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.setAttribute('title', 'Remove from favorites');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.setAttribute('title', 'Add to favorites');
                }
            });
        });
    }
    
    // Initialize any sliders on the homepage
    const featuredSlider = document.querySelector('.featured-slider');
    
    if (featuredSlider) {
        let currentFeaturedSlide = 0;
        const featuredSlides = featuredSlider.querySelectorAll('.featured-slide');
        const featuredDots = document.querySelectorAll('.featured-dot');
        
        function showFeaturedSlide(n) {
            featuredSlides.forEach(slide => slide.classList.remove('active'));
            featuredDots.forEach(dot => dot.classList.remove('active'));
            
            currentFeaturedSlide = (n + featuredSlides.length) % featuredSlides.length;
            featuredSlides[currentFeaturedSlide].classList.add('active');
            
            if (featuredDots.length > 0) {
                featuredDots[currentFeaturedSlide].classList.add('active');
            }
        }
        
        // Add click events to featured slider dots if they exist
        if (featuredDots.length > 0) {
            featuredDots.forEach((dot, index) => {
                dot.addEventListener('click', () => showFeaturedSlide(index));
            });
        }
        
        // Auto-rotate featured slides every 5 seconds
        setInterval(() => {
            showFeaturedSlide(currentFeaturedSlide + 1);
        }, 5000);
    }
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
