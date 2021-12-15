
let body= document.querySelector("body");
let altura2= window.innerHeight || document.body.clientHeight;
let altura=altura2*0.5;
let img1=document.querySelector("#img1");
let img11=document.querySelector("#img11");
let img2=document.querySelector("#img2");
let img22=document.querySelector("#img22");
let img3=document.querySelector("#img3");
let img33=document.querySelector("#img33");
let img4=document.querySelector("#img4");
let img44=document.querySelector("#img44");
let plantillaa=document.querySelector("#plantilla");

img4.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/buller1.jpg" alt=""><img loading="lazy" src="img/buller2.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><video src="img/buller31.m4v" width=100% autoplay muted loop playsinline ></video><img loading="lazy" src="img/buller32.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/buller33.jpg" alt=""><img loading="lazy" src="img/buller34.jpg" alt=""></div><img loading="lazy" src="img/buller4.jpg" alt=""><video src="img/bullerAnim.m4v" width=100% autoplay muted loop playsinline ></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img3.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/eva1Desktop.jpg" alt=""><img loading="lazy" src="img/eva2.jpg" alt=""><img loading="lazy" src="img/eva3.jpg" alt=""><img  loading="lazy" src="img/eva4.jpg" alt=""><img  loading="lazy" src="img/eva5.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva61.jpg" alt=""><img loading="lazy" src="img/eva62.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva63.jpg" alt=""><img loading="lazy" src="img/eva64.jpg" alt=""></div><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img2.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/sierra1.jpg" alt=""><video src="img/V2.mp4" width=100% autoplay muted loop playsinline ></video><img loading="lazy" src="img/sierra2.jpg" alt=""><img loading="lazy" src="img/sierra3.jpg" alt=""><img  loading="lazy" src="img/sierra4.jpg" alt=""><video src="img/sierraAnim.m4v" width=100% autoplay muted loop playsinline></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img22.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/sierra1Mobile.jpg" alt=""><video src="img/V2.mp4" width=100% autoplay muted loop playsinline></video><img loading="lazy" src="img/sierra2.jpg" alt=""><img loading="lazy" src="img/sierra3.jpg" alt=""><img  loading="lazy" src="img/sierra4.jpg" alt=""><video src="img/sierraAnim.m4v" width=100% autoplay muted loop playsinline></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    
    let cruz33=document.querySelector("#dosCruz img");
    cruz33.style.width="70%";
    cruz33.style.height="70%";
    cruz33.style.right="0%";
    cruz.style.right="0%";
    cruz.style.top="1%"
    
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});

