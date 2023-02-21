<script>
import {computed, ref, toRefs} from "vue";
import Card from 'primevue/card';
import Rating from "primevue/rating";


export default {
  name: 'Product',
  components: {Card, Rating},
  props: ['name', 'image', 'priceRegular','priceCurrent', 'rate', 'amount'],
  setup(props){
    const image = computed(() => props.image);
    const name = computed(() => props.name);
    const priceRegular = computed(() => props.priceRegular);
    const priceCurrent = computed(() => props.priceCurrent);
    const rate = computed(() => props.rate);
    const amount = computed(() => props.amount);


    return {name, image, priceRegular, priceCurrent, rate, amount}
  }
}
</script>

<template>
  <Card style="width: 25em; margin: 10px">
    <template #header>
      <img :src="image" style="height: 15rem" />
    </template>
    <template #title>
      {{name}}
    </template>
    <template #subtitle>
      <div class="rate-stock">
      <Rating v-model="rate" :readonly="true" :cancel="false"/>
      <span class="product-badge status-instock">{{amount}}</span>
      </div>
    </template>
    <template #content>
      Regularna cena: {{priceRegular}}<br/>
      Obecna cena: {{priceCurrent}}
    </template>
    <template #footer>
      <Button label="Dodaj do koszyka" />
    </template>
  </Card>
</template>

<style scoped >
.rate-stock{
  display: flex;
  justify-content: space-between;
}

.main-info{
  display: flex;
  flex-direction: column;
}
</style>
