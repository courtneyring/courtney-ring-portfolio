<script>
  import Header from '../../components/Header.svelte';
  import content from '$lib/json/landing.json';
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="about">
  <div class="container">
    <Header title={content.about.title} />
    <div class="landing__body">
      {@html content.about.paragraph}
      <div class="landing__pic"></div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    background-color: $color-blue-dark;
  }

  .landing__body {
    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    display: flex;
    flex-direction: column-reverse;
  }

  .landing__pic {
    background-image: url('/profile-image.jpg');
    background-size: 180%;
    background-position: 32% 70%;
    border-radius: 600px;
    height: 300px;
    margin: 0 auto;
    width: 300px;
  }

  @media (min-width: 768px) {
    .landing__body {
      font-size: 20px;
      line-height: 34px;
      flex-direction: row;
    }

    .landing__pic {
      min-height: 400px;
      min-width: 400px;
      margin-left: 80px;
    }
  }
</style>
