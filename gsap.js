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
    // hero section on view animation
    gsap.fromTo(".hero video",
        { scale: .95 },
        {
            scale: 1,
            scrollTrigger: {
                trigger: '.hero',
                start: "top 0%",
                end: "top -30%",
                scrub: true,

            }
        },

    );
    new SplitType('.hero .text')
    gsap.fromTo(".hero .text .char",
        {
            scaleY: 0,
            opacity: 0,
            x: -10,
        },
        {
            scaleY: 1,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.hero .text',
                start: "top 95%",
                end: "top 70%",
                scrub: true,

            }
        },
    );
    // about section on view animation
    new SplitType('.about .text')
    gsap.fromTo(".about .text .char",
        {
            scaleY: 0,
            opacity: 0,
            x: -10,
        },
        {
            scaleY: 1,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.about .text',
                start: "top 95%",
                end: "top 70%",
                scrub: true,

            }
        },
    );
    // testimmonial section on view animation
    new SplitType('.testimonial-container .text')
    gsap.fromTo(".testimonial-container .text .char",
        {
            scaleY: 0,
            opacity: 0,
            x: -10,
        },
        {
            scaleY: 1,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.testimonial-container .text',
                start: "top 95%",
                end: "top 70%",
                scrub: true,

            }
        },
    );
    //process section on view animation
    new SplitType('.process .text')
    gsap.fromTo(".process .text .char",
        {
            scaleY: 0,
            opacity: 0,
            x: -10,
        },
        {
            scaleY: 1,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.process .text',
                start: "top 95%",
                end: "top 70%",
                scrub: true,

            }
        },
    );


})
let logo = document.querySelector('header .logo')
logo.addEventListener('mouseenter', () => {
    gsap.to('.logo h2 .char', {
        opacity: 1,
        x: 0,
    })
    gsap.to('.logo h2 span .char', {
        opacity: 1,
        x: 0,
    })

})
logo.addEventListener('mouseleave', () => {
    gsap.to('.logo h2 .char', {
        opacity: 0,
        x: -10,
    })
    gsap.to('.logo h2 span .char', {
        opacity: 0,
        x: -10,
    })
})
let body = document.querySelector("body")
let mouse = document.querySelector("#mouseeffect")
let video = document.querySelectorAll('video')
body.addEventListener('mousemove', (dets) => {
    gsap.to(mouse, {
        display: 'block',
        x: dets.x + 8,
        y: dets.y + 8,
        duration: .5,
        ease: 'back.out'
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


