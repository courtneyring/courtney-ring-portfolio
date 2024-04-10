<script>
  import FadeIn from '../animations/FadeIn.svelte';

  export let section;

</script>

<FadeIn>
  <div class="section__text container" >
    <div class="section__subheader" style="color: {section.textColor}">
      {section.title}
    </div>
    <div class="section__text" style="color: {section.textColor}">
      {@html section.body}
    </div>
  </div>
</FadeIn>

<style lang="scss">
  .section__text {
    color: white;
    max-width: 800px;
    line-height: 30px;
  }

  .section__subheader {
    font-size: 25px;
    margin-bottom: 30px;
  }
</style>
