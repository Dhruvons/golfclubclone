var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x) /*mouse ki x position ki dimention */
    // console.log(dets.y)
    // console.log(dets.z)

    crsr.style.left = dets.x+22+"px"
    crsr.style.top = dets.y+"px"

    // for blur 
    blur.style.left = dets.x -200 +"px" /*150 kyu ki blur wala side me chal rha tha thorda */
    blur.style.top = dets.y -200 +"px"

})


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function() {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


gsap.to("#nav",{
    backgroundColor:"#000", /*in camel font */
    duration:1,
    height:"110px",
    scrollTrigger:{ /*upper wali chheje fire kab honi h eskeliye h ye */
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -12%",
        scrub:1 /*loop me chalane k liye or true bhi de sakte h 2 dene se smoothness ayi gi */
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub: 2
        }
})

gsap.from("#about-us img,#about-us-in",{ /*about me jese hi scroll karen to animation ho */
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3,/*ek ek kar k aye */
    scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1.5

    }
})


gsap.from(".card",{ /*card me jese hi scroll karen to animation ho */
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.3,/*ek ek kar k aye */
    scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1
    }
})

gsap.from("#colon1",{ 
    x:-70,
    y:-70,
    scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4

    }
})

gsap.from("#colon2",{ 
    x:70,
    y:70,
    scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4

    }
})

gsap.from("#page4 h1",{ 
    y:50,
    scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3

    }
})