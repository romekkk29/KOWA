function stickyScroll(){
    
    window.addEventListener("scroll", function(){
        let sticky= document.querySelector(".sticky"); 
       sticky.classList.add("stickyScroll");
    }
       
    )
}
stickyScroll();
