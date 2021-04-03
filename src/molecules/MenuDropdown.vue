<template>
    <div>
        <link-dropdown
            :text="text"
        />
        <card-dropdown
            :links="links"
        />
    </div>
</template>

<script>
import CardDropdown from '../atoms/CardDropdown'
import LinkDropdown from '../atoms/LinkDropdown'

export default {
    name: 'MenuDropdown',
    props: {
        links: Array,
        text: String
    },
    components: {
        CardDropdown,
        LinkDropdown
    }
}
</script>

<style>

</style>