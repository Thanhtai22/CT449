<template>
  <v-container>
    <h2 class="text-center" style="color: #FF5733; margin-bottom: 20px;">Thống Kê theo Tháng</h2>
    <v-row style="display: flex;">
      
      <v-col cols="3">
        <v-card class="pa-4 custom-table-card">
          <h3 class="text-center" style="color: #336699; margin-bottom: 20px;">Chi Tiết Theo Tháng</h3>
          <v-data-table id="monthlyTable">
            <tr>
              <th>Tháng</th>
              <th>Doanh số(đồng)</th>
              <th>Lợi nhuận(đồng)</th>
            </tr>
            <tr v-for="(monthData, index) in monthlyData" :key="index">
              <td>{{ monthData.month }} </td>
              <td>{{ monthData.revenue }} </td>
              <td>{{ monthData.profit }} </td>
            </tr>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="7" class="text-center" style="text-align: center;">
        <v-card class="pa-4 custom-chart-card">
          <h3 class="text-center" style="color: #336699; margin-bottom: 20px;">Biểu Đồ Chi Tiết</h3>
          <canvas style="margin-left: 100px;" id="monthlyChart" width="600" height="200"></canvas>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      months: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
      revenueData: [1000000, 1500000, 1200000, 2000000, 1800000, 2500000], // Dữ liệu doanh số theo tháng,
      monthlyData: [
        { month: 'Tháng 1', revenue: 1000000, profit: 400000 },
        { month: 'Tháng 2', revenue: 1500000, profit: 600000 },
        { month: 'Tháng 3', revenue: 1200000, profit: 500000 },
        { month: 'Tháng 4', revenue: 2000000, profit: 800000 },
        { month: 'Tháng 5', revenue: 1800000, profit: 700000 },
        { month: 'Tháng 6', revenue: 2500000, profit: 1000000 }
      ],
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('monthlyChart');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.months,
          datasets: [
            {
              label: 'Doanh Số',
              data: this.revenueData,
              backgroundColor: '#336699'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>
  
  <style scoped>
  /* Tùy chỉnh kiểu dáng để tạo hiệu ứng "màu mè" cho trang xem thống kê theo tháng */
  .card {
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #ffafbd;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  #monthlyTable {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

#monthlyTable td, #monthlyTable th {
  border: 1px solid #336699;
  padding: 8px;
  text-align: center;
}

#monthlyTable th {
  background-color: #336699;
  color: white;
}

.custom-chart-card {
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #77dd77;
  }

  .custom-chart-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .custom-table-card {
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #ffcc66;
  }

  .custom-table-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  </style>
  