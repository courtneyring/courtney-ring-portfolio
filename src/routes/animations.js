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
  // const codePos = isMobile() ? '-211%' : '-60%';
  // const colorPos = isMobile() ? '-300%' : '-70%';
  // const codePos = isMobile() ? '-160vw' : '-60%';
  // const colorPos = isMobile() ? '-245vw' : '-70%';
  const codePos = isMobile() ? '30%' : 60;
  const colorPos = isMobile() ? '-30%' : 60;
  tl.to('.split__code', { x: codePos, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__color', { x: colorPos, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__content', { marginTop: -100, opacity: 1, immediateRender: false, duration: 1 }, 0)
  tl.to('.split__text', { x: 0, opacity: 1, immediateRender: false, duration: 1 }, 0)

}

const splitExit = () => {

  let timelineCopy = document.querySelectorAll(`.timeline__block > .timeline__copy`);
  let timelineMobileCopy = document.querySelectorAll('.timeline__description-mobile')
  let timelineImageSets = document.querySelectorAll(`.timeline__image-set`);

  let tl = gsap.timeline({
    ease: 'power1.inOut',

    scrollTrigger: {
      trigger: '.pinned',
      start: 'top top',
      end: '+=20000',
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
  }, '+=2')
  tl.to('.split__background', {
    opacity: 0,
    duration: 4,
  }, '<')

  tl.to('.timeline', {
    scale: 1,
    duration: 5,
    opacity: 1
  }, '<')
  tl.to('.split__content', {
    visibility: 'hidden'
  }, '>')
  for (let i = 0; i < 3; i++) {
    tl.add(() => {
      let innerTimeline = gsap.timeline({ease: 'power4.inOut'});
      timelineCopy.forEach((el) => innerTimeline.to(el, { textShadow: '0px 0 0 black', color: 'grey'}, 0));
      innerTimeline.to(timelineCopy[i], { textShadow: '1px 0 0 black', color: 'black'}, '<')
      timelineImageSets.forEach((el, idx) => {
        if (idx != i) {
          innerTimeline.to(el, { opacity: 0, duration: 0.5, }, '<')
        }
       
      })
      innerTimeline.to(timelineImageSets[i], {opacity: 1, duration: 0.5}, '<')
      timelineMobileCopy.forEach((el) => innerTimeline.to(el, { opacity: 0 }, 0));
      innerTimeline.to(timelineMobileCopy[i], {opacity: 1}, 0);

   
    }, i == 0 ? '<' : '+=3')
  

  }

  tl.to('.featured__card', {
    x: 0,
    duration: 3
  }, '+=5')
  tl.to('.timeline', {
    visibility: 'hidden'
  }, '>')
  tl.to('.portfolio__header', { visibility: 'visible' }, '<')
  tl.to('.featured__card', {
    // scale: 0.3, 
    height: () => .3 * window.innerWidth,
    width: () => window.innerWidth * .3,
    minWidth: () => window.innerWidth * .3 + 'px',
    borderRadius: 10,
    duration: 1,
  }, '>')
  tl.to('.portfolio__cards', {
    left: () => .75 * window.innerWidth,
    duration: 1
  }, '<50%');

  tl.to('.featured__card', { pointerEvents: 'all' }, '>')
  

  const cards = document.querySelector('.portfolio__cards');
  tl.to('.all__cards', {
    x: () => - (cards.offsetWidth + window.innerWidth * 1.5),
    duration: 5
  }, '>')
}



const initAnimations = () => {
  landingEntranceAnimations();
  splitEntrance();
  splitExit();
};

export {
  initAnimations
}