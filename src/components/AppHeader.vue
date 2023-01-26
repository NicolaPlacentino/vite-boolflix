<script>
import { store } from '../store';
import BaseSearchBar from './BaseSearchBar.vue';
export default {
    name: 'AppHeader',
    components: { BaseSearchBar },
    data() {
        return {
            store
        }
    },
    methods: {
        onTermChange(searchTerm) {
            store.searchTerm = searchTerm
        },
    },
    emits: ['search']
}
</script>

<template>
    <h1>BOOLFLIX</h1>
    <BaseSearchBar @term-change="onTermChange" @button-clicked="$emit('search')"></BaseSearchBar>
</template>

<style lang="scss" scoped>

</style>