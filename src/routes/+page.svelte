<script>
  import { onMount } from 'svelte';
  import { initAnimations } from './animations.js';
  import { Split, Timeline, Portfolio } from './home';

  onMount(() => {
    initAnimations();
    // landingScrollAnimations();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="landing">
  <div class="landing__content">
    <h3>Hi I'm</h3>
    <h1 class="landing__headline">
      Courtney Ring<br />
      Creative Technologist
    </h1>
    <h3 class="landing__subtext" />
  </div>
</section>
<div class="pinned">
  
  <Split />
  <Timeline />
  <Portfolio />

  
</div>

<style lang="scss">

  .landing__content {
    opacity: 0;
  }

  .pinned {
    width: 100%;
  }


</style>
