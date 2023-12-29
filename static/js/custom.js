const selectElement = document.getElementById('lS');
const langIcon = document.getElementById('lang');

selectElement.addEventListener('change', function() {
    const selectedValue = selectElement.value;

    
    if (selectedValue === 'en') {
        langIcon.src = './media/icons/lang_en.png'; 
    } else if (selectedValue === 'es') {
        langIcon.src = './media/icons/lang_sp.png'; 
    } else if (selectedValue === 'fr') {
        langIcon.src = './media/icons/lang_fr.png';
    }
});


// Lazy load iages

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });

window.addEventListener('scroll', () => {
    const floatingElement = document.querySelector('.form-container');
    // You can set a scroll threshold to determine when to show the element
    if (window.scrollY > 200) {
        floatingElement.style.display = 'block';
    } else {
        floatingElement.style.display = 'none';
    }
});



