import todos from '../../api/todos'
import users from '../../api/users'

const state = {
    todos: []
}

const getters = {
    todos: state => state.todos 
}

const actions = {
    GET_ALL_TODOS: async ({ commit }) => {
        commit('getTodos', await todos.getTodos(state))
    },
    GET_USER_BY_TODO: async({commit, dispatch}) => {
        await dispatch('GET_ALL_TODOS')
        commit('getUserById')
    },
    CHECK_TODO: ({ commit }, id) => {
        commit('toggleCompleteTodo', id)
    }
}

const mutations = {
    getTodos: (state, payload) => {
        state.todos = payload
    },
    getUserById: async (state) => {
        for (let i = 0; i < state.todos.length; i++) {
            const el = state.todos[i];
            const user = await users.getUserById(el.UserId)
            el.user = user
        }
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