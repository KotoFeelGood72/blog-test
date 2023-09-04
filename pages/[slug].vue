<template lang="pug">
NuxtLayout
  .article(v-if="details")
    .container
      .article-blocks(v-for="block in details" :key="block.id")
        .article-block(:class="block.type" v-if="block.type === 'article_intro_block'")
          .article_hero--img 
            img(:src="block.data.image")
          .article_hero--content
            h1 {{ block.data.title }}
            ul.article_heroInfo--list
              li
                .icon-list 
                  Icon(name="icon-park-solid:time")
                p {{ block.data.reading_time }} мин время чтения
              li
                .icon-list 
                  Icon(name="mdi:eye")
                p {{ block.data.views_count }} прочитали статью
            .article-txt 
              p  {{ block.data.short_description }}
        .article-block(:class="block.type" v-else-if="block.type === 'text_block'")
          .article_block--content(v-html="block.data")
        .article-block(:class="block.type" v-else-if="block.type === 'image_block'")
          .article-img
            .article_img--w 
              img(:src="block.data.src" :alt="block.data.caption")
        .article-block(:class="block.type" v-else-if="block.type === 'slider_block'")
          .article_slider--w
            .swiper-container.article-slider(ref="articleSlider") 
              .swiper-wrapper 
                .swiper-slide(v-for="(slide, i) in block.data" :key="'slide-' + i")
                  img(:src="slide")
              .article_sliderPagination
            .article_sliderNavigation 
              ButtonPrev
              ButtonNext
        .article-block(:class="block.type" v-else-if="block.type === 'subscribe_form_block'") 
          FooterSubmission
        .article-block(:class="block.type" v-else-if="block.type === 'text_block'")
          .article_block--content(v-html="block.data")
        .article-block(:class="block.type" v-else-if="block.type === 'article_list_block'")
          BlogGrid(section_title="Похожие статьи" :data="block.data.articles")
        .article-block(:class="block.type" v-else-if="block.type === 'cta_form_block'")
          ParticipantForm
</template>
<script setup>
import { usePageDetails } from '@/stores/detail'
import { ref, onMounted, nextTick } from 'vue' 
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

const route = useRoute()
const detailsStore = usePageDetails()
const details = ref({})
const detailsMeta = ref({})
let articleSlider = null

const fetchData = async () => {
  try {    
    await detailsStore.fetchDetails(route.params.slug)
    details.value = detailsStore.details.body
    detailsMeta.value = detailsStore.details.meta
  } catch (error) {
    console.error('Произошла ошибка при получении данных страницы:', error);
  }
};

onMounted(async () => {
  await fetchData();
  await nextTick(() => {
    articleSlider = new Swiper('.article-slider', {
      speed: 600,
      autoHeight: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.ButtonNext',
        prevEl: '.ButtonPrev'
      },
      pagination: {
        el: '.article_sliderPagination',
        type: 'fraction'
      },
    });
  });
  useHead(() => ({
    title: detailsMeta.value.title,
    meta: [
      { name: 'description', content: detailsMeta.value.description },
    ],
  }));
});
</script>
  
  
  
  
  
  <style lang="scss">
  
  .container {
    max-width: 1340px;
    padding: 0 20px;
  }
  
  .article_hero--img {
    max-width: 541px;
    width: 100%;
    border-top-right-radius: 200px;
    overflow: hidden;
    margin-right: 31px;
    height: 580px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .article_intro_block {
    display: flex;
    align-items: flex-start;
    margin-bottom: 100px;
  }
  
  .article_hero--content {
    max-width: 768px;
  
    h1 {
      font-size: 56px;
      line-height: 66px;
    }
  }
  
  
  .article_heroInfo--list {
    padding: 30px 0 50px 0;
    font-size: 14px;
    li {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      color: #8D959C;
      line-height: 20px;
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  
    .icon-list {
      margin-right: 8px;
    }
  }
  
  .article-txt {
    font-size: 18px;
    line-height: 26px;
  }
  
  .text_block {
    max-width: 884px;
    margin: 0 auto 100px auto;
    h2, h3, h4, h5, h6 {
      font-size: 34px;
      line-height: 46px;
      margin-bottom: 50px;
    }
  
    p, ol, ul {
      padding: 10px 0;
      font-size: 18px;
      line-height: 26px;
    }
  }
  
  blockquote {
    padding: 20px 0 20px 116px;
    position: relative;
    p {
      padding: 0 0 15px 0!important;
      font-style: italic;
      font-weight: 300;
    }
    &:before {
      position: absolute;
      top: 20px;;
      left: 0;
      content: '';
      background: url('../assets/img/quote.svg') center/cover no-repeat;
      width: 80px;
      height: 64px;
    }
    footer {
      font-size: 14px;
      line-height: 20px;
      color: #8D959C;
    }
  }
  
  
  
  
  .image_block {
    width: 100%;
    margin-bottom: 155px;
    img {
      height: auto;
      width: 100%;
      display: block;
      border-top-right-radius: 200px;
    }
  }
  
  .article_slider--w {
    margin: 0 auto 100px auto;
    position: relative;
  
    .swiper {
      max-width: 1112px;
    }
  }
  
  .article_sliderNavigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  
  .article-slider {
    margin: 0 auto;
    max-width: 1119px;
    padding-bottom: 62px;
  }
  
  .article_sliderPagination  {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0!important;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 26px;
  }
  
  .subscribe_form_block {
    margin-bottom: 100px;
  }
  
  .article_block--post {
    &>h3 {
      font-size: 34px;
      font-weight: 800;
      margin-bottom: 50px;
    }
  }
  
  .article_list_block {
    margin-bottom: 100px;
  }
  
  .cta_form_block {
    margin-bottom: 200px;
  }
  
  @media(max-width: 1270px) {
    .article_intro_block {
      flex-direction: column;
      align-items: center;
    }
    .article_hero--img {
      // max-width: 100%;
      // height: auto;
      margin: 0 0 20px 0;
    }
    
    .article_heroInfo--list {
      padding: 30px 0 50px 0;
    }
    
    .article-slider  {
      max-width: 85%;
      img {
        width: 100%;
        object-fit: cover;
        height: auto;
      }
    }
    
  }
  
  @media(max-width: 1024px) {
    .cta_form_block {
      margin-bottom: 0;
    }
    .article_sliderNavigation {
  
      top: 44%;
    }
  }

  @media(max-width: 767px) {
    .article_hero--content {
      h1 {
        font-size: 30px;
        line-height: 40px;
      }
    }
    .text_block p, .text_block ol, .text_block ul {
      font-size: 16px;
    }
    .text_block h2, .text_block h3, .text_block h4, .text_block h5, .text_block h6 {
      font-size: 30px;
      margin-bottom: 30px;
    }

    .article-block {
      margin-bottom: 70px;
    }

    .article_sliderNavigation {
      display: none;
    }
  }

  @media(max-width: 480px) {
    .text_block h2, .text_block h3, .text_block h4, .text_block h5, .text_block h6 {
      font-size: 26px;
      line-height: 36px;
    }
    .article_block--post > h3 {
      font-size: 26px;
    }

    .article_hero--img {
      height: auto;
      img {
        height: auto;
      }
    }

    blockquote:before {
      display: none;
    }
    blockquote {
      padding-left: 0;
    }

    .article-slider {
      max-width: 100%;
      padding-bottom: 30px;
    }
  }
  </style>
  