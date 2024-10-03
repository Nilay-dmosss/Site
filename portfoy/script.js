const menu = document.querySelector(".navbar");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuLinks = document.querySelectorAll(".menu-link"); /*menu */

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open"); /* open */
        menu.style.transition = "transform 0.5s ease"; /* transtion*/
    });
});

/* memu-link  */
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open"); // 
    });
});

/* width menu */
menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
});

/* ----------------------------------------------- */

/* ----------------------------------------------- */

/* header*/
const header = document.querySelector(".header");
const img = document.querySelector(".img");


function changeHeaderBg() {
    const scrollY = window.scrollY;
    header.style.transition = "all 0.2s ease";

    /* scroll */
    if (scrollY > 0) {
        header.style.background = "linear-gradient(to right,rgb(60, 4, 77),rgb(0, 0, 0))";
        header.style.height = "50px";
        header.style.boxShadow = "transparent";
        img.src = "./logom2.svg";
    }
    /* logom */
    else {
        header.style.height = "70px";
        header.style.background = "transparent";
        header.style.boxShadow = "linear-gradient(to Top,rgb(60, 4, 77),rgb(0, 0, 0))";
        img.src = "./img/logom2.svg";

    }
}

/* */
window.addEventListener("scroll", () => {
    changeHeaderBg();
})
var typed = new Typed(".text", {
   strings:["Frontend Developer","E-commerce Specialist","Interesting Design","Like English,Korean","Skills"] ,
   typedSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
});