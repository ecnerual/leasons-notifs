import Notification from '@/entities/notification.js';

const state = {
  loading: false,
  notifId: 1,
  notifs: []
};

const mutations = {
  isNowLoading (state) {
    state.loading = true;
  },

  loadingFinished (state) {
    state.loading = false;
  },

  add (state, notifText) {
    state.notifs.push(new Notification({ id: state.notifId++, text: notifText }));
  },

  delete (state, idToRemove) {
    state.notifs = state.notifs.filter(n => n.id !== idToRemove);
  }
};

const actions = {
  add ({ commit, state }, notifText) {
    commit('add', notifText);
  },

  delete ({ commit, state}, id) {
    commit('delete', id)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}