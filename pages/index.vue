<template lang="pug">
NuxtLayout
	BlogGrid(section_class="home-article" :data="articlePost")
</template>

<script setup>
import { useArticleStore } from '@/stores/articleList'
  import {ref } from 'vue'
  
  const articlesStore = useArticleStore()
  const articlePost = ref([])
  const articlePostHead = ref([])
  

  console.log(articlePostHead.value)
  
  useFetch(async () => {
    await articlesStore.fetchArticle()
    articlePost.value = articlesStore.articlePost.data.body[0].data.articles
    articlePostHead.value = articlesStore.articlePost.data.meta
  })

  useHead(() => ({
  title: articlePostHead.value.title,
  meta: [
    { name: 'description', content: articlePostHead.value.description },
    // Другие метатеги SEO
  ],
}));
</script>