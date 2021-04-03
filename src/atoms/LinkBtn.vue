<template>
  <a href="#" @click.prevent>
      {{message}}
  </a>
</template>

<script>
export default {
    name: 'LinkBtn',
    props: {
        message: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';
    
    a {
        font-weight: bold;
        text-transform: capitalize;
        color: $primary;
        background-color: $primary-light;
        display: block;
        box-sizing: border-box;
        padding: 10px;
        width: 80%;
        margin: 5px auto;
        border-radius: $radius;

        &:visited {
            color: $primary;
        }

        &:hover {
            color: $primary;
            text-decoration: none;
        }
    }
</style>