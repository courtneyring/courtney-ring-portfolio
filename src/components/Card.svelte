<script>
  export let project;
</script>

<a class='card' href='/work/{project.id}'>
  <div class='card__image' style='background-image: url(/work/{project.id}/{project.tileImg}'></div>
</a>


<style lang='scss'>
  .card {
    border-radius: 10px;
    display: flex;
    height: 33.3vw;
    width: 50vw;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
</style>