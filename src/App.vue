<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import BaseCardSection from './components/BaseCardSection.vue';
export default {
  name: 'App',
  components: { AppHeader, BaseCardSection }
}
</script>

<template>
  <AppHeader></AppHeader>
  <div>
    <BaseCardSection></BaseCardSection>
    <BaseCardSection></BaseCardSection>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>