<template>
    <a href="#" @click.prevent>
        {{text}}
        <b-icon-chevron-down></b-icon-chevron-down>
    </a>
</template>

<script>
export default {
    name: "LinkDropdown",
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
    a {
        font-weight: bold;
        color: black;

        &:visited {
            color: black;
        }
    }
</style>