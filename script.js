function locoJS(){
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

locoJS();



var tl = gsap.timeline({scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"0% 90%",
    end:"20% 40%",
    scrub:1,
}})

tl.to("#fanta",{
    top:"178%",
    left:"22%"
},'page2');
tl.to("#orange",{
    top:"190%",
    left:"25%",
},'page2')
tl.to("#leaf1",{
    top:"121%",
    left:"83%",
    rotate:270,
},'page2');
tl.to("#orange2",{
    top:"190%",
    left:"70%",
    scale:0.7,
},'page2')
tl.to("#leaf2",{
    top:"120%",
    left:"5%",
    rotate:90,
},'page2')

var tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        start:"0% 90%",
        end:"20% 50%",
        scrub:1,
    }
})  

tl2.to("#fanta",{
    top:"290%",
    left:"50%",
    scale:0.7,
    filter:"dropShadow(0 0 100px black)",
},'page3');
tl2.to("#orange",{
    top:"270%",
    left:"42%",
    filter:"dropShadow(0 0 100px black)",
    scale:1.2,
},'page3');
tl2.from("#cocacola",{
    left:"-10%",
    rotate:-180,
},'page3');
tl2.from("#sprite",{
    right:"-10%",
    rotate:180,
},'page3');
tl2.from("#lemon",{
    right:"-10%",
    rotate:360,
},'page3')