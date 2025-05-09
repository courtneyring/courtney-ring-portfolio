<script>
  import { onMount, onDestroy } from 'svelte';
  import Card from './Card.svelte';
  import TitleBlock from './TitleBlock.svelte';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  export let project;
  export let reverse;

  let titleBlockNode;
  let cardNode;
  let parentNode;

  onMount(() => {
    gsap.from(titleBlockNode, {
      opacity: 0,
      duration: 1,
      x: reverse ? '5vw' : '-5vw',
      scrollTrigger: {
        trigger: parentNode,
        start: 'top center',
      },
    });

    gsap.from(cardNode, {
      duration: 1,
      rotate: reverse ? '-10deg' : '10deg',
      x: reverse ? '-10vw' : '10vw',
      opacity: 0,
      scrollTrigger: {
        trigger: parentNode,
        start: 'top center',
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

<!-- <div class="container"> -->
<div class="card-block {reverse && 'reverse'}" bind:this={parentNode}>
  <TitleBlock
    bind:node={titleBlockNode}
    title={project.shortTitle}
    eyebrow={project.client}
    rightAligned={reverse}
    ref="titleBlockRef"
    href="/work/{project.id}"
  ></TitleBlock>
  <Card bind:node={cardNode} {project} ref="cardRef"></Card>
</div>

<!-- </div> -->

<style lang="scss">
  .card-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
    flex-direction: column;
    
  }

  :global([ref='cardRef']) {
    width: 100%;
    min-width: 100%;
  }
  :global([ref='titleBlockRef']) {
    flex-grow: 1;
  }

  @media (min-width: 922px) {
    .card-block {
      padding: 100px 0px;
      flex-direction: row;
      &.reverse {
        flex-direction: row-reverse;
      }
    }

    :global([ref='cardRef']) {
      width: 55%;
      min-width: 55%;
    }
  }
</style>
