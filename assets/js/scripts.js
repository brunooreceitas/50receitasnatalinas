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
