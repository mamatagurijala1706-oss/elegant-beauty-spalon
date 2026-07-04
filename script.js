//==============================
// STICKY NAVBAR
//==============================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

//==============================
// MOBILE MENU
//==============================

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

const menuIcon = document.getElementById("menu-icon");

menuBtn.onclick=()=>{

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){

        menuIcon.classList.remove("ri-menu-3-line");

        menuIcon.classList.add("ri-close-line");

    }

    else{

        menuIcon.classList.remove("ri-close-line");

        menuIcon.classList.add("ri-menu-3-line");

    }

};

document.querySelectorAll(".navbar a").forEach(link=>{

    link.onclick=()=>{

        navbar.classList.remove("active");

        menuIcon.classList.remove("ri-close-line");

        menuIcon.classList.add("ri-menu-3-line");

    };

});
//==============================
// SCROLL REVEAL
//==============================

const reveals = document.querySelectorAll(
".reveal,.reveal-left,.reveal-right"
);

function revealElements(){

    reveals.forEach(element=>{

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        const visible = 120;

        if(top < windowHeight - visible){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealElements);

window.addEventListener("load",revealElements);
//=========================================
// Animated Counters
//=========================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = parseFloat(counter.dataset.target);

            let count = 0;

            const increment = target/100;

            const updateCounter=()=>{

                if(count<target){

                    count+=increment;

                    if(target % 1 !==0){

                        counter.innerText=count.toFixed(1);

                    }

                    else{

                        counter.innerText=Math.floor(count);

                    }

                    requestAnimationFrame(updateCounter);

                }

                else{

                    if(target===4.7){

                        counter.innerText="4.7★";

                    }

                    else{

                        counter.innerText=target+"+";

                    }

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll",startCounters);
//======================================
// LIGHTBOX
//======================================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=image.src;

    });

});

closeLightbox.onclick=()=>{

    lightbox.classList.remove("show");

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

};
//=====================================
// SCROLL TO TOP
//=====================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollTopBtn.classList.add("show");

    }

    else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});