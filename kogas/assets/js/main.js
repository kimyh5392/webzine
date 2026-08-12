// intro 관련
gsap.registerPlugin(ScrollTrigger);

// 텍스트는 처음에 안 보이게
gsap.set(".jumbotron .details .effect-txt", {
    x: 100,
    opacity: 0
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".jumbotron",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onLeave: () => {
            document.querySelector(".scroll-down").classList.add("hide");
        },
        onEnterBack: () => {
            document.querySelector(".scroll-down").classList.remove("hide");
        }
    }
});

tl.to("#intro .first", {
    duration: 2,
    xPercent: -100,
}, 0)

.to("#intro .second", {
    duration: 2,
    xPercent: 100,
}, 0)

.from(".jumbotron", {
    //opacity: 0.3,
    duration: 1
})

// intro 제거
.to("#intro", {
    autoAlpha: 0,
    duration: 0.5
}, 2)

.to(".jumbotron .details .effect-txt", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
}, "-=0.5");

// section-1 관련
const section1 = document.querySelector(".section-1");
const xScroll = document.querySelector(".xScroll");

gsap.to(xScroll, {
    x: () => -(xScroll.scrollWidth - window.innerWidth),
    ease: "none",

    scrollTrigger: {
        trigger: section1,
        start: "top top",
        end: () => `+=${xScroll.scrollWidth - window.innerWidth}`,
        scrub: true,
        pin: section1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false
    }
});

// section-2 관련
const section2 = document.querySelector(".section-2");
const cards = gsap.utils.toArray(".section-2 .card");

const media = gsap.matchMedia();

media.add("(min-width: 1025px)", () => {

    gsap.set(cards, {
        y: () => window.innerHeight,
        opacity: 0
    });

    const section2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section2,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.2}`,
            pin: true,
            scrub: 0.3,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            markers: false
        }
    });

    cards.forEach((card) => {
        section2Timeline.to(card, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "none"
        });
    });

    // 1024px 이하로 내려갈 때 GSAP 스타일 제거
    return () => {
        gsap.set(cards, {
            clearProps: "transform,opacity"
        });
    };
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

// card-slider 관련
var cardSwiper = new Swiper(".card-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".card-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});