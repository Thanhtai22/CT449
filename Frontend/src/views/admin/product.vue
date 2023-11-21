<template>
    <div class="container">
      <h1 class="my-4">Quản lý Sản phẩm</h1>
      <div class="row">
        <div class="col-md-12">
          <router-link to="/admin/products/add" class="btn btn-primary mb-4">Thêm mới sản phẩm</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng còn lại</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.product_price }}</td>
                <td>{{ product.so_luong_con_lai }}</td>
                <td>
                  <router-link :to="'/admin/products/edit/' + product.id" class="btn btn-info btn-sm mr-2" >Sửa</router-link>
                  <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import webService from '../../services/web.service';
  export default {
    data() {
      return {
        products: [],
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
      deleteProduct(productId) {
        
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${productId} không?`);
        if(confirmDelete){
          axios.delete(`http://localhost:3002/api/deleteproduct?id=${productId}`);
          window.location.reload();
        }
      },
    }
  };
  </script>
  
  <style scoped>
  .btn-primary {
    background-color: #ff8c00;
    border-color: #ff8c00;
  }
  
  .btn-primary:hover {
    background-color: #ff7b00;
    border-color: #ff7b00;
  }
  
  .btn-info {
    background-color: #4cb8c4;
    border-color: #4cb8c4;
  }
  
  .btn-info:hover {
    background-color: #3ca9b3;
    border-color: #3ca9b3;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
    border-color: #c82333;
  }
  </style>
  