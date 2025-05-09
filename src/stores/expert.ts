import { defineStore } from 'pinia'

const expertStore = defineStore('expert', {
  state: () => ({
    expertName: '',
    expertUid: '',
  }),
  actions: {
    setExpertName(expertName: string) {
      this.expertName = expertName
    },
    setExpertUid(expertUid: string) {
      this.expertUid = expertUid
    },
  },
  getters: {
    getExpertName: (state) => state.expertName,
  },
})

export default expertStore
