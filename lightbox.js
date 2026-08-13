document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">&times;</span><img>';
  document.body.appendChild(overlay);
  var overlayImg = overlay.querySelector('img');

  function open(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  window.openLightbox = open;

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.work-hero img, .work-gallery-item img, img.zoomable');
    if (img) open(img.currentSrc || img.src, img.alt);
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
