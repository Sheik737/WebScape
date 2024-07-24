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
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.hero .text',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    // about section on view animation
    new SplitType('.about h2')
    gsap.fromTo(".about h2 .char",
        {
            scaleY: 0,
            opacity: 0,
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.about h2',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    new SplitType('.about .text')
    gsap.fromTo(".about .text .char",
        {
            scaleY: 0,
            opacity: 0,
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.about .text',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    // testimmonial section on view animation
    new SplitType('.service-section h2')
    gsap.fromTo(".service-section h2 .char",
        {
            scaleY: 0,
            opacity: 0,
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.service-section h2',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    //process section on view animation
    new SplitType('.process h2')
    gsap.fromTo(".process h2 .char",
        {
            scaleY: 0,
            opacity: 0,
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.process h2',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    new SplitType('.process .text')
    gsap.fromTo(".process .text .char",
        {
            scaleY: 0,
            opacity: 0,
            y: 15,
        },
        {
            scaleY: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.process .text',
                start: "top 95%",
                end: "top 50%",
                scrub: true,

            }
        },
    );
    // logo hover animation 
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
    // variable for effect 
    let body = document.querySelector("body")
    let mouse = document.querySelector("#mouseeffect")
    let services = document.querySelectorAll('.service')
    let steps = document.querySelectorAll('.step')
    let herovideo = document.querySelector('.herovideo')
    herovideo.addEventListener('mouseenter', () => {
        gsap.to(mouse, {
            scale: 2.2,
            padding: "12px"
        })
        mouse.innerHTML = '<p>Play Reel</p>'
    })
    herovideo.addEventListener('mouseleave', () => {
        gsap.to(mouse, {
            scale: 1,
            padding: "0px"

        })
        mouse.innerHTML = ''
    })
    mouse.style.padding = '0px'
    services.forEach(e => {
        e.addEventListener('mouseenter', () => {
            gsap.to(mouse, {
                scale: 2.2,
                padding: "12px"
            })
            mouse.innerHTML = '<p>View More</p>'
        })
        e.addEventListener('mouseleave', () => {
            gsap.to(mouse, {
                scale: 1,
                padding: "0px"

            })
            mouse.innerHTML = ''
        })
    })
    steps.forEach(e => {
        e.addEventListener('mouseenter', () => {
            gsap.to(mouse, {
                scale: 2.2,
                padding: "12px"
            })
            mouse.innerHTML = '<p>View More</p>'
        })
        e.addEventListener('mouseleave', () => {
            gsap.to(mouse, {
                scale: 1,
                padding: "0px"

            })
            mouse.innerHTML = ''
        })
    })
    body.addEventListener('mousemove', (dets) => {
        gsap.to(mouse, {
            display: 'block',
            x: dets.x+3,
            y: dets.y+3,
            duration: .5,
            ease: 'back.out'
        })
    })

    // logo text animation 

    new SplitType('.logo h2')
    new SplitType('.logo h2 span')
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




})

