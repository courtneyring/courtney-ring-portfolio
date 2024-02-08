<script>
  export let content;
  import { onDestroy, onMount } from 'svelte';
  // import {gsap, ScrollTrigger} from '../lib/utils/gsap.js';
    import Button from '../../components/Button.svelte';
  // import {gsap, ScrollTrigger} from 'gsap/all';
  // import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
  // gsap.registerPlugin(ScrollTrigger);

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

  // onMount(() => {
  //   let tl = gsap.timeline({ ease: 'power1.inOut' });
  //   for (let [idx, val] of letters.entries()) {
  //     if (letters[idx] == ' ') continue;
  //     tl.from(
  //       `.hero__text > h1 > span:nth-child(${idx + 1})`,
  //       fromPos[idx % fromPos.length],
  //       // { scale: 1, x: 0, y: 0, duration: 0.5 },
  //       '<+0.1',
  //     );
  //   }
  //   tl.fromTo(
  //     'h2',
  //     { opacity: 0, y: '1vh' },
  //     { opacity: 1, duration: 0.5, ease: 'power1.inOut', y: 0 },
  //   );

  //   // return () => {

  //   // };
  // });

  // onDestroy(() => {
  //   let triggers = ScrollTrigger.getAll();
  //   triggers.forEach((trigger) => {
  //     trigger.kill();
  //   });
  // });
</script>

<section class="hero">
  <div class="hero__text">
    <h1>
      {#each letters as letter}
        <span>{letter}</span>
      {/each}
    </h1>
    <h2>
      {#each content.hero.eyebrow as eyebrow}
        <span>{eyebrow}</span>
      {/each}
    </h2>
  </div>
</section>

<style lang="scss">
  .hero {
    align-items: flex-start;
    background-color: $color-blue-dark;
    display: flex;
    height: 100%;
    min-height: 100vh;
    justify-content: center;
    overflow: hidden;
    // position: relative;
    width: 100%;
  }

  .hero__text {
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

      & span {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:not(:last-child)::after {
          content: '•';
          margin: 0px 10px;
        }
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

  @media (min-width: 480px) {
    .hero__text > h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 768px) {
    .hero {
      background-size: cover;
      background-position: 63% 0%;
    }

    .hero__text {
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
  }

  @media (min-width: 992px) {
    .hero {
      align-items: center;
    }

    .hero__text {
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
    .hero__text {
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
    .hero__text {
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
