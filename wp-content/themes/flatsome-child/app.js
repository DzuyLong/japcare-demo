// let tl = gsap.timeline({ 
//   scrollTrigger: 
//   {
//   trigger: '.ss_2',
//   start: 'top 10%',
//   end: 'bottom bottom',
//   scrub: false,
//   markers: true,
//   toggleActions: 'play reverse play reverse',
// },
//   defaults: { ease: "power4.out"},
// })
// let flagPoles = CSSRulePlugin.getRule(".card:before")

// tl.to('.title-h1', {
//   'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//   opacity: 1,
//   y: 0,
//   color: '#fff',
//   duration: 2.2,
// })
// tl.to('.form', {
//   'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//   opacity: 1,
//   y: 0,
// }, "-=2")
// tl.from('.card',
// { 
//   scaleY: 0, 
//   stagger: .2
// }, "-=2")
// tl.from(flagPoles,  
//   {
//     stagger: 1,
//     opacity: 0,
//     transform: 'translateY(120px)',
//   }, "-=2")
//   tl.to('.title, .desc', {
//     stagger: .1,
//     duration: 1.2,
//     opacity: 1, 
//     y: 0,
//   }, "-=2")
//   tl.to('footer', {
//    opacity: 1
//   }, "-=2")

// animation text split---------------------------------------


// const myName = new SplitType('#my_name')
// gsap.to('.char', {
//     y: 0,
//     stagger: 0.1,
//     delay: 1,
//     duration: 0.1,
// })

//Create a Sick Horizontal Scroll Animation | GreenSock / JS------------------------------------------

const container = document.querySelector(".wrap-contain");
const sections = gsap.utils.toArray(".wrap-contain .ss-contain");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrap-contain",
    pin: true,
    scrub: 1,
    end: "+=3000",
  }
});

gsap.to(mask, {
  width: '100%',
  scrollTrigger: {
    trigger: '.wrapper',
    start: 'top left',
    scrub: 1
  }
})

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return  
  
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: true
    }
  });
});

