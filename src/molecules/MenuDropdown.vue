<template>
    <div class="menu-dropdown">
        <link-dropdown
            :text="text"
            @clicked="openMenu()"
        />
        <card-dropdown
            :links="links"
            :active="isMenuActive"
        />
    </div>
</template>

<script>
import CardDropdown from '../atoms/CardDropdown'
import LinkDropdown from '../atoms/LinkDropdown'

export default {
    name: 'MenuDropdown',
    data() {
        return {
            isMenuActive: false
        }
    },
    props: {
        links: Array,
        text: String
    },
    components: {
        CardDropdown,
        LinkDropdown
    },
    methods: {
        openMenu: function() {
            this.isMenuActive = !this.isMenuActive
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-dropdown {
        position: relative;
    }
</style>