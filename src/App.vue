<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import BaseCardSection from './components/BaseCardSection.vue';
export default {
  name: 'App',
  components: { AppHeader, BaseCardSection, BaseCard }
}
</script>

<template>
  <AppHeader></AppHeader>
  <BaseCardSection></BaseCardSection>
  <BaseCardSection></BaseCardSection>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>