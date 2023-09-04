<template lang="pug">
.article-item 
  .article_item--img
    NuxtLink(:to='data.link')
      img(:src="data.image" alt="")
  .article_item--content 
    h3 {{ data.title }}
    <ButtonDefaultBtn :link="data.link" name="Читать"/>
</template>



<script setup>
defineProps(['data'])

</script>

<style lang="scss">

.article-item {

}

.article_item--img {
  width: 100%;
  height: 320px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
}



.article_item--content {
  h3 {
    margin: 20px 0 30px 0;
    font-size: 22px;
    color: #1B1B1B;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 60px;
  }
}

@media(max-width: 480px) {
  .article_item--img {
    height: auto;
    img {
      height: auto;
    }
  }

  .article_item--content {
    h3 {
      font-size: 20px;
    }
  }

}

.article_item--content {
  a {
    transition: all .3s ease;
    &:hover {
      background-color: #3657D3;
    }
  }
}
</style>
