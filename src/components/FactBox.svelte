<script>
  export let content;
</script>

<div class='fact-box__container'>
    {#if content.role}
    <div class='fact-box__fact'>
        <div class='fact-box__label'>Role</div>
        <div class='fact-box__value'>{content.role}</div>
    </div>
    {/if}
    {#if content.skills}
    <div class='fact-box__fact'>
        <div class='fact-box__label'>Requirements</div>
        <div class='fact-box__value'>{content.skills}</div>
    </div>
    {/if}
    {#if content.employer}
    <div class='fact-box__fact'>
        <div class='fact-box__label'>Employer</div>
        <div class='fact-box__value'>{content.employer}</div>
    </div>
    {/if}
    {#if content.client}
    <div class='fact-box__fact'>
        <div class='fact-box__label'>Client</div>
        <div class='fact-box__value'>{content.client}</div>
    </div>
    {/if}
    {#if content.date}
    <div class='fact-box__fact'>
        <div class='fact-box__label'>Dates</div>
        <div class='fact-box__value'>{content.date}</div>
    </div>
    {/if}

</div>

<style lang="scss" >

.fact-box__container {
    background-color: $color-blue-dark;
    border: 1px solid rgb(46, 49, 58);
    padding: 30px;
}


.fact-box__fact {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.fact-box__label {
    color: #555c6e;
    font-size: 12px;
    letter-spacing: 4px;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.fact-box__value {
    color: white;
    font-size: 18px;
    line-height: 20px;
}
</style>