<script>
  import copy from '$lib/json/portfolio.json';

  $: featuredProject = copy[0];
  $: allOtherProjects = copy.unshift();
</script>

<section class="portfolio">
  <h2 class="portfolio__header">
    Bringing ideas to life with every new project
  </h2>
  <div class="all__cards">
    <div class="featured__card" />
    <div class="portfolio__cards">
      {#each allOtherProjects as project}
        <div class="portfolio__card" />
      {/each}
    </div>
  </div>
</section>

<style lang='scss'>

  .portfolio {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 100%;
    overflow: hidden;
  }

  .all__cards {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 100%;
    height: 100%;
  }

  .portfolio__cards {
    display: flex;
    // transform: translateX(100%);
    position: absolute;
    left: 100%;
    // height: 100%;
    // min-width: 100%;
    // width: 100%
  }

  .portfolio__card {
    background-color: grey;
    height: 30vh;
    min-width: 30vw;
    margin-right: 10vw;
  }

  .featured__card {
    background-color: grey;
    height: 100%;
    min-width: 100%;
    transform: translateX(100%);
    position: absolute;
  }

  .portfolio__header {
  }

  .portfolio__header {
    position: absolute;
    top: 10%;
    visibility: hidden;
    text-align: center;
  }
</style>