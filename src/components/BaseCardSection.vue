<script>
import BaseCard from './BaseCard.vue';
export default {
    name: 'BaseCardSection',
    components: { BaseCard },
    props: {
        searchedItems: Array,
        sectionTitle: String
    }
}
</script>

<template>
    <h1>{{ sectionTitle }}</h1>
    <BaseCard v-for="searchedItem in searchedItems" :searchedItem="searchedItem" :key="searchedItem.id"></BaseCard>

</template>

<style lang="scss" scoped>

</style>