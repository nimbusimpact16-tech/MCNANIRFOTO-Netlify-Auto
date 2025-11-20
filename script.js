let currentIndex = 0;
const images = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(el) { currentIndex = Array.from(images).indexOf(el); lightboxImg.src = el.src; lightbox.classList.add('active'); document.body.style.overflow='hidden'; }
function closeLightbox() { lightbox.classList.remove('active'); document.body.style.overflow='auto'; }
function changeImage(dir) { currentIndex = (currentIndex + dir + images.length) % images.length; lightboxImg.src = images[currentIndex].src; }
function prevImage(e) { e.stopPropagation(); changeImage(-1); }
function nextImage(e) { e.stopPropagation(); changeImage(1); }
document.addEventListener('keydown', e => { if (!lightbox.classList.contains('active')) return; if (e.key==='ArrowLeft') changeImage(-1); if (e.key==='ArrowRight') changeImage(1); if (e.key==='Escape') closeLightbox(); });
