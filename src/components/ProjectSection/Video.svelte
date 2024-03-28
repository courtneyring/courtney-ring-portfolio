<script>
  export let contentId;
  export let filename;
  export let embed;
</script>

<div class="section__media container">
  {#if filename}
    <video width="600" height="600" controls>
      <source src="/work/{contentId}/{filename}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  {:else}
    <div class="section__embed">{@html embed}</div>
  {/if}
</div>

<style lang="scss">
  .section__media {
    align-items: center;
    display: flex;
    justify-content: center;
    // width: 100%;
    height: 80vh;

    & img {
      height: 100%;
    }

    & video {
      width: auto;
      height: 100%;
    }
  }
  .section__embed {
    width: 80%;
  }
</style>
