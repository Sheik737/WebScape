const hamMenu = document.querySelector(".ham-menu");
const menuContainer = document.querySelector('.nav-container')
const header = document.querySelector('header')
const Menu = document.querySelector(".links");
const link = document.querySelectorAll(".link");
const ansMenu = document.querySelectorAll('.answerToggle')
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-container .link');
const services = document.querySelectorAll('.service')
const steps = document.querySelectorAll('.step')
let lastScrollY = window.scrollY;


services.forEach(element => {
    element.addEventListener('mouseenter',()=>{
        element.childNodes[1].play()
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[1].pause()
    })
});
steps.forEach(element => {
    element.addEventListener('mouseenter',()=>{
        element.childNodes[1].play()
        
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[1].pause()
    })
});
// console.log(sections)
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const index = Array.from(sections).indexOf(entry.target);
        const navLink = navLinks[index];

        if (entry.isIntersecting) {
            navLink.classList.add('view');
        } else {
            navLink.classList.remove('view');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});




hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    Menu.classList.toggle("active");
    menuContainer.classList.toggle("active");
    link.forEach(element => {
        element.classList.toggle('active')
    });
});

ansMenu.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.nextElementSibling.classList.toggle('active')
        element.classList.toggle('active')
    })

});