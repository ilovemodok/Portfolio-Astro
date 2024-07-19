gsap.registerPlugin(ScrollTrigger);

// gsap.from(".port-image", {
//   duration: 1,
//   x: "-100vw",
//   stagger: 0.5,
//   ease: "back.out(1.7)",
//   scrollTrigger: ".port-image",
// });

gsap.from(".mediamite-img", {
  delay: 0.3,
  duration: 1,
  ease: "power1.out",
  y: 30,
  opacity: 0,
  // stagger: 0.7,
  // scale: 0.1,
  scrollTrigger: {
    scrub: 1,
    trigger: ".mediamite-img",
    start: "top 90%",
    end: "top 50%",
    // markers: true,
    toggleActions: "restart none none none",
    // onEnter onLeave onEnterBack onLeaveBack
  },
});

gsap.from(".hero-image-box", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

// Portfolio Pages

// gsap.from(".opener-splash", {
//   opacity: 0,
//   duration: 1,
//   ease: "power1.out",
// });

gsap.from(".opener-splash, .opener-splash-mobile", {
  duration: 1,
  y: 60,
  scale: 1.25,
  opacity: 0,
  ease: "power1.out",
});

gsap.utils.toArray(".fade-in, .bento-item").forEach((element) => {
  gsap.from(element, {
    opacity: 0, // start at 0 opacity
    duration: 0.5,
    scale: 0.95,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element, // use the element as the trigger
      start: "top 80%", // when the top of the element hits the 80% height of the viewport
      end: "bottom 20%", // end the animation when the bottom of the element is 20% from the bottom of the viewport
      toggleActions: "play none none reverse", // play animation forward as it enters and reverse as it leaves
      // You can experiment with different values for start and end
      // to trigger the animation at different scroll positions.
    },
  });
});
