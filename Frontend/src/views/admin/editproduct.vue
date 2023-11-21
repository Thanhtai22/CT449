<template>
    <div>
      <h2 style="color: #336699;">Chỉnh Sửa Sản Phẩm</h2>
      <form @submit.prevent="editProduct">
        <div class="form-group">
          <label for="image" style="color: #336699;">Link Hình Ảnh:</label>
          <input type="text" class="form-control" id="image"  v-model="productData.image" required>
        </div>
        <div class="form-group">
          <label for="productName" style="color: #336699;">Tên Sản Phẩm:</label>
          <input type="text" class="form-control" id="productName" v-model="productData.product_name" required>
        </div>
        <div class="form-group">
          <label for="productPrice" style="color: #336699;">Giá Sản Phẩm:</label>
          <input type="number" class="form-control" id="productPrice" v-model="productData.product_price" required>
        </div>
        <div class="form-group">
          <label for="soLuongConL" style="color: #336699;">Số Lượng Còn Lại:</label>
          <input type="number" class="form-control" id="soLuongConLai" v-model="productData.so_luong_con_lai" required>
        </div>
        <div class="form-group">
          <label for="soLuongNhap" style="color: #336699;">Số Lượng Nhập:</label>
          <input type="number" class="form-control" id="soLuongNhap" v-model="productData.so_luong_nhap" required>
        </div>
        <button type="submit" class="btn btn-primary" style="background-color: #336699;">Cập Nhật Sản Phẩm</button>
      </form>
    </div>
  </template>
  
  <script>
  import webService from '../../services/web.service';
  import axios from 'axios';

  export default {
    data() {
      return {
        productData: {
          image: '',
          product_name: '',
          product_price: null,
          so_luong_con_lai: null,
          so_luong_nhap: null
        },
      };
    },
    created() {
        this.fetchProduct();
    },
    
    methods: {
        async fetchProduct() {
            this.productData = await webService.getProductId(this.$route.params.id);
        },
        async editProduct() {
            axios.put(`http://localhost:3002/api/editproduct?id=${this.$route.params.id}`, this.productData);
            const confirmEdit = confirm("Cập nhật thành công. Bạn có muốn quay lại trang sản phẩm không??");
            if(confirmEdit) {
                window.history.back();
            }
        }
    }
  };
  </script>
  