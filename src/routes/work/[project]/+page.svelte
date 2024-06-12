<script>
  import { goto } from '$app/navigation';
  import {
    Header,
    FactBox,
    ProjectSection,
  } from '../../../components/index.js';
  import copy from '$lib/json/portfolio.json';
  import arrowRight from '$lib/images/arrow-right.svg';
  import FadeIn from '../../../components/animations/FadeIn.svelte';

  let innerWidth = 0
  $: heroImage = innerWidth < 768 && content.heroImgMobile ? content.heroImgMobile : content.heroImg;

  export let data;
  $: id = data.projectId;
  $: console.log(id)
  $: currentIdx = copy.findIndex((project) => project.id == id);
  $: content = copy[currentIdx];
  $: nextIdx = currentIdx == copy.length - 1 ? 0 : currentIdx + 1;
  $: nextProject = copy[nextIdx];

</script>

<svelte:head>
  <title>Courtney Ring | Work | {content.title}</title>
  <meta name="Courtney Ring Portfolio" content="Courtney Ring Portfolio" />
</svelte:head>

<svelte:window bind:innerWidth />

<!-- Hero -->

<div
  class="work__hero"
  style="background-image: url('/work/{id}/{heroImage}'); background-position: {content.heroPos}; background-size: cover"
/>

<!-- Intro -->
<div class="section work__intro">
  <div class="container">
    <Header title={content.title} tag='h1'/>

    <div class="work__content">
      <div class="work__block">
        <FadeIn>
          <div class="work__body">{@html content.body}</div>
        </FadeIn>
      </div>
      <div class="work__block">
        <FactBox {content} />
      </div>
    </div>
  </div>
</div>

{#each content.sections as section}
  <div class="section">
    <ProjectSection {section} {content} />
  </div>
{/each}

<!-- <a class="work__next" on:click={routeToNext}> -->
<div class="work__next">
  <a class="work__next-link" href={`/work/${nextProject.id}`}>
    <div class="container work__next-container">
      <div>
        <div class="work__eyebrow">Next Project</div>
        <div class="work__value">{nextProject.title}</div>
      </div>
      <img src={arrowRight} class="work__next-arrow" alt="right arrow" />
    </div>
  </a>
</div>

<style lang="scss">
  @mixin landing-heights($hero-height) {
    .work__hero {
      height: #{$hero-height}vh;
    }
  }

  @include landing-heights(77);

  .section {
    background-position: center;
    background-size: cover;
  }

  .work__intro {
    background-color: $color-blue-medium;
    padding-top: 0px;
  }

  .work__hero {
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  .work__content {
    display: flex;
    flex-direction: column;
  }

  .work__block {
    width: 100%;
  }

  .work__body {
    color: $color-purple-light;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .work__next {
    background-color: #49629b;
    color: white;

    cursor: pointer;

    &:hover {
      background-color: $color-purple-light;
    }

    .work__next-link {
      width: 100%;
      height: 100%;
      padding: 30px 0px;
      
      & .work__eyebrow {
        font-size: 12px;
        letter-spacing: 3px;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      & .work__value {
        font-size: 22px;
      }
    }
  }

  .work__next-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .work__next-arrow {
    width: 70px;
  }

  @media (min-width: 768px) {
    $hero-height: 75;

    .work__content {
      flex-direction: row;
    }

    .work__block {
      &:first-child {
        padding-right: 20px;
        width: 60%;
      }

      &:last-child {
        padding-left: 20px;
        width: 40%;
      }
    }

    .work__body {
      margin-bottom: 0px;
    }

    .work__next > .work__next-link {
      padding: 50px 0px;

      & .work__eyebrow {
        font-size: 16px;
      }

      & .work__value {
        font-size: 30px;
      }
    }

    .work__next-arrow {
      width: 100px;
    }
  }
</style>
