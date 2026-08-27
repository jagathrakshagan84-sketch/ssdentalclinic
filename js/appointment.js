// SS Dental Care - Appointment Booking Logic

document.addEventListener('DOMContentLoaded', () => {
  setupAppointmentForm();
});

function setupAppointmentForm() {
  const form = document.getElementById('appointment-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous error styles
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => input.classList.remove('error'));
    
    // Fetch input values
    const nameInput = document.getElementById('apt-name');
    const phoneInput = document.getElementById('apt-phone');
    const treatmentInput = document.getElementById('apt-treatment');
    const dateInput = document.getElementById('apt-date');
    const timeInput = document.getElementById('apt-time');
    const messageInput = document.getElementById('apt-message');
    
    let isValid = true;
    
    // Name Validation
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      isValid = false;
    }
    
    // Phone Validation (simple digit check, length >= 10)
    const cleanPhone = phoneInput.value.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      phoneInput.classList.add('error');
      isValid = false;
    }
    
    // Treatment Validation
    if (!treatmentInput.value) {
      treatmentInput.classList.add('error');
      isValid = false;
    }
    
    // Date Validation
    if (!dateInput.value) {
      dateInput.classList.add('error');
      isValid = false;
    }
    
    // Time Validation
    if (!timeInput.value) {
      timeInput.classList.add('error');
      isValid = false;
    }
    
    if (!isValid) {
      // Find the first error input and focus it
      const firstError = form.querySelector('.form-input.error');
      if (firstError) firstError.focus();
      return;
    }
    
    // Construct WhatsApp message template
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const treatment = treatmentInput.options[treatmentInput.selectedIndex].text;
    const date = dateInput.value;
    const time = timeInput.options[timeInput.selectedIndex].text;
    const message = messageInput.value.trim() || 'No additional message';
    
    const whatsappMessage = 
`Hello SS Dental Care, I would like to book an appointment.

*Patient Name:* ${name}
*Phone Number:* ${phone}
*Treatment:* ${treatment}
*Preferred Date:* ${date}
*Preferred Time:* ${time}
*Message:* ${message}`;
    
    // Encode for URL query string
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918508333337"; // Indian Country Code + 8508333337
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab or client
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    form.reset();
    const modal = document.getElementById('appointment-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Optional alert to user
    alert("Redirecting to WhatsApp to send your appointment details to SS Dental Care...");
  });
}
