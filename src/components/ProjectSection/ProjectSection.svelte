<script>
  import Text from './Text.svelte';
  import Image from './Image.svelte';
  import Video from './Video.svelte';
  import Background from './Background.svelte';
  import Quote from './Quote.svelte';

  export let section;
  export let content;
</script>

<div class="section__container">
  {#if section.layout == 'image'}
    <Image contentId={content.id} sectionImage={section.image} />
  {:else if section.layout == 'video'}
    <Video
      contentId={content.id}
      filename={section.video}
      embed={section.videoEmbed}
    />
  {:else if section.layout == 'background-image'}
    <Background />
  {:else if section.layout == 'text'}
    <Text {section} />
  {:else if section.layout == 'quote'}
    <Quote {section} />
  {/if}
</div>

<style lang="scss">
  .section__container {
    width: 100%;
  }

</style>
