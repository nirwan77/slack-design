const list= document.querySelector(".nav__list--js");
const nav_open= document.querySelector(".button__open--js");
const nav_close= document.querySelector (".button__close--js");
const smile=document.querySelector(".nav-smiling--js");
const laugh=document.querySelector(".nav-laughing--js");

nav_open.addEventListener("click", ()=>{
    console.log("a");
    list.classList.toggle("invisible");
    nav_open.classList.toggle("invisible");
    nav_close.classList.toggle("invisible");
})

nav_close.addEventListener("click", ()=>{
    list.classList.toggle("invisible");
    nav_open.classList.toggle("invisible");
    nav_close.classList.toggle("invisible");
})

smile.addEventListener("click",()=>{
    smile.classList.toggle("hidden");
    laugh.classList.toggle("hidden")
})

laugh.addEventListener("click",()=>{
    smile.classList.toggle("hidden");
    laugh.classList.toggle("hidden")
})