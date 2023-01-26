<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import BaseCardSection from './components/BaseCardSection.vue';
export default {
  name: 'App',
  components: { AppHeader, BaseCardSection },
  data() {
    return {
      store,
      baseMovieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=57d6531b97bbe3d9ec1bb610745cf21a',
      movies: [],
      TvSeries: [],
    }
  },
  computed: {
    finalMoviesUrl() {
      return this.baseMovieUrl + `&query="${store.searchTerm}"`
    }
  },
  methods: {
    getSearchedMovies() {
      axios.get(this.finalMoviesUrl)
        .then(res => {
          this.movies = res.data.results
          console.log(this.movies)
        })
    },
  },
  created() {
    axios.get(this.baseMovieUrl + '&query="anelli"')
      .then(res => {
        this.movies = res.data.results
        console.log(this.movies)
      })
  }
}
</script>

<template>
  <AppHeader @search="getSearchedMovies"></AppHeader>
  <div>
    <BaseCardSection :movies="this.movies"></BaseCardSection>
    <BaseCardSection></BaseCardSection>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>