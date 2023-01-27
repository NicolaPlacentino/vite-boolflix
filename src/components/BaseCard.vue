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
    <section class="p-5">
        <div class="position-relative">

            <img :src="itemPictureUrl" :alt="searchedItem.title" class="poster">


            <div class="position-absolute top-0 start-0 bottom-0 end-0 py-4 px-3 visible-at-hover">
                <h4 v-if="searchedItem.title">{{ searchedItem.title }}</h4>
                <h4 v-if="searchedItem.name">{{ searchedItem.name }}</h4>

                <h5 v-if="searchedItem.original_title" class="display-6">{{ searchedItem.original_title }}</h5>
                <h5 v-if="searchedItem.original_name" class="display-6">{{ searchedItem.original_name }}</h5>


                <span v-if="searchedItem.original_language === 'it'"><img src="../assets/img/img/it.png"
                        alt="it"></span>
                <span v-if="searchedItem.original_language === 'en'"><img src="../assets/img/img/en.png"
                        alt="en"></span>

                <div id="rating">
                    <font-awesome-icon v-for="n in rating" icon="fa-solid fa-star" />
                    <font-awesome-icon v-for="n in 5 - rating" icon="fa-regular fa-star" />
                </div>

                <p>{{ searchedItem.overview }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 25%;
    height: auto;


    .position-relative {
        height: 470px;

        overflow: hidden;

        border: 1.5px solid white;

        border-radius: 10px;
    }

    img.poster {
        height: 470px;
        width: 100%;
        object-fit: cover;
        object-position: top center;

    }


    .visible-at-hover {
        visibility: hidden;

        height: 100%;
        width: 100%;

        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;

        overflow-y: auto;

        img {
            width: 30px;
            height: auto;

            margin-bottom: 5px;
        }

        .display-6 {
            font-size: 20px;
        }
    }

    &:hover .visible-at-hover {
        visibility: visible;
    }
}
</style>