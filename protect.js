document.querySelectorAll('.email-link').forEach(function(el) {
  var u = el.dataset.u, d = el.dataset.d;
  var addr = u + '@' + d;
  el.href = 'mailto:' + addr;
  el.textContent = addr;
});
