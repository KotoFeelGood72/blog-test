import { defineStore } from "pinia";
import axios from 'axios'

export const usePageDetails = defineStore('detail', {
  state: () => ({
    details: null
  }),
  actions: {
    async fetchDetails(slug) {
      try {
          const { data } = await axios.get(`https://devtwit8.ru/api/v1/page/?path=/${slug}`)
          this.details = data
      } catch (error) {
        console.error(error)
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
      }
    }
  }
})
