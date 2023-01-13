let closeMenu = document.querySelector(".close-menu");
let openMenu = document.querySelector(".open-menu");
let aside = document.querySelector(".aside");

openMenu.addEventListener("click", ()=>{
    openMenu.classList.add("hide");
    closeMenu.classList.remove("hide");
    aside.classList.remove("hide");
})
closeMenu.addEventListener("click", ()=>{
    openMenu.classList.remove("hide");
    closeMenu.classList.add("hide");
    aside.classList.add("hide");
})

