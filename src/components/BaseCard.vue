<script>
import { store } from '../store';
export default {
    name: 'BaseCard',
    data() {
        return {
            store,

        }
    },
    computed: {
        itemPictureUrl() {
            return store.itemPictureBaseUrl + this.searchedItem.poster_path
        },
        rating() {
            return Math.round(this.searchedItem.vote_average / 2)
        },
        finalRating() {
            finalRating = ''
            for (let i = 0; i < this.rating; i++) {
                finalRating += '<font-awesome-icon icon="fa-solid fa-star" />';
            } for (let i = 0; i < 5 - this.rating; i++) {
                finalRating += '<font-awesome-icon icon="fa-regular fa-star" />'
            }
            return this.finalRating
        }
    },
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

        <img :src="itemPictureUrl" :alt="searchedItem.title">

        <span v-if="searchedItem.original_language === 'it'"><img src="../assets/img/img/it.png" alt="it"></span>
        <span v-if="searchedItem.original_language === 'en'"><img src="../assets/img/img/en.png" alt="en"></span>

        <div id="rating">
            <font-awesome-icon v-for="n in rating" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="n in 5 - rating" icon="fa-regular fa-star" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>