const hamMenu = document.querySelector(".ham-menu");
const menuContainer = document.querySelector('.nav-container')
const Menu = document.querySelector(".links");
const link = document.querySelectorAll(".link");


const ansMenu = document.querySelectorAll('.answerToggle')

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    Menu.classList.toggle("active");
    menuContainer.classList.toggle("active");
    link.forEach(element => {
            element.classList.toggle('active')         
    });
});

ansMenu.forEach(element => {
    element.addEventListener("click",()=>{
        element.parentElement.nextElementSibling.classList.toggle('active')
        element.classList.toggle('active')
    })
    
});