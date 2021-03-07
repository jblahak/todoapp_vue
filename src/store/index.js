import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    todos : async (state) => {
      const data = await fetch('http://localhost:4443/api/todos');
      const res = await data.json();

      state.todos = await res;
    },
  },
  actions: {
    todos : (context) => {
      context.commit('todos')
    }
  },
  modules: {
  },
});
