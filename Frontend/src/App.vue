<script>
import AppHeader from "@/components/AppHeader.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    AppHeader,
    HeaderAdmin,
    Footer,
  },
  
}
</script>


<template>
  <div id="app" >
    <div style="height: 64px;">
      <AppHeader class="header"></AppHeader>
    </div>
    <body class="container mt-5">
      <router-view />
    </body>
    <footer>
      <Footer ></Footer>
    </footer>
  </div>
</template>

<style>
.page {
  max-width: 1000px;
  margin: auto;
}


html {
  height: 100%;
}

body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-size: cover; 
    background-position: center; 
}

footer {
  grid-row-start: 3;
  grid-row-end: 4;
}

</style>
