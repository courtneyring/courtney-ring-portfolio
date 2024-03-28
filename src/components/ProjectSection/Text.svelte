<script>
  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount, onDestroy } from 'svelte';
  gsap.registerPlugin(ScrollTrigger);

  export let section;
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

<div class='section__text container' bind:this={node}>
    <div class='section__subheader ' style='color: {section.textColor}'>{section.title}</div>
    <div class='section__text '  style='color: {section.textColor}'>{@html section.body}</div>
</div>


<style lang='scss'>
  .section__text {
    color: white;
    max-width: 800px;
     line-height: 30px;
}

.section__subheader {
    font-size: 25px;
    margin-bottom: 30px;
}
</style>