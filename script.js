//Inicialização fadeIn
setTimeout(() => {
     document.getElementById('startFade').className = 'fadeIn'
}, 1000);

//Carousel
document.getElementById('arrow').addEventListener('click', ()=>{
       var conteudo1 = document.getElementById('conteudo-central')
       var conteudo2 = document.getElementById('conteudo-central2')
       if(conteudo1.className == 'd-block'){
          conteudo1.className = 'd-none'
          conteudo2.className = 'd-block'
       } else {
          conteudo1.className = 'd-block'
          conteudo2.className = 'd-none'
       }
})

