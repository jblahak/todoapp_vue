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
    CHECK_TODO: ({ commit }, id) => {
        commit('toggleCompleteTodo', id)
    }
}

const mutations = {
    getTodos: async (state) => {
        state.todos = await todos.getTodos(state)
    },
    toggleCompleteTodo: async (state, selectedTodo) => {
        const index = state.todos.findIndex( todo => todo.id === selectedTodo.id)
        selectedTodo = await todos.checkTodo(selectedTodo)
        state.todos.splice(index, 1, selectedTodo)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}