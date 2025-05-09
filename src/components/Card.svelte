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

<a class='card' href='/work/{project.id}' bind:this={node} {ref} style='height: {height}px' aria-label={`Link to ${project.id}`}>
  <div class='card__image' style='background-image: url(/work/{project.id}/{project.heroImg}); '></div>
</a>


<style lang='scss'>
  .card {
    border-radius: 10px;
    display: flex;
    height: 300px;
    // width: 50vw;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  @media(min-width: 768px) {
    .card {
      height: 400px;
    }
  }

  @media(min-width: 992px) {
    .card {
      height: 700px;
    }
  }

  @media(min-width: 1200px) {
    .card {
      height: 1000px;
    }
  }

    @media(min-width: 1920px) {
    .card {
      height: 1600px;
    }
  }
</style>