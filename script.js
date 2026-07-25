console.log("Portfolio Loaded Successfully!");

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});
window.onload = function () {

    console.log("Typed.js starting...");

    new Typed(".typing", {
        strings: [
            "Web Designer",
            "Front-End Developer",
            "Engineering Student",
            "Freelancer"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });

};
// =====================
// Theme Toggle
// =====================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    }else{

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

    }

});
// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// ===============================
// Animated Skills
// ===============================

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const bar = entry.target;

            bar.style.width = bar.dataset.width + "%";

        }

    });

},{
    threshold:.5
});

skillBars.forEach(bar=>{

    skillObserver.observe(bar);

});
// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
document.querySelectorAll(".sidebar nav a").forEach(link=>{
    link.addEventListener("click",()=>{
        sidebar.classList.remove("active");
    });
});