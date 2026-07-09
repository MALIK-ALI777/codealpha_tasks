// ===========================
// Typing Effect
// ===========================

const words = [
    "Frontend Developer",
    "Computer Science Student",
    "Web Designer",
    "JavaScript Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0, charIndex++);
    }
    else{

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 80 : 120;

    if(!deleting && charIndex === currentWord.length + 1){

        deleting = true;
        speed = 1500;

    }

    if(deleting && charIndex === 0){

        deleting = false;
        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ===========================
// Dark / Light Theme
// ===========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    }
    else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

});


// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});


// ===========================
// Close Menu After Click
// ===========================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===========================
// Scroll Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});