img44.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/buller1Mobile.jpg" alt=""><img loading="lazy" src="img/buller2.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><video src="img/buller31.m4v" width=100% autoplay muted loop playsinline ></video><img loading="lazy" src="img/buller32.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/buller33.jpg" alt=""><img loading="lazy" src="img/buller34.jpg" alt=""></div><img loading="lazy" src="img/buller4.jpg" alt=""><video src="img/bullerAnim.m4v" width=100% autoplay muted loop playsinline ></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    
    let cruz33=document.querySelector("#dosCruz img");
    cruz33.style.width="70%";
    cruz33.style.height="70%";
    cruz33.style.right="0%";
    cruz.style.right="0%";
                cruz.style.top="1%"
    
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img33.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/eva1Mobile.jpg" alt=""><img loading="lazy" src="img/eva2.jpg" alt=""><img loading="lazy" src="img/eva3.jpg" alt=""><img  loading="lazy" src="img/eva4.jpg" alt=""><img  loading="lazy" src="img/eva5.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva61.jpg" alt=""><img loading="lazy" src="img/eva62.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva63.jpg" alt=""><img loading="lazy" src="img/eva64.jpg" alt=""></div><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    
    let cruz33=document.querySelector("#dosCruz img");
    cruz33.style.width="70%";
    cruz33.style.height="70%";
    cruz33.style.right="0%";
    cruz.style.right="0%";
    cruz.style.top="1%"
    
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img1.addEventListener("click",function(){
    
        const plantilla=`<div id="fixea"> <video src="img/nasty1Desktop.m4v" width=100% autoplay muted loop playsinline ></video> <img loading="lazy" src="img/nasty2.jpg" alt=""><img loading="lazy" src="img/nasty3.jpg" alt=""><img  loading="lazy" src="img/nasty4.jpg" alt=""><div loading="lazy" class="haceFlex"><img loading="lazy" src="img/nasty51.jpg" alt=""><img loading="lazy" src="img/nasty52.jpg" alt=""></div><img loading="lazy" src="img/nasty6.jpg" alt=""><img loading="lazy" src="img/nasty7.jpg" alt=""><img  loading="lazy" src="img/nasty8.jpg" alt=""><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
   
    
    let main=document.querySelector("main");
 
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
   
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
img11.addEventListener("click",function(){
    const plantilla=`<div id="fixea"> <video src="img/nasty1Mobile.m4v" width=100% autoplay muted loop playsinline></video> <img loading="lazy" src="img/nasty2.jpg" alt=""><img loading="lazy" src="img/nasty3.jpg" alt=""><img  loading="lazy" src="img/nasty4.jpg" alt=""><div loading="lazy" class="haceFlex"><img loading="lazy" src="img/nasty51.jpg" alt=""><img loading="lazy" src="img/nasty52.jpg" alt=""></div><img loading="lazy" src="img/nasty6.jpg" alt=""><img loading="lazy" src="img/nasty7.jpg" alt=""><img  loading="lazy" src="img/nasty8.jpg" alt=""><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    
    let cruz33=document.querySelector("#dosCruz img");
    cruz33.style.width="70%";
    cruz33.style.height="70%";
    cruz33.style.right="0%";
    cruz.style.right="0%";
                cruz.style.top="1%"
    
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
function agarraNus(){
    let agarraNusty=document.querySelector("#agarraNusty");
    agarraNusty.addEventListener("click",function(){
        const plantilla=`<div id="fixea">  <video src="img/nasty1Mobile.m4v" width=100% autoplay muted loop playsinline ></video> <img  src="img/nasty2.jpg" alt=""><img  src="img/nasty3.jpg" alt=""><img   src="img/nasty4.jpg" alt=""><div class="haceFlex"><img  src="img/nasty51.jpg" alt=""><img src="img/nasty52.jpg" alt=""></div><img  src="img/nasty6.jpg" alt=""><img  src="img/nasty7.jpg" alt=""><img  src="img/nasty8.jpg" alt=""><div id="contacModal"><img  id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
        plantillaa.innerHTML=plantilla;
        let main=document.querySelector("main");
   
        main.style.opacity="0.2";
        main.style.pointerEvents="none";
        let sstic=document.querySelector(".sticky");
        sstic.style.visibility="hidden";
        body.style.overflow="hidden";
        let fixea=document.querySelector("#fixea");
        fixea.style.opacity="1";
        
        let cruz=document.querySelector("#dosCruz");
        cruz.style.display="flex";
        
        let cruz33=document.querySelector("#dosCruz img");
        cruz33.style.width="70%";
        cruz33.style.height="70%";
        cruz33.style.right="0%";
        cruz.style.right="0%";
                cruz.style.top="1%"
        
        let header=document.querySelector("header");
        header.style.opacity="0.2";
        header.style.pointerEvents="none";
        scroleaParriba();
        quitar();
    })};
    function agarraEva(){
        let agarraEva=document.querySelector("#agarraEva");
        agarraEva.addEventListener("click",function(){
            const plantilla=`<div id="fixea">  <img loading="lazy" src="img/eva1Mobile.jpg" alt=""><img loading="lazy" src="img/eva2.jpg" alt=""><img loading="lazy" src="img/eva3.jpg" alt=""><img  loading="lazy" src="img/eva4.jpg" alt=""><img  loading="lazy" src="img/eva5.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva61.jpg" alt=""><img loading="lazy" src="img/eva62.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva63.jpg" alt=""><img loading="lazy" src="img/eva64.jpg" alt=""></div><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
            plantillaa.innerHTML=plantilla;
            let main=document.querySelector("main");
       
            main.style.opacity="0.2";
            main.style.pointerEvents="none";
            let sstic=document.querySelector(".sticky");
            sstic.style.visibility="hidden";
            body.style.overflow="hidden";
            let fixea=document.querySelector("#fixea");
            fixea.style.opacity="1";
            let cruz=document.querySelector("#dosCruz");
            cruz.style.display="flex";
            
            let cruz33=document.querySelector("#dosCruz img");
            cruz33.style.width="70%";
            cruz33.style.height="70%";
            cruz33.style.right="0%";
            cruz.style.right="0%";
            cruz.style.top="1%"
            
            let header=document.querySelector("header");
            header.style.opacity="0.2";
            header.style.pointerEvents="none";
            scroleaParriba();
            quitar();
        })};
        function agarraBuller(){
            let agarraBuller=document.querySelector("#agarraBuller");
            agarraBuller.addEventListener("click",function(){
                const plantilla=`<div id="fixea">  <img loading="lazy" src="img/buller1Mobile.jpg" alt=""><img loading="lazy" src="img/buller2.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><video src="img/buller31.m4v" width=100% autoplay muted loop playsinline></video><img loading="lazy" src="img/buller32.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/buller33.jpg" alt=""><img loading="lazy" src="img/buller34.jpg" alt=""></div><img loading="lazy" src="img/buller4.jpg" alt=""><video src="img/bullerAnim.m4v" width=100% autoplay muted loop playsinline ></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;;
                plantillaa.innerHTML=plantilla;
                let main=document.querySelector("main");
           
                main.style.opacity="0.2";
                main.style.pointerEvents="none";
                let sstic=document.querySelector(".sticky");
                sstic.style.visibility="hidden";
                body.style.overflow="hidden";
                let fixea=document.querySelector("#fixea");
                fixea.style.opacity="1";
                let cruz=document.querySelector("#dosCruz");
                cruz.style.display="flex";
                
                let cruz33=document.querySelector("#dosCruz img");
                cruz33.style.width="70%";
                cruz33.style.height="70%";
                cruz33.style.right="0%";
                cruz.style.right="0%";
                cruz.style.top="1%";
                
                let header=document.querySelector("header");
                header.style.opacity="0.2";
                header.style.pointerEvents="none";
                scroleaParriba();
                quitar();
            })};
    function agarraNus2(){
        let agarraNusty2=document.querySelector("#agarraNusty2");
        agarraNusty2.addEventListener("click",function(){
            const plantilla=`<div id="fixea">  <video src="img/nasty1Desktop.m4v" width=100% autoplay muted loop playsinline></video><img loading="lazy" src="img/nasty2.jpg" alt=""><img loading="lazy" src="img/nasty3.jpg" alt=""><img  loading="lazy" src="img/nasty4.jpg" alt=""><div loading="lazy" class="haceFlex"><img loading="lazy" src="img/nasty51.jpg" alt=""><img loading="lazy" src="img/nasty52.jpg" alt=""></div><img loading="lazy" src="img/nasty6.jpg" alt=""><img loading="lazy" src="img/nasty7.jpg" alt=""><img  loading="lazy" src="img/nasty8.jpg" alt=""><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
            plantillaa.innerHTML=plantilla;
            let main=document.querySelector("main");
       
            main.style.opacity="0.2";
            main.style.pointerEvents="none";
            let sstic=document.querySelector(".sticky");
            sstic.style.visibility="hidden";
            body.style.overflow="hidden";
            let fixea=document.querySelector("#fixea");
            fixea.style.opacity="1";
            let cruz=document.querySelector("#dosCruz");
            cruz.style.display="flex";
            let header=document.querySelector("header");
            header.style.opacity="0.2";
            header.style.pointerEvents="none";
            scroleaParriba();
            quitar();
        });
}
function agarraBuller2(){
    let agarraBuller2=document.querySelector("#agarraBuller2");
    agarraBuller2.addEventListener("click",function(){
        const plantilla=`<div id="fixea">  <img loading="lazy" src="img/buller1.jpg" alt=""><img loading="lazy" src="img/buller2.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><video src="img/buller31.m4v" width=100% autoplay muted loop playsinline ></video><img loading="lazy" src="img/buller32.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/buller33.jpg" alt=""><img loading="lazy" src="img/buller34.jpg" alt=""></div><img loading="lazy" src="img/buller4.jpg" alt=""><video src="img/bullerAnim.m4v" width=100% autoplay muted loop playsinline></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
        plantillaa.innerHTML=plantilla;
        let main=document.querySelector("main");
   
        main.style.opacity="0.2";
        main.style.pointerEvents="none";
        let sstic=document.querySelector(".sticky");
        sstic.style.visibility="hidden";
        body.style.overflow="hidden";
        let fixea=document.querySelector("#fixea");
        fixea.style.opacity="1";
        let cruz=document.querySelector("#dosCruz");
        cruz.style.display="flex";
        let header=document.querySelector("header");
        header.style.opacity="0.2";
        header.style.pointerEvents="none";
        scroleaParriba();
        quitar();
    });
}
function agarraEva2(){
    let agarraEva2=document.querySelector("#agarraEva2");
    agarraEva2.addEventListener("click",function(){
        const plantilla=`<div id="fixea">  <img loading="lazy" src="img/eva1Desktop.jpg" alt=""><img loading="lazy" src="img/eva2.jpg" alt=""><img loading="lazy" src="img/eva3.jpg" alt=""><img  loading="lazy" src="img/eva4.jpg" alt=""><img  loading="lazy" src="img/eva5.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva61.jpg" alt=""><img loading="lazy" src="img/eva62.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva63.jpg" alt=""><img loading="lazy" src="img/eva64.jpg" alt=""></div><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
        plantillaa.innerHTML=plantilla;
        let main=document.querySelector("main");
   
        main.style.opacity="0.2";
        main.style.pointerEvents="none";
        let sstic=document.querySelector(".sticky");
        sstic.style.visibility="hidden";
        body.style.overflow="hidden";
        let fixea=document.querySelector("#fixea");
        fixea.style.opacity="1";
        let cruz=document.querySelector("#dosCruz");
        cruz.style.display="flex";
        let header=document.querySelector("header");
        header.style.opacity="0.2";
        header.style.pointerEvents="none";
        scroleaParriba();
        quitar();
    });
}
function scroleaParriba(){
  let fixea=document.querySelector("#fixea");
  fixea.addEventListener("scroll",function(){
      fixea.style.transform="translateY(-10%)"
  })
};
function quitar(){
   let dosCruz=document.querySelector("#dosCruz");
   dosCruz.addEventListener("click",function(e){
    let header=document.querySelector("header");
    header.style.opacity="1"
       e.preventDefault();
       dosCruz.style.display="none";
       let main=document.querySelector("main");
       main.style.opacity="1";
       main.style.pointerEvents="painted";
       header.style.pointerEvents="painted";
       let sstic=document.querySelector(".sticky");
       sstic.style.opacity="1";
      let fixea=document.querySelector("#fixea");
      fixea.style.display="none";
      body.style.opacity="1";
      body.style.overflowY="scroll";
      sstic.style.visibility="visible";
   })
}


    body.addEventListener("scroll", function(){   
        let sticky= document.querySelector(".sticky");
        sticky.classList.add("stickyScroll");
        let y = body.scrollTop;
        
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
    
    body.style.WebkitOverflowScrolling="touch"; 

}
)
    let contador=0;
    let img=document.querySelector(".nasty");
    let imgVerdadero=document.querySelector(".verdaderoNasty")
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
            proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraEva2 class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            agarraEva2()
            console.log(contador);

           
           
            break;
            case 1: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-150%)";
            buller.style.transform="translate(-111.5%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraBuller2 class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            imgVerdadero.style.left="100%";
            imgVerdadero.style.transform="translate(-56%)";
            agarraBuller2();
            console.log(contador);
            break;
            case 2:
            img.style.visibility="visible";
            imgVerdadero.style.transform="translate(-114%)";
            buller.style.transform="translate(-50%)";
            titulo.innerHTML="Nasty People";
            proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraNusty2 class=proyect>See proyect</p><div class=subrayado2></div></a>";
            gato.style.left="300%";
            gato.style.transform="translate(-260%)";
            gato.style.zIndex="1";
            buller.style.zIndex="15";
            buller.style.transform="translate(-200%)";
            identify.innerHTML="Identity for vorterix";
            contador++;
            agarraNus2();
            console.log(contador);
            break; 
            case 3:
                gato.style.visibility="visible";
                imgVerdadero.style.transform="translate(-216%)";
                gato.style.transform="translate(-311.5%)";
                buller.style.zIndex="0";
                buller.style.left="300%";
                buller.style.transform="translate(-270%)";
                titulo.innerHTML="Mandatos";
                identify.innerHTML="Campaña - Eva Miller";
                proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraEva2 class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                agarraEva2();
                console.log(contador);
                break; 
            case 4: 
            buller.style.visibility="visible";
            gato.style.transform="translate(-400%)";
            buller.style.transform="translate(-311.5%)";
            titulo.innerHTML="Buller";
            identify.innerHTML="Web Site";
            proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraBuller2 class=proyect>See proyect</p><div class=subrayado2></div></a>";
            contador= contador+1;
            gato.style.zIndex="14";
            buller.style.zIndex="12";
            img.style.zIndex="-2";
            img.style.left="200%";
            img.style.transform="translate(-143%)";
            agarraBuller2();
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
                proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraEva class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                console.log(contador);
                agarraEva();
               
                break;
                case 1: 
                buller.style.visibility="visible";
                gato.style.transform="translate(-160%)";
                buller.style.transform="translate(-110%)";
                titulo.innerHTML="Buller";
                identify.innerHTML="Web Site";
                proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraBuller class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                gato.style.zIndex="14";
                buller.style.zIndex="12";
                img.style.left="200%";
                img.style.transform="translate(-100%)";
                agarraBuller();
                console.log(contador);
                break;
                case 2:
                img.style.visibility="visible";
                img.style.transform="translate(-200%)";
                imgVerdadero.style.transform="translate(-100%)";
                titulo.innerHTML="Nasty People";
                proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraNusty class=proyect>See proyect</p><div class=subrayado2></div></a>";
                gato.style.left="300%";
                gato.style.transform="translate(-200%)";
                gato.style.zIndex="1";
                buller.style.zIndex="45";
                buller.style.transform="translate(-210%)";
                identify.innerHTML="Identity for vorterix";
    
                contador++;
                agarraNus();
                console.log(contador);
                break; 
                case 3:
                    gato.style.visibility="visible";
                    img.style.transform="translate(-300%)";
                    gato.style.transform="translate(-300%)";
                    imgVerdadero.style.transform="translate(-200%)";
                    buller.style.zIndex="0";
                    buller.style.left="300%";
                    buller.style.transform="translate(-200%)";
                    titulo.innerHTML="Mandatos";
                    identify.innerHTML="Campaña - Eva Miller";
                    proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraEva class=proyect>See proyect</p><div class=subrayado2></div></a>";
                    contador= contador+1;
                    agarraEva();
                    console.log(contador);
                    break; 
                case 4: 
                buller.style.visibility="visible";
                gato.style.transform="translate(-400%)";
                buller.style.transform="translate(-299%)";
                titulo.innerHTML="Buller";
                identify.innerHTML="Web Site";
                proyectLink.innerHTML="<a id=subra3  href=#><p id=agarraBuller class=proyect>See proyect</p><div class=subrayado2></div></a>";
                contador= contador+1;
                gato.style.zIndex="14";
                buller.style.zIndex="12";
                img.style.zIndex="-2";
                img.style.left="400%";
                img.style.transform="translate(-393%)";
                agarraBuller();
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
    
       contador=5;
        
    
    }) ;


    let sectionBar=document.querySelector(".unaSection");
    let progressBar=document.querySelector("#progressBar");
   sectionBar.addEventListener("scroll",function(e){
        let scrollX= e.currentTarget.scrollLeft*70;
        let progressX= scrollX/1256;
       progressBar.style.width= progressX+20+ "%"
   })


   
   let segundo=document.querySelector("#segundo11");
   let segundo2=document.querySelector("#segundo12");
   segundo.addEventListener("mouseover",function(){
       img1.style.opacity="0.5";

   })
