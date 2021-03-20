import users from '../../api/users'
import Cookies from 'js-cookie'

const state = {
    token: null
}

const getters = {
    token: state => state.token
}

const actions = {
    STORE_TOKEN: ({commit}, token) => {
        commit('token', token)
    }
}

const mutations = {
    token: (state, token) => {
        state.token = {
            isLogged: true,
            token
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}