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
    color: $color-purple-light;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .landing__pic {
    background-image: url('/profile-image.jpg');
    background-size: 120%;
    background-position: 0% 100%;
    border-radius: 600px;
    height: 300px;
    margin: 0 auto;
    width: 300px;
  }

  @media (min-width: 480px) {
    .landing__text > h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 768px) {
    .landing__body {
      font-size: 20px;
      line-height: 34px;
      display: flex;
    }

    .landing__pic {
      min-height: 400px;
      min-width: 400px;
      margin-left: 80px;
    }
  }
</style>
