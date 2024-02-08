<script>
  import { onMount, onDestroy } from 'svelte';
  // import {gsap, ScrollTrigger} from 'gsap/all';
  // import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
  // gsap.registerPlugin(ScrollTrigger);
    // import {gsap, ScrollTrigger} from '../lib/utils/gsap.js';

  export let title;
  export let dark;

  let containerNode;


  // onMount(() => {
  //   gsap.from(containerNode, {
  //     opacity: 0,
  //     y: '2vh',
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: containerNode,
  //       start: 'top bottom-=20%',
  //       markers: true
  //     },
  //   });

  // });

  // onDestroy(() => {
  //   let triggers = ScrollTrigger.getAll();
  //   triggers.forEach((trigger) => {
  //     trigger.kill();
  //   });
  // });
</script>

<div class="header__container {dark ? 'dark' : ''}" ref='containerNode'>
  <h3 class="header__title">{title}</h3>
  <div class="header__divider"></div>
</div>

<style lang="scss">
  .header__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    // transform: translateY(2vh);
    // opacity: 0;
  }

  .header__title {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    // margin-top: 0px;
    text-align: center;
    // opacity: 0;
  }

  .header__divider {
    border-top: 1px solid $color-white;
    width: 100px;
  }

  .header__container.dark {
    .header__title {
      color: $color-blue-medium;
    }
    .header__divider {
      border-top-color: $color-blue-dark;
    }
  }

  @media (min-width: 768px) {
    .header__title {
      font-size: 80px;
    }
  }
</style>
