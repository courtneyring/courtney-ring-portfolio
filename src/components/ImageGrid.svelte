<script>
  export let tiles;
</script>

<div class="grid__container">
  {#each tiles as tile}
    <div class="grid__tile">
      <div class="grid__tile-text">{tile.title}</div>
      <div
        class="grid__tile-image"
        style="background-image: url(/work/{tile.id}/tile.png)"
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
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;

    &::before {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    // & > :first-child {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    // }
  }

  .grid__tile-text {
    color: white;
    font-size: 20px;
    opacity: 0;
    max-width: 80%;
    position: absolute;
    text-align: center;
    z-index: 3;

    transition: all 1s ease;
  }
  .grid__tile-image {
    background-size: cover;
    background-position: center;
    height: 100%;
    position: relative;
    width: 100%;

    transition: all 0.5s ease;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: block;
      content: ' ';
      background: #1c1d25;
      opacity: 0;
      z-index: 2;
      transition: all 0.5s ease;
    }
  }

  .grid__tile:hover {
    & > .grid__tile-text {
      opacity: 1;
    }

    & > .grid__tile-image::before {
      opacity: 0.8;
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
