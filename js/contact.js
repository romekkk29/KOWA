/* let body=document.querySelector("body");
function stickyScroll(){
    body.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        var y = body.scrollTop;
        console.log(y);
        if(y==0){
         sticky.classList.remove("stickyScroll");
        }
        
    }
       
    )
}
stickyScroll(); */

let body= document.querySelector("body");

console.log(body)
    body.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        let y = body.scrollTop;
        console.log(y)
   
        if(y==0){
         sticky.classList.remove("stickyScroll");
        }
        
    }
       
    )
    let menu=document.querySelector("#menu");
    let xBar=document.querySelector("#xBar");
    
    let menuBar=document.querySelector("#menuBar");
    menu.addEventListener("click",function(e){
        e.preventDefault();
     
       menuBar.style.transform="translate(0%)"
    })    
    xBar.addEventListener("click",function(){
    menuBar.style.transform="translate(100%)"}
    )