<script>
  import { onDestroy, onMount } from 'svelte';
  import playIcon from '$lib/images/play.svg';

  export let contentId;
  export let filename;
  export let embed;
  export let placeholder;

  let video;
  $: videoIsPlaying = false;

  onMount(() => {
    if (video) video.onplay = () => (videoIsPlaying = true);
  });
</script>

<div class="section__media container">
  {#if filename}
    {#if !videoIsPlaying}
      <img src={playIcon} class="section__play" alt="play" />
    {/if}
    <video
      width="600"
      height="600"
      controls
      poster="/work/{contentId}/{placeholder}"
      bind:this={video}
    >
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

    & img {
      height: 100%;
    }

    & video {
      height: auto;
      width: 100%;
    }
  }
  .section__embed {
    aspect-ratio: 16/9;
    height: auto;
    width: 80%;
  }

  .section__play {
    position: absolute;
    width: 70px;
    height: auto;
  }

  @media (min-width: 768px) {
    .section__media {
      height: 80vh;

      & video {
        width: auto;
        height: 100%;
        cursor: pointer;
      }
    }

    .section__play {
      width: 100px;
      height: auto;
    }
  }
</style>
