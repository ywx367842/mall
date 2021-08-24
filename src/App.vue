<template>
  <div>
    <router-view />
    <main-tab-bar></main-tab-bar>
    123
  </div>
</template>

<script>
import MainTabBar from '@/components/main/MainTabBar';

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import './assets/css/base.css';
</style>
