const state = () => {
    todos: []
}

const getters = {
    allTodos: (state) => {
        return state.todos
    }
}

const mutations = {
    getTodos: async (state) => {
        const data = await fetch('http://localhost:4443/api/todos');
        const res = await data.json();

        state.todos = await res;
    }
}

const actions = {
    GET_ALL_TODOS: (context) => {
        context.commit('getTodos')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}