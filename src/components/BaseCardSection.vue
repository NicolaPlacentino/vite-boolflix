<script>
import BaseCard from './BaseCard.vue';
export default {
    name: 'BaseCardSection',
    components: { BaseCard },
    props: {
        movies: Array
    }
}
</script>

<template>

    <BaseCard v-for="movie in movies" :movie="movie"></BaseCard>

</template>

<style lang="scss" scoped>

</style>