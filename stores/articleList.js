import { defineStore } from "pinia";
import axios from 'axios'

export const useArticleStore = defineStore('articles', {
  state: () => ({
    articlePost: [],
  }),

  actions: {
    async fetchArticle() {
      try {
        this.articlePost = await axios.get('https://devtwit8.ru/api/v1/page/?path=/')
      } catch (error) {
        
      }
    }
  }
})