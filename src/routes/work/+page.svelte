<script>
  import Header from '../../components/Header.svelte';
  import portfolio from '$lib/json/portfolio.json';
  import ImageGrid from '../../components/ImageGrid.svelte';
</script>

<svelte:head>
  <title>Courtney Haberlach | Work</title>
  <meta name="Courtney Haberlach | Work" content="Courtney Haberlach | Work" />
</svelte:head>

<section>
  <div class="container">
    <Header title="All Projects" tag='h1'/>
    <ImageGrid tiles={portfolio} />
  </div>
</section>

<style lang='scss'>
  section {
    background-color: $color-blue-dark;
  }
</style>