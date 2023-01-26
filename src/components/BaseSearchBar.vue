<script>
import { store } from '../store';

export default {
    name: 'BaseSearchBar',
    data() {
        return {
            store,
            searchTerm: ''
        }
    },
    emits: ['term-change', 'button-clicked']
}
</script>

<template>
    <form @submit.prevent="$emit('button-clicked')">
        <input type="text" v-model.trim="this.searchTerm" @keyup="$emit('term-change', this.searchTerm)"
            placeholder="Cerca...">
        <button>Cerca</button>
    </form>
</template>

<style lang="scss" scoped>

</style>