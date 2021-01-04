import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const layout = {
  namespaced: true,
  state: {
    navDrawerToggle: true,
  },
  getters: {},
  mutations: {
    toggleNavBar: (state) => (state.navDrawerToggle = !state.navDrawerToggle),
  },
};

export default new Vuex.Store({
  modules: { layout }
})
