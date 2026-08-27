// SS Dental Care - Global Config & Navigation Controller

const CLINIC_CONFIG = {
  name: "SS Dental Care",
  doctor: "Dr. Gowtham, BDS",
  phone: "8508333337",
  whatsappPhone: "918508333337", // India code prefix
  address: "JPGW+J2H, Ammapettai, Tamil Nadu 638311",
  googleMapsUrl: "https://maps.app.goo.gl/SRnsoGhdWAEZ3yTv8",
  timings: {
    weekdays: "10:00 AM – 7:00 PM",
    saturday: "10:00 AM – 7:00 PM",
    sunday: "Closed"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupMobileCTA();
  setupAppointmentModalTriggers();
  highlightActiveLink();
});

// Setup Mobile Hamburger Menu & Drawer Overlay
function setupNavigation() {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('overlay');
  
  if (!burgerBtn || !mobileNav || !overlay) return;
  
  const toggleMenu = () => {
    burgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent scrolling when mobile nav is open
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  };
  
  burgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on any mobile nav links
  const mobileLinks = mobileNav.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

// Control Floating Mobile CTA Visibility on Scroll
function setupMobileCTA() {
  const mobileCTA = document.getElementById('mobile-cta');
  if (!mobileCTA) return;
  
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    // Hide CTA when scrolling down, show when scrolling up, always show near bottom or top
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      mobileCTA.classList.add('hidden');
    } else {
      mobileCTA.classList.remove('hidden');
    }
    
    // Check if scrolled near the bottom of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 50;
    if (scrollPosition >= threshold) {
      mobileCTA.classList.remove('hidden');
    }
    
    lastScrollY = window.scrollY;
  });
}

// Setup Event Listeners for Open / Close Modal buttons
function setupAppointmentModalTriggers() {
  const modal = document.getElementById('appointment-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = document.getElementById('modal-backdrop');
  
  if (!modal) return;
  
  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset any form errors
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
      appointmentForm.reset();
      const errorInputs = appointmentForm.querySelectorAll('.form-input.error');
      errorInputs.forEach(input => input.classList.remove('error'));
    }
  };
  
  // Attach event listener to all items with class "trigger-appointment"
  const triggers = document.querySelectorAll('.trigger-appointment');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
  
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
  
  // Escape key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Highlight the current page in navigation header
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  // Find navigation links in desktop & mobile lists
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === 'index.html' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
