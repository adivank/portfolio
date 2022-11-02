<template>
  <main>
    <DesignSystem />
    <Welcome />
    <About />
    <Skills />
  </main>
</template>

<script>
import DesignSystem from '@/components/DesignSystem.vue';
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';

export default {
  components: { DesignSystem, Welcome, About, Skills }
}
</script>