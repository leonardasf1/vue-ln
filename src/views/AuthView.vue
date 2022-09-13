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
    // errorHandler(item, text) {
    //     item.previousElementSibling.innerText = text
    //     item.addEventListener('focus', () => {
    //       item.previousElementSibling.innerText = ''
    //     })
    // },
    // isValidAuth(value, form) {
    // 	if (
    // 		value.includes('<') ||
    // 		value.includes('>') ||
    // 		value.includes('=') ||
    // 		value.includes("'")) {
    //         return false
    // 	} else if (form === 'pas' &&
    // 		(value.length < 9 || value.length > 25)) {
    // 		return false
    // 	} else if (form === 'tel' && value.length > 18) {
    // 		return false
    // 	} else return true
    // },
    // validAuth(e) {
    //   if (!e.target.value && e.target.name !== 'tel') {
    //     errorHandler(e.target, 'Заполните поле')
    //   } else if (e.target.name === 'password_2') {
    //     if (e.target.value !== document.getElementById('pas').value) {
    //       errorHandler(e.target, 'Пароль не совпадает')
    //     }
    //   } else if (
    //       e.target.value.includes('<') ||
    //       e.target.value.includes('>') ||
    //       e.target.value.includes('=') ||
    //       e.target.value.includes("'")) {
    //       errorHandler(e.target, 'Некорректные символы')
    //   } else if (
    //       e.target.name === 'tel' &&
    //       e.target.value.length > 18) {
    //       errorHandler(e.target, 'Ограничение 18 символов')
    //       //для международных вызовов на коммутаторах ограничение 18
    //   } else if (
    //       e.target.name === 'password' &&
    //       (e.target.value.length < 9 ||
    //        e.target.value.length > 29)) {
    //       errorHandler(e.target, 'Ограничение 9-29 символов')
    //   }
    // }
  }
}
</script>
