<template>
    <div>
        <div class="header-container">
        <h1>Länder, regionen, Orte</h1>
        <a href="#" class="all" aria-label="Alle Angebote anzeigen">Alle</a>
        </div>
        <h2>Lorem Ipsum Länder, Region, Orte</h2>
        <div class="overlay-wrapper">
        <div class="card-wrapper">
            <Card :offer="item" v-for="item in offers" :key="item.text"/>
        </div>
        <div class="white-overlay"/>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'OfferCards',
  components: {
    Card
  },
  props: {
    offers: Object
  }
}
</script>

<style scoped>
.card-wrapper {
  position:relative;
  width:100%;
  overflow-x:scroll;
  overflow-y:none;
  white-space: nowrap;
  padding-bottom:20px;
  padding-left:2px;
}
.overlay-wrapper {
  position:relative;
}
.white-overlay{
background: -webkit-gradient(linear,left top,right top,color-stop(0,hsla(0,0%,100%,0)),color-stop(100%,#fff));
position: absolute;
pointer-events: none;
height: 222px;
width: 23px;
right: 0px;
top: 0;
}
h1 {
  color: #16828F;
  font-size: 24px;
  font-family: Quicksand;
  font-weight:bold;
}
h2 {
  color: #525252;
  font-weight: 200;
  font-size: 16px;
}
.all {
  color: #16828F;
  margin-right:20px;
  text-decoration:none;
  font-size:16px;

}
.header-container {
  display:flex;
    justify-content: space-between;
      align-items: baseline;
}
</style>