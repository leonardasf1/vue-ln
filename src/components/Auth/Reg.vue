<template>
  <div class="block__content">
    <form class="form" id="signup-form" @submit="signupFormHandler">
      <div class="form__group">
        <h3>Регистрация</h3>
        <div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="text" required name="name" id="name" @blur="validAuth" />
            <label>Имя</label>
          </div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="email" required name="email" id="signEmail" @blur="validAuth" />
            <label>Электронный адрес</label>
          </div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="password" required name="password" id="pas" @blur="validAuth" />
            <label>Придумайте пароль</label>
          </div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="password" required name="password_2" id="pas2" @blur="validAuth" />
            <label>Повторите пароль</label>
          </div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input
              type="tel" name="tel" id="tel" @blur="validAuth" />
            <label>Номер мобильного телефона</label>
          </div>
        </div>
      </div>
      <div class="form__comment">
        <button type="submit" id="do_signup">Зарегистрироваться</button>
        <div>
        Уже есть аккаунт?
            <slot name="reg"></slot>
        </div>
        Нажимая кнопку «Зарегистрироваться»:
        <div>
          <input name="agreement" type="checkbox" required checked />
          Я принимаю <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Условия использования</a> и даю своё согласие на обработку моей персональной информации на условиях, определенных <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</a>.
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { signupFormHandler, validAuth } from './script.js'

export default {
  data() {
    return {

    }
  },
  methods: {
    signupFormHandler(e) { signupFormHandler(e) },
    validAuth(e) { validAuth(e) }
  }
}
</script>

<style>
</style>
