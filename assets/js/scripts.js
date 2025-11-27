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
     FAQ — fallback p/ navegadores antigos
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
