import { reactive } from "vue";

export const store = reactive({
    searchTerm: '',
    movies: [],
    tvSeries: [],
    itemPictureBaseUrl: 'https://image.tmdb.org/t/p/w342'
})