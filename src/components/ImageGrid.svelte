<script>
  export let tiles;
</script>

<div class="grid__container">
  {#each tiles as tile}
    <div class="grid__tile">
      <div class="grid__tile-text">{tile.title}</div>
      <div
        class="grid__tile-image"
        style="background-image: url('{tile.image}')"
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .grid__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  .grid__tile {
    position: relative;
    background-color: green;

    &::before {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    & > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    .grid__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 15px;
    }
  }
</style>
