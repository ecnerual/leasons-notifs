<template>
  <div>
    <KeyPad value='1' text='1' v-on:click="console.log(1)" />
  </div>
</template>

<script>

import KeyPad from '@/components/KeyPad.vue';

export default {
  name: 'bob27',
  components: {
    KeyPad
  }
}    
</script>

<style lang="scss">
   
</style>