// Still Won't Quit — mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.classList.toggle('is-open');

    var menuId = toggle.getAttribute('aria-controls');
    var menu = menuId ? document.getElementById(menuId) : null;
    if (menu) menu.classList.toggle('open');
  });
});
