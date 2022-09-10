<template>
  <div class="about">
    <h1>{{title}}</h1>
    <my-button @click="">1</my-button>
    <my-button @click="">2</my-button>
    <List :people="people" @message="displayMessage"/>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  components: {
    List
  },
  data() {
    return {
      title: 'This is an About page',
      people: ['Max', 'Leo', 'Jack']
    }
  },
  methods: {
    displayMessage: function(message) {
      this.people.push(message)
    }
  }
}
</script>
