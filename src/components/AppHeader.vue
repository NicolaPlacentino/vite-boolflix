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
    <div class="d-flex justify-content-between align-items-center p-4">
        <h1>BOOLFLIX</h1>
        <BaseSearchBar @term-change="onTermChange" @button-clicked="$emit('search')"></BaseSearchBar>
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: black;
}

h1 {
    color: red;
    font-size: 40px;
}
</style>