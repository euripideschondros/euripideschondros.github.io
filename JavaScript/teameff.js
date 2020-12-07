window.onscroll = function() {effectFunction()};
    
  function effectFunction() {
    

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
      document.getElementById("mek").className = "fade";
    }
    
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ) {
      document.getElementById("cutimg").className = "slideUp";
      document.getElementById("stylingimg").className = "slideUp";
      document.getElementById("therapyimg").className = "slideUp";
    }

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      document.getElementById("irene").className = "slideLeft";
    }

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      document.getElementById("katerina").className = "slideRight";
    }
    
  }
