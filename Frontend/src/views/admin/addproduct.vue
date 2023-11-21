<template>
    <div>
      <h2 style="color: #FF5733;">Thêm Sản Phẩm</h2>
      <form @submit.prevent="addProduct" style="max-width: 400px; margin: auto;">
        <div class="mb-3">
          <label for="image" class="form-label" style="color: #336699;">Link Hình Ảnh:</label>
          <input type="text" class="form-control" id="image" v-model="productData.image" required>
        </div>
        <div class="mb-3">
          <label for="productName" class="form-label" style="color: #336699;">Tên Sản Phẩm:</label>
          <input type="text" class="form-control" id="productName" v-model="productData.product_name" required>
        </div>
        <div class="mb-3">
          <label for="productPrice" class="form-label" style="color: #336699;">Giá Sản Phẩm:</label>
          <input type="number" class="form-control" id="productPrice" v-model="productData.product_price" required>
        </div>
        <div class="mb-3">
          <label for="soLuongNhap" class="form-label" style="color: #336699;">Số Lượng Nhập:</label>
          <input type="number" class="form-control" id="soLuongNhap" v-model="productData.so_luong_nhap" required>
        </div>
        <button type="submit" class="btn btn-primary" style="background-color: #FF5733;">Thêm Sản Phẩm</button>
      </form>
    </div>
  </template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      productData: {
        image: '',
        product_name: '',
        product_price: null,
        so_luong_nhap: null
      }
    };
  },
  methods: {
    addProduct() {
      axios.post('http://localhost:3004/api/addproduct', this.productData);
        alert('Thêm sản phẩm mới thành công!!')
    }
  }
};
</script>