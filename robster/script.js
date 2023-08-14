var tl= gsap.timeline({scrollTrigger:{
    trigger : "#page1",
    start : "50% 50%",
    end : "100% 40%",
    scrub: 1,
    pin : true,
}})
tl.to("#bottomh",{
    top: "-28%",
})
tl.to("#bottom",{
    bottom: "-50%",
    
},"a")
tl.to("#top",{
    top: "-50%",  
},"a")



var tl2= gsap.timeline({scrollTrigger :{
    trigger: "#Page2 h2",
    start: "top 30%",
    end : "bottom 15%",
    scrub:2

 }})
tl2.to("#Page2 h2",{
    x : "-70px",

},"b")
tl2.to("#Page2 span",{
    x : "70px",
},"b")

tl2.to("#Page2 img",{
    scale: 1.1,
},)


