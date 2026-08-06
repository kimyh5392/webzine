//jumbo lg
setTimeout(function(){
    $('.jumbo-lg').addClass('show');
    $('.jumbo-sm').addClass('show');
}, 500);

// text 타이핑 효과
$(function () {
    function textTyping() {
        const texts = ["여행을", "바다로", "회사를"];
        const $target = $(".effect-txt");

        const typingDuration = 800; // 타이핑
        const stayDuration   = 1200; // 유지
        const deleteDuration = 400; // 지우기

        // ⭐ 초기 상태를 HTML 텍스트 기준으로 맞춤
        let textIndex = texts.indexOf($target.text());
        if (textIndex === -1) textIndex = 0;

        let charIndex = texts[textIndex].length;
        let mode = "stay"; // ← 처음엔 삭제 대기 상태

        function loop() {
            const text = texts[textIndex];

            if (mode === "typing") {
                if (charIndex < text.length) {
                    $target.text(text.slice(0, charIndex + 1));
                    charIndex++;
                    setTimeout(loop, typingDuration / text.length);
                } else {
                    mode = "stay";
                    setTimeout(loop, stayDuration);
                }
            }

            else if (mode === "stay") {
                mode = "deleting";
                setTimeout(loop, stayDuration);
            }

            else if (mode === "deleting") {
                if (charIndex > 0) {
                    $target.text(text.slice(0, charIndex - 1));
                    charIndex--;
                    setTimeout(loop, deleteDuration / text.length);
                } else {
                    textIndex = (textIndex + 1) % texts.length;
                    charIndex = 0;
                    mode = "typing";
                    setTimeout(loop, 200);
                }
            }
        }

        loop();
    }
    setTimeout(textTyping, 1900);
});

// 영역별 효과
$(window).on('scroll', function() {
    $('.effect').each(function(index, elem) {
        if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
            $(elem).addClass('show');
        }
    });
});

// list-swiper
var swiper = new Swiper(".list-swiper", {
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".pagination",
        clickable: true,
    },
});


// matter js custom
const {
    Engine,
    Runner,
    World,
    Bodies,
    Body,
    Composite,
    Events,
    Mouse,
    MouseConstraint
} = Matter;

const scene = document.getElementById("scene");
const eventSection = document.querySelector(".word-event");

let engine = null;
let runner = null;
let bodies = [];
let walls = [];
let started = false;

function initMatter() {
    cleanup();

    engine = Engine.create();
    engine.world.gravity.y = 1;

    runner = Runner.create();
    Runner.run(runner, engine);

    createWalls();
    createTags();
    syncDom();
    enableMouse();
}

function createWalls() {
    const w = scene.clientWidth;
    const h = scene.clientHeight;
    const t = 100;

    walls = [
        Bodies.rectangle(w / 2, h + t / 2, w, t, { isStatic: true }),
        Bodies.rectangle(-t / 2, h / 2, t, h, { isStatic: true }),
        Bodies.rectangle(w + t / 2, h / 2, t, h, { isStatic: true })
    ];

    World.add(engine.world, walls);
}

function createTags() {
    const tags = [...scene.querySelectorAll(".tag")];

    bodies = tags.map(el => {
        const rect = el.getBoundingClientRect();

        const body = Bodies.rectangle(
            Math.random() * (scene.clientWidth - rect.width) + rect.width / 2,
            -scene.clientHeight * 0.3 - Math.random() * 200,
            rect.width,
            rect.height,
            {
                restitution: 0.6,
                friction: 0.4
            }
        );

        Body.rotate(body, (Math.random() - 0.5) * 0.5);
        Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 4,
            y: Math.random() * 2
        });

        body.el = el;

        el.style.position = "absolute";
        el.style.opacity = "0";
        el.style.cursor = "pointer";
        el.style.transform = "translate(-9999px, -9999px)";

        return body;
    });

    World.add(engine.world, bodies);
}

function syncDom() {
    Events.on(engine, "afterUpdate", () => {
        bodies.forEach(body => {
            const el = body.el;

            let x = body.position.x - el.offsetWidth / 2;
            let y = body.position.y - el.offsetHeight / 2;

            const maxX = scene.clientWidth - el.offsetWidth;
            const maxY = scene.clientHeight - el.offsetHeight;

            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));

            el.style.transform = `
                translate(${x}px, ${y}px)
                rotate(${body.angle}rad)
            `;

            if (el.style.opacity === "0" && body.position.y > 20) {
                el.style.transition = "opacity 0.4s ease";
                el.style.opacity = "1";
            }
        });
    });
}

function enableMouse() {
    const mouse = Mouse.create(scene);

    const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });

    World.add(engine.world, mouseConstraint);
}

function cleanup() {
    if (!engine) return;

    Composite.clear(engine.world);
    Engine.clear(engine);
    Runner.stop(runner);

    engine = null;
    runner = null;
    bodies = [];
    walls = [];
}

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                setTimeout(initMatter, 200);
                observer.disconnect();
            }
        });
    },
    {
        threshold: 0.3
    }
);

observer.observe(eventSection);

window.addEventListener("resize", () => {
    if (started) {
        setTimeout(initMatter, 300);
    }
});