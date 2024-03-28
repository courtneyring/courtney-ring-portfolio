<script>
  export let section;
</script>

<div class="section__quote container">
  <div class="section__statement">{section.quote}</div>
  <div class="section__speaker">{@html section.speaker}</div>
</div>


<style lang='scss'>

  .section__quote {
    align-items: flex-start;
    color: white;
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    justify-content: center;
  }

  .section__statement {
    font-size: 16px;
    line-height: 40px;
    margin-bottom: 30px;
  }

  .section__speaker {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .section__statement {
      font-size: 18px;
    }

    .section__speaker {
      font-size: 14px;
      font-style: italic;
    }

  }
</style>