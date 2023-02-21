<script>
import {onMounted} from "vue";
import Panel from 'primevue/panel';
import Product from "./Product.vue";
import useProducts from "../hooks/useProducts";

export default {
  name: 'RecommendedForYouProducts',
  components: {Panel, Product},
  setup(){
    const {loading, recommendedForYou, getRecommendedForYou} = useProducts()

    getRecommendedForYou();

    return {loading, recommendedForYou};
  }
}
</script>

<template>
  <h1>Rekomendowane dla Ciebie</h1>
  <div v-if="loading">Pobieranie danych...</div>
  <div v-else>
    <Product v-for="product in recommendedForYou" :name="product.name" :image="product.image" :priceRegular="product.price.regular" :priceCurrent="product.price.current" :rate="product.rating" :amount="product.amount"></Product>
  </div>
</template>

<style scoped>

</style>
