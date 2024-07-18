const hamMenu = document.querySelector(".ham-menu");
const menuContainer = document.querySelector('.nav-container')
const Menu = document.querySelector(".links");
const link = document.querySelectorAll(".link");
const ansMenu = document.querySelectorAll('.answerToggle')
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-container .link');
// console.log(sections)
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
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