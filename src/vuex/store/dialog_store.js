export default {
  state: {
    headH: 55
  },
  mutations: {
    switch_dialog (state) {
      state.headH = 56
    }
  },
  actions: {
    switch_dialog (context) {
      context.commit('switch_dialog')
    }
  }
}
