<template>
  <div>
    <div class="wrapper">

      <form class="blog"
        @submit.prevent
      >
        <h4>Создание поста:</h4>
        <input placeholder="Название" v-focus type="text"
          v-model.lazy="post.title"
        />
        <textarea placeholder="Текст"
          v-model.lazy="post.text"
        />
        <label> Тэги:
          <label>
            <input value="Vue" type="checkbox"
              v-model="post.categories" /> Vue
          </label>
          <label>
            <input value="React" type="checkbox"
              v-model="post.categories" /> React
          </label>
          <label>
            <input value="Angular" type="checkbox"
              v-model="post.categories" /> Angular
          </label>
        </label>
        <label> Автор:
          <select v-model="post.author">
            <option v-for="author in authors">
              {{author}}
            </option>
          </select>

          <my-button @click="createPost">
            Опубликовать
          </my-button>
        </label>
      </form>

      <div class="preview">
        <h4>Превью:</h4>
        <article class="post">
          <h3>{{post.title.toUpperCase()}}</h3>
          <p>{{post.text}}</p>
          <ul>
            <li v-for="category in post.categories">
              {{`#${category}`}}
            </li>
          </ul>
          <footer>
            <span>{{post.author}}</span>
          </footer>
        </article>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        text: '',
        categories: [],
        author: '',
      },
      authors: ['Jack', 'Max', 'Leo'],
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        text: '',
        categories: [],
        author: '',
      }
    }
  },
}
</script>

<style scoped>

  form,
  .preview {
    width: 500px;
    padding: 0 20px;
  }
  .wrapper {
    box-sizing: border-box;
    border: 1px solid darkgrey;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    border-radius: 3px;
  }
  form {
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 20px;
  }
  label {
    margin-top: 10px;
    display: block;
  }
  input[type="text"],
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: none;
    margin-top: 10px;
    border: 1px solid #A9A9A9;
    padding: 5px;
  }
  input[type="text"] {
    min-height: 40px;
  }
  input[type="checkbox"] {
    min-width: 20px;
    min-height: 20px;
    vertical-align: sub;
  }
  textarea {
    min-height: 100px;
    resize: none;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  .btn-wrapper {
    text-align: right;
  }
  input[type="submit"] {
    min-height: 30px;
    cursor: pointer;
  }
  label > label {
    display: inline-block;
    width: auto;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: normal;
  }
  select {
    min-height: 30px;
    min-width: 150px;
    margin-top: 10px;
    border-radius: 3px;
  }
  .preview {
    padding: 0 20px;
  }
  .post {
    padding: 10px;
  }
  label {
    font-weight: bold;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  li {
    display: inline-block;
    margin-right: 10px;
  }
  .preview footer {
    text-align: right;
    font-style: italic;
  }
</style>
