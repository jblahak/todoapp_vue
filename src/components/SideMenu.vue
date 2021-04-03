<template>
  <nav>
      <div class="logo-container">
          <img src="../assets/logo.png">
      </div>
      <div class="navigation">
          <link-icon
            v-for="link in links"
            :title="link.title"
            :icon="link.icon"
            :key="link.title"
            :isActive="link.isActive"
          />
      </div>
  </nav>
</template>

<script>
import LinkIcon from '../atoms/LinkIcon.vue'
export default {
  components: { LinkIcon },
    name: 'SideMenu',
    props: {
        links: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    nav {
        width: 100%;
        height: 100vh;
        border-right: 1px solid $gray-border;
        padding: 10px 0;

        .logo-container {
            height: 45px;
            margin: 40px 0;
            padding: 0 30px;

            img {
                display: block;
                max-height: 100%;
                max-width: 100%;
            }
        }
    }
</style>