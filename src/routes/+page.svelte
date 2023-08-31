<script>
  import { Header, ImageGrid } from '../components/index.js';
  import * as content from '../assets/json/landing.json';


  const tiles = [
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
    { title: 'test', image: 'https://placehold.co/400x400' },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="hero">
  <div class="landing__hero">
    <div class="landing__text">
      <h2>{content.hero.eyebrow}</h2>
      <h1>{content.hero.title}</h1>
    </div>
  </div>
</section>
<div class="landing__sections">
  <!------------------ About Me ------------------->
  <section id="about">
    <div class="container">
      <Header title={content.about.title} />
      <div>
        {@html content.about.paragraph }
      </div>
    </div>
  </section>
  <!------------------ Portfolio ------------------->
  <section id="portfolio">
    <div class="container">
      <Header title="Recent Work" dark />
      <ImageGrid tiles={tiles} />
    </div>
  </section>
</div>

<style lang="scss">
  .landing__hero {
    align-items: flex-start;
    background-image: url('../assets/images/hero-mobile.jpg');
    background-position: 71% 83%;
    background-size: auto 119%;
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    width: 100%;
  }

  .landing__text {
    align-items: center;
    color: $color-white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 34%;

    & > h2 {
      color: $color-white;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    & > h1 {
      color: $color-white;
      font-size: 45px;
      font-weight: 600;
      text-align: center;
    }
  }

  .landing__sections {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
  }

  section {
    width: 100%;

    &#hero {
      height: 100vh;
      position: relative;
      z-index: 1;
    }

    &#about {
      background-color: $color-blue-medium;
    }

    &#portfolio {
      background-color: $color-grey;
    }
  }

  p {
    color: $color-purple-light;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  

  @media (min-width: 480px) {
    .landing__text > h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 768px) {
    .landing__hero {
      background-size: cover;
      background-position: 63% 0%;
    }

    .landing__text {
      & > h2 {
        font-size: 25px;
        letter-spacing: 6px;
      }

      & > h1 {
        font-size: 94px;
        line-height: 110px;
        margin: 15px 0px;
      }
    }

    p:global {
      column-count: 2;
      column-gap: 40px;
    }
  }

  @media (min-width: 992px) {
    .landing__hero {
      align-items: center;
      background-size: cover;
      background-image: url('../assets/images/hero-desktop.jpg');
    }

    .landing__text {
      margin: 0px;

      & > h1 {
        font-size: 120px;
        line-height: 120px;
        margin: 0px 0px 20px;
      }
    }
  }

  @media (min-width: 1200px) {
    .landing__text > h1 {
      font-size: 140px;
    }
  }
</style>
