<script>
  import portfolio from '$lib/json/portfolio.json';
  const tiles = portfolio.map((project) => {
    let { title, id, tileImg, tilePos } = project;
    return { title, id, tileImg, tilePos };
  });
  const featuredTile = tiles[0];
  const allOtherTiles = tiles.slice(1);
</script>

<section class="portfolio">
  <h2 class="portfolio__header">
    Bringing ideas to life with every new project
  </h2>
  <div class="all__cards">
    <a class="grid__tile featured__card" href="/work/{featuredTile.id}">
      <div class="grid__tile-text">{featuredTile.title}</div>
      <div
        class="grid__tile-image"
        style="background-image: url(/work/{featuredTile.id}/{featuredTile.tileImg}); background-position: {featuredTile.tilePos}"
      />
    </a>
    <div class="portfolio__cards">
      {#each allOtherTiles as tile}
        <a class="grid__tile portfolio__card" href="/work/{tile.id}">
          <div class="grid__tile-text">{tile.title}</div>
          <div
            class="grid__tile-image"
            style="background-image: url(/work/{tile.id}/{tile.tileImg})"
          />
        </a>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .portfolio {
    align-items: center;
    // background-color: white;

    display: flex;
    justify-content: center;
    min-width: 100%;
    overflow: hidden;
    visibility: hidden;
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
    left: 110%;
    // height: 100%;
    // min-width: 100%;
    // width: 100%
  }

  .portfolio__card {
    background-color: grey;
    height: 30vw;
    min-width: 30vw;
    margin-right: 10vw;
    
    // box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);
    // cursor: pointer
  }

  .featured__card {
    background-color: grey;
    height: 100%;
    min-width: 100vw;
    transform: translateX(110vw);
    position: absolute;
    pointer-events: none;
    visibility: visible;

    &.grid__tile { border-radius: 0px;}

  }


  .portfolio__header {
    position: absolute;
    top: 10%;
    // visibility: hidden;
    text-align: center;
  }

  .grid__tile {
    position: relative;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;

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

  @media (hover: hover) and (pointer: fine) {
    .grid__tile:hover {
      & > .grid__tile-text {
        opacity: 1;
      }

      & > .grid__tile-image::before {
        opacity: 0.8;
      }
    }
  }
</style>
