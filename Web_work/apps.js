// function togglemenu() {
//         const toggle = document.querySelector(".toggle");
//         const menu= document.querySelector(".menu");
//         toggle.classList.toggle("active");
//         menu.classList.toggle("active");
//     }
const toggle = document.querySelector(".toggle");
const menu= document.querySelector(".menu");

toggle.addEventListener("click" , ()=>{
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
})

menu.addEventListener("click" , ()=>{
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
})
// Scroll Animation

const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration:2000,
    reset: true
})

sr.reveal ('.home_text',{delay:100})
sr.reveal ('.home-img',{delay:100})
sr.reveal ('.social',{delay:100})

sr.reveal ('.about-img',{delay:100})
sr.reveal ('.heading',{delay:100})
sr.reveal ('.about-text',{delay:100})

// sr.reveal ('.box',{delay:100})
sr.reveal ('.services-content',{delay:100})



sr.reveal ('.work-text',{delay:100})
sr.reveal ('.work-img',{delay:100})

sr.reveal ('.app h1',{delay:100})
sr.reveal ('.app',{delay:100})

sr.reveal ('form input',{delay:100})
sr.reveal ('form textarea',{delay:100})
sr.reveal ('.app',{delay:100})

