import { reactive } from "vue";

export const store = reactive({
    searchTerm: '',
    movies: [],
    tvSeries: []
})