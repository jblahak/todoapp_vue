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
            <b-button variant="primary" @click="openModal">Edit my profile</b-button>
        </b-jumbotron>
        <b-modal id="modal-form" centered hide-footer title="Edit my profile">
            <profile-form 
                :email="email"
                :username="username"
                :bio="bio"
                :token="token.token"
                :cancel="cancel"
                @saved="updateAfterSave"
            />
        </b-modal>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { mapGetters } from 'vuex'
import users from '../api/users'
import dayjs from 'dayjs'
import ProfileForm from '../components/ProfileForm'


export default {
  components: { ProfileForm },
    name: 'Profile',
    data: function() {
        return {
            email: '',
            username: '',
            bio: ''
        }
    },
    asyncComputed: {
        ...mapGetters('users', {
            token: 'token'
        }),
        async user () {
            if (this.token && this.token.isLogged) {
                const verifiedToken = jwt.verify(this.token.token, 'secret')
                if (verifiedToken) {
                    const user = await users.getUser(this.token.token)
                    return user
                }
            }
        },
        createdDate: function() {
            if (this.user) {
                return dayjs(this.user.createdAt).locale('fr').format('D MMMM YYYY')
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
        openModal: function() { // Display user informations in form
            this.username = this.user.username
            this.email = this.user.email
            this.bio = this.user.bio

            this.$bvModal.show('modal-form')
        },
        cancel: function() { // Cancel possible changes in form
            this.$bvModal.hide('modal-form')
            this.username = this.user.username
            this.email = this.user.email
            this.bio = this.user.bio
        },
        updateAfterSave: function(user) { // Update data for re-render
            this.$bvModal.hide('modal-form')
            this.user.username = user.username
            this.user.email = user.email
            this.user.bio = user.bio
        }
    }
}
</script>

<style>

</style>