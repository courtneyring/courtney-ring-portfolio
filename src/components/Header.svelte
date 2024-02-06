<script>
  export let title;
  export let dark;

  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);


  onMount(() => {
    gsap.to('.header__container', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.header__container',
        start: 'top center'
      },
    });

  });
</script>

<div class="header__container {dark ? 'dark' : ''}">
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
    transform: translateY(2vh);
    opacity: 0;
  }

  .header__title {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
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