segundo2.addEventListener("mouseover",function(){
    img1.style.opacity="0.5";

})
  img1.addEventListener("mouseleave",function(){
    img1.style.opacity="1"
  })
  img1.addEventListener("mouseover",function(){
    img1.style.opacity="0.5"
  })
  
  let segundo22=document.querySelector("#segundo22");
  let segundo23=document.querySelector("#segundo23");
  segundo22.addEventListener("mouseover",function(){
      img2.style.opacity="0.5";

  })
segundo23.addEventListener("mouseover",function(){
   img2.style.opacity="0.5";

})
 img2.addEventListener("mouseleave",function(){
   img2.style.opacity="1"
 })
 img2.addEventListener("mouseover",function(){
   img2.style.opacity="0.5"
 })
 let segundo33=document.querySelector("#segundo33");
  let segundo34=document.querySelector("#segundo34");
  segundo33.addEventListener("mouseover",function(){
      img3.style.opacity="0.5";

  })
segundo34.addEventListener("mouseover",function(){
   img3.style.opacity="0.5";

})
 img3.addEventListener("mouseleave",function(){
   img3.style.opacity="1"
 })
 img3.addEventListener("mouseover",function(){
   img3.style.opacity="0.5"
 })
 let segundo44=document.querySelector("#segundo44");
 let segundo45=document.querySelector("#segundo45");
 segundo44.addEventListener("mouseover",function(){
     img4.style.opacity="0.5";

 })
