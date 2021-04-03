<template>
  <div>
      <a href="#" @click.prevent :class="{isActive}">
          <b-icon :icon="icon"></b-icon>
          {{title}}
      </a>
    </div>
</template>

<script>
export default {
    name: 'LinkIcon',
    props: {
        title: String,
        icon: String,
        isActive: Boolean
    },

}
</script>

<style lang="scss" scoped>
    @import '../scss/main.scss';

    a {
        color: $gray;
        font-weight: bold;
        display: block;
        text-align: left;
        margin-bottom: 12px;
        padding: 7px 30px;
        position: relative;
        text-transform: capitalize;

        &.isActive {
            color: $black;

            &:hover {
                color: $black;
            }

            &::after {
                content: '';
                height: 100%;
                width: 2px;
                background-color: $primary;
                position: absolute;
                right: 0;
                top: 0;
            }
        }

        &:hover {
            color: $gray;
            background-color: $primary-light;
            text-decoration: none;
        }

        &:visited {
            color: $gray
        }

        .b-icon {
            margin-right: 20px;
        }
    }
</style>