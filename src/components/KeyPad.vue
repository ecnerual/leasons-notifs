<template>
  <button class='button is-primary'>
    {{ text }}
  </button>

</template>

<script>
    
export default {
  props: {
    value: '',
    text: ''
  }
}
</script>

<style lang="scss">

</style>
