<script>
  import landingContent from '$lib/json/landing.json';
  import { Button, Timeline } from '../../components';

  const timelineMarks = landingContent.timeline.marks;
</script>

<section class="background">
  <h2 class="background__header">
    With a background in tech leadership and software development
  </h2>
  <div class="background__center">
    <div class="background__timeline">
      <Timeline {timelineMarks} />
    </div>

    <div class="background__images">
      {#each timelineMarks as mark}
        <div class="background__image-set">
          {#each mark.images as markImage}
            <img src={markImage} class="background__image" />
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <!-- <div class="background__ctas"> -->
  <div class="background__buttons">
    <Button label="LinkedIn" />
    <Button label="Resume" variant="hollow" />
  </div>
  <!-- </div> -->
</section>

<style lang="scss">
  .background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: scale(0.1);
    opacity: 0;
    background-color: #20232c;
    color: white;
  }

  .background__header {
    text-align: center;
    margin-bottom: 20px;
  }

  .background__timeline {
    height: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .background__center {
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    flex-grow: 1;
  }

  .background__images {
    width: 100%;
    height: 100%;
    position: relative;
    // position: absolute;
  }

  .background__image-set {
    position: absolute;
    opacity: 0;
    // margin-top: 30px;
    transition: opacity 1s ease-in-out;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      opacity: 1;
    }
  }

  .background__image {
    width: auto;
    height: 124px;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);

    &:first-child {
      margin-left: -102px;
      margin-top: 100px;
      // margin-top: 216px;
      // transform: translate(-132px, 177px);
    }

    &:nth-child(2) {
      margin-left: 115px;
      margin-top: 75px;
      // margin-top: 161px;
      // transform: translate(180px, 134px);
    }

    &:nth-child(3) {
      margin-top: -100px;
    }
  }

  .background__buttons {
    height: 40px;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
  }

  @media (min-width: 992px) {
    .background__center {
      flex-direction: row;
      width: 80%;
      flex-grow: 1;
    }

    .background__timeline {
      width: 50%;
    }

    .background__header {
      font-size: 55px;
      margin-bottom: 70px;
    }

    .background__images {
      width: 50%;
    }

    .background__image-set {
      margin-top: 30px;
    }

    .background__image {
      width: auto;
      height: 300px;

      &:nth-child(1) {
        margin-left: -280px;
        margin-top: 50px;
      }
      &:nth-child(2) {
        margin-left: 280px;
        margin-top: 200px;
      }
      &:nth-child(3) {
        margin-top: -323px;
      }
    }

    .background__buttons {
      flex-direction: row;
      height: 62px;
      width: 500px;
      margin: 30px 0px;
    }
  }
</style>
