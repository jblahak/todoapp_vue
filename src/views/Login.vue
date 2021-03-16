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

export default {
    data() {
      return {
        form: {
          password: '',
          email: ''
        }
      }
    },
    name: 'Login',
    components: {
      LoginForm
    }
}
</script>

<style>

</style>