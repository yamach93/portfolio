document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-menu-mobile');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  var openLabel = toggle.textContent;
  var closeLabel = 'Close';

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.textContent = isOpen ? closeLabel : openLabel;
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.textContent = openLabel;
    });
  });
});
