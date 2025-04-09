// Welcome Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": { 
            "detect_on": "canvas", 
            "events": { 
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            } 
        }
    });

    // Remove welcome screen after animation
    setTimeout(() => {
        const welcomeScreen = document.querySelector('.welcome-screen');
        if (welcomeScreen) {
            welcomeScreen.addEventListener('animationend', function() {
                welcomeScreen.remove();
                document.body.classList.remove('loading');
            });
        }
    }, 3000);

    // Feedback Form Handling
    document.getElementById('simpleFeedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = e.target;
        const textarea = form.querySelector('textarea');
        const button = form.querySelector('button');
        
        // Show loading state
        const originalText = button.innerHTML;
        button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        // Simulate form submission (replace with real code)
        setTimeout(() => {
            console.log('Feedback submitted:', textarea.value);
            
            // Show success
            textarea.value = '';
            button.innerHTML = 'Sent! <i class="fas fa-check"></i>';
            
            // Reset after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }, 1500);
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});
