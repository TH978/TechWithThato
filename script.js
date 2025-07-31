document.addEventListener('DOMContentLoaded', function() {
  // Welcome Screen
  document.body.classList.add('loading');
  
  // Initialize Particles.js with mobile-friendly settings
  particlesJS("particles-js", {
    particles: {
      number: { 
        value: window.innerWidth < 768 ? 40 : 80,
        density: { enable: true, value_area: 800 } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: window.innerWidth < 768 ? 200 : 150,
        color: "#ffffff", 
        opacity: 0.4, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: window.innerWidth < 768 ? 1 : 2,
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out" 
      }
    },
    interactivity: { 
      detect_on: "canvas", 
      events: { 
        onhover: { 
          enable: window.innerWidth > 768, // Disable on mobile
          mode: "repulse" 
        },
        onclick: { 
          enable: true, 
          mode: "push" 
        } 
      } 
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
  }

  // Touch Feedback for Mobile
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.classList.add('touch-feedback');
    });
    el.addEventListener('touchend', () => {
      el.classList.remove('touch-feedback');
    });
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
  const feedbackForm = document.getElementById('simpleFeedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const form = e.target;
      const textarea = form.querySelector('textarea');
      const button = form.querySelector('button');
      
      // Show loading state
      const originalText = button.innerHTML;
      button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      button.disabled = true;
      
      // Simulate form submission
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
  }

  // Handle window resize for particles
  window.addEventListener('resize', function() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
      particlesJS("particles-js", {
        particles: {
          number: { 
            value: window.innerWidth < 768 ? 40 : 80,
            density: { enable: true, value_area: 800 } 
          },
          // ... (same config as above)
        }
      });
    }
  });
});