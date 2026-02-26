// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Animations (Hero)
gsap.from('.hero-content .hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
});

gsap.from('.hero-content .hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.4
});

gsap.from('.hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.6
});

// Scroll Animations for Features
gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        rotationX: -20,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.7)"
    });
});

// Scroll Animations for Products
gsap.utils.toArray('.product-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        delay: (i % 3) * 0.1
    });
});

// About Us Animations
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.about-visual', {
    scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Contact Animations
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: ".contact-container",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: ".contact-container",
        start: "top 80%"
    },
    rotationY: 15,
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// WhatsApp Functionality
const WA_PHONE = "918813911566"; // Business details

// Generic Order Button
document.querySelector('.whatsapp-order').addEventListener('click', () => {
    const text = "Hello Dairy Go, I want to order your product.";
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
});

// Dynamic Product Order Buttons
document.querySelectorAll('.whatsapp-dynamic-order').forEach(button => {
    button.addEventListener('click', (e) => {
        // Find the closest product card
        const card = e.target.closest('.product-card');
        
        // Find the selected variant (e.g. 1L Desi Ghee)
        const selectBox = card.querySelector('.variant-select');
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        
        // Example format: "Hello Dairy Go, I want to order 1L Desi Ghee."
        const text = `Hello Dairy Go, I want to order ${selectedValue}.`;
        
        window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    });
});

// Contact Form Submission
document.getElementById('whatsappForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const text = `Hello Dairy Go!
My Name is ${name}.
Contact: ${phone}
Message: ${message}`;
    
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
});

// Mobile menu toggle (simple version)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(255,255,255,0.95)';
            navLinks.style.padding = '2rem';
        }
    });
}
