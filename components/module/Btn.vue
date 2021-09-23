<template>
  <button class="button" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {},
}
</script>

<style lang="scss" scoped>
.button {
  width: 100px;
  color: #ffffff;
  background-color: #03add2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
}
</style>