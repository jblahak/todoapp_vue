<template>
  <nav>
      <div class="searchbar">

      </div>
      <div class="right-content">
          <menu-dropdown
            :links="[{title: 'link'}]"
            :text="'profile'"
          ></menu-dropdown>
      </div>
  </nav>
</template>

<script>
import MenuDropdown from '../molecules/MenuDropdown'

export default {
    components: {
        MenuDropdown
    }
}
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
</style>