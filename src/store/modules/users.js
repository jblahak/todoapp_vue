import users from '../../api/users'

const state = {
    logUser: {},
    users: []
}

const getters = {
    users: state => state.users,
    logUser: state => state.logUser
}

const actions = {
    LOGIN_USER: ({ commit }, payload) => {
        commit({
            type: 'logUser',
            email: payload.email,
            password: payload.password
        })
    }
}

const mutations = {
    logUser: async (state, user) => {
        state.logUser = await users.loginUser(state, user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}