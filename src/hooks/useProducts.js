import { ref } from 'vue'
import axios from "axios";

export default function useProducts() {
  const API_URL = 'http://localhost:8082'
  const productOfDay = ref([]);
  const bestSalesProducts = ref([]);
  const recommendedForYou = ref([]);
  const loading = ref(true);

  const getProductOfDay = async () => {
    const response = await axios.get(`${API_URL}/products`);
    productOfDay.value = response.data['product-of-a-day'];
    loading.value = false;
  }

  const getBestSalesProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    bestSalesProducts.value = response.data['best-sales'];
    loading.value = false;
  }

  const getRecommendedForYou = async () => {
    const response = await axios.get(`${API_URL}/products`);
    recommendedForYou.value = response.data['recommended-for-you'];
  }


  return {
    loading,
    productOfDay,
    bestSalesProducts,
    recommendedForYou,
    getProductOfDay,
    getBestSalesProducts,
    getRecommendedForYou
  }
}
