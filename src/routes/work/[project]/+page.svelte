<script>
  export let data;

  import {
    Header,
    FactBox,
    ProjectSection,
  } from '../../../components/index.js';
  import copy from '$lib/json/portfolio.json';

  const id = data.project;
  const currentIdx = copy.findIndex((project) => project.id == id);
  const content = copy[currentIdx];
  const nextIdx = currentIdx == copy.length - 1 ? 0 : currentIdx + 1;
  const nextProject = copy[nextIdx];
  const getSectionStyle = (section) => {
    let style = '';
    if (section.backgroundColor) {
      style += `background-color: ${section.backgroundColor};`;
    }
    if (section.backgroundImage) {
            style += `background-image: url('/work/${id}/${section.backgroundImage}');`
        }
    if (section.backgroundPos) {
      style += `background-position: ${section.backgroundPos};`;
    }
    return style;
  };
</script>

<a class='work__back' href='/'>
    <img src='./assets/images/arrow-right.svg' />
    Home
</a>

<!-- Hero -->

<div
  class="work__hero"
  style="background-image: url('/work/{id}/hero.png'); background-position: {content.heroPos}"
/>

<!-- Intro -->
<div class="section work__intro">
  <div class="container">
    <Header title={content.title} />

    <div class="work__content">
      <div class="work__block">
        <div class="work__body">{@html content.body}</div>
      </div>
      <div class="work__block">
        <FactBox {content} />
      </div>
    </div>
  </div>
</div>

{#each content.sections as section}
  <div class='section' style={getSectionStyle(section)}>
    <ProjectSection {section} {content} />
  </div>
{/each}

<div class='work__next'>
    <div class='container work__next-container'>
        <div>
            <div class='work__eyebrow'>Next Project</div>
            <div class='work__value'>{nextProject.title}</div>
        </div>
        <img src='../../../assets/images/arrow-right.svg' class='work__next-arrow' />
    </div> 

</div>

<style lang="scss">
  @mixin landing-heights($hero-height) {
    .work__hero {
      height: #{$hero-height}vh;
    }

    Header {
      height: #{100 - $hero-height}vh;
      margin-bottom: 0px;
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
    padding: 30px 0px;
    cursor: pointer;

    &:hover {
      background-color: $color-purple-light;
    }

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

  .work__next-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .work__next-arrow {
    width: 70px;
  }

  .work__back {
    color: white;
    cursor: pointer;
    font-size: 22px;
    left: 20px;
    position: fixed;
    top: 20px;
    z-index: 5;

    & > img {
      margin-right: 10px;
      transform: rotate(180deg);
    }
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

    .work__next {
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
