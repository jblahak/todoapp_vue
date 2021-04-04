<template>
  <div>
      {{count}}
  </div>
</template>

<script>
export default {
    name: 'NotificationNumber',
    props: {
        count: Number
    }
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        height: 20px;
        width: 20px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>