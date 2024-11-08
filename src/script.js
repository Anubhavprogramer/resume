const date = document.getElementById('date');
const time = document.getElementById('time');

function announceTime(clock) {
    clock = clock || Date;
    date.innerHTML = new Date(clock.now()).toLocaleDateString();
    const now = new Date(clock.now());
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    
    time.innerHTML = formattedTime;
}

setInterval(announceTime, 1000);

function Loading() {
    var tl = gsap.timeline();
    
    tl.from('.ball', {
        duration: 2,
        y: -1000,
        ease: 'bounce',
        strength: 0.9,
        squash: 5,
        squashID: "myBounce-squash",
    })
    .to('.ball', {
        width: 1000,
        height: 7,
        ease: "power4.out",
        duration: 0.7,
        delay: 0.3
    })
    .to('.ball', {
        y: 200,
        duration: 0.5,
        ease: 'power4.out',
        opacity: 0,
        delay: 0.5
    }, 'a')
    .to('.loading_text', {
        height: 200,
        duration: 0.5,
        delay: 0.5,
    }, 'a')
    .to('.Loading', {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            tl.kill();
            init();
        }
    })
}

function init(){
    document.querySelector(".Loading").classList.add("hidden");
    document.querySelector(".main").classList.remove("hidden");
    textAnimation();
    footerAnimation();
}

window.addEventListener('load', function() {
    Loading();
    // init();
});

function textAnimation(){
    gsap.from('#home span', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'ease-in-out',
        stagger: 0.2
    })
}

function footerAnimation() {
    gsap.from('#footer p', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'ease-in-out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#footer', 
            start: 'top bottom', 
            end: 'top center',
            toggleActions: 'play none none reverse',   
            markers: false        
        }
    });
}





