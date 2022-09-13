<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/auth">Войти</router-link> |
    <router-link to="/posts">Посты</router-link> |
    <router-link to="/about">Песочница</router-link>
    <!-- <router-link to="/store">store</router-link> |
    <router-link to="/composition">Composition</router-link> -->
  </nav>
  <router-view/>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font: 16px/1.5 normal normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  /* font-weight: 300; */
  color: #efdab9;
  text-align: center;
  background: #343233;
  /* background-image: radial-gradient(ellipse closest-side at 50% 50%, #3a3f45, #37383c 25%, #343233); */
}
#app {

}
nav {
  padding: 15px 10px;
  background: #584b4f;
  color: #efeae1;
  height: 100%;
  font-size: 14px;
}

nav a {
  height: 33px;
  font-weight: 500;
  color: #efdab9;
  text-decoration: none;
  padding: 5px;
}

nav a.router-link-exact-active {
  color: #81c08b;
}
</style>