segundo45.addEventListener("mouseover",function(){
  img4.style.opacity="0.5";

})
img4.addEventListener("mouseleave",function(){
  img4.style.opacity="1"
})
img4.addEventListener("mouseover",function(){
  img4.style.opacity="0.5"
})

segundo44.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/buller1.jpg" alt=""><img loading="lazy" src="img/buller2.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><video src="img/buller31.m4v" width=100% autoplay muted loop playsinline ></video><img loading="lazy" src="img/buller32.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/buller33.jpg" alt=""><img loading="lazy" src="img/buller34.jpg" alt=""></div><img loading="lazy" src="img/buller4.jpg" alt=""><video src="img/bullerAnim.m4v" width=100% autoplay muted loop playsinline ></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
segundo33.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/eva1Desktop.jpg" alt=""><img loading="lazy" src="img/eva2.jpg" alt=""><img loading="lazy" src="img/eva3.jpg" alt=""><img  loading="lazy" src="img/eva4.jpg" alt=""><img  loading="lazy" src="img/eva5.jpg" alt=""><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva61.jpg" alt=""><img loading="lazy" src="img/eva62.jpg" alt=""></div><div loading="lazy" class="haceFlex bullerDec"><img loading="lazy" src="img/eva63.jpg" alt=""><img loading="lazy" src="img/eva64.jpg" alt=""></div><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
segundo22.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <img loading="lazy" src="img/sierra1.jpg" alt=""><video src="img/V2.mp4" width=100% autoplay muted loop playsinline></video><img loading="lazy" src="img/sierra2.jpg" alt=""><img loading="lazy" src="img/sierra3.jpg" alt=""><img  loading="lazy" src="img/sierra4.jpg" alt=""><video src="img/sierraAnim.m4v" width=100% autoplay muted loop playsinline ></video><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
   
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});
segundo.addEventListener("click",function(){
    const plantilla=`<div id="fixea">  <video src="img/nasty1Desktop.m4v" width=100% autoplay muted loop playsinline></video><img loading="lazy" src="img/nasty2.jpg" alt=""><img loading="lazy" src="img/nasty3.jpg" alt=""><img  loading="lazy" src="img/nasty4.jpg" alt=""><div loading="lazy" class="haceFlex"><img loading="lazy" src="img/nasty51.jpg" alt=""><img loading="lazy" src="img/nasty52.jpg" alt=""></div><img loading="lazy" src="img/nasty6.jpg" alt=""><img loading="lazy" src="img/nasty7.jpg" alt=""><img  loading="lazy" src="img/nasty8.jpg" alt=""><div id="contacModal"><img loading="lazy" id="loge" src="img/Logo.jpg" alt=""><div><p>BE CURIOUS</p><p>BE BRAVE</p><p>IT'S POSSIBLE</p><div class="carGa2"><a class="cargaMas2 sis2" href="contact.html">Contact Us</a></div></div></div></div>`;
    plantillaa.innerHTML=plantilla;
    let main=document.querySelector("main");
 
    main.style.opacity="0.2";
    main.style.pointerEvents="none";
    let sstic=document.querySelector(".sticky");
    sstic.style.visibility="hidden";
    body.style.overflow="hidden";
    let fixea=document.querySelector("#fixea");
    fixea.style.opacity="1";
   
    let cruz=document.querySelector("#dosCruz");
    cruz.style.display="flex";
    let header=document.querySelector("header");
    header.style.opacity="0.2";
    header.style.pointerEvents="none";
    scroleaParriba();
    quitar();
});