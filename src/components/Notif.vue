<template>
  <div class="notification is-primary">
    <button class="delete" v-on:click="destroy(notif.id)"></button>
    {{ notif.text }}
  </div>
</template>

<script>
import { mapActions } from 'vuex' 

export default {
  name: "notification",
  props: {
    notif: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions({
      destroy: 'notifications/delete'
    })
  }
}
</script>

<style lang="sass">

</style>


