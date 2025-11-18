// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('inview');
  });
},{threshold:0.15});

document.querySelectorAll('.section, .skill-card, .project-card, .hero-text').forEach(el=>{
  el.classList.add('fade-up');
  observer.observe(el);
});

// Smooth scroll uniquement pour les ancres (#)
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});
