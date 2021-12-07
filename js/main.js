
let body= document.querySelector("body");
let altura2= window.innerHeight || document.body.clientHeight;
let altura=altura2*0.5;
console.log("la altura es " +altura)
let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");
let img3=document.querySelector("#img3");
let img4=document.querySelector("#img4");
let plantillaa=document.querySelector("#plantilla");
img1.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img src="img/nasty1.jpg" alt=""><img src="img/nasty2.jpg" alt=""><img src="img/nasty3.jpg" alt=""><img src="img/nasty4.jpg" alt=""><div class="haceFlex"><img src="img/nasty51.jpg" alt=""><img src="img/nasty52.jpg" alt=""></div><img src="img/nasty6.jpg" alt=""><img src="img/nasty7.jpg" alt=""><img src="img/nasty8.jpg" alt=""></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
    main.style.opacity="0.2";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    quitar();
});
function quitar(){
   let dosCruz=document.querySelector("#dosCruz");
   dosCruz.addEventListener("click",function(e){
       e.preventDefault();
       dosCruz.style.display="none";
       let main=document.querySelector("main");
       main.style.opacity="1";
       let sstic=document.querySelector(".sticky");
       sstic.style.opacity="1";
      let fixea=document.querySelector("#fixea");
      fixea.style.display="none";
      body.style.opacity="1";
      body.style.overflowY="scroll";
      sstic.style.visibility="visible";
   })
}

console.log(body)
    body.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        let y = body.scrollTop;
        
        console.log(y)
   
        if(y==0){
         sticky.classList.remove("stickyScroll");
        }
        if(y>altura){
            img1.style.transform="translateY(0%)";
            img2.style.transform="translateY(0%)";
            img3.style.transform="translateY(0%)";
            img4.style.transform="translateY(0%)";
        }
        
    }
       
    )


let menu=document.querySelector("#menu");
let xBar=document.querySelector("#xBar");

let menuBar=document.querySelector("#menuBar");
menu.addEventListener("click",function(e){
    e.preventDefault();
    menuBar.style.visibility="visible";

   menuBar.style.transform="translate(0%)";

   
  
})    
xBar.addEventListener("click",function(){
    
    menuBar.style.transform="translate(100%)";
    
}
)





  


    
 





    
    let contador=0;
    let img=document.querySelector(".nasty");
    let gato=document.querySelector(".gato");
    let titulo=document.querySelector(".titulo");
    let buller=document.querySelector(".buller");
    let identify=document.querySelector(".identify");
    let proyectLink=document.querySelector("#proyectLink");
