document.addEventListener('DOMContentLoaded', function() {
  // ============================================================
  // SMOOTH SCROLL
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ============================================================
  // DEPOIMENTOS — POPUP MODAL
  // ============================================================
  const modal = document.querySelector(".testimonial-modal");
  const modalImg = modal.querySelector("img");
  const modalClose = modal.querySelector(".testimonial-modal-close");

  document.querySelectorAll(".testimonial-click").forEach(card => {
    card.addEventListener("click", (e) => {
      const imgSrc = card.dataset.img;
      if (imgSrc) {
        modalImg.src = imgSrc;
        modal.classList.add('active');
      } else {
        // Se não houver imagem, não faz nada
        modal.classList.remove('active');
      }
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // ============================================================
  // SIMPLES TOGGLE PARA 'DETAILS' EM BROWSERS MAIS ANTIGOS
  // ============================================================
  if (!('open' in document.createElement('details'))) {
    document.querySelectorAll('.faq-accordion details').forEach(function(d) {
      const summary = d.querySelector('summary');
      summary.style.cursor = 'pointer';
      summary.addEventListener('click', function() {
        d.classList.toggle('open');
      });
    });
  }
});
