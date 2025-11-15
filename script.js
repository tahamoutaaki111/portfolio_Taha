// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('inview');
  });
},{threshold:0.15});

document.querySelectorAll('.section,.skill-card,.project-card,.hero-text').forEach(el=>{
  el.classList.add('fade-up');
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('nav a, .btn-primary').forEach(link=>{
  if(!link.getAttribute('href').startsWith('#')) return;
  link.addEventListener('click',(e)=>{
    e.preventDefault();
    const el=document.querySelector(link.getAttribute('href'));
    window.scrollTo({top:el.offsetTop-70,behavior:'smooth'});
  });
});
