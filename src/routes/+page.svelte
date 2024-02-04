<script>
  import { onMount } from 'svelte';
  import { initAnimations } from './animations.js';
  import { Split, Background, Portfolio, Landing } from './home';

  onMount(() => {
    initAnimations();
    // landingScrollAnimations();
  });
</script>

<svelte:head>
  <title>Courtney Ring | Creative Technologist</title>
  <meta name="description" content="Courtney Ring | Creative Technologist" />
</svelte:head>

<Landing />
<div class="pinned">
  <!-- <Split /> -->
  <!-- <Background /> -->
  <Portfolio />
</div>

<style lang="scss">
  .pinned {
    width: 100%;
  }
</style>
