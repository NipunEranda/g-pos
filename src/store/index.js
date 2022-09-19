import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const getDefaultState = () => {
  return {
    currentUser: null,
  }
}

const store = createStore({
  state() {
    return getDefaultState();
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    updateCurrentUser(state, data) {
      state.currentUser = data;
    },
  },
  actions: {
    updateCurrentUser(context, data) {
      context.commit("updateCurrentUser", data);
    },
  },
  plugins: [createPersistedState()]

});

export default store;