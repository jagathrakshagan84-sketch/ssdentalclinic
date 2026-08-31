// SS Dental Care - Treatments Detail Controller

const TREATMENTS_DATA = {
  "implants": {
    title: "Dental Implants",
    image: "./images/treatments/treatment_9.jpg",
    description: "Replace missing teeth with permanent, natural-looking implant restorations.",
    whatIsIt: "A dental implant is a biocompatible titanium post surgically positioned into the jawbone beneath your gums. It acts as an artificial root that allows the dentist to mount replacement teeth or a bridge into that area, providing a highly stable, permanent solution.",
    whenConsidered: "Indicated when you have one or more missing teeth, a fully matured jawbone, healthy oral tissues, and do not wish to wear standard dentures or want to secure dynamic bridge fixtures.",
    whatToExpect: "The procedure involves surgically placing the titanium post, allowing it to fuse with the bone over several months (osseointegration), placing an abutment, and finally attaching a custom-crafted dental crown matching your natural teeth.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "root-canal": {
    title: "Root Canal Treatment",
    image: "./images/treatment_green.jpg",
    description: "Save damaged or infected teeth and eliminate severe dental pain.",
    whatIsIt: "A root canal treatment (RCT) is a dental procedure designed to salvage a severely decayed, cracked, or infected tooth. The therapy involves removing the infected pulp tissue, disinfecting the internal root canals, and sealing the chamber.",
    whenConsidered: "Typically necessary if you experience intense throbbing tooth pain, persistent sensitivity to hot or cold foods, discoloration of the tooth, or localized gum swelling and tenderness.",
    whatToExpect: "Under local anesthesia, a small access hole is created in the tooth crown. The damaged pulp is removed, canals are thoroughly cleaned, shaped, disinfected, filled with gutta-percha, and sealed. A dental crown is usually recommended later to protect the tooth from fractures.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "crowns-bridges": {
    title: "Crowns & Bridges",
    image: "./images/treatments/treatment_7.jpg",
    description: "Restore damaged teeth and bridge empty gaps to maintain jaw alignment.",
    whatIsIt: "Crowns are protective caps placed over damaged, cracked, or root-canal-treated teeth to restore strength. Bridges are dental prostheses that span across empty spaces left by missing teeth, anchored firmly to adjacent teeth.",
    whenConsidered: "Recommended for teeth weakened by decay or fractures, to cover dental implants, or to replace missing teeth when implants are not selected, restoring normal bite and chew functions.",
    whatToExpect: "The anchor teeth are prepared by reducing their outer enamel structure. Accurate impressions are taken to craft custom porcelain or ceramic crowns/bridges in a laboratory. A temporary crown is placed, and the final custom restoration is cemented during a second visit.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "wisdom-tooth": {
    title: "Wisdom Tooth Treatment",
    image: "./images/treatment_blue.jpg",
    description: "Safe extraction of impacted or painful wisdom teeth.",
    whatIsIt: "Wisdom tooth treatment involves diagnosing and extracting the third set of molars at the back of your mouth, which often lack sufficient room to erupt properly and become impacted.",
    whenConsidered: "Required if wisdom teeth grow at odd angles, cause severe pain, damage neighboring molars, form cysts, or collect bacteria leading to infections and decay due to difficulty in cleaning.",
    whatToExpect: "Dr. Gowtham will take a local X-ray to inspect root alignment. Under local anesthesia, the gum is opened to access and gently extract the wisdom tooth. Post-operative care instructions and pain relievers will be provided to ensure smooth healing.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "dentures": {
    title: "Dentures",
    image: "./images/treatments/treatment_6.jpg",
    description: "High-quality partial and full removable dentures for comfortable eating.",
    whatIsIt: "Dentures are custom-crafted removable prosthetic appliances designed to replace missing teeth and surrounding gum tissues, restoring facial structure and speech capabilities.",
    whenConsidered: "Ideal for patients who have lost all or most of their teeth due to gum disease, severe decay, or injury, seeking a budget-friendly option to restore chewing ability.",
    whatToExpect: "Involves taking precise impressions of your gums and jaw alignment. Wax models are tried on to check bite and aesthetics. The final acrylic or metal-reinforced dentures are custom fabricated and fitted, with minor adjustments performed for optimal comfort.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "aligners": {
    title: "Orthodontic & Clear Aligner Care",
    image: "./images/treatments/treatment_4.jpg",
    description: "Straighten misaligned teeth discreetly using premium invisible aligners.",
    whatIsIt: "Orthodontic care corrects teeth alignment. Clear aligners are series of custom-made, transparent, medical-grade plastic trays that fit snugly over your teeth, gently shifting them into their ideal positions without metallic brackets.",
    whenConsidered: "Considered for correcting crowded teeth, large gaps, crossbites, overbites, or underbites in patients looking for a highly hygienic, removable, and invisible alternative to traditional metal braces.",
    whatToExpect: "Includes taking clinical photos and digital impressions. A simulated treatment plan is shown to visualize teeth movements. You will receive a series of clear aligner sets, each worn for 20-22 hours daily for 1 to 2 weeks before swapping to the next set.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "general-care": {
    title: "General Dental Care",
    image: "./images/treatments/treatment_8.jpg",
    description: "Routine checkups, scaling, polishing, and composite tooth-colored fillings.",
    whatIsIt: "General dental care focuses on preventive treatments. It includes professional ultrasonic cleaning (scaling) to remove hard tartar deposits, polishing to eliminate surface stains, and placing tooth-colored dental composites for cavities.",
    whenConsidered: "Recommended once every 6 months for all patients to maintain optimal hygiene, prevent gum bleeding (gingivitis), and catch dental caries early before they damage deep pulp tissue.",
    whatToExpect: "An oral mirror inspection is done, followed by ultrasonic scaling to clean plaque, polishing with prophylactic paste, and applying diagnostic fillings if any minor decay is discovered.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  },
  "other-treatments": {
    title: "Other Dental Treatments",
    image: "./images/treatments/treatment_10.jpg",
    description: "Fluoride applications, pediatric dentistry, and emergency dental pain relief.",
    whatIsIt: "Includes a wide array of basic support services such as desensitizing therapy for sensitive teeth, fluoride varnish applications to prevent decay in kids, emergency tooth extractions, and nightguards for teeth grinding.",
    whenConsidered: "When you experience specific dental ailments like child tooth decay, acute nightly dental grinding, or sudden dental trauma requiring emergency support.",
    whatToExpect: "A rapid diagnosis is performed to target the primary symptom, providing quick relief through targeted medicine, pulp sedatives, or minor tooth restorations.",
    disclaimer: "Treatment suitability varies from patient to patient. Please consult Dr. Gowtham for an individual clinical assessment. No specific medical guarantees can be made."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setupTreatmentModal();
});

function setupTreatmentModal() {
  const detailModal = document.getElementById('treatment-detail-modal');
  const modalContainer = document.getElementById('treatment-detail-container');
  const closeBtn = document.getElementById('treatment-close-btn');
  const backdrop = document.getElementById('treatment-backdrop');
  
  if (!detailModal || !modalContainer) return;
  
  const openDetail = (key) => {
    const data = TREATMENTS_DATA[key];
    if (!data) return;
    
    // Inject dynamic HTML structure
    modalContainer.innerHTML = `
      <div class="treatment-detail-container">
        <div class="treatment-detail-main animate-fade-in">
          <img src="${data.image}" alt="${data.title}" style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-md); box-shadow:var(--shadow-sm);">
          
          <h2 style="font-size:2rem; margin-top:1rem;">${data.title}</h2>
          
          <div>
            <h3 style="font-size:1.2rem; color:var(--color-text-charcoal); margin-bottom:0.5rem;">What is it?</h3>
            <p style="font-size:0.95rem;">${data.whatIsIt}</p>
          </div>
          
          <div>
            <h3 style="font-size:1.2rem; color:var(--color-text-charcoal); margin-bottom:0.5rem;">When is it considered?</h3>
            <p style="font-size:0.95rem;">${data.whenConsidered}</p>
          </div>
          
          <div>
            <h3 style="font-size:1.2rem; color:var(--color-text-charcoal); margin-bottom:0.5rem;">What to expect during treatment</h3>
            <p style="font-size:0.95rem;">${data.whatToExpect}</p>
          </div>
          
          <div class="treatment-detail-disclaimer">
            <strong>Important Clinical Notice:</strong> ${data.disclaimer}
          </div>
        </div>
        
        <div class="treatment-detail-sidebar animate-fade-in delay-100">
          <h3 style="font-size:1.3rem; margin-bottom:0.5rem; color:var(--color-text-charcoal);">Talk to Dr. Gowtham</h3>
          <p style="font-size:0.9rem; line-height:1.5; margin-bottom:1rem;">Have questions about this treatment? Request an appointment or consult over WhatsApp for direct advice.</p>
          
          <a href="https://wa.me/918508333337?text=Hello%20SS%20Dental%20Care%2C%20I%20would%20like%20to%20consult%20Dr.%20Gowtham%20about%20${encodeURIComponent(data.title)}." target="_blank" class="btn btn-primary" style="background-color: #25d366; border-color: #25d366; width:100%;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            WhatsApp Consultation
          </a>
          
          <a href="#" class="btn btn-secondary trigger-appointment" style="width:100%;">
            Book Appointment Slot
          </a>
        </div>
      </div>
    `;
    
    // Wire up the dynamic nested Book Appointment trigger
    const innerBookingTrigger = modalContainer.querySelector('.trigger-appointment');
    if (innerBookingTrigger) {
      innerBookingTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        // Close treatments detail modal
        closeDetailModal();
        // Open standard booking modal (trigger-appointment helper inside main.js will naturally listen, but we can call it manually)
        const bookingModal = document.getElementById('appointment-modal');
        if (bookingModal) {
          bookingModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          // Pre-select treatment in form if applicable
          const selectElement = document.getElementById('apt-treatment');
          if (selectElement) {
            // Find option matching key
            for (let i = 0; i < selectElement.options.length; i++) {
              if (selectElement.options[i].value.includes(key.substring(0, 5))) {
                selectElement.selectedIndex = i;
                break;
              }
            }
          }
        }
      });
    }
    
    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  const closeDetailModal = () => {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  // Attach triggers to all card links
  const cardTriggers = document.querySelectorAll('.treatment-card-link');
  cardTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.getAttribute('data-treatment-key');
      openDetail(key);
    });
  });
  
  if (closeBtn) closeBtn.addEventListener('click', closeDetailModal);
  if (backdrop) backdrop.addEventListener('click', closeDetailModal);
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailModal.classList.contains('active')) {
      closeDetailModal();
    }
  });
}
