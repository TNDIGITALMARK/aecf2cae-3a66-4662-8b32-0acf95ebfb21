document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Placeholder for images - these will be loaded when custom images are generated
    const imageElements = [
        { id: 'hero-igloo', alt: 'Traditional igloo in snowy landscape' },
        { id: 'step1-diagram', alt: 'Site selection and snow testing diagram' },
        { id: 'step2-diagram', alt: 'Foundation circle and initial block cutting' },
        { id: 'step3-diagram', alt: 'Cutting and placing foundation blocks' },
        { id: 'step4-diagram', alt: 'Spiral cut technique demonstration' },
        { id: 'step5-diagram', alt: 'Successive layer construction technique' },
        { id: 'step6-diagram', alt: 'Dome completion and keystone placement' },
        { id: 'step7-diagram', alt: 'Entrance tunnel and ventilation hole creation' }
    ];
    
    // Add loading states for images
    imageElements.forEach(img => {
        const element = document.getElementById(img.id);
        if (element) {
            element.style.backgroundColor = '#f0f0f0';
            element.style.border = '2px dashed #ccc';
            element.style.height = '300px';
            element.style.display = 'flex';
            element.style.alignItems = 'center';
            element.style.justifyContent = 'center';
            element.style.color = '#666';
            element.style.fontSize = '14px';
            element.innerHTML = `Loading ${img.alt}...`;
        }
    });
    
    // Function to load image when available
    window.loadCustomImage = function(imageId, src) {
        const element = document.getElementById(imageId);
        if (element) {
            element.src = src;
            element.style.backgroundColor = '';
            element.style.border = '';
            element.style.height = '';
            element.style.display = '';
            element.style.alignItems = '';
            element.style.justifyContent = '';
            element.style.color = '';
            element.style.fontSize = '';
            element.innerHTML = '';
        }
    };
});