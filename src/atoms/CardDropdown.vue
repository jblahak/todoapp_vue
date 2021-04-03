<template>
  <div class="dropdown-card">
      <div v-for="link in links" :key="link.title">
          <a @click.prevent> {{link.title}} </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardDropdown',
    props: {
        links: Array
    }
}
</script>

<style lang="scss" scoped>
    .dropdown-card {
        padding: 10px;

        a {
            margin: 2.5px 0
        }
    }
</style>