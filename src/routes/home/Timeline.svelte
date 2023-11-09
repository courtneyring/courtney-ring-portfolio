<script>
  import landingContent from '$lib/json/landing.json';
  const timelineMarks = landingContent.timeline.marks;
</script>

<section class="timeline">
  <h2 class="timeline__header">
    With a background in software development and tech leadership
  </h2>
  <div class="timeline__center">
    <div class="timeline__content">
      <div class="timeline__blocks">
        {#each timelineMarks as mark}
          <div class="timeline__block">
            <div class="timeline__copy">
              <div class="timeline__year">{mark.year}</div>
              <div class="timeline__description">
                {mark.description}
              </div>
            </div>
            <div class="timeline__hr" />
          </div>
        {/each}
      </div>
      <div class="timeline__diagram">
        <div class="timeline__vr" />
      </div>
    </div>
    <div class="timeline__mobiles">
      {#each timelineMarks as mark}
        <div class="timeline__description-mobile">
          {mark.description}
        </div>
      {/each}
    </div>
    <div class="timeline__images">
      {#each timelineMarks as mark}
        <!-- <div class="timeline__image" /> -->
        <div class="timeline__image-set">
          {#each mark.images as markImage}
            <img src={markImage} class="timeline__image" />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: scale(0.1);
    opacity: 0;
  }

  .timeline__header {
    text-align: center;
    margin-bottom: 50px;
  }

  .timeline__center {
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
  }

  .timeline__content {
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
    // width: 200px
  }

  .timeline__description {
    display: none;
  }

  .timeline__mobiles {
    width: 100%;
    height: 100px;
  }

  .timeline__description-mobile {
    margin-bottom: 50px;
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

    & > span {
      font-weight: 700;
    }

    
  }

  .timeline__copy {
    color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .timeline__year,
    .timeline__description {
      font-weight: inherit;
      color: inherit;
    }


    // & > span {
    //   font-weight: inherit;
    //   color: inherit;
    // }
  }

  .timeline__hr {
    border-left: 1px solid black;
    height: 30px;
  }

  .timeline__vr {
    height: 100%;
    border-bottom: 1px solid black;
  }

  .timeline__diagram {
    margin-bottom: 20px;
  }

  .timeline__image-set {
    position: absolute;
    opacity: 0;
    margin-top: 30px;
    transition: opacity 1s ease-in-out;

    &:first-child {
      opacity: 1;
    }

  }

  .timeline__image {
    width: auto;
    height: 300px;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);

    &:first-child {
      transform: translate(-132px, 177px);
    }
    &:nth-child(2) {
      transform: translate(180px, 134px);
    }
  }

  .timeline__images {
    width: 457px;
    height: 100%;
    // position: absolute;
  }

  @media (min-width: 992px) {
    .timeline__center {
      flex-direction: row;
      width: unset;
    }

    .timeline__header {
      // margin-bottom: 50px;
    }

    .timeline__content {
      margin-right: 100px;
      justify-content: flex-start;
      margin-bottom: 0px;
    }

    .timeline__copy {
      display: flex;
      width: 200px;
      margin-right: 50px;
    }

    .timeline__blocks {
      display: flex;
      flex-direction: column;
    }

    .timeline__block {
      flex-direction: row;
      margin-bottom: 80px;

     
    }
    .timeline__hr {
      border-top: 1px solid black;
      border-left: 0px;
      height: unset;
      width: 50px;
    }

    .timeline__vr {
      border-bottom: 0px;
      border-left: 1px solid black;
    }

    .timeline__content {
      flex-direction: row;
    }

    .timeline__description {
      display: block;
    }

    .timeline__mobiles {
      display: none;
    }

    .timeline__image {
      width: auto;
      height: 300px;
      background-color: grey;
    }
  }
</style>
