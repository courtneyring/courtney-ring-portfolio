<script>
  import FadeIn from './animations/FadeIn.svelte';
  export let title;
  export let dark;
  export let tag;

</script>

<FadeIn>
  <div class="header__container {dark && 'dark'}">
    {#if tag=='h1'}
    <h1 class="header__title">{title}</h1>
    {:else}
    <h3 class="header__title">{title}</h3>
    {/if}
    <div class="header__divider"></div>
  </div>
</FadeIn>

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
