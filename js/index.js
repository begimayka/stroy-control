const swiper = new Swiper('.swiper', {
    
    loop: true,
  
  
    pagination: {
      el: '.swiper-pagination',
    },
  
   
   
   
   
  });


  document.querySelector (".burger-lines").addEventListener("click", () =>{
    document.querySelector (".burger-lines").classList.toggle("active")
  })

  