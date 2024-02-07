<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';
  import TitleBlock from './TitleBlock.svelte';
  import gsap from 'gsap';
  export let project;
  export let reverse;
  let titleBlockRef;
  let cardRef;
  let parentRef;

  console.log(project)
  onMount(() => {

    gsap.from(titleBlockRef, {
      opacity: 0,
      duration: 1,
      x: reverse ? '5vw' : '-5vw',
      scrollTrigger: {
        trigger: parentRef,
        start: 'top center'
      },
    });

    gsap.from(cardRef, {
      duration: 1,
      rotate: reverse ? '-10deg' : '10deg',
      x: reverse ? '-10vw' : '10vw', 
      opacity: 0,
      scrollTrigger: {
        trigger: parentRef,
        start: 'top center'
      },
    })

  });
</script>

<!-- <div class="container"> -->
  <div class="card-block {reverse && 'reverse'}" bind:this={parentRef}>
    <TitleBlock bind:node={titleBlockRef} title={project.shortTitle} subtitle={project.subtitle} rightAligned={reverse}></TitleBlock>
    <Card bind:node={cardRef} {project}></Card>
  </div>
<!-- </div> -->

<style lang="scss">
  .card-block {
    display: flex;
    justify-content: space-between;
    padding: 50px 0px;
    width: 100%;

    &.reverse {
      flex-direction: row-reverse;
    }
  }
</style>
