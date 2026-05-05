/* ============================================================
   ACADEMIC PORTFOLIO v4 — script.js
   Scroll reveal · Nav · Mobile menu · Active link
============================================================ */
(function () {
  'use strict';

  // ── NAV ──────────────────────────────────────────────────
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const navList= document.getElementById('navList');

  // Scroll shadow
  window.addEventListener('scroll', function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
    highlightNav();
  }, { passive: true });

  // Mobile toggle
  burger.addEventListener('click', function () {
    const open = navList.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    const s = burger.querySelectorAll('span');
    s[0].style.transform = open ? 'translateY(6.5px) rotate(45deg)' : '';
    s[1].style.opacity   = open ? '0' : '';
    s[2].style.transform = open ? 'translateY(-6.5px) rotate(-45deg)' : '';
  });

  // Close on link click
  navList.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navList.classList.remove('open');
      const s = burger.querySelectorAll('span');
      s[0].style.transform = s[2].style.transform = '';
      s[1].style.opacity = '';
    });
  });

  // ── SMOOTH SCROLL with nav offset ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || id === '#hero') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── ACTIVE NAV HIGHLIGHT ────────────────────────────────
  const sections  = document.querySelectorAll('section[id], main[id]');
  const navLinks  = document.querySelectorAll('.nav-list a');

  function highlightNav () {
    let current = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - nav.offsetHeight - 60) {
        current = s.id;
      }
    });
    navLinks.forEach(function (a) {
      const isActive = a.getAttribute('href') === '#' + current;
      if (a.classList.contains('nav-cta')) return;
      a.style.color = isActive ? 'var(--navy)' : '';
      a.style.background = isActive ? 'var(--navy-light)' : '';
    });
  }

  // ── SCROLL REVEAL (IntersectionObserver) ───────────────
  const aosEls = document.querySelectorAll('[data-aos]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

    aosEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    aosEls.forEach(function (el) { el.classList.add('aos-in'); });
  }

  // ── HERO: trigger immediately (above the fold) ─────────
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero [data-aos]').forEach(function (el) {
      el.classList.add('aos-in');
    });
  });

  // ── PROJECT CARD: hover shimmer on image ───────────────
  document.querySelectorAll('.proj-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      const img = this.querySelector('.proj-img');
      if (img) img.style.opacity = '0.9';
    });
    card.addEventListener('mouseleave', function () {
      const img = this.querySelector('.proj-img');
      if (img) img.style.opacity = '';
    });
  });

})();
