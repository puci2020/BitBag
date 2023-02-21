<script>
import BestSalesProducts from "./components/BestSalesProducts.vue";


export default {
  name: 'App',

}
</script>

<template>
<div class="wrapper">
  <RouterLink to="/best-sales">Najczęściej sprzedawane</RouterLink>
  <RouterLink to="/best-for-you">Wybrane dla Ciebie</RouterLink>
  <RouterLink to="/product-of-day">Produkt Dnia</RouterLink>
</div>
  <RouterView></RouterView>
</template>

<style scoped>
.wrapper{
  display:flex;
  gap: 20px;
}

</style>
