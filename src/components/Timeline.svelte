<script>
  export let timelineMarks;
</script>

<div class="timeline__content">
  <div class="timeline__blocks">
    {#each timelineMarks as mark}
      <div class="timeline__block">
        <div class="timeline__copy">
          <div class="timeline__year">{mark.year}</div>
          <div class="timeline__headline">{mark.headline}</div>
          <div class="timeline__description">
            {mark.description}
          </div>
        </div>
        <div class="timeline__marker">
          <!-- <div class="timeline__hr" /> -->
          <div class="timeline__circle-outer">
            <div class="timeline__circle-inner" />
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="timeline__diagram">
    <div class="timeline__vr" />
  </div>
</div>
<div class="timeline__mobiles">
  {#each timelineMarks as mark}
    <p class="timeline__description-mobile">
      {mark.description}
    </p>
  {/each}
</div>

<style lang="scss">
  .timeline__content {
    justify-content: space-between;
    display: flex;
    // margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
    // width: 200px
  }

  .timeline__description {
    display: none;
  }

  .timeline__mobiles {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    flex-grow: 1;
    // height: 100px;
  }

  .timeline__description-mobile {
    // margin-bottom: 50px;
    position: absolute;
    opacity: 0;

    &:first-child {
      opacity: 1;
    }
  }

  .timeline__blocks {
    display: flex;
    justify-content: space-around;
  }

  .timeline__block {
    align-items: center;
    display: flex;
    flex-direction: column;

    text-align: right;
    z-index: 1;

    & > span {
      font-weight: 700;
    }
  }

  .timeline__copy {
    color: $color-purple-light;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
    // font-size: 16px;

    & .timeline__year,
    .timeline__description {
      font-weight: inherit;
      color: inherit;
    }

    &:first-child {
      color: white;
    }

    // & > span {
    //   font-weight: inherit;
    //   color: inherit;
    // }
  }

  .timeline__headline {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .timeline__hr {
    border-left: 5px solid #7a89ab;
    height: 30px;
  }

  .timeline__vr {
    height: 100%;
    border-bottom: 1px solid #7a89ab;
  }

  .timeline__marker {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .timeline__circle-outer {
    background-color: $color-blue-medium;
    border: 1px solid #7a89ab;
    border-radius: 20px;
  }

  .timeline__circle-inner {
    width: 5px;
    height: 5px;
    margin: 3px;
    border-radius: 20px;
    background-color: #7a89ab;
  }

  .timeline__diagram {
    margin-bottom: 20px;
    margin-top: -8px;
  }

  @media (min-width: 992px) {
    .timeline__content {
      // margin-right: 100px;
      justify-content: center;
      margin-bottom: 0px;
    }

    .timeline__copy {
      font-size: 20px;
      display: flex;
      width: 400px;
      margin-right: 50px;
      align-items: flex-end;
    }

    .timeline__headline {
      font-size: 24px;
    }

    .timeline__blocks {
      display: flex;
      flex-direction: column;
    }

    .timeline__block {
      flex-direction: row;
      margin-bottom: 60px;
    }
    .timeline__hr {
      border-top: 3px solid #7a89ab;
      border-left: 0px;
      height: unset;
      width: 50px;
    }

    .timeline__vr {
      border-left:  3px solid #7a89ab;
    }

    .timeline__content {
      flex-direction: row;
    }

    .timeline__description {
      display: block;
    }

    .timeline__diagram {
      margin-left: -14px;
      margin-top: 0px;
    }

    .timeline__mobiles {
      display: none;
    }

    .timeline__circle-inner {
      width: 10px;
      height: 10px;
      margin: 5px;
    }

    .timeline__circle-outer {
      border-width: 3px;
    }
  }
</style>
