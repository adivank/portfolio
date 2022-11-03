<template>
  <section class="container">
    <HeroAnimation />
    <div class="hero d-flex flex-column justify-content-center">
      <div class="row">
        <div class="hero__content">
          <h2 class="hero__title">Welcome</h2>
          <p class="hero__text">
            ... to the <span class="fancy-underline">Brain On A Stick</span> playground.
            It is a place where magic happens, used primarily to implement the stuff as I go.
            Currently the place is emptier than it should be, but in time it will get bigger.
            Everything I learn goes here, to test my <span class="fancy-underline">HTML, CSS and JS</span> knowledge, but not only that, 
            also to test <span class="fancy-underline">performance and accessibility.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroAnimation from '@/components/HeroAnimation.vue';

export default {
  components: { HeroAnimation }
}
</script>
