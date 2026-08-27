// SS Dental Care - Gallery Filter & Lightbox Controller

document.addEventListener('DOMContentLoaded', () => {
  setupGallery();
});

function setupGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  
  let currentFilteredItems = [...galleryItems];
  let currentIndex = 0;
  
  // 1. Grid Category Filtering
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab style
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filter items in the DOM
      currentFilteredItems = [];
      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.style.display = 'block';
          currentFilteredItems.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // 2. Lightbox Open
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Find index within the current filtered list
      currentIndex = currentFilteredItems.indexOf(item);
      if (currentIndex === -1) return;
      
      openLightbox();
    });
  });
  
  function openLightbox() {
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function updateLightboxContent() {
    const activeItem = currentFilteredItems[currentIndex];
    const imgElement = activeItem.querySelector('.gallery-item-img');
    const title = activeItem.getAttribute('data-title');
    
    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    lightboxCaption.textContent = title;
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function navigateNext() {
    if (currentFilteredItems.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentFilteredItems.length;
    updateLightboxContent();
  }
  
  function navigatePrev() {
    if (currentFilteredItems.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
    updateLightboxContent();
  }
  
  // 3. Attach Lightbox Controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', navigateNext);
  if (prevBtn) prevBtn.addEventListener('click', navigatePrev);
  
  // Click backdrop to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });
  
  // Keyboard Listeners
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateNext();
    } else if (e.key === 'ArrowLeft') {
      navigatePrev();
    }
  });
  
  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50; // min px to trigger swipe
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance < 0) {
        // Swiped Left -> Next
        navigateNext();
      } else {
        // Swiped Right -> Prev
        navigatePrev();
      }
    }
  }
}
