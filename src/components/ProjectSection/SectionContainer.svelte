<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  export let section;
  export let content;
  let containerNode;

  onMount(() => {
    gsap.to(containerNode, {
      backgroundPosition: `${section.backgroundPosX}% ${section.backgroundPosY + 12}%`,
      duration: 2,
      scrollTrigger: {
        trigger: containerNode,
        start: 'top bottom-=40%',
        scrub: true,
      },
    });
  });

  onDestroy(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  });
</script>

<div
  class="section__container {section.backgroundImage && 'background'}"
  style={`background-color: ${section.backgroundColor};background-image: url('/work/${content.id}/${section.backgroundImage}');background-position: ${section.backgroundPosX}% ${section.backgroundPosY - 12}%;`}
  bind:this={containerNode}
>
  <slot />
</div>

<style lang="scss">
  .section__container {
    background-size: cover;
    width: 100%;
  }
</style>
