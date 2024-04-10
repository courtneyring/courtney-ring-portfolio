<script>
  import FadeIn from '../animations/FadeIn.svelte';

  export let contentId;
  export let sectionImage;


</script>

<FadeIn>
  <div class="section__media container">
    <img src="/work/{contentId}/{sectionImage}" />
  </div>
</FadeIn>

<style lang="scss">
  .section__media {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 80vh;

    & img {
      height: 100%;
    }

    & video {
      width: auto;
      height: 100%;
    }
  }
</style>
