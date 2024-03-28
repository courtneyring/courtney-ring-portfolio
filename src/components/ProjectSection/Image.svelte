<script>
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount, onDestroy } from 'svelte';
  gsap.registerPlugin(ScrollTrigger);

  export let contentId;
  export let sectionImage;
  let node;

  onMount(() => {
    gsap.from(node, {
      opacity: 0,
      y: "2vh",
      duration: 0.5,
      scrollTrigger: {
        trigger: node,
        start: "top bottom-=40%",
      },
    });
  })

  onDestroy(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  });

</script>

<div class="section__media container" bind:this={node}>
  <img src="/work/{contentId}/{sectionImage}" />
</div>

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
