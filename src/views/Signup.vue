<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <h1>Signup</h1>
    <signup-form
      :password="form.password"
      :email="form.email"
    />
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm'

export default {
    data() {
      return {
        form: {
          password: '',
          email: ''
        },
      }
    },
    computed: {
    },
    name: 'Signup',
    components: {
      SignupForm
    }
}
</script>

<style>

</style>