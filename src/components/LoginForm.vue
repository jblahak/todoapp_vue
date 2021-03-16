<template>
  <b-form class="col-8">
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
        <b-form-input
            id="input-1"
            v-model="mutableEmail"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="mutablePassword"
            placeholder="Enter password"
            required
        ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="success">Login</b-button>
  </b-form>
</template>

<script>
export default {
    name: 'LoginForm',
    props: {
        email: String,
        password: String
    },
    data() {
        return {
            mutableEmail: this.email,
            mutablePassword: this.password
        }
    }
}
</script>

<style>

</style>