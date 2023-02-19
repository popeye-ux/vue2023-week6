<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <h1>你現在在前台頁面</h1>
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/products">前台產品列表</router-link> |
      <router-link to="/cart">前台購物車</router-link> |
      <router-link to="/admin/products">後台購物車列表</router-link>
    </div>
    
      <router-view></router-view>
    </div>
    
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>