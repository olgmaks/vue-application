import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    switchDrawer: (state) => {
      state.drawer = !state.drawer;
    }
  },
  actions: {
  }
});
