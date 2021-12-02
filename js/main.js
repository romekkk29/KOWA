

function stickyScroll(){
    window.addEventListener("scroll", function(){
        let sticky= document.querySelector(".sticky")
        sticky.classList.add("stickyScroll")
    })
}
stickyScroll();


    let carrusel=document.querySelector("#carrusel");
    let contador=0;
    let img=document.querySelector(".nasty");
    let gato=document.querySelector(".gato");
    let titulo=document.querySelector(".titulo");
    let buller=document.querySelector(".buller")
    carrusel.addEventListener("click", function(e){
        e.preventDefault();
        
        //img.src="img/gato.png";
        //img.style.transition.duration="3s"
        //gato.style.left="0%"
        console.log(contador);
        switch(contador){
            case 0:   
            gato.style.visibility="visible";
            img.style.transform="translate(-100%)";
            gato.style.transform="translate(-100%)";
            buller.style.transform="translate(0%)";
            buller.style.visibility="hidden";
            titulo.innerHTML="Mandatos";
            contador= contador+1;
            console.log(contador);
            break;
            case 1: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-200%)";
            buller.style.transform="translate(-100%)";
            titulo.innerHTML="Buller";
            contador= contador+1;
            img.style.visibility="hidden";
            img.style.transform="translate(100%)";
            console.log(contador);
            break;
            case 2:
                img.style.visibility="visible";
           
            img.style.transform="translate(0%)";
            titulo.innerHTML="Nasty People";
            gato.style.visibility="hidden";
            
            gato.style.transform="translate(0%)";
            buller.style.transform="translate(-200%)";
            contador= 0;
            console.log(contador);
            break;

        }
    })
