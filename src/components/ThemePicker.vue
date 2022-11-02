<template>
  <button class="theme-picker" ref="themePicker">
    <span v-if="isLightTheme" class="icon icon-light-mode"></span>
    <span v-else class="icon icon-dark-mode"></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isLightTheme: false
    }
  }
}
</script>