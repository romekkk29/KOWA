function stickyScroll(){
    window.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        var y = window.scrollY;
        if(y==0){
         sticky.classList.remove("stickyScroll");
        }
        
    }
       
    )
}
stickyScroll();