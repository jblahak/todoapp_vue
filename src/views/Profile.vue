<template>
  <div v-if="user && token && token.isLogged">
      Hi, {{user.username}}
  </div>
  <div v-else>
      Oops
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { mapGetters } from 'vuex'
import users from '../api/users'

// import store from '../store/index'

export default {
    name: 'Profile',
    // store,
    asyncComputed: {
        ...mapGetters('users', {
            token: 'token'
        }),
        user () {
            if (this.token && this.token.isLogged) {
                const verifiedToken = jwt.verify(this.token.token, 'secret')
                if (verifiedToken) {
                    const user = users.getUser(this.token.token)
                    return user
                }
            }
        }
    },
    mounted() {
        const logCookie = Cookies.get('token')
        if (logCookie) {
            this.$store.dispatch('users/STORE_TOKEN', logCookie)
        }
    }
}
</script>

<style>

</style>