<template>
  <header class="header">
    <div class="container d-flex justify-content-between">
      <Navigation />
      <ThemePicker />
    </div>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import ThemePicker from '@/components/ThemePicker.vue';

export default {
  components: { Navigation, ThemePicker }
}
</script>