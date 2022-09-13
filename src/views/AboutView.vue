<template>
  <div class="about">
    <h1>{{title}}</h1>
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
