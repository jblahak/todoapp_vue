<template>
    <div v-if="user && token && token.isLogged">
        <b-jumbotron>
            <template #header>Hi, {{user.username}}</template>
            <template #lead>
                <b>Biography</b><br>
                {{user.bio}}
            </template>
            <hr class="my-4">
            <p>Email : {{user.email}}</p>
            <hr class="my-4">
            <p>Here since : {{createdDate}}</p>
            <b-button variant="primary" href="#">Edit my profile</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { mapGetters } from 'vuex'
import users from '../api/users'
import dayjs from 'dayjs'


export default {
    name: 'Profile',
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
        },
        createdDate: function() {
            if (this.user) {
                return dayjs(this.user.createdAt).locale('fr').format('D MMMM YYYY')
                console.log(this.user)
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