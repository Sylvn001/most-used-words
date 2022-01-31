<template>
  <v-container fluid>
    <div class="pills">
      <Pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
  import Pill from './Pill'

  export default {
    components: {Pill},
    data: function () {
      return{
        groupedWords: [
          {name: "you", amount: 800},
          {name: "akemi", amount: 1200},
          {name: "he", amount: 853},
        ]
      }
    }
  }
</script>

<style>

</style>