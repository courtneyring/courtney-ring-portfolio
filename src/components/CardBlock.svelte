<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';
  import TitleBlock from './TitleBlock.svelte';
  import gsap from 'gsap';
  export let project;

  onMount(() => {
    gsap.from('.title-block', {
      opacity: 0,
      duration: 1,
      x: '-5vw',
      scrollTrigger: {
        trigger: '.card-block',
        start: 'top center'
      },
    });

    gsap.from('.card', {
      duration: 1,
      rotate: '10deg',
      x: '10vw', 
      opacity: 0,
      scrollTrigger: {
        trigger: '.card-block',
        start: 'top center'
      },
    })

  });
</script>

<!-- <div class="container"> -->
  <div class="card-block">
    <TitleBlock></TitleBlock>
    <Card {project}></Card>
  </div>
<!-- </div> -->

<style lang="scss">
  .card-block {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
