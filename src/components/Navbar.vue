<template>
  <nav>
      <div class="searchbar">

      </div>
      <div class="right-content">
          <menu-dropdown
            v-if="user"
            :links="linksUser"
            :text="'profile'"
          ></menu-dropdown>
          <menu-dropdown
            v-else
            :links="links"
            :text="'profile'"
          ></menu-dropdown>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuDropdown from '../molecules/MenuDropdown'

export default {
    components: {
        MenuDropdown
    },
    data: () => ({
        links: [
            {title: 'Login', route: '/login'},
            {title: 'Signup', route: '/signup'},
        ],
        linksUser: [
            {title: 'My dashboard', route: '/profile'}
        ]
    }),
    asyncComputed: {
        ...mapGetters('users', {
            user: 'token'
        })
    }
}
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;
    }
</style>