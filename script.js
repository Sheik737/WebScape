const hamMenu = document.querySelector(".ham-menu");
const menuContainer = document.querySelector('.nav-container')
const Menu = document.querySelector(".links");
const link = document.querySelectorAll(".link");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    Menu.classList.toggle("active");
    menuContainer.classList.toggle("active");
    link.forEach(element => {
            element.classList.toggle('active')         
    });
});