<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.btn, select, .input {
  padding: .5em 1em;
  font-size: inherit;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  background-color: #ffd152;
  margin: 5px;
  color: #343233;
}
.btn:hover {
  background-color: #ffc31f;
}
</style>
