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
      baseUrl: 'https://api.themoviedb.org/3/search/',
      apiKey: '?api_key=57d6531b97bbe3d9ec1bb610745cf21a',
      defaultQuery: '&query="anelli"',
      movies: [],
      tvSeries: [],
    }
  },
  methods: {
    getSearched() {
      axios.get(this.baseUrl + 'movie' + this.apiKey + `&query="${store.searchTerm}"`)
        .then(res => {
          this.movies = res.data.results
        });
      axios.get(this.baseUrl + 'tv' + this.apiKey + `&query="${store.searchTerm}"`)
        .then(res => {
          this.tvSeries = res.data.results
        })
    },
  },
  created() {
    axios.get(this.baseUrl + 'movie' + this.apiKey + this.defaultQuery)
      .then(res => {
        this.movies = res.data.results
      });
    axios.get(this.baseUrl + 'tv' + this.apiKey + this.defaultQuery)
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

body {
  background-color: rgb(87, 87, 87);
}
</style>