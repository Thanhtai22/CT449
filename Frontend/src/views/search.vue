<template>
    <div>
      <h1>Kết quả tìm kiếm</h1>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <h3>{{ result.title }}</h3>
          <p>{{ result.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import webService from '../services/web.service';
  export default {
    data() {
      return {
        searchResults: [] // Danh sách các kết quả tìm kiếm
      };
    },
    created() {
      this.fetchSearchResults();
    },
    methods: {
      async fetchSearchResults() {
        this.searchResults = await webService.getProdictSearch();
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  