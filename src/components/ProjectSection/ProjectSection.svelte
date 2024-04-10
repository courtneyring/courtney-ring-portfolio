<script>
  import Text from './Text.svelte';
  import Image from './Image.svelte';
  import Video from './Video.svelte';
  import Background from './Background.svelte';
  import Quote from './Quote.svelte';

  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  export let section;
  export let content;
  let containerNode;

  // const sectionStyle = () => {
    let style = '';
    if (section.backgroundColor) {
      style += `background-color: ${section.backgroundColor};`;
    }
    if (section.backgroundImage) {
      style += `background-image: url('/work/${content.id}/${section.backgroundImage}');`;
    }
    if (section.backgroundPosX && section.backgroundPosY) {
      style += `background-position: ${section.backgroundPosX}% ${section.backgroundPosY-12}%;`;
    }
    console.log(style)
    // return style;
  // };

  onMount(() => {
    gsap.to(containerNode, {
      backgroundPosition: `${section.backgroundPosX}% ${section.backgroundPosY + 12}%`,
      duration: 2,
      scrollTrigger: {
        trigger: containerNode,
        start: 'top bottom-=40%',
        scrub: true
      },
    });
  });

  onDestroy(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  });
</script>

<div class="section__container {section.backgroundImage && 'background'}" style={style}  bind:this={containerNode}>
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
    background-size: cover;
    width: 100%;
  }
</style>
