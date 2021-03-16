import todos from '../../api/todos'

const state = {
    todos: []
}

const getters = {
    todos: state => state.todos 
}

const actions = {
    GET_ALL_TODOS: ({ commit }) => {
        commit('getTodos')
    },
    CHECK_TODO: ({ commit }) => {
        commit('toggleCompleteTodo')
    }
}

const mutations = {
    getTodos: async (state) => {
        state.todos = await todos.getTodos(state)
    },
    toggleCompleteTodo: (state, id) => {
        state.todo[id] = !state.todo[id]
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}