import index from '..';

const getDefaultState = () => {
  return {
    currentUser: null,
  }
}

export default {
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
  }
}