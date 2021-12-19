<template>
  <div id="app">
    <OfferCards :offers="data" />
  </div>
</template>

<script>
import OfferCards from './components/OfferCards.vue'

import data from './data/data.js'

export default {
  name: 'App',
  components: {
    OfferCards,
  },
  data () {
    return {
      data: data
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#app {
  padding-left: 10px;

}
body{
  margin: auto;
  font-family: Open Sans;
}

</style>
