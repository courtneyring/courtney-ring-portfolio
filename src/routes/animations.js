import { gsap, Linear } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const isMobile = () => window.innerWidth < 768;
console.log(isMobile)

const landingEntranceAnimations = () => {
  const tl = gsap.timeline({ ease: 'power1.inOut' });
  tl.to(
    '.landing__subtext',
    {
      duration: 1,
      text: 'aka: A computer nerd with a passion for cool experiences',
    },
    0
  );
  tl.to(
    '.landing__content',
    {
      duration: 1,
      opacity: 1,
      marginTop: -100,
    },
    0
  );
}

const splitEntrance = () => {
  let tl = gsap.timeline({
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.pinned',
      start: 'top+=300 center',
      // markers: true,
    },
  })
  const codePos = isMobile() ? '-211%' : '-60%';
  const colorPos = isMobile() ? '-300%' : '-70%';
  tl.to('.split__code', { right: codePos, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__color', { left: colorPos, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__content', { marginTop: -100, opacity: 1, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__text', { x: 0, opacity: 1, immediateRender: false, duration: 1 }, 0)

}

const splitExit = () => {
  let tl = gsap.timeline({
    ease: 'power1.inOut',

    scrollTrigger: {
      trigger: '.pinned',
      start: 'top top',
      end: '+=8000',
      // markers: true,
      pin: true,
      anticipatePin: 1,
      scrub: true, 
    },
  }, 0)

  tl.to('.split__content', {
    scale: 30,
    duration: 5,
    // delay: 2,
  }, 2)
  tl.to('.split__background', {
    opacity: 0,
    duration: 4,
  }, 2)
  tl.to('.split__content', {visibility: 'hidden'})
  tl.to('.timeline', {
    scale: 1,
    duration:5,
    opacity: 1
  },2)
  for (let i = 1; i < 4; i++) {
    tl.to(`.timeline__block:nth-child(${i}) > .timeline__copy`, {
      textShadow: '0.8px 0 0 black',
      immediateRender: false,
      color: 'black',
      duration: 1,
      yoyo: true,
      repeat: 1
    }, 5+i*2)
    tl.to(`.timeline__description-mobile:nth-child(${i})`, {
      opacity: 1,
      yoyo: true,
      duration: 1,
      repeat: 1,
    }, 5+i*2)
    // tl.to(`.timeline__image-set:nth-child(${i})`, {
    //   opacity: 1,
    //   yoyo: true,
    //   duration: 1,
    //   repeat: 1,
    // }, 5+i*2)
    tl.to(`.timeline__image-set:nth-child(${i})`, {
      marginTop: 0,
      duration: 2,
    }, 5+i*2)
    tl.add(() => gsap.to(`.timeline__image-set:nth-child(${i}) > .timeline__image:nth-child(1)`, {
      transform: 'translate(-180px, 60px) rotate(-25deg)',
      immediateRender: false, 
      duration: 1, 
    }), '<')
    tl.add(() => gsap.to(`.timeline__image-set:nth-child(${i}) > .timeline__image:nth-child(2)`, {
      transform: 'translate(180px, 60px) rotate(25deg)', 
      immediateRender: false, 
      duration: 1,
    }), '<')
    tl.add(() => gsap.to(`.timeline__image-set:nth-child(${i})`, {
      opacity: 1,
      duration: 1,
      repeat: 1,
    }), '>')

  }
  
  // tl.to('.timeline__block:nth-child(2) > .timeline__copy', {
  //   textShadow: '0.8px 0 0 black',
  //   immediateRender: false,
  //   color: 'black',
  //   yoyo: true,
  //   repeat: 1, 
  //   duration: 1
  // }, 9)
  // tl.to('.timeline__description-mobile:nth-child(2)', {
  //   opacity: 1,
  //   yoyo: true,
  //   duration: 1,
  //   repeat: 1,
  // }, 9)
  // tl.to('.timeline__block:nth-child(3) > .timeline__copy', {
  //   textShadow: '0.8px 0 0 black',
  //   immediateRender: false,
  //   color: 'black',
  //   yoyo: true,
  //   repeat: 1,
  //   duration: 1
  // }, 11)
  // tl.to('.timeline__description-mobile:nth-child(3)', {
  //   opacity: 1,
  //   yoyo: true,
  //   duration: 1,
  //   repeat: 1,
  // }, 11)
  tl.to('.featured__card' ,{
    x: 0,
    duration: 1
  }, 13)
  tl.to('.timeline', {
    visibility: 'hidden'
  }, 14)
  tl.to('.portfolio__header', {visibility: 'visible'}, 14)
  tl.to('.featured__card' ,{
    // scale: 0.3, 
    height: () => .3*window.innerWidth,
    width: () => window.innerWidth * .3,
    minWidth: () => window.innerWidth * .3 + 'px',
    duration: 1, 
  }, 15)
  tl.to('.featured__card', {pointerEvents: 'all'}, 16)
  tl.to('.portfolio__cards', {
    left: () => .75*window.innerWidth,
    duration: 1
  }, 16);

  const cards = document.querySelector('.portfolio__cards');
  tl.to('.all__cards', {
    x: () => - (cards.offsetWidth + window.innerWidth * 1.5),
    duration: 5
  }, 16)
}

const timelineEnter = () => {
  // let tl = gsap.timeline({
  //   ease: 'power1.inOut',
  //   scrollTrigger: {
  //     trigger: '.timeline',
  //     start: 'top top',
  //     markers: true,
  //     pin: true,
  //     scrub: 10
  //   },
  // }, 0)
  // tl.to('.timeline__block:nth-child(0)', {
  //   fontWeight
  // }, 0)
}

// const landingScrollAnimations = () => {
//   gsap.to('.landing__content', {
//     duration: 1,
//     // marginTop: 0,
//     x: '-100%',
//     immediateRender: false,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.section__landing',
//       start: 'top+=50px top',
//       markers: true,
//     },
//   });
// }

const initAnimations = () => {
  landingEntranceAnimations();
  splitEntrance();
  splitExit();
  timelineEnter();
};

export {
  initAnimations
}