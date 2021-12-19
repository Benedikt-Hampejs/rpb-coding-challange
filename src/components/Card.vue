<template>
<a v-if="offer.price > 0" :href="offer.link" class="wrapper" :aria-label="'Link zu den Angeboten nach ' +  offer.text + ' ab ' + offer.price + ' Euro'">
    <img :src="offer.image" width="287" height="177" />
    <span class="text">{{offer.text}}</span>
    <span class="price"><span>ab </span>{{offer.price | toCurrency}}</span>
</a>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    offer: Object
  }
}
</script>

<style scoped>
.wrapper {
    display:inline-block;
    position:relative;
    width: 287px;
    height: 222px;
    border-radius: 10px;
    box-shadow: -2px 2px #D9E15F;
    margin-right:20px;
}
img {
    border-radius:10px 10px 0px 0px;
}
.text {
    position:absolute;
    left: 12px;
    bottom:13px;
    font-family: Open Sans;
    font-weight:bold;
    font-size: 16px;
    color:#16828F;
}
.price {
    position:absolute;
    right: 13px;
    bottom: 13px;
    font-family: Open Sans;
    font-size:16px;
    color:#A11A79;
    font-weight: 600;

}
.price span {
    font-family: Open Sans;
    font-weight: 200;
}
</style>
