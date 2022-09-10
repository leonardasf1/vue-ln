<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VueGuide msg="Работает!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGuide from '@/components/VueGuide.vue'

export default {
  name: 'HomeView',
  components: {
    VueGuide
  }
}
</script>
