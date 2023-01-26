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
      baseSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=57d6531b97bbe3d9ec1bb610745cf21a',
      movies: [],
      tvSeries: [],
    }
  },
  computed: {
    finalMoviesUrl() {
      return this.baseMovieUrl + `&query="${store.searchTerm}"`
    },
    finalSeriesUrl() {
      return this.baseSeriesUrl + `&query="${store.searchTerm}"`
    }
  },
  methods: {
    getSearched() {
      axios.get(this.finalMoviesUrl)
        .then(res => {
          this.movies = res.data.results
        });
      axios.get(this.finalSeriesUrl)
        .then(res => {
          this.tvSeries = res.data.results
        })
    },
  },
  created() {
    axios.get(this.baseMovieUrl + '&query="anelli"')
      .then(res => {
        this.movies = res.data.results
      });
    axios.get(this.baseSeriesUrl + '&query="anelli"')
      .then(res => {
        this.tvSeries = res.data.results
      })
  }
}
</script>

<template>
  <AppHeader @search="getSearched"></AppHeader>
  <div>
    <BaseCardSection :searchedItems="this.movies" :sectionTitle="'Movies'"></BaseCardSection>
    <BaseCardSection :searchedItems="this.tvSeries" :sectionTitle="'Series'"></BaseCardSection>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>