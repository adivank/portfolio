<template>
  <nav class="navigation">
    <span v-if="isMobile" class="icon icon-menu"></span>
    <ul :class="['navigation__list', { 'navigation__list--mobile': isMobile }]">
      <li class="navigation__item"><a href="#skills" class="link link--navigation">Skills</a></li>
      <li class="navigation__item"><a href="#" class="link link--navigation">30min Projects</a></li>
      <li class="navigation__item"><a href="#" class="link link--navigation">Projects</a></li>
      <li class="navigation__item"><a href="#" class="link link--navigation">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
import DeviceSelector from '@/scripts/DeviceSelector';

export default {
  data() {
    return {
    }
  },
  computed: {
    isMobile() {
      const currentDevice = DeviceSelector.getDevice();
      return currentDevice === 'xs' || currentDevice === 'sm' || currentDevice === 'md';
    }
  },
  mounted() {
  }
}
</script>