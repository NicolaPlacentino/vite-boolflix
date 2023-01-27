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
    <form @submit.prevent="$emit('button-clicked')" class="d-flex w-25">
        <input type="text" v-model.trim="this.searchTerm" @keyup="$emit('term-change', this.searchTerm)"
            placeholder="Cerca..." class="form-control">
        <button class="btn btn-outline-danger">Cerca</button>
    </form>
</template>

<style lang="scss" scoped>
input {
    border-radius: 10px 0 0 10px;
}

button {
    border-radius: 0 10px 10px 0;
    border-width: 2px;
    font-size: 20px
}
</style>