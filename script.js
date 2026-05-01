// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// Active nav highlight
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Scroll-reveal cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('fade-up');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(c => observer.observe(c));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// Header shrink on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    header.style.padding = window.scrollY > 40 ? '.65rem 5%' : '1rem 5%';
  }
});