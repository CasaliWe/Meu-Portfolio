

function funcProjetos(){
           
          
              //CLOSE PROJETOS

//Abrir TERCEIROS
document.querySelector('.left1').addEventListener('click', ()=>{
    document.querySelector('.aba-projetos1').style.cssText = `width:90%; transition: all 700ms;`
    document.querySelector('.left1').style.cssText = `border-left:5px solid var(--cor2); transition: all 800ms`
    document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
    setTimeout(() => {
         document.getElementById('terceiros-1').style.cssText = `opacity:1; transition: 800ms`
    }, 800);
    setTimeout(() => {
      document.getElementById('terceiros-2').style.cssText = `opacity:1; transition: 800ms`
    }, 1600);
    
    //Fechar
    document.getElementById('close-projetos1').addEventListener('click', ()=>{
           document.getElementById('terceiros-1').style.cssText = `opacity:0; transition: 800ms`
           document.getElementById('terceiros-2').style.cssText = `opacity:0; transition: 800ms`
           setTimeout(() => {
              document.querySelector('.aba-projetos1').style.cssText = `width:0%; transition: all 500ms;`
              document.querySelector('.left1').style.cssText = `border-left:5px solid var(--cor1); transition: all 800ms`
              document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s`
           }, 1000);
   })

})

//Abrir JOGOS
document.querySelector('.left2').addEventListener('click', ()=>{
   document.querySelector('.aba-projetos2').style.cssText = `width:90%; transition: all 700ms;`
   document.querySelector('.left2').style.cssText = `border-left:5px solid var(--cor2); transition: all 800ms`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
        document.getElementById('jogos-1').style.cssText = `opacity:1; transition: 800ms`
   }, 800);
   setTimeout(() => {
        document.getElementById('jogos-2').style.cssText = `opacity:1; transition: 800ms`
   }, 1600);
   setTimeout(() => {
      document.getElementById('jogos-3').style.cssText = `opacity:1; transition: 800ms`
   }, 2400);

   //Fechar
   document.getElementById('close-projetos2').addEventListener('click', ()=>{
         document.getElementById('jogos-1').style.cssText = `opacity:0; transition: 800ms`
         document.getElementById('jogos-2').style.cssText = `opacity:0; transition: 800ms`
         document.getElementById('jogos-3').style.cssText = `opacity:0; transition: 800ms`
         setTimeout(() => {
             document.querySelector('.aba-projetos2').style.cssText = `width:0%; transition: all 500ms;`
             document.querySelector('.left2').style.cssText = `border-left:5px solid var(--cor1); transition: all 800ms`
             document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s`
         }, 1000);
   })

})

//Abrir CLONES
document.querySelector('.left3').addEventListener('click', ()=>{
   document.querySelector('.aba-projetos3').style.cssText = `width:90%; transition: all 700ms;`
   document.querySelector('.left3').style.cssText = `border-left:5px solid var(--cor2); transition: all 800ms`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
      document.getElementById('clones-1').style.cssText = `opacity:1; transition: 800ms`
   }, 800);
   setTimeout(() => {
   document.getElementById('clones-2').style.cssText = `opacity:1; transition: 800ms`
   }, 1600);

   //Fechar
   document.getElementById('close-projetos3').addEventListener('click', ()=>{
       document.getElementById('clones-1').style.cssText = `opacity:0; transition: 800ms`
       document.getElementById('clones-2').style.cssText = `opacity:0; transition: 800ms`
       setTimeout(() => {
             document.querySelector('.aba-projetos3').style.cssText = `width:0%; transition: all 500ms;`
             document.querySelector('.left3').style.cssText = `border-left:5px solid var(--cor1); transition: all 800ms`
             document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s`
       }, 1000);
   })

})

//Abrir CONSUMO DE APIS
document.querySelector('.right1').addEventListener('click', ()=>{
   document.querySelector('.aba-projetos4').style.cssText = `width:90%; transition: all 700ms;`
   document.querySelector('.right1').style.cssText = `border-right:5px solid var(--cor2); transition: all 800ms`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   //Fechar
   document.getElementById('close-projetos4').addEventListener('click', ()=>{
       document.querySelector('.aba-projetos4').style.cssText = `width:00%; transition: all 500ms;`
       document.querySelector('.right1').style.cssText = `border-right:5px solid var(--cor1); transition: all 800ms`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s` 
   })

})

//Abrir STACKS
document.querySelector('.right2').addEventListener('click', ()=>{
   document.querySelector('.aba-projetos5').style.cssText = `width:90%; transition: all 700ms;`
   document.querySelector('.right2').style.cssText = `border-right:5px solid var(--cor2); transition: all 800ms`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
      document.getElementById('stacks-1').style.cssText = `opacity:1; transition: 800ms`
   }, 800);
   setTimeout(() => {
   document.getElementById('stacks-2').style.cssText = `opacity:1; transition: 800ms`
   }, 1600);

   //Fechar
   document.getElementById('close-projetos5').addEventListener('click', ()=>{
         document.getElementById('stacks-1').style.cssText = `opacity:0; transition: 800ms`
         document.getElementById('stacks-2').style.cssText = `opacity:0; transition: 800ms`
         setTimeout(() => {
               document.querySelector('.aba-projetos5').style.cssText = `width:0%; transition: all 500ms;`
               document.querySelector('.right2').style.cssText = `border-right:5px solid var(--cor1); transition: all 800ms`
               document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s`
         }, 1000);
   })

})

//Abrir PESSOAIS
document.querySelector('.right3').addEventListener('click', ()=>{
   document.querySelector('.aba-projetos6').style.cssText = `width:90%; transition: all 700ms;`
   document.querySelector('.right3').style.cssText = `border-right:5px solid var(--cor2); transition: all 800ms`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
      document.getElementById('pessoais-1').style.cssText = `opacity:1; transition: 800ms`
   }, 800);
   setTimeout(() => {
   document.getElementById('pessoais-2').style.cssText = `opacity:1; transition: 800ms`
   }, 1600);

   //Fechar
   document.getElementById('close-projetos6').addEventListener('click', ()=>{
         document.getElementById('pessoais-1').style.cssText = `opacity:0; transition: 800ms`
         document.getElementById('pessoais-2').style.cssText = `opacity:0; transition: 800ms`
         setTimeout(() => {
              document.querySelector('.aba-projetos6').style.cssText = `width:0%; transition: all 500ms;`
              document.querySelector('.right3').style.cssText = `border-right:5px solid var(--cor1); transition: all 800ms`
              document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 6s`
         }, 1000);
   })

})
//CLOSE PROJETOS



