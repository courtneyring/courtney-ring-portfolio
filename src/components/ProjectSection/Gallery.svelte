<script>
  export let section;
</script>

<div class="gallery container">
  {#each section.images as image}
    <img src={image} />
  {/each}
</div>

<style lang="scss">

    .container {
        max-width: 2000px;
    }

  .gallery {
    display: grid;
    gap: 50px;
  }

  .gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    height: 700px
  }

  /* 2 images: 50/50 side by side */
  .gallery:has(> img:first-child:nth-last-child(2)) {
    grid-template-columns: 1fr 1fr;
  }

  /* 4 images: row 1 is 1/3–2/3, row 2 is 50/50 */
  .gallery:has(> img:first-child:nth-last-child(4)) {
    grid-template-columns: repeat(6, 1fr);
  }
  .gallery:has(> img:first-child:nth-last-child(4)) > img:nth-child(1) {
    grid-column: span 2;
  }
  .gallery:has(> img:first-child:nth-last-child(4)) > img:nth-child(2) {
    grid-column: span 4;
  }
  .gallery:has(> img:first-child:nth-last-child(4)) > img:nth-child(3),
  .gallery:has(> img:first-child:nth-last-child(4)) > img:nth-child(4) {
    grid-column: span 3;
  }
</style>
