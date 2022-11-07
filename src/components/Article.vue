<template>
  <a :href="linkUrl" class="cell--xs">
    <article class="article">
      <img class="article__image" :src="imageSrc" :alt="imageAlt">
      <h3 class="article__title">{{ articleTitle }}</h3>
      <p class="article__description">{{ articleDescription }}</p>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    articleTitle: String,
    articleDescription: String,
    imageSrc: String,
    imageAlt: String,
    linkUrl: String
  }
}
</script>
