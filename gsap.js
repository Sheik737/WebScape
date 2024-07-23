let mm = gsap.matchMedia()
mm.add("(min-width:1200px)", () => {
    gsap.to(".testimonial", {
        translateX: "-215%",
        scrollTrigger: {
            trigger: ".testimonials-section",
            scrub: true,
            pin: true,
            start: "top 0%",
            end: "top -150%",
        }
    })


})
let body = document.querySelector("body")
let mouse = document.querySelector("#mouseeffect")
let video = document.querySelectorAll('video')
body.addEventListener('mousemove',(dets)=>{
    gsap.to(mouse,{
        display:'block',
        x:dets.x+5,
        y:dets.y+5,
        duration:.5,
        ease:'back.out'
    })
})

// logo text animation 
let logohead = new SplitType('.logo h2')
let logoheadspan = new SplitType('.logo h2 span')
window.addEventListener("scroll", () => {
    if (scrollY >= 10) {
        gsap.to('.logo h2 .char', {
            opacity: 0,
            x: -10,
        })
        gsap.to('.logo h2 span .char', {
            opacity: 0,
            x: -10,
        })
    } else {
        gsap.to('.logo h2 .char', {
            opacity: 1,
            x: 0,
        })
        gsap.to('.logo h2 span .char', {
            opacity: 1,
            x: 0,
        })
    }
})
// hero section on view animation
