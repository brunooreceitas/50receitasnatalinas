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
  const modal = document.createElement('div');
  modal.classList.add('testimonial-modal');
  modal.innerHTML = `
    <div class="testimonial-modal-content">
      <span class="testimonial-modal-close">&times;</span>
      <img src="" alt="Depoimento" class="testimonial-modal-img" />
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.testimonial-modal-img');
  const modalClose = modal.querySelector('.testimonial-modal-close');

  // Agora, vamos garantir que o clique no card do depoimento não abra um link
  document.querySelectorAll('.testimonial-click').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault(); // Evita o redirecionamento para outro link
      modalImg.src = card.getAttribute('data-img'); // Usa o atributo de imagem
      modal.classList.add('active');
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
