<template>
  <div class="dropdown-card" :class="{active}">
      <div v-for="link in links" :key="link.title">
          <link-btn :message="link.title" />
      </div>
  </div>
</template>

<script>
import LinkBtn from './LinkBtn'

export default {
    name: 'CardDropdown',
    components: {
        LinkBtn
    },
    props: {
        links: Array,
        active: Boolean
    },
    mounted() {
        const card = document.querySelector('.dropdown-card')
        const cardHeight = card.offsetHeight
        card.style = `bottom: -${cardHeight+10}px`
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    .dropdown-card {
        box-sizing: border-box;
        position: absolute;
        right: 10px;
        min-width: 220px;
        padding: 10px;
        background-color: $primary-background;
        border-radius: $radius;
        transition: all .5s ease;
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;

        &.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
</style>