<template>
  <div class="block__content">
    <form class="form" @submit="loginFormHandler">
      <div class="form__group">
        <h3>Вход</h3>
        <div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="email" id="email" @blur="validAuth" required />
          <label>Введите почту</label>
          </div>
          <div class="textfield--float-label">
            <span class="error"></span>
            <input type="password" id="password" @blur="validAuth" required />
            <label>Введите пароль</label>
          </div>
        </div>
      </div>
      <div class="form__comment">
        <button type="submit">Войти</button>
        <div>
          Ещё нет аккаунта?
          <slot name="aut"></slot>
          <!-- <a id="a_signup" @click="component='Reg'"> Зарегистрируйтесь</a> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { loginFormHandler, validAuth } from './script.js'

export default {
  data() {
    return {

    }
  },
  methods: {
    loginFormHandler(e) { loginFormHandler(e) },
    validAuth(e) { validAuth(e) }
  }
}
</script>

<style>
.error {
    color: #f95b5b;
    right: 16px;
    position: absolute;
    top: 29px;
}

.block__content {
    max-width: 100vw;
    width: 400px;
    margin: 40px auto;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    background: #fff;
    line-height: 1.4;
    font-family: -apple-system,BlinkMacSystemFont,"Trebuchet MS",Helvetica,"Nimbus Sans L",sans-serif;
    font-size: 15px;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
}
.block__content a {
        color: #3d71bd;
        transition: color .15s ease-out;
}
.block__content a:hover {
            color: #e00;
            text-shadow: none;
}

.form {
    max-width: 90vw;
    width: 300px;
    margin: 0 auto;
    padding: 30px 0;
}

@media (max-height: 720px) {
    .block__content { margin: auto }
    .form { padding: 5px 0 }
}

.form__group h3 {
        text-align: center;
        font-weight: 400;
}

.form__comment {
    font: 13px/1.5em sans-serif;
    color: #999;
}
    .form__comment > button {
        width: 100%;
        height: 38px;
        border: none;
        border-radius: 4px;
        background: #ffdb4d;
        font-size: 18px;
        cursor: pointer;
    }
    .form__comment > button:hover {
      background-color: #ffc31f;
    }
    .form__comment > div {
        padding: 10px 0;
}
        .form__comment > div:first-of-type {
            text-align: center;
}

.textfield--float-label {
    padding-top: 15px;
    margin-bottom: 20px;
    position: relative;
    text-align: start;
}
    .textfield--float-label input {
        width: 100%;
        height: 32px;
        border: none;
        border-bottom: 1px solid #999;
        margin-bottom: 30px;
        display: block;
        outline: 0;
}
        .textfield--float-label input:focus {
            border-bottom: 2px solid #ffdb4d;
}
            .textfield--float-label input:focus~label {
                color: #2196F3;
                font-size: 12px;
                line-height: 15px;
    }
    .textfield--float-label label, .label {
        position: absolute;
        top:0;
        color:rgba(0,0,0,.26);
        pointer-events: none;
        transition: all .2s ease-out;
        white-space: nowrap;
    }
    .textfield--float-label select {
        display: block;
        height: 32px;
        width: 100%;
        outline: 0;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.26);
        cursor: pointer;
}
</style>
