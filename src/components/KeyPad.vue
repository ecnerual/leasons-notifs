<template>
  <button class='button is-primary' v-on:click="addNotif(value)">
    {{ text }}
  </button>

</template>

<script>
import { mapActions } from 'vuex';
    
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  methods: {
    ...mapActions({
      addNotif: 'notifications/add'
    })
  }
}
</script>

<style lang="scss">

</style>
