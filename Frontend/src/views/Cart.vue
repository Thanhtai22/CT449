<template>
    <div v-if="carts && carts.length">
      <h1>Giỏ hàng</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá sản phẩm</th>
            <th scope="col">Tổng cộng</th>
            <th scope="col"></th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="product in carts[0].listProduct" :key="product._id">
              <td>{{  product.product.product_name }}</td>
              <td>
                {{ product.quantity }}
              </td>
              <td>{{ product.product.product_price }}</td>
              <td>{{ product.product.product_price * product.quantity}}</td>
              <td>
                <button class="btn btn-danger" @click="deleteCart(product.quantity, product.product._id)">Xóa</button>
              </td>
            </tr>
            <tr>
              <th colspan="3">Tổng phả trả:</th>
              <th style="color: green;">{{ totalProduct() }} + {{ ship }} đồng (Phí ship)</th>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr >
              <td colspan="3"></td>
              <td colspan="1">
                <button class="btn btn-primary" @click="submitForm()">Đặt hàng</button>
              </td>
              <td colspan="1"></td>
            </tr>
          </tfoot>
        </table>
    </div>
    <div v-else>
      <p>Không có dữ liệu giỏ hàng.</p>
    </div>
</template>
<script>
import axios from 'axios';
import webService from '../services/web.service';
    export default {
        data() {
            return {
                carts: [],
                ship: 30000,
            };
        },
        created() {
            this.fetchCart();
        },
        methods: {
            totalProduct() {
              var totalProducts = 0;
              const userEmail = this.$store.state.email;
              const checkCart = this.carts.filter((cart) => cart.user.email === userEmail);
              for(var i = 0 ; i< checkCart.length; i++) {
                totalProducts = totalProducts + checkCart[i].total;
              }
              return totalProducts;
            },
            
            total() {
              return this.totalProduct() + this.ship;
            },
            async fetchCart() {
                try {
                    this.carts = await webService.getCart(this.$store.state.email);
                } catch (error) {
                    console.error(error);
                }
            },
            async deleteCart(idcart, idproduct) {
              const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nó không?");
              if (confirmDelete) {
                axios.put(`http://localhost:3002/api/deleteCart?idcart=${idcart}&idproduct=${idproduct}`);
                window.location.reload();
              }
            },
            async submitForm() {
              const email = this.$store.state.email;
              axios.put(`http://localhost:3002/api/ordered?email=${email}`);
              alert('Đặt hàng thành công');
            }
        }
    }
</script>