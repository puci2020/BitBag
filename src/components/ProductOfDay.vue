<script>
import {onMounted} from "vue";
import Panel from 'primevue/panel';
import Product from "./Product.vue";
import useProducts from "../hooks/useProducts";

export default {
  name: 'ProductOfDay',
  components: {Panel, Product},
  setup(){
    const {loading, productOfDay, getProductOfDay} = useProducts()

    onMounted(()=> getProductOfDay());

    return {loading, productOfDay};
  }
}
</script>

<template>
  <h1>Produkt dnia</h1>
  <div v-if="loading">Pobieranie danych...</div>
  <div v-else>
  <Product :name="productOfDay.name" :image="productOfDay.image" :priceRegular="productOfDay.price.regular" :priceCurrent="productOfDay.price.current" :rate="productOfDay.rating" :amount="productOfDay.amount"/>
  </div>
</template>

<style scoped>

</style>