//-----------------MOBILE-------------------

//Abrir e fechar
document.getElementById('abre-lateral').addEventListener('click', ()=>{
     document.getElementById('projetos-mobile').style.cssText= `width:40%;transition: all 700ms;`
     document.getElementById('abre-lateral').style.cssText= `opacity: 0;`
         document.getElementById('fecha-lateral').addEventListener('click', ()=>{
             document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
             setTimeout(() => {
                 document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
             }, 700);
         })
})



//Chamar aba projetos

//TERCEIROS
document.querySelector('.left1-mobile').addEventListener('click',()=>{
     document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
     document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
     setTimeout(() => {
         document.querySelector('.aba-projetos1').style.cssText = `width:90%; transition: all 700ms;`  
     }, 1000);
     setTimeout(() => {
             document.getElementById('terceiros-1').style.cssText = `opacity:1; transition: 800ms`
     }, 1500);
     setTimeout(() => {
             document.getElementById('terceiros-2').style.cssText = `opacity:1; transition: 800ms`
     }, 2000);
     
     //Fechar
     document.getElementById('close-projetos1').addEventListener('click', ()=>{
        document.getElementById('terceiros-1').style.cssText = `opacity:0; transition: 800ms`
        document.getElementById('terceiros-2').style.cssText = `opacity:0; transition: 800ms`
        document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
        setTimeout(() => {
         document.querySelector('.aba-projetos1').style.cssText = `width:0%; transition: all 500ms;`
         document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
        }, 1000);
     })
     
})

