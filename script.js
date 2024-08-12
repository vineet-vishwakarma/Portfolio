var t1=gsap.timeline();
{   
    t1.to("#loader",{
        y:-1000,
        duration:1.5,
        delay:3.2,
    })
    t1.from("nav>h2",{
        y:-20,
        opacity:0,
        duration:1,
    })
    t1.from(".nav-item>h4",{
        y:-20,
        opacity:0,
        duration:1,
        stagger:0.3,
    })
}

// main-text
{
    gsap.to(".main-text",{
        y: 0,
        scale:1,
        opacity:1,
        delay:3.2,
        duration:2,
        ease: "power3.inOut",
    })

    gsap.to(".second-text",{
        y: 0,
        scale:1,
        opacity:1,
        delay:3.2,
        duration:2,
        ease: "power3.inOut",
    })
}

var t2=gsap.timeline()
{
    t2.from(".hero-img",{
        scale:0,
        opacity: 0,
        duration:1,
        delay:5.1,
        ease:"power1.inOut"
    })
    t2.from(".socials-left>a",{
        x:-50,
        opacity:0,
        duration:1,
        stagger:0.5,
    },"-=0")
    t2.from(".socials-right>a",{
        x:50,
        opacity:0,
        duration:1,
        stagger:-0.5,
    },"-=1.5")
    t2.from(".hero-buttons",{
        y:20,
        opacity:0,
        duration:1,
    })
}

gsap.from(".heading h3",{
    y:50,
    opacity:0,
    duration:3,
    delay:6,
})
// ================================================================================
gsap.to(".skill-section .skill-heading",{
    opacity:1,
    scale:1.1,
    scrollTrigger:{
        trigger:".skill-section",
        scroll: "body",
        start: "top 15%",
        end: "-150%",
        scrub: 2,
        pin:true
    }
})

gsap.to(".skill-section h3",{
    x:0,
    scrollTrigger:{
        trigger:".skill-section",
        scroll: "body",
        start: "top 10%",
        end: "-150%",
        scrub: 3,
    }
})

gsap.to(".skill-section .category-container",{
    transform:"translateX(0%)",
    scrollTrigger:{
        trigger: ".skill-section",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})

// =================================================================================================

gsap.to(".project-heading",{
    opacity:1,
    scale:1.1,
    scrollTrigger:{
        trigger:"#project-section",
        scroll: "body",
        start: "top 15%",
        end: "-150%",
        scrub: 2,
    }
})

gsap.to(".project1 .project-description, .project1 .project-demo",{
    opacity:1,
    transform: "translateY(0%)",
    stagger:0.3,
    scrollTrigger:{
        trigger:".project1",
        scroll: "body",
        start: "top 30%",
        end: "-50%",
        scrub: 2,
    }
})

gsap.to(".project2 .project-description, .project2 .project-demo",{
    opacity:1,
    transform: "translateY(0%)",
    stagger:-0.3,
    scrollTrigger:{
        trigger:".project2",
        scroll: "body",
        start: "top 30%",
        end: "-50%",
        scrub: 2,
    }
})

gsap.to(".project3 .project-description, .project3 .project-demo",{
    opacity:1,
    transform: "translateY(0%)",
    stagger:-0.3,
    scrollTrigger:{
        trigger:".project3",
        scroll: "body",
        start: "top 30%",
        end: "-50%",
        scrub: 2,
    }
})

gsap.to(".project-container",{
    scrollTrigger:{
        trigger:".project1",
        start:"top 40%",
        end:"top -150%",
        scrub:2,
        onEnter: () => gsap.to("body", {backgroundColor: "blue"}),
        onLeaveBack: () => gsap.to("body", {backgroundColor: "#1A1A1D"}),
    }
})
gsap.to(".project-container",{
    scrollTrigger:{
        trigger:".project2",
        start:"top 50%",
        end:"top -150%",
        scrub:2,
        onEnter: () => gsap.to("body", {backgroundColor: "green"}),
        onLeaveBack: () => gsap.to("body", {backgroundColor: "blue"})
    }
})
gsap.to(".project-container",{
    scrollTrigger:{
        trigger:".project3",
        start:"top 50%",
        end:"top -150%",
        scrub:2,
        onEnter: () => gsap.to("body", {backgroundColor: "royalblue"}),
        onLeaveBack: () => gsap.to("body", {backgroundColor: "green"})
    }
})
gsap.to("body",{
    scrollTrigger:{
        trigger:"#contact-section",
        start:"top 50%",
        end:"top -150%",
        scrub:2,
        onEnter: () => gsap.to("body", {backgroundColor: "#1A1A1D"}),
        onLeaveBack: () => gsap.to("body", {backgroundColor: "royalblue"}),
    }
})

// const slider = document.querySelector("#project-section");
// const sections = gsap.utils.toArray("#project-section .project-container");

// let s1 = gsap.timeline({
//     scrollTrigger:{
//         trigger:slider,
//         scrub:2,
//         pin:true,
//         end:()=> "+=" + slider.offsetWidth,
//     }
// });

// s1.to(slider,{
//     xPercent:-100,
// })

gsap.to(".contact-left , .contact-right , .copyright , .line",{
    opacity:1,
    transform:"translateX(0%)",
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#contact-section",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    }
})

gsap.to(".contact-heading",{
    opacity:1,
    scale:1.1,
    scrollTrigger:{
        trigger:"#contact-section",
        scroll: "body",
        start: "top 15%",
        end: "-150%",
        scrub: 2,
    }
})
