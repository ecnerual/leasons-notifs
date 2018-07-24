import Vue from 'vue';
import Vuex from 'vuex';
import notifications from '@/store/modules/notifications.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notifications
  }
});
