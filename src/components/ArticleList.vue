<template>
  <section class="bg-light">
    <div class="container">
      <h2>Article List</h2>
      <div class="article__container grid">
        <Article
          v-for="article in articleList"
          :article-title="article.title"
          :article-description="article.description"
          :image-alt="article.img.alt"
          :image-src="article.img.src"
          :link-url="article.url"
          :key="article.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Article from './Article.vue';
export default {
  components: { Article },
  data() {
    return {
      articleList: [
        {
          img: {
            src: 'http://place-hold.it/300x300',
            alt: 'article image'
          },
          title: 'Article',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe adipisci ab veniam minima unde. Consequuntur recusandae doloribus quasi laboriosam?',
          url: '#',
          id: 1
        },
        {
          img: {
            src: 'http://place-hold.it/300x300',
            alt: 'article image'
          },
          title: 'Article',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe adipisci ab veniam minima unde. Consequuntur recusandae doloribus quasi laboriosam?',
          url: '#',
          id: 2
        },
        {
          img: {
            src: 'http://place-hold.it/300x300',
            alt: 'article image'
          },
          title: 'Article',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe adipisci ab veniam minima unde. Consequuntur recusandae doloribus quasi laboriosam?',
          url: '#',
          id: 3
        },
        {
          img: {
            src: 'http://place-hold.it/300x300',
            alt: 'article image'
          },
          title: 'Article',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe adipisci ab veniam minima unde. Consequuntur recusandae doloribus quasi laboriosam?',
          url: '#',
          id: 1
        }
      ]
    }
  }
}
</script>