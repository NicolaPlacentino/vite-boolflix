<script>
export default {
    name: 'BaseSearchBar',
    data() {
        return {
            searchTerm: ''
        }
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="this.searchTerm">
        <button>Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>