<script>
  export let bgColor;
  export let textColor;
  export let hollow;
  export let href;

</script>

<a 
  href={href} 
  class='button' 
  style='
    color: {textColor}; 
    background-color: {hollow ? 'transparent': bgColor};
    border: 2px solid {bgColor};
  '><slot /></a>



<style lang='scss'>
  .button {
    border-radius: 40px;
    cursor: pointer;
    padding: 20px 30px;

    &:hover {
      opacity: 0.7;
    }
  }
</style>