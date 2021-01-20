import { createStore } from 'vuex'

export default createStore({
  state: {
    firstname:"jorge",
    lastname:"manitto"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    fullname(state){
      return `
        ${state.firstname} ${state.lastname}
      `
    }
  }
})
