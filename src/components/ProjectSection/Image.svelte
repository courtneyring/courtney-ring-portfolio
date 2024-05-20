<script>
  import FadeIn from "../animations/FadeIn.svelte";

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
    

    & img {
      height: auto;
      max-width: 100%;
    }

    & video {
      width: auto;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    .section__media {
      height: 80vh;
      
      & > img {
        height: 100%;
        width: auto;
      }
    }
  }
</style>
