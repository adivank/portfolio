<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import '@/style/main.scss';

export default {
  components: { Header }
}
</script>
