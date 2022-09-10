<template>
  <div class="post">
    <!-- <div>
      <h4>{{ key }}. <span class="strong">{{ post.title }}.</span></h4>
      <div>{{ post.text }}.</div>
    </div> -->

    <article class="post_1">
      <h3>{{post.title.toUpperCase()}}</h3>
      <p>{{post.text || post.body}}</p>
      <ul>
        <li v-for="category in post.categories">
          {{`#${category}`}}
        </li>
      </ul>
      <footer>
        <span>{{post.author}}</span>
      </footer>
    </article>

    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
     <my-button
       @click="$emit('remove', post)"
     >
       Удалить
     </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 50px 50px;
  margin-top: 15px;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
}
.post__btns {
  padding: 2rem;
  /* display: flex; */
}
.strong {
  font-size: 1.2rem;
}
.post_1 {
  width: 100%;
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
.post_1 footer {
  text-align: right;
  font-style: italic;
}
</style>
