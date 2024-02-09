<script>
  import Header from '../../components/Header.svelte';
  import portfolio from '$lib/json/portfolio.json';
  import ImageGrid from '../../components/ImageGrid.svelte';
</script>

<section>
  <div class="container">
    <Header title="All Projects" />
    <ImageGrid tiles={portfolio} />
  </div>
</section>

<style lang='scss'>
  section {
    background-color: $color-blue-dark;
  }
</style>