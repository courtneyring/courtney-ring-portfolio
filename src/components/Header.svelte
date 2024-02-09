<script>
  import { onMount, onDestroy } from 'svelte';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  export let title;
  export let dark;

  let containerNode;




  onMount(() => {
    console.log(containerNode)
    gsap.from(containerNode, {
      opacity: 0,
      y: '2vh',
      duration: 0.5,
      scrollTrigger: {
        trigger: containerNode,
        start: 'top bottom-=40%',
        // markers: true
      },
    });

  });

  onDestroy(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  });
</script>

<div class="header__container {dark ? 'dark' : ''}" bind:this={containerNode}>
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
  }

  .header__title {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
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
