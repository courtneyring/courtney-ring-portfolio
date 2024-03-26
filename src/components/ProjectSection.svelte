<script>
  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount, onDestroy } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  export let section;
  export let content;
  let node;

  onMount(() => {
    gsap.from(node, {
      opacity: 0,
      y: "2vh",
      duration: 0.5,
      scrollTrigger: {
        trigger: node,
        start: "top bottom-=40%",
        markers: true
      },
    });
  })

  onDestroy(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
  });

</script>
<div class='section__container'>
{#if section.layout == 'image'}
<div class='section__media container'>
    <img  src='/work/{content.id}/{section.image}'/>
</div>



{:else if section.layout == 'video'}
<div class='section__media container'>
    {#if section.video}
    <video width="600" height="600" controls>
        <source src="/work/{content.id}/{section.video}" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      {:else}
      <div class='section__embed ' >{@html section.videoEmbed}</div>
      {/if}
</div>


{:else if section.layout == 'background-image'}
<div class='section__background container'>
</div>

{:else if section.layout == 'text'}
<div class='section__text container' bind:this={node}>
    <div class='section__subheader ' style='color: {section.textColor}'>{section.title}</div>
    <div class='section__text '  style='color: {section.textColor}'>{@html section.body}</div>
</div>


{:else if section.layout == 'quote'}
<div class='section__quote container'>
    <div class='section__statement '>{section.quote}</div>
    <div class='section__speaker '>{@html section.speaker}</div>

</div>

{/if}
</div>

<style lang="scss">

.section__container {
    width: 100%;
}

.section__media {
    align-items: center;
    display: flex;
    justify-content: center;
    // width: 100%;
    height: 80vh;

    & img {
        height: 100%;
    }

    & video {
        width: auto;
        height: 100%;
    }
}

.section__embed {
    width: 100%;
}

.section__background {
    height: 70vh;
}

.section__text {
    color: white;
    max-width: 800px;
}

.section__subheader {
    font-size: 25px;
    margin-bottom: 30px;
}

.section__text {
    line-height: 30px;
}

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

    .section__background {
        height: 100vh;
    }
}



</style>