

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
            gato.style.transform="translate(-100%)";
            buller.style.transform="translate(0%)";
            buller.style.visibility="hidden";
            titulo.innerHTML="Mandatos";
            identify.innerHTML="Campaña - Eva Miller";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            contador= contador+1;
            console.log(contador);
            break;
            case 1: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-200%)";
            buller.style.transform="translate(-100%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            contador= contador+1;
            img.style.visibility="hidden";
            img.style.transform="translate(100%)";
            console.log(contador);
            break;
            case 2:
            img.style.visibility="visible";
            img.style.transform="translate(0%)";
            titulo.innerHTML="Nasty People";
            proyectLink.innerHTML="<a href=#><p class=proyect>See proyect</p> ";
            gato.style.visibility="hidden";
            gato.style.transform="translate(0%)";
            buller.style.transform="translate(-200%)";
            identify.innerHTML="Identift for vorterix"
            contador= 0;
            console.log(contador);
            break;

        }
    })
