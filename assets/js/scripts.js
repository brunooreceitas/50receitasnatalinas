// Small JS: smooth scrolling and minor interactions
document.addEventListener('DOMContentLoaded', function() {
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // simple toggle for details on older browsers
  if (!('open' in document.createElement('details'))) {
    document.querySelectorAll('.faq-accordion details').forEach(function(d) {
      var summary = d.querySelector('summary');
      summary.style.cursor = 'pointer';
      summary.addEventListener('click', function() {
        if (d.classList.contains('open')) {
          d.classList.remove('open');
        } else {
          d.classList.add('open');
        }
      });
    });
  }

  // Depoimentos: Abrir pop-up ao clicar na imagem
  const testimonialCards = document.querySelectorAll('.testimonial-click');
  const modal = document.createElement('div');
  modal.classList.add('testimonial-modal');
  const modalImage = document.createElement('img');
  const closeModalBtn = document.createElement('span');
  closeModalBtn.classList.add('testimonial-modal-close');
  closeModalBtn.textContent = '×'; // Ícone de fechar
  modal.appendChild(modalImage);
  modal.appendChild(closeModalBtn);
  document.body.appendChild(modal);

  // Função para abrir o modal com a imagem clicada
  testimonialCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const imgSrc = card.querySelector('img').src;
      modalImage.src = imgSrc; // Atualizar a imagem do modal
      modal.style.display = 'flex'; // Exibir o modal
    });
  });

  // Fechar o modal ao clicar fora da imagem
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none'; // Fechar o modal
    }
  });

  // Fechar o modal ao clicar no botão de fechar
  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});
