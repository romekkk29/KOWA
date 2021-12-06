
let body= document.querySelector("body");
console.log(body)
    body.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        let y = body.scrollTop;
        console.log(y);
        if(y==0){
         sticky.classList.remove("stickyScroll");
        }
        
    }
       
    )
console.log(document.documentElement.scrollTop)


let ancho2= window.innerWidth || document.body.clientWidth;
let ancho= ancho2/2;
console.log(ancho);
window.addEventListener("resize",function(){
    location.reload();
    ancho= screen.width;
    entraIf();
    

})
function entraIf(){
    
    if(ancho<700){
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
            gato.style.transform="translate(-150%)";
            buller.style.transform="translate(-110%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.left="200%";
            img.style.transform="translate(-173%)";
            
            console.log(contador);
            break;
            case 2:
            img.style.visibility="visible";
            img.style.transform="translate(-223%)";
            buller.style.transform="translate(-50%)";
            titulo.innerHTML="Nasty People";
            proyectLink.innerHTML="<a id=subra3  href=#><p class=proyect>See proyect</p><div class=subrayado2></div></a>";
            gato.style.left="300%";
            gato.style.transform="translate(-250%)";
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
                gato.style.transform="translate(-305%)";
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
            buller.style.transform="translate(-310%)";
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
 
    