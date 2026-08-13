document.addEventListener('DOMContentLoaded', function () {
  var rows = document.querySelectorAll('.bt-volume-row');
  if (!rows.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'bt-modal-overlay';
  overlay.innerHTML =
    '<div class="bt-modal">' +
    '<span class="bt-modal-close">&times;</span>' +
    '<div class="bt-modal-vol"></div>' +
    '<div class="bt-modal-meta"></div>' +
    '<div class="bt-modal-images"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  var modal = overlay.querySelector('.bt-modal');
  var volEl = overlay.querySelector('.bt-modal-vol');
  var metaEl = overlay.querySelector('.bt-modal-meta');
  var imagesEl = overlay.querySelector('.bt-modal-images');

  function open(row) {
    volEl.textContent = row.dataset.vol;
    metaEl.textContent = row.dataset.meta;

    var images = (row.dataset.images || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    imagesEl.innerHTML = '';
    if (images.length) {
      imagesEl.classList.toggle('single', images.length === 1);
      images.forEach(function (src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = row.dataset.vol;
        img.className = 'zoomable';
        imagesEl.appendChild(img);
      });
    } else {
      imagesEl.classList.remove('single');
      var note = document.createElement('div');
      note.className = 'bt-modal-empty';
      note.textContent = '写真は準備中です / Photos coming soon';
      imagesEl.appendChild(note);
    }

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  rows.forEach(function (row) {
    row.addEventListener('click', function () {
      open(row);
    });
  });

  overlay.addEventListener('click', function (e) {
    if (!modal.contains(e.target)) close();
  });
  overlay.querySelector('.bt-modal-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
