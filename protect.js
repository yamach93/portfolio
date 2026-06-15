document.querySelectorAll('.email-link').forEach(function(el) {
  var u = el.dataset.u, d = el.dataset.d;
  el.href = 'mailto:' + u + '@' + d;
  el.textContent = u + '⭐' + d;
});
