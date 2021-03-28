<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <router-link class="navbar-brand" to="/">TodoApp</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="user && token && token.isLogged">
              <template #button-content>
                <em>Hi, {{user.username}}</em>
              </template>
              <a class="dropdown-item" @click.prevent="logout">logout</a>
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right v-else>
              <template #button-content>
                <em>Hi</em>
              </template>
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/signup">Sign up</router-link>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
import { mapGetters } from 'vuex'
import users from './api/users'
import Cookies from 'js-cookie'

export default {
  data: () => ({
    tokenAuth: null
  }),
  computed: {
    ...mapGetters('users', {
      token: 'token'
    }),
  },
  asyncComputed: {
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
  },
  methods: {
    logout: function() {
      Cookies.remove('token', {path: ''})
      const logCookie = Cookies.get('token')
      logCookie ? null : this.$store.dispatch('users/REMOVE_TOKEN')
    }
  },
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

nav {
  .navbar-nav {
    a {
      color: white;
    }

    .dropdown {
      a {
        color: #2c3e50;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
