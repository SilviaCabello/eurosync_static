const skipBtn = document.getElementById("skip");
const hero = document.querySelectorAll(".hero")

if(skipBtn) {
    skipBtn.addEventListener("click", () => {
        for (var i=0,l=hero.length;i<l;i++) {
            hero[i].classList.add("opacity_hero")
            document.getElementById("nav").style.opacity = "100%"
        }
        window.setTimeout(function() {
            for (var i=0,l=hero.length;i<l;i++) {
                hero[i].classList.add("display_hero_not")
            }
        },1000);
    })
}


// Sound & Silence Video //

const sound = document.getElementById("sound");
const silence = document.getElementById("silence");
const introVideo = document.getElementById("intro_video");

if(silence) {
    silence.classList.add("button_active");
    
    sound.addEventListener("click", () => {
        introVideo.muted = false;
        silence.classList.remove("button_active");
        sound.classList.add("button_active");
    })
    
    silence.addEventListener("click", () => {
        introVideo.muted = true;
        sound.classList.remove("button_active");
        silence.classList.add("button_active");
    })
}


// Start Video //

const start = document.getElementById("start");

if(start) {
    start.addEventListener("click", () => {
        introVideo.pause();
        introVideo.currentTime = 0;
        introVideo.play();
        introVideo.loop = false;
    
        for (var i=0,l=hero.length;i<l;i++) {
            hero[i].classList.add("play_intro")
        }
    
        window.setTimeout(function() {
            for (var i=0,l=hero.length;i<l;i++) {
                hero[i].classList.add("play_intro_timeOut")
            }
        },800);
    
        introVideo.onended = function() {
             for (var i=0,l=hero.length;i<l;i++) {
            hero[i].classList.add("opacity_hero")
            }
            document.getElementById("nav").style.opacity = "100%"
            window.setTimeout(function() {
                for (var i=0,l=hero.length;i<l;i++) {
                    hero[i].classList.add("display_hero_not")
                }
            },1000);
        };
    })
}


// Section Intro Video //

const sectionVideo = document.querySelectorAll(".section_intro_video video");
for (var i=0,l=sectionVideo.length;i<l;i++) {
    sectionVideo[i].onended = function(ev) {
        ev.target.parentNode.classList.add("finished_video");

        window.setTimeout(function() {
            ev.target.parentNode.style.display = "none"
        },1000);
   };

   sectionVideo[i].addEventListener("click", (ev) => {
        ev.target.parentNode.classList.add("finished_video");

        window.setTimeout(function() {
            ev.target.parentNode.style.display = "none"
        },1000);
   })
}


// Play video & stop video //

const playBtn = document.querySelectorAll("button.play");
const closeVideoBtn = document.querySelectorAll(".swiper-slide-video button.zuruck_btn");

for (var i=0,l=playBtn.length;i<l;i++) {
    playBtn[i].addEventListener("click", (ev) => {
        ev.target.parentNode.nextElementSibling.nextElementSibling.classList.add("play_video")
        ev.target.parentNode.parentNode.parentNode.previousElementSibling.style.display = "none"
    })
}

for (var i=0,l=closeVideoBtn.length;i<l;i++) {
    closeVideoBtn[i].addEventListener("click", (ev) => {
        ev.target.parentNode.classList.remove("play_video");
        ev.target.parentNode.parentNode.parentNode.previousElementSibling.style.display = "block"
    })
}

// Back Button //

const back = document.querySelectorAll("button.zuruck_btn")
for (var i=0,l=back.length;i<l;i++) {
    back[i].addEventListener("click", (ev) => {
        if(ev.target.parentNode.parentNode.classList.contains("left_animation")) {
            ev.target.parentNode.parentNode.classList.add("revert_animation_left");
            window.setTimeout(function() {
                ev.target.parentNode.parentNode.style.display = "none";
                ev.target.parentNode.parentNode.classList.remove("revert_animation_left");
            },1000);
        }
        if(ev.target.parentNode.parentNode.classList.contains("top_animation")) {
            ev.target.parentNode.parentNode.classList.add("opacity_animation");
            ev.target.parentNode.parentNode.classList.remove("top_animation");
            window.setTimeout(function() {
                ev.target.parentNode.parentNode.style.display = "none";
                ev.target.parentNode.parentNode.classList.remove("opacity_animation");
                ev.target.parentNode.parentNode.classList.add("top_animation");
            },900);
        }
        if(ev.target.parentNode.parentNode.classList.contains("bottom_animation")) {
            ev.target.parentNode.parentNode.classList.add("revert_animation_bottom");
            window.setTimeout(function() {
                ev.target.parentNode.parentNode.style.display = "none";
                ev.target.parentNode.parentNode.classList.remove("revert_animation_bottom");
                document.body.classList.remove("hide_scroll")
            },1000);
        }
        if(ev.target.parentNode.parentNode.classList.contains("right_animation")) {
            ev.target.parentNode.parentNode.classList.add("revert_animation_right");
            window.setTimeout(function() {
                ev.target.parentNode.parentNode.style.display = "none";
                ev.target.parentNode.parentNode.classList.remove("revert_animation_right");
            },1000);
        }
    })
}

