<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);


  let node;

  onMount(() => {
    gsap.from(node, {
      opacity: 0,
      y: '2vh',
      duration: 0.5,
      scrollTrigger: {
        trigger: node,
        start: 'top bottom-=40%',
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


<div bind:this={node}>
  <slot />
</div>