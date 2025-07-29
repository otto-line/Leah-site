

  window.addEventListener('load', () => {
    // Delay the whole sequence by 2 seconds
    gsap.from(".doveimage", {
      x: -100,     // Move from -80px on X
      y: 50,       // and 50px down on Y
      opacity: 0,  // start invisible
      duration: 1.5,
      delay: 3,
      ease: "power2.out"
    });

    gsap.from(".doveimage-right", {
      x: 100,      // Move from +100px on X
      y: -50,      // and 50px up on Y
      opacity: 0,
      duration: 1.5,
      delay: 3,
      ease: "power2.out"
    });

    gsap.to(".scrolling-track", {
  xPercent: -50,
  ease: "linear",
  duration: 10,
  repeat: -1
});

  });

