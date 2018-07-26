<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Bob27">Bob27</router-link>
    </div>
    <Notification v-bind:key="notif.id" v-for="notif in notifs" :notif="notif"/>  
    <router-view/>
  </div>
</template>


<script>
import Notification from '@/components/Notif.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Notification
  },
  created: function () {
    console.log('bon matin m8!');
    this.addNotification('welcome m8');
  }, 
  computed: {
    ...mapState('notifications', {
      notifs: state => state.notifs
    })
  },
  methods: {
    ...mapActions({
      addNotification: 'notifications/add'
    })
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
