<template>
  <div class="container mt-4">
    <h2 class="mb-4">Danh sách sản phẩm</h2>
    <div class="row">
      <div class="col-md-3 mb-3" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top image-container" alt="Comic">
          <div class="card-body">
            <h5 class="card-title">{{ product.product_name }}</h5>
            <p class="card-text">{{ product.product_price }} VND</p>
            <button @click="addToCart( product._id, quantity )" class="btn btn-primary">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import webService from '../services/web.service';
import axios from 'axios';
  export default {
    data() {
    return {
      products: [],
      quantity: 1,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await webService.getProduct();
      } catch (error) {
        console.error(error);
      }
    },
    async addToCart(id, quantity) {
      const data = {
        email: this.$store.state.email,
        id: id,
        quantity: quantity,
      };
      axios.post('http://localhost:3002/api/cart', data);
      alert('đã thêm vào giỏ hàng!!');
    }

    
  },
}
  
</script>

<style>
.image-container {
  margin:0px 0 0 0px;
  width: 150px;  
  height: 250px; 
  object-fit: cover; 
}

.card{
  width: 250px;
}
</style>