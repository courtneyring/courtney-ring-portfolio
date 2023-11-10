<script>
  import { onMount } from 'svelte';
  import { initAnimations } from './animations.js';
  import { Split, Timeline, Portfolio, Landing } from './home';

  onMount(() => {
    initAnimations();
    // landingScrollAnimations();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Landing />
<div class="pinned">
  <Split />
  <Timeline />
  <Portfolio />
</div>

<style lang="scss">
  .pinned {
    width: 100%;
  }
</style>
