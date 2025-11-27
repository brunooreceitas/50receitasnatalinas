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
     FAQ — Fallback para navegadores antigos
  ============================================================ */
  if (!("open" in document.createElement("details"))) {
    document.querySelectorAll(".faq-accordion details").forEach(d => {
      const summary = d.querySelector("summary");
      summary.style.cursor = "pointer";
      summary.addEventListener("click", () => {
        d.classList.toggle("open");
      });
    });
  }

  /* ============================================================
     DEPOIMENTOS — POPUP MODAL
  ============================================================ */
  const modal = document.querySelector(".testimonial-modal");
  const modalImg = modal.querySelector("img");
  const modalClose = modal.querySelector(".testimonial-modal-close");

  // Abre o modal ao clicar na carta de depoimento
  document.querySelectorAll(".testimonial-click").forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.img;
      modal.classList.add("active");
    });
  });

  // Fecha o modal ao clicar no botão de fechar
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Fecha o modal ao clicar fora da área de conteúdo
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});
