//Inicialização fadeIn
setTimeout(() => {
     document.getElementById('startFade').className = 'fadeIn'
}, 1000);


//Carousel
document.getElementById('arrow-left').addEventListener('click', ()=>{
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

document.getElementById('arrow-right').addEventListener('click', ()=>{
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


//Abrir menu mobile
document.getElementById('button-toggler').addEventListener('click', ()=>{
     document.getElementById('nav-principal-mobile').style.cssText = `width: 100%;padding: 30px 30px 10px 30px; transition: all 1.5s;`
})

document.getElementById('close-mobile').addEventListener('click', ()=>{
     document.getElementById('nav-principal-mobile').style.cssText = `width: 0%;padding: 0; transition: all 1.5s;`
})



//Animação stacks mobile
var imgStacks = document.getElementById('skills-stacks')

 function trocarImgStacks(){
     if(imgStacks.className == 'imgStack1'){
          imgStacks.className = 'imgStack2'
     } else if(imgStacks.className =='imgStack2') {
          imgStacks.className = 'imgStack3'
     } else if(imgStacks.className =='imgStack3') {
          imgStacks.className = 'imgStack4'
     } else if(imgStacks.className =='imgStack4') {
          imgStacks.className = 'imgStack5'
     } else if(imgStacks.className =='imgStack5') {
          imgStacks.className = 'imgStack6'
     } else if(imgStacks.className =='imgStack6') {
          imgStacks.className = 'imgStack7'
     } else if(imgStacks.className =='imgStack7') {
          imgStacks.className = 'imgStack8'
     } else if(imgStacks.className =='imgStack8') {
          imgStacks.className = 'imgStack9'
     } else if(imgStacks.className =='imgStack9') {
          imgStacks.className = 'imgStack10'
     } else if(imgStacks.className =='imgStack10') {
          imgStacks.className = 'imgStack1'
     }
 }

 setInterval(() => {
     trocarImgStacks();
 }, 1500);


 //Animação trocar nome digitado
 var textoDestaque = document.getElementById('texto-destaque')
 setInterval(() => {
      if(textoDestaque.textContent == 'Weslei') {
          textoDestaque.textContent = 'Casali'
      } else {
          textoDestaque.textContent = 'Weslei'
      }
 }, 4000);