num = ''
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function revealLeft() {
    const revealsL = document.querySelectorAll(".reveal-Left");
  
    for (let i = 0; i < revealsL.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealsL[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsL[i].classList.add("active-Left");
      } else {
        revealsL[i].classList.remove("active-Left");
      }
    }
  }
  
  window.addEventListener("scroll", revealLeft);

  function revealRight() {
    const revealsR = document.querySelectorAll(".reveal-Right");
    
    for (let i = 0; i < revealsR.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealsR[i].getBoundingClientRect().top;
      let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealsR[i].classList.add("active-Right");
        num = '1'
      } else {
        revealsR[i].classList.remove("active-Right");
        
      }
    }
  }
  
  window.addEventListener("scroll", revealRight);

  function revealMid() {
    const revealsM = document.querySelectorAll(".reveal-M");
    
    for (let i = 0; i < revealsM.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealsM[i].getBoundingClientRect().top;
      let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealsM[i].classList.add("active-M");
        num = '1'
      } else {
        revealsM[i].classList.remove("active-M");
        
      }
    }
  }
  
  window.addEventListener("scroll", revealMid);