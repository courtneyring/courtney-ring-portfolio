<script>
  import Hero from '../sections/landing/Hero.svelte';
  import Work from '../sections/landing/Work.svelte';
  import content from '$lib/json/landing.json';
  import portfolio from '$lib/json/portfolio.json';

  const projects = portfolio
    .filter((p) => p.featured)
    .map((project) => {
      let { shortTitle, subtitle, id, heroImg, client } = project;
      return { shortTitle, subtitle, id, heroImg, client };
    });
    console.log(projects)
</script>

<svelte:head>
  <title>Courtney Ring | Creative Technologist</title>
  <meta name="description" content="Courtney Ring | Creative Technologist" />
</svelte:head>

<div class="landing">
  <Hero {content} />
  <Work {projects} />
</div>

<style lang="scss">
  .landing {
    background-color: $color-blue-dark;
  }
</style>
