import notification from '@/entities/notification.js';

const state = {
  loading: false,
  notifs: []
};

const mutations = {
  isNowLoading (state) {
    state.loading = true;
  },

  loadingFinished (state) {
    state.loading = false;
  },

  add (state, notif) {
    state.notifs.push(notif);
  },

  delete (state, notif) {
    state.notifs = state.notifs.filter(n => n.id !== notif.id);
  }
};

const actions = {
  add ({ commit, state }, notif) {
    state.commit('add', new notification(notif));
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}