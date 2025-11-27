// Small JS: smooth scrolling and minor interactions
document.addEventListener('DOMContentLoaded', function(){

  /* --------------------------------------------------
     Smooth Scroll
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length > 1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });

  /* --------------------------------------------------
     FAQ fallback (details) for older browsers
  -------------------------------------------------- */
  if(!('open' in document.createElement('details'))){
    document.querySelectorAll('.faq-accordion details').forEach(function(d){
      var summary = d.querySelector('summary');
      summary.style.cursor = 'pointer';
      summary.addEventListener('click', function(){
        if(d.classList.contains('open')){
          d.classList.remove('open');
        } else {
          d.classList.add('open');
        }
      });
    });
  }

  /* --------------------------------------------------
     TESTIMONIAL POPUP
  -------------------------------------------------- */

  // Create modal structure
  const modal = document.createElement('div');
  modal.className = 'testimonial-modal';
  modal.innerHTML = `
    <div class="testimonial-modal-close">×</div>
    <div class="testimonial-modal-content">
      <img src="" alt="Depoimento ampliado">
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.testimonial-modal-content img');
  const closeBtn = modal.querySelector('.testimonial-modal-close');

  // Open modal on click
  document.querySelectorAll('.testimonial-card img').forEach(function(img){
    img.addEventListener('click', function(){
      modalImg.src = this.src;
      modal.classList.add('active');
    });
  });

  // Close by clicking the X
  closeBtn.addEventListener('click', function(){
    modal.classList.remove('active');
  });

  // Close by clicking outside content
  modal.addEventListener('click', function(e){
    if(e.target === modal){
      modal.classList.remove('active');
    }
  });

});
