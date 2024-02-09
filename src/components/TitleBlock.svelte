<script>
  import { Button } from './index.js';
  export let node;
  export let title;
  export let eyebrow;
  export let rightAligned;
  export let ref;
  export let href;
</script>

<div
  class="title-block {rightAligned && 'right-aligned'}"
  bind:this={node}
  {ref}
>
  <p>{eyebrow}</p>
  <h4>{title}</h4>
  <Button hollow textColor="white" bgColor="white" {href}>View Project</Button>
</div>

<style lang="scss">
  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    padding-top: 8%;
    margin-bottom: 30px;
  }

  h4 {
    color: white;
    font-size: 65px;
    line-height: 65px;
    margin-bottom: 30px;
    text-align: center;
  }

  p {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }

  @media (min-width: 992px) {
    .title-block {
      align-items: flex-start;
      margin-bottom: 0px;

      &.right-aligned {
        align-items: flex-end;

        & h4 {
          text-align: right;
        }
      }
    }

    h4 {
      text-align: left;
      font-size: 80px;
    line-height: 80px;
    margin-bottom: 60px;
    }
  }
</style>
