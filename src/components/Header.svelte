<script>
  export let title;
  export let dark;
</script>

<div class='header__container {dark ? 'dark' : ''}'>
  <div class='header__title'>{title}</div>
  <div class='header__divider'></div>
</div>


<style lang='scss'>

.header__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
}

.header__title {
    color: white;
    font-size: 28px; 
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
}

.header__divider {
    border-top: 1px solid $color-white;
    width: 100px;
}

.header__container.dark {

    .header__title {
        color: $color-blue-medium;
    }
    .header__divider {
        border-top-color: $color-blue-dark;
    }

}

@media(min-width: 768px) {
    .header__title {
        font-size: 46px;
    }

}
</style>
