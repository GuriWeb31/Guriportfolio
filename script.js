// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (mobileMenu.classList.contains("active")) {
        icon.className = "ri-close-line";
    } else {
        icon.className = "ri-menu-3-line";
    }
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuBtn.querySelector("i").className = "ri-menu-3-line";
    });
});

// ===========================
// FILTER PORTFOLIO
// ===========================

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                if (item.classList.contains(filter)) {

                    item.style.display = "block";

                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 50);

                } else {

                    item.style.opacity = "0";

                    item.style.transform = "scale(.8)";

                    setTimeout(() => {
                        item.style.display = "none";
                    }, 250);

                }

            }

        });

    });

});

// ===========================
// LIGHTBOX
// ===========================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".featured-card, .portfolio-item").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const img = card.querySelector("img");

        lightboxImage.src = img.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(10,10,10,.85)";
        header.style.backdropFilter = "blur(25px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "";
        header.style.boxShadow = "";

    }

});

// ===========================
// GSAP HERO
// ===========================

gsap.from(".hero-title",{
    y:80,
    opacity:0,
    duration:1,
    ease:"power4.out"
});

gsap.from(".hero-bg",{
    scale:1.2,
    opacity:0,
    duration:1.5
});

gsap.from(".hero-title + p",{
    y:40,
    opacity:0,
    delay:.3,
    duration:1
});

gsap.from(".btn-primary",{
    y:30,
    opacity:0,
    delay:.6,
    duration:.8
});

gsap.from(".btn-secondary",{
    y:30,
    opacity:0,
    delay:.8,
    duration:.8
});

// ===========================
// SCROLL REVEAL
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(
".portfolio-item,.counter-card,.featured-card,.section-title"
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});