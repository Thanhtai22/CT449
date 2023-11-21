<template>
    <div class="container">
      <h1 class="my-4">Quản lý Đơn hàng</h1>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Khách hàng</th>
                <th>Tổng giá trị</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order._id">
                <td>{{ order._id }}</td>
                <td>{{ order.user.name }}</td>
                <td>{{ order.total }} đồng</td>
                <td>
                  <span v-if="order.status === 'Chờ duyệt'" class="badge bg-warning">Chờ xử lý</span>
                  <span v-if="order.status === 'Đang giao'" class="badge bg-success">Đang giao hàng</span>
                  <span v-if="order.status === 'Đã giao'" class="badge bg-success">Giao thành công</span>
                </td>
                <td v-if="order.status === 'Chờ duyệt'">
                  <button class="btn btn-primary" @click="submitorder(order._id)">Duyệt</button>
                </td>
                <td v-if="order.status === 'Đã giao'">
                  <button class="btn btn-primary" @click="submitorder(order._id)">Gửi xác nhận</button>
                </td>
                <td v-else></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import adminService from '../../services/admin.service';
  import axios from 'axios';
  export default {
    data() {
      return {
        orders: [ ],
      };
    },
    created() {
      this.fetchorders();
    },
    methods: {
      async fetchorders() {
        this.orders = await adminService.getOrders();
      },
      async submitorder(id) {
        const confirmsubmit = confirm('Bạn có chắc chắn muốn duyệt đơn hàng này không??');
        if(confirmsubmit) {
          axios.put(`http://localhost:3002/api/orders?id=${id}`);
          window.location.reload();
        }

      }
    }
  };
  </script>
  
  <style scoped>
  .badge {
    padding: 8px;
    font-size: 0.9em;
    border-radius: 10px;
  }
  
  .bg-warning {
    background-color: #f7d794;
    color: #7f8c8d;
  }
  
  .bg-success {
    background-color: #82ccdd;
    color: #2c3e50;
  }
  
  .bg-info {
    background-color: #86e2d5;
    color: #333333;
  }
  </style>
  