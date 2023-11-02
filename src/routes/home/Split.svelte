<section class="split">
  <img class="split__code split__background" src="/code-background.png" />
  <img class="split__color split__background" src="/color-background.png" />
  <div class="split__content">
    <h2>
      Working at the intersection of <span class="split__design split__text"
        >interactive design</span
      >
      and <span class="split__tech split__text">emerging technology</span>
    </h2>
  </div>
</section>

<style lang="scss">
  .split {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;

  }

  .split__content {
    opacity: 0;
    position: absolute;
    text-align: center;
    z-index: 2;

    & span {
      display: block;
      font-weight: 700;
    }
  }


  .split__code {
    max-width: 100%;
    position: absolute;
    right: -100%;
    z-index: 1;
  }

  .split__color {
    height: 150%;
    position: absolute;
    left: -130%;
  }


  @media(min-width: 922px) {
    .split__code {
      height: 120%;
      position: absolute;
      // right: -100%;
    }
    .split__color {

    }
  }
</style>
