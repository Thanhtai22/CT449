<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div v-if="$store.state.email == 'admin@gmail.com'" class="container" >
          <a class="navbar-brand" href="/admin"><b>Trang chủ</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/admin/product"><b>Sản phẩm</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/order"><b>Đơn hàng</b></a>
              </li>
              
              
              <li class="nav-item">
                <router-link v-if="!$store.state.email" to="/login" class="nav-link"><b>Đăng nhập</b></router-link>
                <a v-if="$store.state.email" @click="logout" class="nav-link"><b>Đăng xuất</b></a>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="container" >
          <a class="navbar-brand" href="/">Trang chủ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link v-if="!$store.state.email" class="nav-link" to="/login" >Sản phẩm</router-link>
                <a v-if="$store.state.email" class="nav-link" href="/ordered">Sản phẩm</a>
              </li>
              <li class="nav-item">
                <router-link v-if="!$store.state.email" class="nav-link" to="/login" >Giỏ hàng</router-link>
                <a v-if="$store.state.email" class="nav-link" href="/cart">Giỏ hàng</a>
              </li>
              <li class="nav-item">
                <router-link v-if="!$store.state.email" class="nav-link" to="/login" >Đăng nhập</router-link>
                <a v-if="$store.state.email" @click="logout" class="nav-link">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
<script>
// import axios from 'axios';
  export default {
    data() {
      return {
        searchs: ''
      };
    },
    methods:{
      logout() {
        this.$store.commit('logout')
      },
      
    },
    mounted() {
      this.$store.commit('initializeStore')
    },
      
  }
</script>


<style>
  header{
    background: rgb(223, 223, 223)  ;
  }

  
</style>