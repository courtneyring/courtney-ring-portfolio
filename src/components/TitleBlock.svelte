<script>
  import {Button} from './index.js';
  export let node;
  export let title;
  export let eyebrow;
  export let rightAligned;
  export let ref;

</script>

<div class="title-block {rightAligned && 'right-aligned'}" bind:this={node} {ref}>
  <p>{eyebrow}</p>
  <h4>{title}</h4>
  <Button hollow textColor='white' bgColor='white' href=''>View Project</Button>
</div>

<style lang="scss">

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100%;
    padding-top: 8%;

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
    line-height: 80px;
    margin-bottom: 60px;
  }

  p {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
</style>
