// Cursor trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.querySelector('.cursor-trail');
    if (trail) {
        trail.style.left = e.clientX - 10 + 'px';
        trail.style.top = e.clientY - 10 + 'px';
    }
});

// Smooth scroll for navigation links
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple animation feedback
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate sending (in real app, this would be an API call)
        setTimeout(() => {
            submitBtn.textContent = 'Terikirim! ✓';
            submitBtn.style.background = '#4ecdc4';
            
            // Reset form
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe work items
document.querySelectorAll('.work-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(item);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Random color shift on shapes (subtle)
const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
    setInterval(() => {
        const hue = Math.random() * 60 + (index * 60);
        shape.style.filter = `hue-rotate(${hue}deg)`;
    }, 5000 + index * 1000);
});
