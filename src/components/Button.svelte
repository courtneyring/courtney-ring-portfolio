<script>
  export let label;
  export let variant;
</script>

<a class='button {variant}'>
  <p>{label}</p>
</a>

<style lang='scss' >
.button {
  align-items: center;
  background-color: $color-pink-dark;
  border: 2px solid $color-pink-dark;
  border-radius: 5px;
  display: flex;
  height: 100%;
  justify-content: center;
  font-size: 20px;
  padding: 5px;
  margin: 5px;
  width: 100%;
}

.hollow {
  background-color: transparent;
}

@media(min-width: 768px) {
  .button {
    padding: 10px 30px;
    margin: 5px 20px;
  }
}
</style>