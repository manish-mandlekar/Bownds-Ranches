function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "svg",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: true,
    }
})

tl.to("svg", {
    scale: 1,
    top: "3%",
    fill: "#111",

})

tl.to("#nav", {
    color: "#111",
    background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})
document.querySelector("#overlay").addEventListener("mouseenter",function(e){
    document.querySelector("#scroll").style.scale = 1;
})
document.querySelector("#overlay").addEventListener("mouseleave",function(e){
    document.querySelector("#scroll").style.scale = 0;
})

document.querySelector("#overlay").addEventListener("mousemove",function(e){
    document.querySelector("#scroll").style.left = e.x + "px";
    
    document.querySelector("#scroll").style.top = e.y + "px";
})

gsap.to("#img",{
  rotate:6,
  scrollTrigger:{
    trigger:"#img",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    scrub:3,
  }
})


document.querySelector("#page5").addEventListener("mouseenter",function(){
  document.querySelector("#imgdiv").style.scale = 1;
})

document.querySelector("#page5").addEventListener("mouseleave",function(){
  document.querySelector("#imgdiv").style.scale = 0;
})
document.querySelector("#page5").addEventListener("mousemove",function(e){
  document.querySelector("#imgdiv").style.left = e.x + "px";
  document.querySelector("#imgdiv").style.top = e.y + "px";
})
// document.querySelector("#page").addEventListener("mousemove",function(e){
//   document.querySelector(".elem img").style.left = e.x+"px";
//   document.querySelector(".elem img").style.top = e.y +"px"

// })
document.querySelector("#one").addEventListener("mousemove",function(e){
  document.querySelector("#ione").style.left = e.x +"px";
  document.querySelector("#ione").style.top = e.y-600 +"px";
})
document.querySelector("#one").addEventListener("mouseenter",function(e){
  document.querySelector("#ione").style.scale = 1;
})
document.querySelector("#one").addEventListener("mouseleave",function(e){
  document.querySelector("#ione").style.scale = 0;
})

document.querySelector("#two").addEventListener("mousemove",function(e){
  document.querySelector("#itwo").style.left = e.x +"px";
  document.querySelector("#itwo").style.top = e.y-600 +"px";
})
document.querySelector("#two").addEventListener("mouseenter",function(e){
  document.querySelector("#itwo").style.scale = 1;
})
document.querySelector("#two").addEventListener("mouseleave",function(e){
  document.querySelector("#itwo").style.scale = 0;
})



document.querySelector("#three").addEventListener("mousemove",function(e){
  document.querySelector("#ithree").style.left = e.x +"px";
  document.querySelector("#ithree").style.top = e.y-600 +"px";
})
document.querySelector("#three").addEventListener("mouseenter",function(e){
  document.querySelector("#ithree").style.scale = 1;
})
document.querySelector("#three").addEventListener("mouseleave",function(e){
  document.querySelector("#ithree").style.scale = 0;
})


document.querySelector("#four").addEventListener("mousemove",function(e){
  document.querySelector("#ifour").style.left = e.x +"px";
  document.querySelector("#ifour").style.top = e.y-600 +"px";
})
document.querySelector("#four").addEventListener("mouseenter",function(e){
  document.querySelector("#ifour").style.scale = 1;
})
document.querySelector("#four").addEventListener("mouseleave",function(e){
  document.querySelector("#ifour").style.scale = 0;
})

document.querySelector("#five").addEventListener("mousemove",function(e){
  document.querySelector("#ifive").style.left = e.x +"px";
  document.querySelector("#ifive").style.top = e.y-600 +"px";
})
document.querySelector("#five").addEventListener("mouseenter",function(e){
  document.querySelector("#ifive").style.scale = 1;
})
document.querySelector("#five").addEventListener("mouseleave",function(e){
  document.querySelector("#ifive").style.scale = 0;
})

gsap.to("#page7",{
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true,
  }
})
gsap.from("#img-cnt",{
  rotate:5,
  y:400,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 40%",
    end:"top 20%",
    scrub:2,
    // markers:true,
    
    
  }
})
gsap.from("#img-cnt2",{
  rotate:-15,
  y:570,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 10%",
    end:"top -10%",
    scrub:2,
    
    
  }
})
gsap.from("#page2 h1",{
  y:100,
  rotate:6,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    scrub:3,
    start:"top 80%",
    end:"top 70%",
  }
})
gsap.from("#page4 h1",{
  y:200,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    scrub:3,
    start:"top 80%",
    end:"top 70%",
  }
})
gsap.from("#page5 h1",{
  y:100,
  rotate:6,
  duration:3,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    scrub:3,
    start:"top 60%",
    end:"top 50%",
  }
})
gsap.from("#page5 h2",{
  y:100,
  rotate:6,
  duration:3,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    scrub:3,
    start:"top 60%",
    end:"top 50%",
  }
})
gsap.from("#top h1",{
  stagger:0.1,
  rotate:30,
  y:200,
})