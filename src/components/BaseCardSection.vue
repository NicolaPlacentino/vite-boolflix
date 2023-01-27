<script>
import BaseCard from './BaseCard.vue';
export default {
    name: 'BaseCardSection',
    components: { BaseCard },
    props: {
        searchedItems: Array,
        sectionTitle: String
    },

}
</script>

<template>
    <h1 class="text-white mt-3 mb-0 mx-5">{{ sectionTitle }}</h1>
    <div class="d-flex align-items-center flex-wrap">
        <BaseCard v-for="searchedItem in searchedItems" :searchedItem="searchedItem" :key="searchedItem.id"></BaseCard>
    </div>

</template>

<style lang="scss" scoped>

</style>