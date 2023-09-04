<template lang="pug">
.article 
  .container
    .article_block--post(:class="section_class")
      h3 {{ section_title }}
      ul.article-grid
        li(v-for="post in data" :key="post.id")
          BlogCard(:data="post")
  </template>
  
  <script setup>
  defineProps(['section_title', 'section_class', 'data'])
  
  </script>

  <style lang="scss">

  .article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 30px;
  }

  @media(max-width: 992px) {
    .article-grid {
      grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    }
  }

  @media(max-width: 600px) {
    .article-grid {
      grid-template-columns: repeat(auto-fill, minmax(70%, 1fr));
    }
  }
  </style>