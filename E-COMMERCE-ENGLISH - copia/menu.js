const menu = document.querySelector("#open-menu");
const notMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

menu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

notMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})