//JOGOS
document.querySelector('.left2-mobile').addEventListener('click',()=>{
   document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
       document.querySelector('.aba-projetos2').style.cssText = `width:90%; transition: all 700ms;`  
   }, 1000);
   setTimeout(() => {
           document.getElementById('jogos-1').style.cssText = `opacity:1; transition: 800ms`
   }, 1500);
   setTimeout(() => {
           document.getElementById('jogos-2').style.cssText = `opacity:1; transition: 800ms`
   }, 2000);
   setTimeout(() => {
      document.getElementById('jogos-3').style.cssText = `opacity:1; transition: 800ms`
   }, 2000);
   
   //Fechar
   document.getElementById('close-projetos2').addEventListener('click', ()=>{
      document.getElementById('jogos-1').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('jogos-2').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
      setTimeout(() => {
       document.querySelector('.aba-projetos2').style.cssText = `width:0%; transition: all 500ms;`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
      }, 1000);
   })
   
})

//CLONES
document.querySelector('.left3-mobile').addEventListener('click',()=>{
   document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
       document.querySelector('.aba-projetos3').style.cssText = `width:90%; transition: all 700ms;`  
   }, 1000);
   setTimeout(() => {
           document.getElementById('clones-1').style.cssText = `opacity:1; transition: 800ms`
   }, 1500);
   setTimeout(() => {
           document.getElementById('clones-2').style.cssText = `opacity:1; transition: 800ms`
   }, 2000);
   
   //Fechar
   document.getElementById('close-projetos3').addEventListener('click', ()=>{
      document.getElementById('clones-1').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('clones-2').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
      setTimeout(() => {
       document.querySelector('.aba-projetos3').style.cssText = `width:0%; transition: all 500ms;`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
      }, 1000);
   })
   
})

//CONSUMO DE APIS
document.querySelector('.right1-mobile').addEventListener('click',()=>{
   document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
       document.querySelector('.aba-projetos4').style.cssText = `width:90%; transition: all 700ms;`  
   }, 1000);

   
   //Fechar
   document.getElementById('close-projetos4').addEventListener('click', ()=>{
      document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
      setTimeout(() => {
       document.querySelector('.aba-projetos4').style.cssText = `width:0%; transition: all 500ms;`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
      }, 1000);
   })
   
})

//STACKS
document.querySelector('.right2-mobile').addEventListener('click',()=>{
   document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
       document.querySelector('.aba-projetos5').style.cssText = `width:90%; transition: all 700ms;`  
   }, 1000);
   setTimeout(() => {
           document.getElementById('stacks-1').style.cssText = `opacity:1; transition: 800ms`
   }, 1500);
   setTimeout(() => {
           document.getElementById('stacks-2').style.cssText = `opacity:1; transition: 800ms`
   }, 2000);
   
   //Fechar
   document.getElementById('close-projetos5').addEventListener('click', ()=>{
      document.getElementById('stacks-1').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('stacks-2').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
      setTimeout(() => {
       document.querySelector('.aba-projetos5').style.cssText = `width:0%; transition: all 500ms;`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
      }, 1000);
   })
   
})

//PESSOAIS
document.querySelector('.right3-mobile').addEventListener('click',()=>{
   document.getElementById('projetos-mobile').style.cssText= `width:0%;transition: all 700ms;`
   document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 0; transition: 500ms`
   setTimeout(() => {
       document.querySelector('.aba-projetos6').style.cssText = `width:90%; transition: all 700ms;`  
   }, 1000);
   setTimeout(() => {
           document.getElementById('pessoais-1').style.cssText = `opacity:1; transition: 800ms`
   }, 1500);
   setTimeout(() => {
           document.getElementById('pessoais-2').style.cssText = `opacity:1; transition: 800ms`
   }, 2000);
   
   //Fechar
   document.getElementById('close-projetos6').addEventListener('click', ()=>{
      document.getElementById('pessoais-1').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('pessoais-2').style.cssText = `opacity:0; transition: 800ms`
      document.getElementById('abre-lateral').style.cssText= `opacity: 1;`
      setTimeout(() => {
       document.querySelector('.aba-projetos6').style.cssText = `width:0%; transition: all 500ms;`
       document.querySelector('#titulo-digitado-projetos').style.cssText = `opacity: 1; transition: 500ms`
      }, 1000);
   })
   
})



}
