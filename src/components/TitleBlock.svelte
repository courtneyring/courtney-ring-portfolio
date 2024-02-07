<script>
  import Button from './Button.svelte';
  export let node;
  export let title;
  export let subtitle;
  export let rightAligned;

</script>

<div class="title-block {rightAligned && 'right-aligned'}" bind:this={node}>
  <h4>{title}</h4>
  <p>{subtitle}</p>
  <Button>View Project</Button>
</div>

<style lang="scss">

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.right-aligned {
      align-items: flex-end;

      & h4 {
        text-align: right;
      }
    }
  }

  h4 {
    color: white;
    font-size: 80px;
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
    color: white;
    margin-bottom: 50px;
  }
</style>
