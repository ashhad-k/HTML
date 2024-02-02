function run_gsap() {
  let gsap_loaded = setInterval(function () {
    const eleBuilder = document.querySelector('body').classList.contains("secondsection");
    const screenSize = window.screen.width >= 1025;
    if (window.gsap && window.ScrollTrigger && !eleBuilder && screenSize) {
      gsap.registerPlugin(ScrollTrigger);
      overlay_zoom();
      clearInterval(gsap_loaded);
    }
  },0);
}

function overlay_zoom() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.maskimg',
      scrub: true,
      start: "center 50%",
      pin:true,
      end: "+=5000px",
      markers:false,
    },
  });
  var scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Calculate the opacity based on the scroll progress
      var opacity = (scrollProgress - 20) / 10; // Start from 60% and finish at 80%
      var opacity2 = (scrollProgress - 10) / 10; // Start from 60% and finish at 80%
 

    opacity = Math.min(Math.max(opacity, 0.8), 1); // Ensure opacity is between 0.6 and 0.8
    opacity2 = Math.min(Math.max(opacity2,1), 1); // Ensure opacity is between 0.6 and 0.8

  tl.from('.maskimg', {scale:55, duration:1});
  tl.to('#newheading', { translateY: 0, background: '#FFFFFF' }, '<35%');
  tl.to('#newheading', { opacity: opacity2 }, '<20%');
  tl.to('.maskimg', { x: 410, y: 20 }, '<2%');
  tl.to('.maskimg', { opacity: opacity }, '<1%');
}
run_gsap();

