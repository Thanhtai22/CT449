<template>
    <div class="container">
    <h1 class="my-4">Trang chủ Admin</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img src="https://toperp.vn/web/image/65949-b68f846a/4433108.jpg?access_token=f198386f-ccd7-427d-9522-f7b983db4709" width="300" height="250" class="card-img-top" alt="Ảnh minh họa">
          <div class="card-body">
            <h5 class="card-title">Quản lý Sản phẩm</h5>
            <p class="card-text">Quản lý danh sách sản phẩm, thêm, sửa, xóa sản phẩm.</p>
            <a href="/admin/product" class="btn btn-primary">Đi đến trang quản lý sản phẩm</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2018/04/nhung-dieu-nhan-vien-quan-ly-don-hang-shop-ban-le-can-biet.jpg" width="300" height="250" class="card-img-top" alt="Ảnh minh họa">
          <div class="card-body">
            <h5 class="card-title">Quản lý Đơn hàng</h5>
            <p class="card-text">Quản lý đơn hàng, xác nhận, giao hàng, và hủy đơn hàng.</p>
            <a href="/admin/order" class="btn btn-primary">Đi đến trang quản lý đơn hàng</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/1427679422/vi/vec-to/b%C3%A1o-c%C3%A1o-kinh-doanh-th%E1%BB%91ng-k%C3%AA-d%C6%B0%E1%BB%9Bi-d%E1%BA%A1ng-bi%E1%BB%83u-%C4%91%E1%BB%93-h%C3%ACnh-tr%C3%B2n-v%C3%A0-thanh-doanh-nh%C3%A2n-ph%C3%A2n-t%C3%ADch-s%E1%BB%91.jpg?s=612x612&w=is&k=20&c=weQ46iORV7Bz-vptvB2zs1dFO0uKz3AwMcDyJVtuWrw=" width="300" height="250" class="card-img-top" alt="Ảnh minh họa">
          <div class="card-body">
            <h5 class="card-title">Báo cáo và Thống kê</h5>
            <p class="card-text">Xem báo cáo doanh số, thống kê đơn hàng</p>
            <a href="/admin/statistic" class="btn btn-primary">Đi đến trang báo cáo và thống kê</a>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<style>
/* Tùy chỉnh kiểu dáng cho phù hợp với giao diện của trang chủ admin */
.card {
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>