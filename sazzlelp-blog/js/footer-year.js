// Trägt automatisch das aktuelle Jahr im Footer ein
(function () {
  const el = document.querySelector('[data-current-year]');
  if (!el) return;
  el.textContent = new Date().getFullYear();
})();
