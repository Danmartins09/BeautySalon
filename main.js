/* abre e fecha qnd clicar no icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const Element of toggle){
    Element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* qnd clicar em um item do menu, esconder o menu*/
const links=document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show')
    })
}
/*mudar o header da pagina qnd der scroll*/
const header = document.querySelector('#header')
const navheight=header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navheight){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

  });

  /* scroll reaveal*/

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 900,
      //reset: true
  })

  scrollReveal.reveal(
      `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #services .card,
      #testimonials header, #testimonials .testimonials,
      #contact .text, #contact .links
      `, {interval:100})



