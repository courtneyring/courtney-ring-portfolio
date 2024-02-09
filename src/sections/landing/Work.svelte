<script>
  export let projects;
  import Header from '../../components/Header.svelte';
  import CardBlock from '../../components/CardBlock.svelte';
  import Button from '../../components/Button.svelte';
  
</script> 
 
 <section class="portfolio">
    <div class="container">
      <Header title="Recent Work" />
      {#each projects as project, index}
        <CardBlock {project} reverse={index % 2 == 0} />
      {/each}
      <div class="portfolio__button">
        <Button bgColor="#f9225b" color="#f9225b" href='/work'>See All Projects</Button>
      </div>
    </div>
  </section>


  <style lang='scss'>
    section.portfolio {
      position: relative;
      overflow: hidden;
    }

    .portfolio__button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>