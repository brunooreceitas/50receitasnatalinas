// Small JS: smooth scrolling and minor interactions
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // simple toggle for details on older browsers
  if(!('open' in document.createElement('details'))){
    document.querySelectorAll('.faq-accordion details').forEach(function(d){
      var summary = d.querySelector('summary');
      summary.style.cursor = 'pointer';
      summary.addEventListener('click', function(){
        if(d.classList.contains('open')){ d.classList.remove('open'); } else { d.classList.add('open'); }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     SMOOTH SCROLL
  ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ============================================================
     FESTÕES ANIMADOS - MOVIMENTO REALISTA
  ============================================================ */
  const banners = document.querySelectorAll(".diagonal-banner");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    banners.forEach((banner, index) => {
      const offset = (index === 0 ? -1 : 1) * scrollPosition * 0.1;
      banner.style.transform = `translateX(${offset}px) rotate(${index === 0 ? -10 : 10}deg)`;
    });
  });

  /* ============================================================
     DEPOIMENTOS — POPUP MODAL
  ============================================================ */

  const modal = document.querySelector(".testimonial-modal");
  const modalImg = modal.querySelector("img");
  const modalClose = modal.querySelector(".testimonial-modal-close");

  document.querySelectorAll(".testimonial-click").forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.img;
      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });

});