// Open Dropdown //

const dropItem = document.querySelectorAll(".footer .footer__content ul li.dropdown a");

for (var i=0,l=dropItem.length;i<l;i++) {
    dropItem[i].addEventListener("click", (ev) => {
        ev.target.nextElementSibling.classList.toggle("open_dropdown")
    })
}


// Display Sections //

const menuBtn = document.querySelectorAll((".nav ul li a"));
const leftSection = document.querySelectorAll("section.left_animation");
const topSection = document.querySelectorAll("section.top_animation");
const bottomSection = document.querySelectorAll("section.bottom_animation");
const rightSection = document.querySelectorAll("section.right_animation");

for (var i=0,l=menuBtn.length;i<l;i++) {
    menuBtn[i].addEventListener("click", (ev) => {
        if(ev.target.parentNode.className === "bottom_left_btn") {
            leftSection[0].style.display = "block"
        }
        if(ev.target.parentNode.className === "top_btn") {
            topSection[0].style.display = "block"
        }
        if(ev.target.parentNode.className === "bottom_center_btn") {
            bottomSection[0].style.display = "block"
            document.body.classList.add("hide_scroll")
        }
        if(ev.target.parentNode.className === "bottom_right_btn") {
            rightSection[0].style.display = "block"
        }
    })
}

const footerBtn = document.querySelectorAll(".footer .footer__content ul li a");

for (var i=0,l=footerBtn.length;i<l;i++) {
    footerBtn[i].addEventListener("click", (ev) => {
        for (var i=0,l=bottomSection.length;i<l;i++) {
            if (bottomSection[i].classList.contains(ev.target.innerHTML)) {
                bottomSection[i].style.display = "block";
                document.body.classList.add("hide_scroll");
            }
        }
    })
}

// Swiper with Icons //

const swiper = new Swiper('.swiper_icons', {
    direction: 'vertical',
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
});


// Swiper with Lightbox //

const swiperLightbox = new Swiper('.swiper_lightbox', {
    direction: 'horizontal',
    loop: true,
    // autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
});

const grid = document.getElementById("grid");
const gridImages = document.querySelectorAll(".grid_with_lightbox__content .grid img")
const swiperImage = document.querySelectorAll('.swiper_lightbox .swiper-wrapper .swiper-slide .swiper-slide-image img')
const lightbox =  document.getElementById("lightbox");

for (var i=0,l=swiperImage.length;i<l;i++) {
    const clonedImages = swiperImage[i].cloneNode(true)
    grid.appendChild(clonedImages)

    clonedImages.index = i;

    clonedImages.addEventListener("click", (ev) => {
        lightbox.classList.add("display_swiper")
        lightbox.parentNode.classList.add("fadeout")
        swiperLightbox.slideTo(ev.target.index)
    })
}

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const closeLightbox = document.querySelectorAll(".swiper_lightbox button.close");

for (var i=0,l=closeLightbox.length;i<l;i++) {
    closeLightbox[i].addEventListener("click", () => {
        lightbox.classList.remove("display_swiper")
        lightbox.parentNode.classList.remove("fadeout")
    })
}

// window.addEventListener('mouseup', function(e) {
//     if (e.target != lightbox & e.target != prev & e.target != next & e.target) {
//         lightbox.classList.remove("display_swiper")
//         lightbox.parentNode.classList.remove("fadeout")
//     } 
// });



// Display Phone & Email //

const iconBtn = document.querySelectorAll('.swiper-slide .icons button');

for (var i=0,l=iconBtn.length;i<l;i++) {
    iconBtn[i].addEventListener("click", (ev) => {
        if(ev.target.className === "phone") {
            ev.target.parentNode.nextElementSibling.classList.toggle("display_phone")
            ev.target.parentNode.nextElementSibling.classList.remove("display_email")
        }
        if(ev.target.className === "email") {
            ev.target.parentNode.nextElementSibling.classList.toggle("display_email")
            ev.target.parentNode.nextElementSibling.classList.remove("display_phone")
        }
    })
}

const iconsNext = document.querySelectorAll(".swiper_icons .swiper-button-next");
for (var i=0,l=iconsNext.length;i<l;i++) {
    iconsNext[i].addEventListener("click", () => {

        let otherEmail = document.querySelector('.text.display_email');
        if (otherEmail) {
            document.querySelector('.text.display_email').classList.remove('display_email');
        }
        let otherPhone = document.querySelector('.text.display_phone');
        if (otherPhone) {
            document.querySelector('.text.display_phone').classList.remove('display_phone');
        }
    })
}

const iconsPrev = document.querySelectorAll(".swiper_icons .swiper-button-prev");
for (var i=0,l=iconsPrev.length;i<l;i++) {
    iconsPrev[i].addEventListener("click", () => {

        let otherEmail = document.querySelector('.text.display_email');
        if (otherEmail) {
            document.querySelector('.text.display_email').classList.remove('display_email');
        }
        let otherPhone = document.querySelector('.text.display_phone');
        if (otherPhone) {
            document.querySelector('.text.display_phone').classList.remove('display_phone');
        }
    })
}
