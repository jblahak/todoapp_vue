<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <h1>Login</h1>
    <login-form
      :password="form.password"
      :email="form.email"
    />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import store from '@/store/index'
import { mapGetters, mapState } from 'vuex'

export default {
    data() {
      return {
        form: {
          password: '',
          email: ''
        },
      }
    },
    store,
    computed: {
      ...mapGetters('users', {
        logUser: 'logUser'
      })
    },
    name: 'Login',
    components: {
      LoginForm
    }
}
</script>

<style>

</style>