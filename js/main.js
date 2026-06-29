(function () {
  var hdr = document.getElementById('hdr');
  var menuBtn = document.querySelector('.menu-btn');

  function onScroll() {
    if (window.scrollY > window.innerHeight * 0.6) {
      hdr.classList.add('solid');
    } else {
      hdr.classList.remove('solid');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = hdr.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }
  document.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      hdr.classList.remove('open');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
