<template>
  <div>
    <h1>{{title}}</h1>
    <keep-alive>
      <component :is="component">
        <template v-slot:aut>
          <a id="a_signup" @click="component='Reg'"> Зарегистрируйтесь</a>
        </template>
        <template v-slot:reg>
          <a id="a_login" @click="component='Aut'"> Войти</a>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Aut from '@/components/Auth/Aut'
import Reg from '@/components/Auth/Reg'


export default {
  components: {
    Aut,
    Reg
  },
  data() {
    return {
      title: 'Авторизация',
      component: 'Aut'
    }
  },
  methods: {

  }
}
</script>