function carrusel3(){
    let carrusel=document.querySelector(".carrusel");
    carrusel.addEventListener("click", function(e){
        e.preventDefault();
        console.log(contador);
        switch(contador){
            case 0:   
            gato.style.visibility="visible";
            
            img.style.transform="translate(-100%)";
            gato.style.transform="translate(-51.5%)";
            buller.style.left="translate(100%)";
            buller.style.transform="translate(-70%)";
            titulo.innerHTML="Mandatos";
            identify.innerHTML="Campaña - Eva Miller";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            console.log(contador);

           
           
            break;
            case 1: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-150%)";
            buller.style.transform="translate(-111.5%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.left="200%";
            img.style.transform="translate(-176%)";
            
            console.log(contador);
            break;
            case 2:
            img.style.visibility="visible";
            img.style.transform="translate(-227%)";
            buller.style.transform="translate(-50%)";
            titulo.innerHTML="Nasty People";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            gato.style.left="300%";
            gato.style.transform="translate(-260%)";
            gato.style.zIndex="1";
            buller.style.zIndex="45";
            buller.style.transform="translate(-200%)";
            identify.innerHTML="Identity for vorterix";

            contador++;
            console.log(contador);
            break; 
            case 3:
                gato.style.visibility="visible";
                img.style.transform="translate(-333%)";
                gato.style.transform="translate(-311.5%)";
                buller.style.zIndex="0";
                buller.style.left="300%";
                buller.style.transform="translate(-270%)";
                titulo.innerHTML="Mandatos";
                identify.innerHTML="Campaña - Eva Miller";
                proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                console.log(contador);
                break; 
            case 4: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-400%)";
            buller.style.transform="translate(-311.5%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.zIndex="-2";
            img.style.left="400%";
            img.style.transform="translate(-393%)";
            
            console.log(contador);
            break;
            case 5:
             
            location.reload();
                break; 

                

        }
    })}
    function carrusel2(){
        let carrusel2=document.querySelector(".carrusel2");
        carrusel2.addEventListener("click", function(e){
            e.preventDefault();
            console.log(contador);
            switch(contador){
                case 0:   
                gato.style.visibility="visible";
               
                img.style.transform="translate(-100%)";
                gato.style.transform="translate(-55%)";
                buller.style.left="translate(100%)";
                buller.style.transform="translate(-70%)";
               
                titulo.innerHTML="Mandatos";
                identify.innerHTML="Campaña - Eva Miller";
                proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                console.log(contador);
            
               
                break;
                case 1: 
                buller.style.visibility="visible";
                gato.style.transform="translate(-160%)";
                buller.style.transform="translate(-110%)";
                titulo.innerHTML="Buller";
                identify.innerHTML="Web Site";
                proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                gato.style.zIndex="14";
                buller.style.zIndex="12";
                img.style.left="200%";
                img.style.transform="translate(-100%)";
                
                console.log(contador);
                break;
                case 2:
                img.style.visibility="visible";
                img.style.transform="translate(-200%)";
                titulo.innerHTML="Nasty People";
                proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                gato.style.left="300%";
                gato.style.transform="translate(-200%)";
                gato.style.zIndex="1";
                buller.style.zIndex="45";
                buller.style.transform="translate(-210%)";
                identify.innerHTML="Identity for vorterix";
    
                contador++;
                console.log(contador);
                break; 
                case 3:
                    gato.style.visibility="visible";
                    img.style.transform="translate(-300%)";
                    gato.style.transform="translate(-300%)";
                    buller.style.zIndex="0";
                    buller.style.left="300%";
                    buller.style.transform="translate(-200%)";
                    titulo.innerHTML="Mandatos";
                    identify.innerHTML="Campaña - Eva Miller";
                    proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                    contador= contador+1;
                    console.log(contador);
                    break; 
                case 4: 
                buller.style.visibility="visible";
                gato.style.transform="translate(-400%)";
                buller.style.transform="translate(-299%)";
                titulo.innerHTML="Buller";
                identify.innerHTML="Web Site";
                proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                gato.style.zIndex="14";
                buller.style.zIndex="12";
                img.style.zIndex="-2";
                img.style.left="400%";
                img.style.transform="translate(-393%)";
                
                console.log(contador);
                break;
                case 5:
                 
                location.reload();
                    break; 
    
                    
    
            }
        })
        
    }
 
    function entraIf(){
        let ancho2= window.innerWidth || document.body.clientWidth;
        
      
        if(ancho2<=750){
            let aqui=document.querySelector(".aqui");
            let imaFle=document.querySelector("#imaFle");
            imaFle.style.width="40%";
            imaFle.style.height="40%";
            imaFle.style.position="absolute";
            imaFle.style.left="29%";
            imaFle.style.top="29%";
            aqui.classList.remove("flecha");
            aqui.classList.add("flechita");
            let aqui2=document.querySelector(".aqui2");
            aqui2.classList.remove("carrusel");
            aqui2.classList.add("carrusel2");
    
            carrusel2();
          
        }
        else{
            let imaFle=document.querySelector("#imaFle");
            imaFle.style.width="100%";
            imaFle.style.height="100%";
            imaFle.style.position="inherit";
            let aqui=document.querySelector(".aqui");
            aqui.classList.remove("flechita");
            aqui.classList.add("flecha");
            let aqui2=document.querySelector(".aqui2");
            aqui2.classList.remove("carrusel2");
            aqui2.classList.add("carrusel");
            carrusel3();
          
        }
    }
    entraIf();
    window.addEventListener("resize",function(){
    
        entraIf();
        
    
    }) 