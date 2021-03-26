import todos from '../../api/todos'
import users from '../../api/users'

const state = {
    todos: [],
    show: false
}

const getters = {
    todos: state => state.todos,
    show: state => state.show
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
        state.show = true
    },
    toggleCompleteTodo: async (state, selectedTodo) => {
        const index = state.todos.findIndex( todo => todo.id === selectedTodo.id)
        selectedTodo = await todos.checkTodo(selectedTodo)
        state.todos.splice(index, 1, {...selectedTodo, user: await users.getUserById(selectedTodo.UserId)})
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}