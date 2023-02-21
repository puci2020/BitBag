<script>
import {onMounted} from "vue";
import Panel from 'primevue/panel';
import Product from "./Product.vue";
import useProducts from "../hooks/useProducts";

export default {
  name: 'BestSalesProducts',
  components: {Panel, Product},
  setup(){
    const {loading, bestSalesProducts, getBestSalesProducts} = useProducts()

    getBestSalesProducts();

    return {loading, bestSalesProducts};
  }
}
</script>

<template>
  <h1>Najczęściej sprzedawane</h1>
  <div v-if="loading">Pobieranie danych...</div>
  <Product v-for="product in bestSalesProducts" :name="product.name" :image="product.image" :priceRegular="product.price.regular" :priceCurrent="product.price.current" :rate="product.rating" :amount="product.amount"></Product>
</template>

<style scoped>

</style>
