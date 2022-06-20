const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}))








 let mainImg = document.getElementById('mainImgg')
let imgs = document.getElementsByClassName('imgs'),
t=0;


function play (){

    t=t+1;

    if (t===imgs.length) {
        t=0;        
    }

    mainImg.src = imgs[t].src;
}

setInterval(play,1500) ;








