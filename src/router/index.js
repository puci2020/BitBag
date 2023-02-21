import { createRouter, createWebHistory } from "vue-router";
import BestSalesProducts from "../components/BestSalesProducts.vue";
import RecommendedForYouProducts from "../components/RecommendedForYouProducts.vue";
import ProductOfDay from "../components/ProductOfDay.vue";



const routes = [
  {
    path: '/best-sales',
    component: BestSalesProducts
  },
  {
    path: '/best-for-you',
    component: RecommendedForYouProducts
  },
  {
    path: '/product-of-day',
    component: ProductOfDay
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
