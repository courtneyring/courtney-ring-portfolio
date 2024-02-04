<script>
  import { gsap } from 'gsap';
  import { TextPlugin } from 'gsap/dist/TextPlugin';
  import { onMount } from 'svelte';

  gsap.registerPlugin(TextPlugin);

  const landingEntranceAnimations = () => {
    const tl = gsap.timeline({ ease: 'power1.inOut', repeat: -1 });
    const captions = [
      'Creative Technologist',
      'Technology Lead',
      'Software Engineer',
    ];
    const el = '.landing__headline';

    for (let i = 0; i < captions.length; i++) {
      tl.to(el, { duration: 2, text: captions[i] }, '>');
      tl.to(el, { duration: 2, text: captions[i], reversed: true }, '>');
    }
  };

  onMount(landingEntranceAnimations);
</script>

<section class="landing">
  <div class="landing__content">
    <h3>Hi I'm</h3>
    <h1>Courtney Ring</h1>
    <h1 class="landing__headline"></h1>
    <!-- <h3 >aka: A computer nerd with a passion for cool experiences</h3> -->
  </div>
</section>

<style lang="scss">
  .landing {
    // background: url('/hero-desktop.jpg');
    background-color: #20232c;
    color: white;
  }

  .landing__content {
    opacity: 0;
  }

  .landing__headline {
    height: 165px;
  }
</style>
