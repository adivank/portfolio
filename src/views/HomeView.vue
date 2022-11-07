<template>
  <main>
    <DesignSystem />
    <Welcome />
    <About />
    <Wave />
    <SimpleProjects />
  </main>
</template>

<script>
import DesignSystem from '@/components/DesignSystem.vue';
import Welcome from '@/components/Welcome.vue';
import About from '@/components/About.vue';
import Wave from '@/components/Wave.vue';
import SimpleProjects from '@/components/SimpleProjectsComponent/SimpleProjects.vue';

export default {
  components: { DesignSystem, Welcome, About, Wave, SimpleProjects }
}
</script>