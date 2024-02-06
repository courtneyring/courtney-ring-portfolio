<script>
  import { Header, ImageGrid, Card, CardBlock } from '../components/index.js';
  import { onDestroy, onMount } from 'svelte';

  import content from '$lib/json/landing.json';
  import portfolio from '$lib/json/portfolio.json';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
    import TitleBlock from '../components/TitleBlock.svelte';
  gsap.registerPlugin(ScrollTrigger);

  const tiles = portfolio.map((project) => {
    let { title, id, tileImg } = project;
    return { title, id, tileImg };
  });

  let letters = content.hero.title.split('');
  letters.find((letter) => letter == '');

  const fromPos = [
    { scale: 22, x: '-200vw' },
    { scale: 22, y: '-300vh' },
    { scale: 22, y: '200vh', x: '-20vw' },
    { scale: 22, y: '-200vh', x: '-50vw' },
    { scale: 22, y: '-200vh', x: '100vw' },
    { scale: 22, y: '200vh', x: '20vw' },
  ];
  

  onMount(() => {
    let tl = gsap.timeline({ ease: 'power1.inOut' });
    for (let [idx, val] of letters.entries()) {
      if (letters[idx] == ' ') continue;
      tl.from(
        `.landing__text > h1 > span:nth-child(${idx + 1})`,
        fromPos[idx % fromPos.length],
        // { scale: 1, x: 0, y: 0, duration: 0.5 },
        '<+0.1',
      );
    }
    tl.fromTo(
      'h2',
      { opacity: 0, y: '1vh' },
      { opacity: 1, duration: 0.5, ease: 'power1.inOut', y: 0 },
    );

    return () =>  tl.revert();
  });

</script>

<svelte:head>
  <title>Courtney Ring | Creative Technologist</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="hero">
  <div class="landing__hero">
    <div class="landing__text">
      <h1>
        {#each letters as letter}
          <span>{letter}</span>
        {/each}
      </h1>

      <!-- <h1>{content.hero.title}</h1> -->
      <h2>
        {#each content.hero.eyebrow as eyebrow}
          <span>{eyebrow}</span>
        {/each}
      </h2>
    </div>
  </div>
</section>
<section id="portfolio">
  

  <div class="container">
    <Header title="Recent Work"  />
    <CardBlock project={tiles[0]}/>

    <!-- <ImageGrid {tiles} /> -->
  </div>
</section>

<!-- <div class="landing__sections"> -->
<!------------------ About Me ------------------->
<!-- <section id="about">
    <div class="container">
      <Header title={content.about.title} />
      <div class="landing__body">
        {@html content.about.paragraph}
        <div class="landing__pic"></div>
      </div>
    </div>
  </section> -->
<!------------------ Portfolio ------------------->

<!-- </div> -->

<style lang="scss">
  .landing__hero {
    align-items: flex-start;
    // background-image: url('$lib/images/hero-mobile.jpg');
    // background-position: 71% 83%;
    // background-size: auto 119%;
    background-color: $color-blue-dark;
    display: flex;
    height: 100%;
    justify-content: center;
    // position: fixed;
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
      // display: none;

      & span {
        &:not(:last-child)::after {
          content: '•';
          margin: 0px 10px;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    & > h1 {
      color: $color-white;
      font-size: 45px;
      font-weight: 600;
      text-align: center;
      display: flex;

      & > span {
        min-width: 10px;
      }
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
      background-color: $color-blue-dark;
      overflow: hidden;
      position: relative;
      // z-index: 1;
    }

    &#about {
      background-color: $color-blue-medium;
    }

    &#portfolio {
      background-color: $color-blue-dark;
    }
  }

  .landing__body {
    color: $color-purple-light;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .landing__pic {
    // background-image: url('$lib/images/profile-image.jpg');
    // background-size: 120%;
    // background-position: 0% 100%;

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
    .landing__hero {
      background-size: cover;
      background-position: 63% 0%;
    }

    .landing__text {
      & > h2 {
        display: block;
        font-size: 14px;
        letter-spacing: 3px;
        flex-direction: row;
        display: flex;

        & span {
          flex-direction: row;
        }
      }

      & > h1 {
        font-size: 94px;
        line-height: 110px;
        margin: 15px 0px;
      }
    }

    .landing__body {
      // column-count: 2;
      // column-gap: 40px;
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

  @media (min-width: 992px) {
    .landing__hero {
      align-items: center;
      // background-size: cover;
      // background-image: url('$lib/images/hero-desktop.jpg');
    }

    .landing__text {
      margin: 0px;

      & > h2 {
        font-size: 17px;
        letter-spacing: 3px;
      }

      & > h1 {
        font-size: 120px;
        line-height: 120px;
        margin: 0px 0px 20px;

        & > span {
          min-width: 30px;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .landing__text {
      & > h2 {
        font-size: 20px;
        letter-spacing: 5px;
      }
      & > h1 {
        font-size: 170px;
        line-height: 200px;

        & > span {
          min-width: 45px;
        }
      }
    }
  }
  @media (min-width: 1500px) {
    .landing__text {
      & > h2 {
        font-size: 26px;
        letter-spacing: 5px;
      }
      & > h1 {
        font-size: 200px;
        line-height: 200px;
      }
    }
  }
</style>
