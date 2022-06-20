 //Animação trocar nome digitado
 var textoDestaque = document.getElementById('texto-destaque')
 setInterval(() => {
      if(textoDestaque.textContent == 'Weslei') {
          textoDestaque.textContent = 'Casali'
      } else {
          textoDestaque.textContent = 'Weslei'
      }
 }, 4000);




 //Abrir menu mobile
document.getElementById('button-toggler').addEventListener('click', ()=>{
     document.getElementById('nav-principal-mobile').style.cssText = `width: 100%;padding: 30px 30px 10px 30px; transition: all 1.5s;`
})

document.getElementById('close-mobile').addEventListener('click', ()=>{
     document.getElementById('nav-principal-mobile').style.cssText = `width: 0%;padding: 0; transition: all 1.5s;`
})


 
//Inicialização fadeIn
setTimeout(() => {
     document.getElementById('startFade').className = 'fadeIn'
}, 1000);




//Carousel
document.getElementById('arrow-left').addEventListener('click', ()=>{
       var conteudo1 = document.getElementById('conteudo-central')
       var conteudo2 = document.getElementById('conteudo-central2')
       var conteudo3 = document.getElementById('conteudo-central3')
       if(conteudo1.className == 'd-block'){
          conteudo1.className = 'd-none'
          conteudo2.className = 'd-none'
          conteudo3.className = 'd-block'
       } else if(conteudo2.className == 'd-block') {
          conteudo1.className = 'd-block'
          conteudo2.className = 'd-none'
          conteudo3.className = 'd-none'
       } else {
          conteudo1.className = 'd-none'
          conteudo2.className = 'd-block'
          conteudo3.className = 'd-none'
       }
})

document.getElementById('arrow-right').addEventListener('click', ()=>{
     var conteudo1 = document.getElementById('conteudo-central')
     var conteudo2 = document.getElementById('conteudo-central2')
     var conteudo3 = document.getElementById('conteudo-central3')
     if(conteudo1.className == 'd-block'){
          conteudo1.className = 'd-none'
          conteudo2.className = 'd-block'
          conteudo3.className = 'd-none'
       } else if(conteudo2.className == 'd-block') {
          conteudo1.className = 'd-none'
          conteudo2.className = 'd-none'
          conteudo3.className = 'd-block'
       } else {
          conteudo1.className = 'd-block'
          conteudo2.className = 'd-none'
          conteudo3.className = 'd-none'
       }
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






 //Scrollspy 
 var spyClick1 = document.getElementById('spy-click1')
 var spyClick2 = document.getElementById('spy-click2')
 var spyClick3 = document.getElementById('spy-click3')
 var spyBlock1 = document.getElementById('spy-block1')
 var spyBlock2 = document.getElementById('spy-block2')
 var spyBlock3 = document.getElementById('spy-block3')

spyClick1.addEventListener('click', ()=>{
     spyClick1.classList.add('active-scrollspy')
     spyClick2.classList.remove('active-scrollspy')
     spyClick3.classList.remove('active-scrollspy')
     spyBlock1.className = 'd-block-spy'
     spyBlock2.className = 'd-none-spy'
     spyBlock3.className = 'd-none-spy'
})

spyClick2.addEventListener('click', ()=>{
     spyClick1.classList.remove('active-scrollspy')
     spyClick2.classList.add('active-scrollspy')
     spyClick3.classList.remove('active-scrollspy')
     spyBlock1.className = 'd-none-spy'
     spyBlock2.className = 'd-block-spy'
     spyBlock3.className = 'd-none-spy'
})

spyClick3.addEventListener('click', ()=>{
     spyClick1.classList.remove('active-scrollspy')
     spyClick2.classList.remove('active-scrollspy')
     spyClick3.classList.add('active-scrollspy')
     spyBlock1.className = 'd-none-spy'
     spyBlock2.className = 'd-none-spy'
     spyBlock3.className = 'd-block-spy'
})





//Formulario btn 
function contatoLinks(){
     document.getElementById('contato-container-links').style.display = ''
     document.getElementById('contato-container-form').style.display = 'none'
     document.getElementById('btn-contato-links').remove()
     document.getElementById('btn-contato-form').remove()
}

function contatoForm(){
     document.getElementById('contato-container-form').style.display = ''
     document.getElementById('contato-container-links').style.display = 'none'
     document.getElementById('btn-contato-links').style.display = 'none'
     document.getElementById('btn-contato-form').style.display = 'none'
}

function backForm(){
     window.location.href = "contato.html"
}

