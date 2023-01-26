<script>
export default {
    name: 'BaseCard',
    props: {
        searchedItem: Object,
    }
}
</script>

<template>
    <div>
        <h4 v-if="searchedItem.title">{{ searchedItem.title }}</h4>
        <h4 v-if="searchedItem.name">{{ searchedItem.name }}</h4>

        <h5 v-if="searchedItem.original_title">{{ searchedItem.original_title }}</h5>
        <h5 v-if="searchedItem.original_name">{{ searchedItem.original_name }}</h5>

        <span v-if="searchedItem.original_language === 'it'"><img src="../assets/img/img/it.png" alt="it"></span>
        <span v-if="searchedItem.original_language === 'en'"><img src="../assets/img/img/en.png" alt="en"></span>

        <p>{{ searchedItem.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>