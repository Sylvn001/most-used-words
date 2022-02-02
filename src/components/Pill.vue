<template>
  <div class="pill">
    <span class="pill-name">{{name}} - </span>
    <span class="pill-amount">{{amount}}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount']
}
</script>

<style scoped>
  .pill{
    margin: 10px;
    height: 55px;
    width: 200px;
    border-radius: 30px;

    background-color: #6f57fa;
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

  }
  .pill:hover{
    background-color: #6f57fac5;
    cursor: pointer;
  }

  .pill-amount{
    color: #6f57fa;
    margin: 0.5rem;

    background-color: rgb(240, 240, 240);

    padding: 4px;
    border: 1px solid #fff;
    border-radius: 100%;
  }

  .pill-name{
    text-transform: capitalize;
    letter-spacing: 2px;
  }
</style>