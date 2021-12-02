

function stickyScroll(){
    
    window.addEventListener("scroll", function(){
   
     
        let sticky= document.querySelector(".sticky")
        sticky.classList.add("stickyScroll")}
       
    )
}
stickyScroll();


    let carrusel=document.querySelector("#carrusel");
    let contador=0;
    let img=document.querySelector(".nasty");
    let gato=document.querySelector(".gato");
    let titulo=document.querySelector(".titulo");
    let buller=document.querySelector(".buller");
 
    let identify=document.querySelector(".identify");
    let proyectLink=document.querySelector("#proyectLink")
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
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            contador= contador+1;
            console.log(contador);
            break;
            case 1: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-150%)";
            buller.style.transform="translate(-110%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.left="200%";
            img.style.transform="translate(-173%)";
            
            console.log(contador);
            break;
            case 2:
            img.style.visibility="visible";
            img.style.transform="translate(-235%)";
            buller.style.transform="translate(-50%)";
            titulo.innerHTML="Nasty People";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
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
                gato.style.transform="translate(-308%)";
                buller.style.zIndex="0";
                buller.style.left="300%";
                buller.style.transform="translate(-270%)";
                titulo.innerHTML="Mandatos";
                identify.innerHTML="Campaña - Eva Miller";
                proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
                contador= contador+1;
                console.log(contador);
                break; 
            case 4: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-400%)";
            buller.style.transform="translate(-310%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.zIndex="-2";
            img.style.left="400%";
            img.style.transform="translate(-403%)";
            
            console.log(contador);
            break;
            case 5:
             
            location.reload();
                break; 

                

        }
    })
