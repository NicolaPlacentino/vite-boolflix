<script>
export default {
    name: 'BaseCard',
    props: {
        movie: Object
    }
}
</script>

<template>
    <div>
        <h4>{{ movie.title }}</h4>
        <h5>{{ movie.original_title }}</h5>
        <p>{{ movie.original_language }} {{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>