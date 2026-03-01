// Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });
}

// Gender Toggle (Home page)
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    toggleBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
  });
});

// Running Calculator
function calculateCalories() {
  const weight = parseFloat(document.getElementById('weight')?.value);
  const duration = parseFloat(document.getElementById('duration')?.value);
  const met = parseFloat(document.getElementById('pace')?.value);

  if (!weight || !duration || isNaN(met)) {
    alert('Please fill in all fields.');
    return;
  }

  const weightKg = weight * 0.453592;
  const calories = Math.round((met * weightKg * (duration / 60)));
  const speedMap = { '6': 5, '9': 6, '11': 7.5, '13': 9 };
  const paceMap = { '6': 'Slow Jog', '9': 'Moderate Run', '11': 'Fast Run', '13': 'Sprint' };
  const speed = speedMap[String(met)] || 6;
  const distance = ((speed * duration) / 60).toFixed(2);
  const paceLabel = paceMap[String(met)] || 'Moderate Run';

  document.getElementById('calories-result').textContent = calories;
  document.getElementById('duration-result').textContent = duration + ' min';
  document.getElementById('distance-result').textContent = distance + ' mi';
  document.getElementById('pace-result').textContent = paceLabel;
}

// Lightbox Gallery
const galleryImages = [];
let currentIndex = 0;

// Collect all gallery items on page load
document.querySelectorAll('.gallery-item').forEach(function (item, idx) {
  const img = item.querySelector('img');
  const caption = item.querySelector('.gallery-overlay span');
  galleryImages.push({
    src: img ? img.src : '',
    caption: caption ? caption.textContent : ''
  });
});

function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (!lightbox) return;

  // Find index of clicked image
  currentIndex = galleryImages.findIndex(function (item) {
    return item.src.includes(src.replace('../', '')) || item.caption === caption;
  });
  if (currentIndex === -1) currentIndex = 0;

  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  // Close only if clicking the backdrop or close button (not the image)
  if (!event || event.target === lightbox || event.target.classList.contains('lightbox-close')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function changeImage(direction) {
  if (galleryImages.length === 0) return;
  currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
  const item = galleryImages[currentIndex];
  document.getElementById('lightbox-img').src = item.src;
  document.getElementById('lightbox-img').alt = item.caption;
  document.getElementById('lightbox-caption').textContent = item.caption;
}

// Keyboard support for lightbox
document.addEventListener('keydown', function (e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') changeImage(1);
  if (e.key === 'ArrowLeft') changeImage(-1);
});

// Recipe Toggle
function toggleRecipe(card) {
  const detail = card.querySelector('.recipe-detail');
  const btn = card.querySelector('.recipe-expand-btn');
  if (!detail) return;

  const isOpen = detail.classList.contains('open');
  detail.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? 'View Recipe ↓' : 'Hide Recipe ↑';
}