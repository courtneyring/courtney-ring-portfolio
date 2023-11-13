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
    // background-color: #20232c;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .split__content {
    // color: white;
    opacity: 0;
    position: absolute;
    text-align: center;
    z-index: 2;

    & h2 {
      font-size: 20px;
      line-height: 30px;
    }

    & span {
      font-size: inherit;
      display: block;
      font-weight: 700;
      
    }
  }

  .split__code {
    height: 100%;
    position: absolute;
    transform: translateX(60%);
    // right: -320%;
    
    top: 36%;
    z-index: 1;
  }

  .split__color {
    transform: translateX(-60%);
    height: 150%;
    position: absolute;
    // left: -430%;
    top: -63%;
    opacity: 0.3
  }

  @media (min-width: 922px) {
    .split__content h2 {
      font-size: 80px;
      & > span {
        margin: 30px 0px;
        margin: 0px;
      }
    }

    .split__code {
      height: 120%;
      position: absolute;
      transform: translateX(100%);
      // right: -100%;
      top: unset;
    }
    .split__color {
      height: 150%;
      transform: translateX(-100%);
      // left: -130%;
      top: unset;
    }
  }
</style>
