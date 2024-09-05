function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()
    // locomotive end here


// cursor circle animation  

document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x}px`
    document.querySelector("#circle").style.top = `${dets.y}px`
})


// Targeting video element  
let clip = document.querySelector("#video")

clip.addEventListener("mouseover", function(e) {
    clip.play();
    poster.display = "none"
})

clip.addEventListener("mouseout", function(e) {
    clip.pause();
    poster.display = "block"
})

// word animation page four div's start

document.querySelector("#four #div1").addEventListener('mouseenter', function() {
    gsap.to("#olga", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#four #innerdiv h2", {
        scale: 1.2
    })
});
document.querySelector("#four #div1").addEventListener('mouseleave', function() {
    gsap.to("#olga", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#four #innerdiv h2", {
        scale: 1
    })
});


document.querySelector("#four #div2 ").addEventListener('mouseenter', function() {
    gsap.to("#ochi", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#four #div2main img", {
        scale: 1.2
    })
});
document.querySelector("#four #div2").addEventListener('mouseleave', function() {
    gsap.to("#ochi", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#four #div2main img", {
        scale: 1
    })
});

// word animation page four div's end here


//circle div animation page four start here

document.querySelector("#four #div3").addEventListener('mouseenter', function() {
    gsap.to("#centerdiv4", {
        scale: 1
    })
    gsap.to("#fourp", {
        scale: 1,
        delay: .4
    })
});
document.querySelector("#four #div3").addEventListener('mouseleave', function() {
    gsap.to("#centerdiv4", {
        scale: 0
    })
    gsap.to("#fourp", {
        scale: 0
    })
});
//circle div animation page four end here



// word animation page five div's start here

document.querySelector("#five #div2").addEventListener('mouseenter', function() {
    gsap.to("#porsche", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#img1", {
        scale: 1.2
    })
});
document.querySelector("#five #div2").addEventListener('mouseleave', function() {
    gsap.to("#porsche", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#img1", {
        scale: 1
    })
});
document.querySelector("#five #div3").addEventListener('mouseenter', function() {
    gsap.to("#david", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#img2", {
        scale: 1.2
    })
});
document.querySelector("#five #div3").addEventListener('mouseleave', function() {
    gsap.to("#david", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#img2", {
        scale: 1
    })
});

// word animation page five div 's end here



//circle div animation page five start here

document.querySelector("#five #div1").addEventListener('mouseenter', function() {
    gsap.to("#centerdiv5", {
        scale: 1
    })
    gsap.to("#fivep", {
        scale: 1,
        delay: .4
    })
});
document.querySelector("#five #div1").addEventListener('mouseleave', function() {
    gsap.to("#centerdiv5", {
        scale: 0
    })
    gsap.to("#fivep", {
        scale: 0
    })
});
//circle div animation page five end here


// word animation page six div's start here

document.querySelector("#six #div1").addEventListener('mouseenter', function() {
    gsap.to("#eminente", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#six #div1 img", {
        scale: 1.2
    })
});
document.querySelector("#six #div1").addEventListener('mouseleave', function() {
    gsap.to("#eminente", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#six #div1 img", {
        scale: 1
    })
});

document.querySelector("#six #div3").addEventListener('mouseenter', function() {
    gsap.to("#makhno", {
        y: "-9vh",
        duration: 0.5
    })
    gsap.to("#six #div3 img", {
        scale: 1.2
    })
});
document.querySelector("#six #div3").addEventListener('mouseleave', function() {
    gsap.to("#makhno", {
        y: "0vh",
        duration: 0.5
    })
    gsap.to("#six #div3 img", {
        scale: 1
    })
});

// word animation page six div 's end here


//circle div animation page six start here

document.querySelector("#six #div2").addEventListener('mouseenter', function() {
    gsap.to("#centerdiv6", {
        scale: 1
    })
    gsap.to("#sixp", {
        scale: 1,
        delay: .4
    })
});
document.querySelector("#six #div2").addEventListener('mouseleave', function() {
    gsap.to("#centerdiv6", {
        scale: 0
    })
    gsap.to("#sixp", {
        scale: 0
    })
});
//circle div animation page six end here


//page seven circle div animation start here

document.querySelector("#seven #circle7").addEventListener('mouseenter', function() {
    gsap.to("#circle7", {
        scale: 1
    })
});
document.querySelector("#seven #circle7").addEventListener('mouseleave', function() {
    gsap.to("#circle7", {
        scale: .9
    })
});

//page seven circle div animation start here



// loader animation start here

const text = baffle("h1");
text.set({
    characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
    speed: 100
});

text.start();
text.reveal(3000);

function hello() {
    document.querySelector('#main').style.display = "block";
}
setTimeout(hello, 3000);

function loaderanimation() {
    gsap.to("#loader", {
        ease: (0.76, 0, 0.24, 1),
        top: "-120%"
    })
}
setTimeout(loaderanimation, 2500);

gsap.to("#maintext h1", {
    opacity: 1,
    delay: 4,
    duration: 2,
})
gsap.to("header", {
    opacity: 1,
    delay: 3,
    duration: 2,
})

// scroll animation for div three

gsap.from("#scroll1 h1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#scroll1 h1",
        start: "top 70%",
        end: "top 69%",
        // markers: true,
        scrub: 3,

    }
})

gsap.from("#line", {
    x: 60,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#line",
        start: "top 70%",
        end: "top 69%",
        // markers: true,
        scrub: 3

    }
})


// scroll animation for div seven

gsap.from("#circle7", {
    x: -300,
    opacity: 0,
    duration: 3,
    rotate: "360deg",
    scrollTrigger: {
        scroller: "#main",
        trigger: "#circle7",
        start: "top 70%",
        end: "top 69%",
        // markers: true,
        scrub: 3

    }

})

// scroll animation for div eight

gsap.from("#scroll2 h1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#scroll2 h1",
        start: "top 70%",
        end: "top 69%",
        // markers: true,
        scrub: 3,

    }
})

// scroll animation for div ten

gsap.from("#scroll3 h1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#scroll3 h1",
        start: "top 72%",
        end: "top 71%",
        // markers: true,
        scrub: 3,

    }
})