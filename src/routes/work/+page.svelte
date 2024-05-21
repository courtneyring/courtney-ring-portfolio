<script>
  import Header from '../../components/Header.svelte';
  import portfolio from '$lib/json/portfolio.json';
  import ImageGrid from '../../components/ImageGrid.svelte';
</script>

<svelte:head>
  <title>Courtney Ring | Work</title>
  <meta name="Courtney Ring | Work" content="Courtney Ring | Work" />
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