<template>
    <div class="container">
      <h1 class="my-4">Báo cáo và Thống kê</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Doanh số theo tháng</h5>
              <p class="card-text">Báo cáo doanh số theo từng tháng của năm.</p>
              <a href="/month" class="btn btn-primary">Xem báo cáo</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Thống kê đơn hàng</h5>
              <p class="card-text">Thống kê số lượng đơn hàng theo trạng thái khác nhau.</p>
              <a href="/statistic" class="btn btn-primary">Xem thống kê</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Các phần logic có thể được định nghĩa ở đây nếu cần
  };
  </script>
  
  <style scoped>
  /* Tùy chỉnh kiểu dáng để tạo hiệu ứng "màu mè" cho trang báo cáo và thống kê */
  .card {
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #f8c291;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  </style>
  