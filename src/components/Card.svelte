<script>
    import { onMount } from 'svelte';
    import Page from '../routes/+page.svelte';

  export let project;
  export let node;
  export let ref;
  $:height = 0;

  onMount(() => {
    height = node.offsetWidth * (2/3);
  })
  
</script>

<a class='card' href='/work/{project.id}' bind:this={node} {ref} style='height: {height}px'>
  <div class='card__image' style='background-image: url(/work/{project.id}/{project.heroImg}); '></div>
</a>


<style lang='scss'>
  .card {
    border-radius: 10px;
    display: flex;
    height: 33.3vw;
    // width: 50vw;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
</style>